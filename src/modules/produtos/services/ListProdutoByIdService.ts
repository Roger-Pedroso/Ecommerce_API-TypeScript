import { request } from "express";
import AppError from "../../../shared/errors/AppError";
import IProdutosDTO from "../dtos/IProdutosDTO";
import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";
export default class ListProdutoByIdService {
  public async execute(id: number): Promise<Produto> {
    const produtoRepository = new ProdutoRepository();
    const produto = await produtoRepository.findOneClient(id);

    if (!produto) {
      throw new AppError("Informe ID válido");
    }

    return produto;
  }
}
