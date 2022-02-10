import AppError from "../../../shared/errors/AppError";
import ICategoriasDTO from "../dtos/ICategoriasDTO";
import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriaRepository from "../infra/typeorm/repositories/CategoriaRepository";
import ListCategoriaByIdService from "./ListCategoriaByIdService";
export default class UpdateCategoriaService {
  public async execute(id: number, data: ICategoriasDTO): Promise<Categoria> {
    const categoriaRepository = new CategoriaRepository();
    const categoria = await categoriaRepository.findOne(id);

    if (!categoria) {
      throw new AppError("Informe ID válido");
    }

    await categoriaRepository.save(id, data);

    return categoria;
  }
}
