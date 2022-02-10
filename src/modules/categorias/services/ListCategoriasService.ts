import ICategoriasDTO from "../dtos/ICategoriasDTO";
import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriasRepository from "../infra/typeorm/repositories/CategoriaRepository";
export default class ListCategoriaService {
  public async execute(): Promise<Categoria[]> {
    const categoriasRepository = new CategoriasRepository();
    const categoria = await categoriasRepository.find();
    return categoria;
  }
}
