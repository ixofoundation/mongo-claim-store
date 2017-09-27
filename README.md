# Claim Store

Runs a small microservice in docker to store claim data and returns a uri to that claim data so that it can be retrieved.  Claim data cannot be deleted or updated. 

## Setup
Run to install node modules
```npm install```
Run the following to run docker services
```docker-compose up```

## API
The are two calls in the API. 
To create a claim:
```http://localhost:3000/claims/create```
To retrieve it (d is the id returned in the create call):
```httpL//localhost:3000/claims/:id```

## TODO
* Return address as IPLD link
* Add Authorisation or security on create call
