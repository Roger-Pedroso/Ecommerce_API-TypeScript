import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import AppError from "../../../shared/errors/AppError";
import Client from "../infra/typeorm/entities/Client";
import IClientDTO from "../dtos/IClientDTO";

export default class findByCPF {
  public async execute(cpf: string): Promise<Boolean> {
    const find = new ClientRepository();

    const teste = await find.findByCPF(cpf);

    if (teste) {
      throw new AppError("CPF já cadastrado");
    }

    return true;
  }
}
