import { Request, Response } from "express";
import CreateCategoriaService from "../../../services/CreateCategoriaService";
import ListCategoriasService from "../../../services/ListCategoriasService";
import ListCategoriaByIdService from "../../../services/ListCategoriaByIdService";
import UpdateCategoriaService from "../../../services/UpdateCategoriaService";
import DeleteCategoriaService from "../../../services/DeleteCategoriaService";

class CategoriasController {
  async create(request: Request, response: Response) {
    const data = request.body;
    const createCategoriaService = new CreateCategoriaService();
    const categoria = await createCategoriaService.execute(data);
    return response.json(categoria);
  }

  async find(request: Request, response: Response) {
    const listCategoriaService = new ListCategoriasService();
    const list = await listCategoriaService.execute();
    return response.json(list);
  }
  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const listCategoriaService = new ListCategoriaByIdService();
    const list = await listCategoriaService.execute(Number(id));
    return response.json(list);
  }

  async save(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const listCategoriaService = new UpdateCategoriaService();
    const list = await listCategoriaService.execute(parseInt(id), data);
    return response.json(list);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const newUser = {
      ...data,
      id: Number(id),
    };
    const listCategoriaService = new DeleteCategoriaService();
    const list = await listCategoriaService.execute(newUser);
    return response.json(list);
  }
}

export default new CategoriasController();
