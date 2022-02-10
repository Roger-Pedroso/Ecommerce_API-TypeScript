import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import AppError from "../../../shared/errors/AppError";
import Client from "../infra/typeorm/entities/Client";
import IClientDTO from "../dtos/IClientDTO";

export default class findByName {
  public async execute(nome: string): Promise<Boolean> {
    const find = new ClientRepository();

    const teste = await find.findByName(nome);
    console.log("Service " + teste, nome);
    if (teste) {
      throw new AppError("nome ja existe");
    }

    return true;
  }
}
