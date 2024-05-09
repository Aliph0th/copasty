import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCopaste1715279169813 implements MigrationInterface {
    name = 'UpdateCopaste1715279169813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "copaste" ("id" SERIAL NOT NULL, "storage_url" character varying NOT NULL, "view_count" integer NOT NULL DEFAULT '0', "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2b358003b6af9401906d2e43ccc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "copaste"`);
    }

}
