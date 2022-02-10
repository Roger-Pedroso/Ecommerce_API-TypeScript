import AppError from "../../../shared/errors/AppError";
import IProdutosDTO from "../dtos/IProdutosDTO";
import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";
import ListProdutoByIdService from "./ListProdutoByIdService";
export default class UpdateProdutoService {
  public async execute(id: number, data: IProdutosDTO): Promise<Produto> {
    const produtoRepository = new ProdutoRepository();
    const produto = await produtoRepository.findOneClient(id);

    if (!produto) {
      throw new AppError("Informe ID válido");
    }

    await produtoRepository.save(id, data);

    return produto;
  }
}
