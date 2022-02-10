import { getConnection } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindByNameClientService from "../services/FindByNameClientService";
import FindByCPFClientService from "./FindByCPFClientService";

export default class CreateClientService {
  public async execute(data: IClientDTO): Promise<Client> {
    const clientRepository = new ClientRepository();
    const service = new FindByNameClientService();
    const serviceCpf = new FindByCPFClientService();
    const teste = await service.execute(data.nome);
    const teste2 = await serviceCpf.execute(data.cpf);

    return await clientRepository.create(data);
  }
}
