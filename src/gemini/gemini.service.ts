import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeminiService {
  private readonly gemini_key;
  private readonly ai;
  constructor(private readonly configService: ConfigService) {
    this.gemini_key = configService.get<string>('GEMINI_KEY');
    this.ai = new GoogleGenAI({ apiKey: this.gemini_key });
  }

  async GetData(prompt: string) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
      config: {
        maxOutputTokens: 500,
        temperature: 0.1,
      },
    });

    const result = response.candidates?.[0]?.content?.parts?.[0]?.text;
    return result;
  }
}
