import IProdutosDTO from "../../../../../modules/produtos/dtos/IProdutosDTO";
import IProdutoRepository from "../../../../../modules/produtos/repositories/IProdutoRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Produto from "../entities/Produto";
export default class ProdutoRepository implements IProdutoRepository {
  private ormRepository: Repository<Produto>;

  constructor() {
    this.ormRepository = getRepository(Produto);
  }

  async create(data: IProdutosDTO): Promise<Produto> {
    const produto = this.ormRepository.create(data);
    return this.ormRepository.save(produto);
  }
  async find(): Promise<Produto[]> {
    const produto = await this.ormRepository.find();
    return produto;
  }

  async findProduct(id: Number): Promise<Produto | undefined> {
    const teste = this.ormRepository
      .createQueryBuilder("produto")
      .select(["produto.quantidade_estoque"])
      .where("produto.id = :id", { id })
      .getOne();
    return teste;
  }

  async findProductValue(id: Number): Promise<Produto | undefined> {
    const teste = this.ormRepository
      .createQueryBuilder("produto")
      .select(["produto.preco"])
      .where("produto.id = :id", { id })
      .getOne();
    return teste;
  }

  async findOneClient(id: number): Promise<Produto> {
    const produto = await this.ormRepository.findOne(id);

    return produto!;
  }

  async findByName(name: string): Promise<Boolean> {
    const produto = await this.ormRepository.findOne(name);

    return true;
  }

  async save(id: number, data: IProdutosDTO) {
    const newUser = {
      ...data,
      id: Number(id),
    };

    const produto = await this.ormRepository.save(newUser);
    return produto;
  }

  async delete(data: IProdutosDTO): Promise<void> {
    const produto = await this.ormRepository.delete(data);
  }
}
