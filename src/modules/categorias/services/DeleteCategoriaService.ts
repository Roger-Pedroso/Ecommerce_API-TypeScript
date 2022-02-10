import AppError from "../../../shared/errors/AppError";
import ICategoriasDTO from "../dtos/ICategoriasDTO";
import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriaRepository from "../infra/typeorm/repositories/CategoriaRepository";
export default class DeleteCategoriaService {
  public async execute(data: ICategoriasDTO): Promise<void> {
    const categoriaRepository = new CategoriaRepository();
    const categoria = await categoriaRepository.findOne(Number(data.id));

    if (!categoria) {
      throw new AppError("Informe ID válido");
    }

    await categoriaRepository.delete(data);
  }
}
