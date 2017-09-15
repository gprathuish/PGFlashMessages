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

  showMessage() {
    console.log('Messaged Called');
    this.fmService.show('Hi', { classes: 'alert alert-danger',  });
  }
}
