import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './src/user/user.entity';
import { TypeUser } from './src/type_user/entities/type_user.entity';

async function bootstrtap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  const tipoRepo = dataSource.getRepository(TypeUser);
  const UserRepo = dataSource.getRepository(User);

  const existing = await UserRepo.findOne({
    where: { email: 'gutierrezjacobo319@gmail.com' },
  });
  if (existing) {
    console.log('el administrador ya existe');
    process.exit();
  }

  let tipoAdmin = await tipoRepo.findOne({ where: { nombre: 'admin' } });
  if (!tipoAdmin) {
    tipoAdmin = tipoRepo.create({ nombre: 'admin' });
    await tipoRepo.save(tipoAdmin);
  }

  const admin = UserRepo.create({
    dni: '74541727',
    name: 'Beyker',
    apellido: 'Gutierrez',
    direccion: 'Trujillo',
    telefono: '908976556',
    tel_fijo: '8976541',
    email: 'gutierrezjacobo319@gmail.com',
    password: await bcrypt.hash('admin123', 10),
    tipo_usuario: tipoAdmin,
  });

  await UserRepo.save(admin);

  console.log('Usuario Registrado');
  process.exit();
}

bootstrtap();
