import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("product", (table) => {
    table.string("id").primary();
    table.string("sku").notNullable();
    table.string("name").notNullable();
    table.string("type").notNullable();
    table.string("description").notNullable();
    table.string("color").notNullable();
    table.decimal("price").notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("product");
}
