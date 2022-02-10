import AppError from "../../../shared/errors/AppError";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class deleteClientService {
  public async execute(id: Number): Promise<void> {
    const orderRepository = new OrderRepository();
    const cliente = await orderRepository.findById(Number(id));

    if (!cliente) {
      throw new AppError("Informe ID válido");
    } else {
      await orderRepository.delete(Number(id));
    }
  }
}
