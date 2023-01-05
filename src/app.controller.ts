import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMain() {
    return 'Main';
  }

  @Get('/first')
  getHello() {
    return this.appService.getHello();
  }
}
