import IClientDTO from "../../../../../modules/clients/dtos/IClientDTO";
import IClientRepository from "../../../../../modules/clients/repositories/IClientRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Client from "../entities/Client";
import { response } from "express";
export default class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }
  async create(data: IClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data);
    return this.ormRepository.save(client);
  }
  async find(): Promise<Client[]> {
    const client = await this.ormRepository.find();
    return client;
  }

  async findOneClient(id: number): Promise<Client> {
    const client = await this.ormRepository.findOne(id);
    console.log("t" + client?.nome);
    return client!;
  }

  async findByName(name: string): Promise<Boolean> {
    const client = await this.ormRepository.findOne({
      where: {
        nome: name,
      },
    });

    return !!client;
  }

  async findByCPF(cpf: string): Promise<Boolean> {
    const client = await this.ormRepository.findOne({
      where: {
        cpf: cpf,
      },
    });

    return !!client;
  }

  async save(id: number, data: IClientDTO) {
    const newUser = {
      ...data,
      id: Number(id),
    };

    const client = await this.ormRepository.save(newUser);
    return client;
  }

  async delete(data: IClientDTO): Promise<void> {
    const client = await this.ormRepository.delete(data);
  }
}
