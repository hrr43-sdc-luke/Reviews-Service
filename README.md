# Hrr-43-SDC Reviews-service

Created by: [`Philip Nguyen`](https://www.linkedin.com/in/philip-nguyen-333963196/)

## Getting started

To set up the repo go [here](REVIEWS-SERVICE.md).

## CRUD api for review service

* [`POST`](server/app.js#L27) - Create a new review
* [`GET`](server/app.js#L37) - Read a review
* [`PUT`](server/app.js#L47) - Update a review
* [`DELETE`](server/app.js#L57) - Delete a review

## Environment Variables

#### Postgres

* `PGUSER` - postgres
* `PGHOST` - localhost
* `PGPASSWORD` - (your postgres password)
* `PGDATABASE` - postgres
* `PGPORT` - 5432

#### Insert schema into postgres

 `psql -h localhost -U postgres -f database/postgres_schema.sql`