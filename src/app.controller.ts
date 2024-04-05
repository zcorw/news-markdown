import { Controller, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('cut')
  cut(@Body('text') text): string {
    return this.appService.createMarkdown(text);
  }
}
