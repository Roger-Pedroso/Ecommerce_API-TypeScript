import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../../order/infra/typeorm/entities/Order";
import Produto from "../../produtos/infra/typeorm/entities/Produto";

export default interface IOrderRepository {
  create(data: IOrderDTO): Promise<Order>;
  findById(id: Number): Promise<Order | undefined>;
  find(): Promise<Order[]>;
  delete(id: Number): Promise<void>;
  findByClientId(id: Number): Promise<Order[] | undefined>;
  findByProductAmount(id: Number): Promise<Order | undefined>;
}
