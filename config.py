
# "SWAP" 

MODE = "SWAP"

# Перед запуском обязательно укажите полный путь до папки с расширением Zerion
EXTENSION_PATH = 'D:\SlonZerion\Phantom\PhantomExtension'

# Количество потоков
THREADS_NUM = 2

USE_PROXY = False

# Время ожидания между выполнением разных акков рандомное в указанном диапазоне
NEXT_ADDRESS_MIN_WAIT_TIME = 10  # В минутах
NEXT_ADDRESS_MAX_WAIT_TIME = 20  # В минутах

# Время ожидания между транзакциями одного аккаунта
NEXT_TX_MIN_WAIT_TIME = 10   # В секундах
NEXT_TX_MAX_WAIT_TIME = 20  # В секундах

# Максимальное количество попыток сделать транзакцию
MAX_TRY_SEND = 10 


### SWAP

# Названия токенов должны полностью совпадать с текстом в самом кошельке
FROM_ASSET_LIST = ['USDC'] # список токенов, из которых нужно свапать, каждая итерация выбирает рандомный токен из списка

TO_ASSET_LIST = ['USDT'] # список токенов, в которые нужно свапать, каждая итерация выбирает рандомный токен из списка

SWAP_SELF_AMOUNT = [1, 2] # ранодмизированная сумма свапа токена из FROM_ASSET_LIST (от меньшего к большему)

SWAP_COUNT = [350, 500]  # диапазон количества транзакций рандомное