import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTableDevices1704302032290 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO public.devices (imei, latitude, longitude, battery_percentage, gsm_signal, created_at, updated_at)
            VALUES ('123456789012345', '12.345', '67.890', '90%', 'Strong', '2024-01-01', '2024-01-01'),
                   ('987654321098765', '45.678', '89.012', '80%', 'Weak', '2024-01-02', '2024-01-02');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          TRUNCATE TABLE public.devices;
        `);
      }

}
