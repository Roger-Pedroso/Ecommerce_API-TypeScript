import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateProduto1642711303470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produtos",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "preco",
            type: "float",
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: "quantidade_estoque",
            type: "int",
            isNullable: false,
          },
          {
            name: "categoria_id",
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
    await queryRunner.createForeignKey(
      "produtos", // nome da tabela que será criada a chave estrangeira
      new TableForeignKey({
        columnNames: ["categoria_id"], // coluna (mesmo nome definido anteriormente)
        referencedColumnNames: ["id"], // qual coluna que faz referência na outra tabela
        referencedTableName: "categorias", // tabela referência da chave estrangeira
        onDelete: "SET NULL",
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtos");
  }
}
