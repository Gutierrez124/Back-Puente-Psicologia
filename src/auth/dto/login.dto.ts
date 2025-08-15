import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export interface SafeUser {
  id: number;
  email: string;
  tipo_usuario: {
    nombre: string;
  };
}
