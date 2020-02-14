# Hrr-43-SDC Reviews-service

Created by: [`Philip Nguyen`](https://www.linkedin.com/in/philip-nguyen-333963196/)

## Getting started

To set up the repo go [here](REVIEWS-SERVICE.md).

## CRUD api for service

* [`POST`](server/app.js#L17) - Create a new review, using the experience id
* [`GET`](server/app.js#L27) - Read reviews, using the experience id
* [`PUT`](server/app.js#L37) - Update a review, using the review id
* [`DELETE`](server/app.js#L47) - Delete a review, using the review id

## Environment Variables

#### Postgres

* `PGUSER` - postgres
* `PGHOST` - localhost
* `PGPASSWORD` - (your postgres password)
* `PGDATABASE` - postgres
* `PGPORT` - 5432

#### Insert schema into postgres

 `psql -h localhost -U postgres -f database/postgres_schema.sql`