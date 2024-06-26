import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Webhook extends Model {
  @Column name: string;
  @Column title: string;
  @Column url: string;
}