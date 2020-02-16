# Hrr-43-SDC Reviews-service

Created by: [`Philip Nguyen`](https://www.linkedin.com/in/philip-nguyen-333963196/)

## Getting started

To set up the repo go [here](REVIEWS-SERVICE.md).

## CRUD api for review service

* [`POST`](server/app.js#L27-L35) - Create a new review
* [`GET`](server/app.js#L37-L45) - Read a review
* [`PUT`](server/app.js#L47-L55) - Update a review
* [`DELETE`](server/app.js#L57-L65) - Delete a review

## Generate Data

* First you will need to set up with a `MOCK-DATA.json` file. This should be an array of objects and each object should have these three keys, with fake data value: `userName`,`review`, and `date (yyyy-mm-dd)`
* The avatar url is fetched via faker. However you can include an `avatar` key with an img url to the MOCK-DATA.json file. If you choose this option then you will need to take out this [line](generateData/index.js#L27), which is the avatar variable. Instead you will add the avatar in the object destructuring [here](generateData/index.js#L24-L26).
* You can edit the amount of records you want to create [here](generateData/index.js#L13-L14), you can also name your csv data file [here](generateData/index.js#L8). Once satisfied you can run the data generator with `node generateData/`

## Databases (environment variables/schema)

### Postgres

#### Environment variables

* `PGUSER` - postgres
* `PGHOST` - localhost
* `PGPASSWORD` - (your postgres password)
* `PGDATABASE` - postgres
* `PGPORT` - 5432

#### Insert schema

`psql -h localhost -U postgres -d airbnb -f generateData/postgresSchema.sql`

#### Seed data

`node generateData/postgresSeed.js`
