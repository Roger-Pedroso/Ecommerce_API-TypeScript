import { Request, Response } from "express";
import CreateProdutoService from "../../../services/CreateProdutoService";
import ListProdutoService from "../../../services/ListProdutoService";
import ListProdutoByIdService from "../../../services/ListProdutoByIdService";
import UpdateProdutoService from "../../../services/UpdateProdutoService";
import DeleteProdutoService from "../../../services/DeleteProdutoService";
import ListEstoqueProdutoService from "../../../services/ListEstoqueProdutoService";

class ProdutoController {
  async create(request: Request, response: Response) {
    const data = request.body;
    const createProdutoService = new CreateProdutoService();
    const produto = await createProdutoService.execute(data);
    return response.json(produto);
  }

  async find(request: Request, response: Response) {
    const listProdutoService = new ListProdutoService();
    const produto = await listProdutoService.execute();
    return response.json(produto);
  }

  async findProduct(request: Request, response: Response) {
    const { id } = request.params;

    const listProdutoService = new ListEstoqueProdutoService();
    const produto = await listProdutoService.execute(Number(id));
    return response.json(produto);
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const listProdutoService = new ListProdutoByIdService();
    const list = await listProdutoService.execute(Number(id));
    return response.json(list);
  }

  async save(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const listProdutoService = new UpdateProdutoService();
    const list = await listProdutoService.execute(parseInt(id), data);
    return response.json(list);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const newUser = {
      ...data,
      id: Number(id),
    };
    const listProdutoService = new DeleteProdutoService();
    const list = await listProdutoService.execute(newUser);
    return response.json(list);
  }
}
export default new ProdutoController();
