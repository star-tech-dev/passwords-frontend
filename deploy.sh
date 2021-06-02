cd /var/www/star-tech-dev/passwords-frontend;
yarn;
yarn build;
pm2 delete passwords-frontend;
pm2 start serve.sh --name passwords-frontend -l;
