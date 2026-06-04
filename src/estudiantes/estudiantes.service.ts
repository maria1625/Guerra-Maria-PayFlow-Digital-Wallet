import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from '../entities/estudiantes/estudiante.entity';
import { CreateEstudianteDto } from '../dtos/estudiantes/create-estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  async create(dto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = this.estudianteRepository.create(dto);
    return await this.estudianteRepository.save(estudiante);
  }

  async findAll(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find();
  }
}