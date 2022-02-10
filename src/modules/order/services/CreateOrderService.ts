import { getConnection } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../../order/infra/typeorm/entities/Order";
import OrderRepository from "../../order/infra/typeorm/repositories/OrderRepository";
import FindByNameClientService from "../../clients/services/FindByNameClientService";
import ListEstoqueProdutoService from "../../produtos/services/ListEstoqueProdutoService";
import FindProductValue from "../../produtos/services/FindProductValue";
import UpdateProdutoService from "../../produtos/services/UpdateProdutoService";
import ListProdutoByIdService from "../../produtos/services/ListProdutoByIdService";

export default class CreateOrderService {
  public async execute(data: IOrderDTO): Promise<Order> {
    console.log(data);

    const pedidoProd = data.pedido_produtos;

    if (data.pedido_produtos.length == 0) {
      throw new AppError("Pedido sem Produtos");
    }

    for (let index = 0; index < pedidoProd.length; index++) {
      let element = pedidoProd[index];

      const prodit = new ListProdutoByIdService();
      const produto = await prodit.execute(Number(element.produto_id));

      const estoq = new ListEstoqueProdutoService();
      const quantEstoq = await estoq.execute(Number(element.produto_id));

      const soma = new FindProductValue();
      const somaTotal = await soma.execute(Number(element.produto_id));

      if (Number(quantEstoq?.quantidade_estoque) < Number(element.quantidade)) {
        throw new AppError(
          `somente ${quantEstoq?.quantidade_estoque} unidades em estoque do produto ${element.produto_id}`
        );
      }

      produto.quantidade_estoque =
        Number(quantEstoq?.quantidade_estoque) - Number(element.quantidade);

      const update = new UpdateProdutoService();
      await update.execute(element.produto_id, produto);

      data.valor = Number(element.quantidade) * Number(somaTotal?.preco);
    }

    const clientRepository = new OrderRepository();

    return clientRepository.create(data);
  }
}
