import { Component, OnInit } from '@angular/core';
import { FlashMessageService } from '../flash-message.service';

@Component({
  selector: 'pg-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {
  public messages: any = [];

  constructor(private fmSerivce: FlashMessageService) { }

  ngOnInit() {
    this.fmSerivce.message.subscribe(message => {
      this.appendMessage(message);
    });
  }

  appendMessage(message) {
    const defaultOptions = {
      classes: [],
      timeout: 3000
    };

    Object.assign(defaultOptions, message.options);
    message.options = defaultOptions;

    const timestamp = message.timestamp = + new Date();

    this.messages.push(message);

    setTimeout(() => {
      this.messages = this.messages.filter(msg => msg.timestamp !== timestamp );
    }, message.options.timeout);
  }

}
