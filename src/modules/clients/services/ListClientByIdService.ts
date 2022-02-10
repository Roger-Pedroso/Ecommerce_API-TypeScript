import AppError from "../../../shared/errors/AppError";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class ListClientByIdService {
  public async execute(id: number): Promise<Client> {
    const clientRepository = new ClientRepository();
    const client = await clientRepository.findOneClient(id);

    if (!client) {
      throw new AppError("Informe um ID Válido");
    }
    return client;
  }
}
