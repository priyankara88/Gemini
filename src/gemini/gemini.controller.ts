import { Body, Controller, Get } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { geminiDto } from './dto/gemini.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Get('ai')
  async gemini(@Body() geminidto: geminiDto) {
    return this.geminiService.GetData(geminidto.text);
  }
}
