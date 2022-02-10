import IProdutosDTO from "../dtos/IProdutosDTO";
import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";
export default class ListProdutoService {
  public async execute(): Promise<Produto[]> {
    const produtoRepository = new ProdutoRepository();
    const produto = await produtoRepository.find();
    return produto;
  }
}
