import { MigrationInterface, QueryRunner } from "typeorm";

export class ExprirationDate1715451121027 implements MigrationInterface {
    name = 'ExprirationDate1715451121027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "expiration_date" TIMESTAMP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "expiration_date"
        `);
    }

}
