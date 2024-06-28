import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntity1719572596416 implements MigrationInterface {
    name = 'UpdateEntity1719572596416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "storage_url"
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "expiration_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "signed_url" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "url_expiration" TIMESTAMP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ALTER COLUMN "title"
            SET DEFAULT ''
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ALTER COLUMN "title" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "url_expiration"
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "signed_url"
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "expiration_date" TIMESTAMP
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "storage_url" character varying NOT NULL
        `);
    }

}
