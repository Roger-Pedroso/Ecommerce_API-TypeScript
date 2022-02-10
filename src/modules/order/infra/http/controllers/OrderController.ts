import { Request, Response } from "express";
import FindOrderByIdService from "../../../services/ListOrderByIdService";
import CreateOrderService from "../../../services/CreateOrderService";
import FindAllOrdersService from "../../../services/ListOrderService";
import DeleteOrderService from "../../../services/DeleteOrderService";
import FindOrderByClientIdService from "../../../services/ListOrderByClientId";
import FindByProductAmount from "../../../services/FindByProductAmount";

class OrderController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createOrderService = new CreateOrderService();

    const product = await createOrderService.execute(data);

    return response.json(product);
  }

  async find(request: Request, response: Response): Promise<Response> {
    const findAllOrderService = new FindAllOrdersService();

    const product = await findAllOrderService.execute();

    return response.json(product);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindOrderByIdService();

    const product = await findOrderService.execute(Number(id));

    return response.json(product);
  }

  async findByProductAmount(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindByProductAmount();

    const product = await findOrderService.execute(Number(id));

    return response.json(product);
  }

  async findByClientId(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindOrderByClientIdService();

    const product = await findOrderService.execute(Number(id));

    return response.json(product);
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const deleteService = new DeleteOrderService();

    const del = await deleteService.execute(Number(id));
  }
}

export default new OrderController();
