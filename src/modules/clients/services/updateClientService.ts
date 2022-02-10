import AppError from "../../../shared/errors/AppError";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindByCPFClientService from "./FindByCPFClientService";

export default class updateClientService {
  public async execute(id: number, data: IClientDTO): Promise<Client> {
    const clientRepository = new ClientRepository();
    const cliente = await clientRepository.findOneClient(id);
    const cpf = new FindByCPFClientService();
    const cpfBusca = cpf.execute(data.cpf);
    console.log("t" + cliente);
    if (!cliente) {
      throw new AppError("Informe ID válido");
    }

    const client = await clientRepository.save(id, data);

    return client;
  }
}
