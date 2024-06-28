import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUnique1715536381074 implements MigrationInterface {
    name = 'AddUnique1715536381074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD CONSTRAINT "UQ_73d326930c41b203fe82107062d" UNIQUE ("file_id")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP CONSTRAINT "UQ_73d326930c41b203fe82107062d"
        `);
    }

}
