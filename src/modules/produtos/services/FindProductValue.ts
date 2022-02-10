import IProdutosDTO from "../dtos/IProdutosDTO";
import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";
export default class FindProductValue {
  public async execute(id: Number): Promise<Produto | undefined> {
    const produtoRepository = new ProdutoRepository();
    const produto = await produtoRepository.findProductValue(Number(id));
    return produto;
  }
}
