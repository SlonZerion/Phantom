import asyncio
import os
import random
import traceback

from playwright.async_api import async_playwright
from random import uniform
from loguru import logger
from config import *

from utils import get_accounts, get_format_proxy, switch_to_page_by_title

NEW_PASSWORD = "Password_12345"

async def run(id, private_key, proxy, semaphore):
    # 3 попытки зайти в кошелек
    for _ in range(3):
        try:
            async with semaphore:
                # await gas_checker(id)
                logger.info(f"{id} | START")

                # Initialize the browser and context
                async with async_playwright() as playwright:
                    args=[
                        '--disable-blink-features=AutomationControlled',
                        f"--disable-extensions-except={os.path.abspath('PhantomExtension')}",
                        f"--load-extension={os.path.abspath('PhantomExtension')}"
                    ]
                    if proxy is not None and USE_PROXY is True:
                        address, port, login, password = get_format_proxy(proxy)
                        context = await playwright.chromium.launch_persistent_context(
                            '',
                            headless=False,
                            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                            proxy={
                            "server": f"http://{address}:{port}",
                            "username": login,
                            "password": password
                            },
                            args=args
                        )
                    else:
                        context = await playwright.chromium.launch_persistent_context(
                            '',
                            headless=False,
                            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                            args=args
                        )
                    
                    await context.new_page()
    
                    page = await switch_to_page_by_title(context, 'Phantom Wallet')
                    extension_url = page.url.split('/')[2].strip()
                    
                    await page.goto(f'chrome-extension://{extension_url}/onboarding.html', timeout=5000)
                    try:
                        empty_page1 = await switch_to_page_by_title(context, '')
                        await empty_page1.close()
                        empty_page2 = await switch_to_page_by_title(context, '')
                        await empty_page2.close()
                    except:
                        pass
                    
                    await page.click('button[data-testid="create-wallet-button"]', timeout=5000)
                    await page.wait_for_selector('input', timeout=5000)
                    inputs = await page.query_selector_all('input')
                    await inputs[0].type(NEW_PASSWORD)
                    await inputs[1].type(NEW_PASSWORD)
                    await inputs[2].click()
                    await asyncio.sleep(random.uniform(0.5, 1))
                    await page.click('button[data-testid="onboarding-form-submit-button"]', timeout=5000)
                    await asyncio.sleep(random.uniform(0.5, 1))
                    await page.click('input[data-testid="onboarding-form-saved-secret-recovery-phrase-checkbox"]', timeout=5000)
                    await page.click('button[data-testid="onboarding-form-submit-button"]', timeout=5000)

                    await page.goto(f'chrome-extension://{extension_url}/popup.html')
                    await page.click('div[data-testid="settings-menu-open-button"]', timeout=5000)
                    await page.click('div[data-testid="sidebar_menu-button-add_account"]', timeout=5000)
                    await page.click('//div[6]/div/div/div/div[4]', timeout=5000)
                    await page.fill('input[name="name"]', "wallet")
                    await page.fill('textarea[name="privateKey"]', private_key.strip())
                    await asyncio.sleep(random.uniform(1, 3))
                    await page.click('button[type="submit"]')
                    await asyncio.sleep(random.uniform(2, 4))
                    
                    

                    if MODE == "SWAP":
                        await swap(id, context, page, extension_url)
                    else:
                        logger.error("Wrong mode")
                        return
                    
                    await asyncio.sleep(10)
                    break
                
        except Exception as ex:
            logger.error(f"{id} Retry... | {traceback.format_exc()}, {ex} ")
            await asyncio.sleep(10)
        finally:
            try:
                await context.close()
            except:
                pass


async def swap(id, context, page, extension_url):
    rand_self_count = random.randint(SWAP_COUNT[0], SWAP_COUNT[1])
    logger.info(f"{id} | START {rand_self_count} swaps..")
    
    for i in range(1, rand_self_count+1):
        
        count_errors = 0
        for _ in range(MAX_TRY_SEND):
            if count_errors > MAX_TRY_SEND:
                logger.error(f"{id} | Error rate of more than {MAX_TRY_SEND} | Skip wallet...")
                return
            try:
                await page.goto(f'chrome-extension://{extension_url}/popup.html', timeout=5000)
                
                await page.click('a[href="/swap"]', timeout=5000)
                await asyncio.sleep(random.uniform(0.5, 1))
                await page.click('div[class="sc-edowFN kBnWEO"]', timeout=5000)
                await asyncio.sleep(random.uniform(1, 3))
            
                from_asset = random.choice(FROM_ASSET_LIST)
                await page.fill('input[placeholder="Поиск…"]', from_asset, timeout=20000) 
                await page.wait_for_selector(f'p:text("{from_asset}")', timeout=20000)
                await asyncio.sleep(random.uniform(2, 3))
                if from_asset == 'SOL':
                    data_testid_selector = '[data-testid="fungible-token-row-SOL"]'
                    await page.wait_for_selector(data_testid_selector)
                    await page.click(data_testid_selector)
                else:
                    elements = await page.query_selector_all('xpath=//p')
                    for el in elements:
                        text_el = await el.text_content()
                        if text_el.strip() == from_asset:
                            await el.click()
                            break
                
                await asyncio.sleep(random.uniform(0.5, 1))
                await page.click('//*[@id="tab-content"]/div/div/div/div[1]/div[3]', timeout=5000)
                
                await asyncio.sleep(random.uniform(0.5, 1))
                to_asset = random.choice(TO_ASSET_LIST)
                await asyncio.sleep(random.uniform(2, 3))
                await page.fill('input[placeholder="Поиск…"]', to_asset, timeout=20000) 
                await asyncio.sleep(random.uniform(4, 5))
                await page.wait_for_selector(f'p:text("{to_asset}")', timeout=20000)
                if to_asset == 'SOL':
                    data_testid_selector = '[data-testid="fungible-token-row-SOL"]'
                    await page.wait_for_selector(data_testid_selector)
                    await page.click(data_testid_selector)
                else:
                    elements_to = await page.query_selector_all('xpath=//p')
                    for elto in elements_to:
                        text_el_to = await elto.text_content()
                        if text_el_to.strip() == to_asset:
                            await asyncio.sleep(random.uniform(0.5, 1))
                            await elto.click()
                            break
                    
                await asyncio.sleep(random.uniform(1, 1.5))
                rand_sum_tx = random.uniform(float(SWAP_SELF_AMOUNT[0]), float(SWAP_SELF_AMOUNT[1]))
                await page.fill('input[name="amount"]', f"{rand_sum_tx:.6f}", timeout=10000) 
                await asyncio.sleep(random.uniform(3, 6))
                await page.click('button[type="submit"]', timeout=10000)
                await asyncio.sleep(random.uniform(3, 6))
                await page.click('button[type="button"]', timeout=10000)
                await asyncio.sleep(random.uniform(7, 12))
                await page.wait_for_selector(f'p:text("Готово!")', timeout=40000)
                logger.success(f"{id} | Swap {i} | {rand_sum_tx:.6f} {from_asset} -> {to_asset}")
                count_errors=0
                sleep_duration = random.randrange(NEXT_TX_MIN_WAIT_TIME, NEXT_TX_MAX_WAIT_TIME)
                logger.info(f"{id} | Sleep {sleep_duration}")
                break
            except Exception as ex:
                logger.error(f'{id} | {ex}', traceback.format_exc())
                count_errors+=1
        await asyncio.sleep(sleep_duration)


async def main(accounts):
    semaphore = asyncio.Semaphore(THREADS_NUM)
    tasks = [run(id, private_key, proxy, semaphore) for id, private_key, proxy in accounts]
    await asyncio.gather(*tasks)

if __name__ == "__main__":
    accounts = get_accounts()
    logger.info(f"Loaded {len(accounts)} accounts")
    asyncio.run(main(accounts))
    