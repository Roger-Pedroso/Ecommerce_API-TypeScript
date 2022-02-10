import ICategoriasDTO from "../dtos/ICategoriasDTO";
import Categoria from "../infra/typeorm/entities/Categoria";
import AppError from "../../../shared/errors/AppError";
import CategoriasRepository from "../infra/typeorm/repositories/CategoriaRepository";
export default class ListCategoriaService {
  public async execute(id: number): Promise<Categoria> {
    const categoriasRepository = new CategoriasRepository();
    const categoria = await categoriasRepository.findOne(id);

    if (!categoria) {
      throw new AppError("Informe ID válido");
    }

    return categoria;
  }
}
