import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableDevice1704300349665 implements MigrationInterface {
    name = 'CreateTableDevice1704300349665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "devices" ("id" SERIAL NOT NULL, "imei" character varying NOT NULL, "latitude" character varying NOT NULL, "longitude" character varying NOT NULL, "battery_percentage" character varying NOT NULL, "gsm_signal" character varying NOT NULL, "created_at" date NOT NULL DEFAULT now(), "updated_at" date NOT NULL DEFAULT now(), CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "devices"`);
    }

}
