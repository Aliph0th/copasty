import { MigrationInterface, QueryRunner } from "typeorm";

export class Hash1719592613046 implements MigrationInterface {
    name = 'Hash1719592613046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "hash" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD CONSTRAINT "UQ_6aed93dafe2664e8136061a7940" UNIQUE ("hash")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP CONSTRAINT "UQ_6aed93dafe2664e8136061a7940"
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "hash"
        `);
    }

}
