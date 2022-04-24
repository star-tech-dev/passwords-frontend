cd /var/www/star-tech-dev/passwords-frontend;
pm2 delete passwords-frontend;
npm i;
# not enough server memory to run
# npm run build;
pm2 start serve.sh --name passwords-frontend -l;
