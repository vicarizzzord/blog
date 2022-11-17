import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createPosts1668653200127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "posts",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "content",
                  type: "varchar",
                },
                {
                  name: "userId",
                  type: "uuid",
                },
                {
                  name: "createdAt",
                  type: "timestamp",
                  default: "now()",
                },
              ],
              foreignKeys: [
                {
                    name: "fkUser",
                    columnNames: ["userId"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"]

                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable["posts"]
    }

}
