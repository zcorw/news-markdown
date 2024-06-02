import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createMarkdown(
    text: string,
    tags: { title: string; tags: string }[],
  ): string {
    const myRg = /•\s+([^：]+)：([^\n]+)\n*/g;
    let md = '';
    let oneNews: RegExpExecArray = null;
    let i = 0;
    while ((oneNews = myRg.exec(text))) {
      const tag = tags[i]?.tags;
      md +=
        (tag || '\n') + '\n' + '### ' + oneNews[1] + '\n' + oneNews[2] + '\n';
      i++;
    }
    return md;
  }
}
