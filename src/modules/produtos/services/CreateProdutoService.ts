import IProdutosDTO from "../dtos/IProdutosDTO";
import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";
export default class CreateProdutoService {
  public async execute(data: IProdutosDTO): Promise<Produto> {
    const produtoRepository = new ProdutoRepository();
    const produto = await produtoRepository.create(data);
    return produto;
  }
}
