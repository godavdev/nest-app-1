import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users2Controller } from './users2/users2.controller';
import { Users2Service } from './users2/users2.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [UsersModule, CatsModule],
  controllers: [AppController, Users2Controller],
  providers: [AppService, Users2Service],
})
export class AppModule {}
