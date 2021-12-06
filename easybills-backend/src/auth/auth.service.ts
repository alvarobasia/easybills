import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { levelDatabase } from 'src/main';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/utils/compare-password';
import { getLevel } from 'src/utils/get-level';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    let user = await this.userService.findOne(email);
    user = await getLevel(email);

    if (user && (await comparePassword(password, user.password))) {
      return {
        id: (user as any)._id.toString(),
        email: user.email,
        name: user.name,
      };
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
