import ICategoriaDTO from "../../../../../modules/categorias/dtos/ICategoriasDTO";
import ICategoriaRepository from "../../../../categorias/repositories/ICategoriaRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Categoria from "../entities/Categoria";
import { response } from "express";

export default class CategoriaRepository implements ICategoriaRepository {
  private ormRepository: Repository<Categoria>;

  constructor() {
    this.ormRepository = getRepository(Categoria);
  }

  async create(data: ICategoriaDTO): Promise<Categoria> {
    const client = this.ormRepository.create(data);
    return this.ormRepository.save(client);
  }
  async find(): Promise<Categoria[]> {
    const categoria = await this.ormRepository.find();
    return categoria;
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.ormRepository.findOne(id);

    return categoria!;
  }

  async save(id: number, data: ICategoriaDTO) {
    const newUser = {
      ...data,
      id: Number(id),
    };

    const categoria = await this.ormRepository.save(newUser);
    return categoria;
  }

  async delete(data: ICategoriaDTO): Promise<void> {
    const categoria = await this.ormRepository.delete(data);
  }
}
