import ICategoriasDTO from "../dtos/ICategoriasDTO";
import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriaRepository from "../infra/typeorm/repositories/CategoriaRepository";

export default class CreateCategoriaService {
  public async execute(data: ICategoriasDTO): Promise<Categoria> {
    const categoriaRepository = new CategoriaRepository();
    const categoria = await categoriaRepository.create(data);

    return categoria;
  }
}
