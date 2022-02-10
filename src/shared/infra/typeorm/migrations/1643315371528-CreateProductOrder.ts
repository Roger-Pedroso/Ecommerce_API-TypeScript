import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateProductOrder1643234284640 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pedido_produto",
        columns: [
          {
            name: "pedido_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "produto_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "quantidade",
            type: "int",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    // cria uma nova chave estrangeira
    await queryRunner.createForeignKey(
      "pedido_produto", // nome da tabela que será criada a chave estrangeira
      new TableForeignKey({
        columnNames: ["pedido_id"], // coluna (mesmo nome definido anteriormente)
        referencedColumnNames: ["id"], // qual coluna que faz referência na outra tabela
        referencedTableName: "pedidos", // tabela referência da chave estrangeira
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "pedido_produto", // nome da tabela que será criada a chave estrangeira
      new TableForeignKey({
        columnNames: ["produto_id"], // coluna (mesmo nome definido anteriormente)
        referencedColumnNames: ["id"], // qual coluna que faz referência na outra tabela
        referencedTableName: "produtos", // tabela referência da chave estrangeira
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pedido_produto");
  }
}
