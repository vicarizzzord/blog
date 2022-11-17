import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createUsers1668652322152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "users",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "email",
                  type: "varchar",
                  isUnique: true,
                },
                {
                  name: "password",
                  type: "varchar",
                },
                {
                  name: "phone",
                  type: "varchar",
                },
                {
                  name: "user",
                  type: "varchar",
                  isUnique: true,
                },
                {
                  name: "photo",
                  type: "varchar",
                },
                {
                  name: "createdAt",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
