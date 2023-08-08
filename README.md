This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the following commands:

```bash
# Open a separate terminal to run Docker
> docker-compose up

# Install dependencies
> npm install

# Run migration and seeding
> npm run knex -- migrate:latest
> npm run knex -- seed:run

# Run the development server
> npm run dev
```

## API

- GET - https://localhost:3000/api/products
- PUT - https://localhost:3000/api/products (with `iProducts` body)
- DELETE - https://localhost:3000/api/products/{sku}/delete

## Pages

- product-list - List of products in a table
- product-detail - Form for product

## Functionality

- List products
- Delete a product
- Update a product

## Extras

- Run a docker image for Postgres
- Create product table using Knex migration
- Populate the product table using Knex seed
