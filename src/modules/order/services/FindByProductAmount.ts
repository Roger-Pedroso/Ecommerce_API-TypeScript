import AppError from "../../../../src/shared/errors/AppError";
import Order from "../../order/infra/typeorm/entities/Order";
import OrderRepository from "../../order/infra/typeorm/repositories/OrderRepository";
import Produto from "../../produtos/infra/typeorm/entities/Produto";

export default class FindByProductAmount {
  public async execute(id: Number): Promise<Order | undefined> {
    const produtoRepository = new OrderRepository();
    const produto = await produtoRepository.findByProductAmount(Number(id));
    return produto;
  }
}
