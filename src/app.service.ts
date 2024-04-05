import { Injectable } from '@nestjs/common';
import fs from 'node:fs';
import path from 'node:path';

@Injectable()
export class AppService {
  createMarkdown(text: string): string {
    const myRg = /•\s+([^：]+)：([^\n]+)\n*/g
    let md = '\n'
    let oneNews: RegExpExecArray = null
    while(oneNews = myRg.exec(text)) {
        md += '### ' + oneNews[1] + '\n' + oneNews[2] + '\n\n'
    }
    return md;
  }
}
