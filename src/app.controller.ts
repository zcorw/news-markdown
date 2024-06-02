import { Controller, Body, Post, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('cut')
  cut(@Body('text') text, @Body('tags') tags): string {
    let json: any = null;
    try {
      json = JSON.parse(tags) as { title: string; tags: string }[];
    } catch (e) {
      throw new BadRequestException('输入标签数据格式错误');
    }
    if (!Array.isArray(json)) {
      throw new BadRequestException('输入标签数据不是数组');
    }
    return this.appService.createMarkdown(text, json);
  }
}
