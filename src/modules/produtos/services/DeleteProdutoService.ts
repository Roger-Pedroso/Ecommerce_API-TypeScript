import AppError from "../../../shared/errors/AppError";
import IProdutosDTO from "../dtos/IProdutosDTO";
import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";
export default class DeleteProdutoService {
  public async execute(data: IProdutosDTO): Promise<void> {
    const produtoRepository = new ProdutoRepository();
    const produto = await produtoRepository.findOneClient(Number(data.id));

    if (!produto) {
      throw new AppError("Informe ID válido");
    }

    await produtoRepository.delete(data);
  }
}
