import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { SafeUser } from './dto/login.dto';
//import { TypeUser } from 'type_user/entities/type_user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<SafeUser | null> {
    const user = await this.userService.findByEmail(email);
    console.log('Usuario encontrado:', user); // 👈

    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      return rest as SafeUser;
    }
    return null;
  }

  async login(user: SafeUser) {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.tipo_usuario.nombre,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
      user: payload,
    };
  }
}
