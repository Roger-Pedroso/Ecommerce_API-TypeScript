import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
export default interface IClientRepository {
  create(data: IClientDTO): Promise<Client>;
  find(): Promise<Client[]>;
  findOneClient(id: number): Promise<Client>;
  save(id: number, data: IClientDTO): Promise<Client>;
  delete(data: IClientDTO): Promise<void>;
  findByName(name: string): Promise<Boolean>;
  findByCPF(cpf: string): Promise<Boolean>;
}
