import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import Produto from "../../../../produtos/infra/typeorm/entities/Produto";
import Order from "./Order";

@Entity("pedido_produto")
export default class OrderProduct {
  @PrimaryColumn()
  pedido_id: number;

  @PrimaryColumn()
  produto_id: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => Order, (order) => order.pedido_produtos, {
    orphanedRowAction: "delete",
  })
  @JoinColumn({ name: "pedido_id" })
  pedido: Order;

  @ManyToOne(() => Produto, (product) => product.pedido_produtos, {
    orphanedRowAction: "delete",
  })
  @JoinColumn({ name: "produto_id" })
  produtos: Produto;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
  produto: any;
}
