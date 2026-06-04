// src/estudiantes/dto/create-estudiante.dto.ts
import { IsString } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  nombre!: string;

  @IsString()
  apellido!: string;

  @IsString()
  codigo!: string;
}