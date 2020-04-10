To import a json file into the mongodb:
1) Spin up the environment
2) In another console, navigate to the folder with the json file
3) Run the command: "sudo docker exec -i teamabracadata_mongo_1 sh -c 'mongoimport -u=root -p=example -c recipes -d roodthings' < <JsonNameHere>.json