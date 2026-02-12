import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './dto/user.dtos';
import { UsersService } from './users.service';

// url/users
// http://localhost:3000/users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // http://localhost:3000/users GET
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  //   http://localhost:3000/users/1 GET
  @Get(':id')
  getUserById(@Param() params: { id: string }) {
    const foundUser = this.usersService.getUserById(Number(params.id));
    if (!foundUser) {
      throw new NotFoundException();
    }
    return foundUser;
  }

  //   http://localhost:3000/users POST
  @Post()
  createUser(@Body() body: UserDto) {
    return this.usersService.createUser(body);
  }

  @Put(':id')
  replaceUser(@Param() params: { id: string }, @Body() body: UserDto) {
    const updatedUser = this.usersService.updateUser(Number(params.id), body);
    if (!updatedUser) {
      throw new NotFoundException();
    }
    return updatedUser;
  }

  @Delete(':id')
  deleteUser(@Param() params: { id: string }) {
    const deleted = this.usersService.deleteUser(Number(params.id));
    if (!deleted) {
      throw new NotFoundException();
    }
    return { message: 'User deleted successfully' };
  }
}
