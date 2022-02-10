import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Client from "../../../../clients/infra/typeorm/entities/Client";
import OrderProduct from "./OrderProduct";

@Entity("pedidos")
export default class Order {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  cliente_id: number;

  @Column()
  data: Date;

  @Column()
  status: string;

  @Column()
  forma_pagamento: string;

  @Column("float", { scale: 10, precision: 2 })
  valor: number;

  @Column("float", { scale: 10, precision: 2 })
  desconto: number;

  /**
   * Muitos produtos podem ter a mesma categoria
   */
  @ManyToOne(() => Client)
  @JoinColumn({ name: "cliente_id" })
  cliente: Client; // categoria não é um produto no banco de dados
  // representa o relacionamento

  @OneToMany(() => OrderProduct, (order_product) => order_product.pedido, {
    cascade: true,
  })
  pedido_produtos: OrderProduct[];

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}
