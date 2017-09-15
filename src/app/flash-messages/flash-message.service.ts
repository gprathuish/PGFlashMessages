import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FlashMessageService {
  public message = new Subject();

  constructor() { }

  show(text: string, options: any) {
    this.message.next({
      text,
      options
    });
  }

}
