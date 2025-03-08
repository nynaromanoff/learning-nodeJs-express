import { ProductsModel } from "@/products/domain/models/products.model";
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn } from "typeorm";

@Entity('products')
export class Product implements ProductsModel {
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('decimal')
  price: number

  @Column('int')
  quantity: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'update_at'})
  updateAt: Date;
}
