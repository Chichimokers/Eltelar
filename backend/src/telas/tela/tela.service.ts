import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tela } from './tela.entity';

@Injectable()
export class TelaService {
  constructor(
    @InjectRepository(Tela)
    private telasRepository: Repository<Tela>,
  ) {}

  async create(tela: Tela): Promise<Tela> {
    return this.telasRepository.save(tela);
  }

  async findAll(): Promise<Tela[]> {
    return this.telasRepository.find();
  }

  async findOne(id: number): Promise<Tela> {
    const tela = await this.telasRepository.findOne({where :{ id }});
    if (!tela) {
      throw new NotFoundException(`Tela con ID ${id} no encontrada`);
    }
    return tela;
  }

  async update(id: number, tela: Partial<Tela>): Promise<Tela> {
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
