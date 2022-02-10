import AppError from "../../../../src/shared/errors/AppError";
import Order from "../../order/infra/typeorm/entities/Order";
import OrderRepository from "../../order/infra/typeorm/repositories/OrderRepository";

export default class FindOrderByIdService {
  public async execute(id: number): Promise<Order> {
    const orderRepository = new OrderRepository();

    const order = await orderRepository.findById(id);

    if (!order) {
      throw new AppError("Pedido não encontrado");
    }

    return order;
  }
}
