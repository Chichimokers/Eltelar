import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../Product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private telasRepository: Repository<Product>,
  ) {}

  async create(tela: Product): Promise<Product> {
    return this.telasRepository.save(tela);
  }

  async findAll(): Promise<Product[]> {
    return this.telasRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const tela = await this.telasRepository.findOne({where :{ id }});
    if (!tela) {
      throw new NotFoundException(`Tela con ID ${id} no encontrada`);
    }
    return tela;
  }

  async update(id: number, tela: Partial<Product>): Promise<Product> {
    await this.telasRepository.update(id, tela);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.telasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tela con ID ${id} no encontrada`);
    }
  }
}
