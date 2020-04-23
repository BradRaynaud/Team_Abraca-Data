#!/bin/sh
python jsonparse.py -i breakfast.py -o outputjson.json
echo "json export done, enter the sudo password to continue"
read PW
ech $PW | sudo docker exec -i teamabracadata_mongo_1 sh -c 'mongoimport -u=root -p=example -c recipes -d foodthings' < outputjson.json
