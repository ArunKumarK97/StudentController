import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';

@Module({
  imports: [LoginModule, ApiModule, HttpModule],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
