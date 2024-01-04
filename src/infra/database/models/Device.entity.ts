import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('devices')
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'imei', type: 'varchar' })
  imei: string

  @Column({ name: 'latitude', type: 'varchar' })
  latitude:string

  @Column({ name: 'longitude', type: 'varchar' })
  longitude: string

  @Column({ name: 'battery_percentage', type: 'varchar' })
  batteryPercentage: string

  @Column({ name: 'gsm_signal', type: 'varchar' })
  gsmSignal: string

  // TODO: save date without TIMEZONE, save in UTC  
  @CreateDateColumn({ name: 'created_at', type: 'date' })
  createdAt: Date

  // TODO: save date without TIMEZONE, save in UTC  
  @UpdateDateColumn({ name: 'updated_at', type: 'date' })
  updatedAt: Date

}
