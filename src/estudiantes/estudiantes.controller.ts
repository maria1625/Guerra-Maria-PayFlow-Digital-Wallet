import { Controller, Get, Post, Body } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from '../dtos/estudiantes/create-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  create(@Body() dto: CreateEstudianteDto) {
    return this.estudiantesService.create(dto);
  }

  @Get()
  findAll() {
    return this.estudiantesService.findAll();
  }
}

