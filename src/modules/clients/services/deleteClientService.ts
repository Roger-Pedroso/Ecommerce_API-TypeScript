import AppError from "../../../shared/errors/AppError";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
export default class deleteClientService {
  public async execute(data: IClientDTO): Promise<void> {
    const clientRepository = new ClientRepository();
    const cliente = await clientRepository.findOneClient(Number(data.id));

    if (!cliente) {
      throw new AppError("Informe ID válido");
    } else {
      const cliente = await clientRepository.delete(data);
      console.log();
    }
  }
}
