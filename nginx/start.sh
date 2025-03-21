#!/bin/sh

set -e

# 显示 nginx 启动成功
echo "[DONE] nginx started successfully!"

# 启动 Nginx
exec nginx -g 'daemon off;'