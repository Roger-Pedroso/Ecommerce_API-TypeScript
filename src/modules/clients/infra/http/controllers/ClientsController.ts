import { Request, response, Response } from "express";
import CreateClientService from "../../../services/CreateClientService";
import ListClientsService from "../../../services/ListClientsService";
import ListClientByIdService from "../../../services/ListClientByIdService";
import updateClientService from "../../../services/updateClientService";
import deleteClientService from "../../../services/deleteClientService";
import findByNameService from "../../../services/FindByNameClientService";
import findByCPFService from "../../../services/FindByCPFClientService";

class ClientsController {
  async create(request: Request, response: Response) {
    const data = request.body;
    const createClientService = new CreateClientService();
    const client = await createClientService.execute(data);
    return response.json(client);
  }

  async find(request: Request, response: Response) {
    const listClientService = new ListClientsService();
    const list = await listClientService.execute();
    return response.json(list);
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const listClientService = new ListClientByIdService();
    const list = await listClientService.execute(Number(id));
    return response.json(list);
  }

  async findByName(request: Request, response: Response) {
    const data = request.body;
    const findBynameS = new findByNameService();
    const find = await findBynameS.execute(data);
    return Boolean();
  }

  async findByCPF(request: Request, response: Response) {
    const data = request.body;
    const findByCpf = new findByCPFService();
    const find = await findByCpf.execute(data);
    return Boolean();
  }

  async save(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const listClientService = new updateClientService();
    const list = await listClientService.execute(parseInt(id), data);
    return response.json(list);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;
    const newUser = {
      ...data,
      id: Number(id),
    };
    const listClientService = new deleteClientService();
    const list = await listClientService.execute(newUser);
    return response.json(list);
  }
}
export default new ClientsController();
