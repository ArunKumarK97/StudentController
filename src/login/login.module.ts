import { HttpModule, Module } from '@nestjs/common';
import { LoginController } from './login.controller';

@Module({
  controllers: [LoginController],
  imports:[HttpModule]
})
export class LoginModule {}
