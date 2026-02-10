import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

// url/users
// http://localhost:3000/users
@Controller('users')
export class UsersController {
  // http://localhost:3000/users GET
  @Get()
  getUsers() {
    return 'users get eaffa';
  }

  //   http://localhost:3000/users/1 GET
  @Get(':id')
  getUserById(@Param() params: { id: string }) {
    return `user get by id ${params.id}`;
  }

  //   http://localhost:3000/users POST
  @Post()
  createUser(@Body() body: { name: string }) {
    return `User created with name ${body.name}`;
  }

  @Patch(':id')
  updateUser(@Param() params: { id: string }, @Body() body: { name: string }) {
    return `User with id ${params.id} updated with name ${body.name}`;
  }

  @Put(':id')
  replaceUser(@Param() params: { id: string }, @Body() body: { name: string }) {
    return `User with id ${params.id} replaced with name ${body.name}`;
  }

  @Delete(':id')
  deleteUser(@Param() params: { id: string }) {
    return `User with id ${params.id} deleted`;
  }
}
