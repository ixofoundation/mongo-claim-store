# Claim Store

Runs a small microservice in docker to store claim data and returns a uri to that claim data so that it can be retrieved.  Claim data cannot be deleted or updated. 

## Setup
Install node modules

```npm install```

Run Docker (Prerequisite: Docker installed see [Install Docker](https://docs.docker.com/engine/installation/))

```docker-compose up```

## API
The are two calls in the API.

To create a claim POST:

```http://localhost:3000/claims/create```

Body (where claim is a claim in JSON format):

```
{
	"owner": "did:3de478ac6853efa2d58bcac",
	"claim": {....}
}
```

To retrieve it use this GET call (d is the id returned in the create call):

```http://localhost:3000/claims/:id```


## TODO
* Return address as IPLD link
* Add Authorisation or security on create call
