import logging
import sys

# 配置日志
logging.basicConfig(
    level=logging.DEBUG,  # 降低到DEBUG级别以显示所有日志
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ],
    force=True  # 强制重新配置日志
)

# 创建logger实例
logger = logging.getLogger('scraper')
logger.setLevel(logging.DEBUG)  # 确保logger级别也是DEBUG
