import { Component } from '@angular/core';

import { FlashMessageService } from './flash-messages/flash-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fmService: FlashMessageService) {}

  showMessage(timeout) {
    console.log('Messaged Called');
    let options = { classes: 'alert alert-danger'};
    if (timeout) {
      options['timeout'] = timeout;
    }
    this.fmService.show('Hi', options);
  }
}
