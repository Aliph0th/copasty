import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdadeFields1715536083645 implements MigrationInterface {
    name = 'UpdadeFields1715536083645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "file_uuid"
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "file_id" character varying NOT NULL
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."copaste_syntax_enum" AS ENUM(
                'plaintext',
                'c',
                'csharp',
                'cpp',
                'css',
                'html',
                'json',
                'java',
                'javascript',
                'php',
                'python'
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "syntax" "public"."copaste_syntax_enum" NOT NULL DEFAULT 'plaintext'
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ALTER COLUMN "expiration_date" DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ALTER COLUMN "expiration_date"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "syntax"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."copaste_syntax_enum"
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "file_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "copaste"
            ADD "file_uuid" character varying NOT NULL
        `);
    }

}
