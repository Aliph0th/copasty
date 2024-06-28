import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUuid1715436306623 implements MigrationInterface {
    name = 'AddUuid1715436306623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "file_uuid" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "file_uuid"
        `);
    }

}
