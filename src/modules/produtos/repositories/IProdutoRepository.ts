import IProdutosDTO from "../dtos/IProdutosDTO";
import Produto from "../infra/typeorm/entities/Produto";
export default interface IProdutoRepository {
  create(data: IProdutosDTO): Promise<Produto>;
  find(): Promise<Produto[]>;
  findOneClient(id: number): Promise<Produto>;
  save(id: number, data: IProdutosDTO): Promise<Produto>;
  delete(data: IProdutosDTO): Promise<void>;
  findByName(name: string): Promise<Boolean>;
  findProduct(id: Number): Promise<Produto | undefined>;
}
