cd frontend/ && yarn build
rm /var/www/virtual/hauke/html/*
mv frontend/build/* /var/www/virtual/hauke/html/
