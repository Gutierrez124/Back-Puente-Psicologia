import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { DataSource } from 'typeorm';
import { TypeUser } from './src/type_user/entities/type_user.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  const tipoRepo = dataSource.getRepository(TypeUser);
  const tipos = ['Paciente', 'Psicologo'];

  for (const nombre of tipos) {
    const existente = await tipoRepo.findOne({ where: { nombre } });

    if (!existente) {
      const nuevo = tipoRepo.create({ nombre });
      await tipoRepo.save(nuevo);
      console.log(`Tipo de usuario creado: ${nombre}`);
    } else {
      console.log(`Ya existe el tipo de usuario: ${nombre}`);
    }
  }

  await app.close();
  process.exit();
}

bootstrap().catch((error) => {
  console.error('Error al ejecutar el seed de tipos de usuario:', error);
  process.exit(1);
});
