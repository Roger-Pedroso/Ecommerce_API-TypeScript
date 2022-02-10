import { getRepository, Repository } from "typeorm";
import Produto from "../../../../produtos/infra/typeorm/entities/Produto";
import IOrderDTO from "../../../dtos/IOrderDTO";
import IOrderRepository from "../../../repositories/IOrderRepository";
import ListEstoqueProdutoService from "../../../../produtos/services/ListEstoqueProdutoService";
import Order from "../entities/Order";

export default class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  async findById(id: number): Promise<Order | undefined> {
    return this.ormRepository
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.pedido_produtos", "opp")
      .where("order.id = :id", { id })
      .getOne();
  }

  async findByClientId(id: number): Promise<Order[] | undefined> {
    return this.ormRepository
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.pedido_produtos", "opp")
      .where("order.cliente_id = :id", { id })
      .getMany();
  }

  async findByProductAmount(id: number): Promise<Order | undefined> {
    return this.ormRepository
      .createQueryBuilder("order")
      .select(["p.quantidade_estoque"])
      .leftJoinAndSelect("order.pedido_produtos", "opp")
      .leftJoinAndSelect("opp.produtos", "p")
      .where("p.id = :id", { id })
      .getOne();
  }

  async find(): Promise<Order[]> {
    const order = await this.ormRepository.find();
    return order;
  }

  async create(data: IOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(data);

    return this.ormRepository.save(order);
  }

  async delete(id: Number): Promise<void> {
    this.ormRepository.delete(Number(id));
  }
}
