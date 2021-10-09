import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('new')
  create(@Body() { email, name, password }: CreateUserDto) {
    return this.userService.create(name, email, password);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    const token = await this.authService.login(req.user);
    return { ...req.user, ...token };
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  update(@Param('id') id: string, @Body() { email, name }: UpdateUserDto) {
    return this.userService.updateUser(id, email, name);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id) {
    return this.userService.delete(id);
  }
}
