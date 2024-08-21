import { Table, Column, Model } from 'sequelize-typescript';

@Table // Webhooks
export class Webhook extends Model {
  @Column hashID: string;
  @Column name: string;
  @Column url: string;
}