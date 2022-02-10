import ICategoriasDTO from "../dtos/ICategoriasDTO";
import Categoria from "../infra/typeorm/entities/Categoria";
export default interface IClientRepository {
  create(data: ICategoriasDTO): Promise<Categoria>;
  find(): Promise<Categoria[]>;
  findOne(id: number): Promise<Categoria>;
  save(id: number, data: ICategoriasDTO): Promise<Categoria>;
  delete(data: ICategoriasDTO): Promise<void>;
}
