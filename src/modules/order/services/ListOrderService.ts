import AppError from "../../../../src/shared/errors/AppError";
import Order from "../../order/infra/typeorm/entities/Order";
import OrderRepository from "../../order/infra/typeorm/repositories/OrderRepository";

export default class FindAllOrdersService {
  public async execute(): Promise<Order[]> {
    const orderRepository = new OrderRepository();

    const order = await orderRepository.find();

    if (!order) {
      throw new AppError("Pedido não encontrado");
    }

    return order;
  }
}
