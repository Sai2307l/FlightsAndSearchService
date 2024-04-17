# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute 'npm install' on the same path as of your root directory of the downloaded project.
- Create a `.env` file int the root directory and add the following environment variable
  `port=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
 "development": {
 "username": <YOUR_DB_LOGIN_NAME>,
 "password": <YOUR_DB_PASSWORD>,
 "database": "Flights_Search_DB_DEV",
 "host": "127.0.0.1",
 "dialect": "mysql"
 }
}
```

- Once you have added your db config as listed above, go to the src folder from your terminal and execute `nx sequelize db:create`

## DB Design

- Airplane Table[id,model_number,capacity,created_at,updated_at]
- Flight[id,src_airport_id,dest_airport_id,departure_date,arrival_date,departure_time,arrival_time]
- City[id,name]
- Airport[id,name,city_id,address]