#!/bin/sh
sudo docker exec -i teamabracadata_mongo_1 sh -c 'mongoimport -u=root -p=example -c recipes -d foodthings' < data.json
