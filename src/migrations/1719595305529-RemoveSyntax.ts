import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveSyntax1719595305529 implements MigrationInterface {
    name = 'RemoveSyntax1719595305529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "copaste" DROP COLUMN "syntax"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."copaste_syntax_enum"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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
    }

}
