import {Component} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  message: string = '';
  id: string = '';

  constructor(private dataService: DataService) {}

  getMessage() {
    this.dataService.getMessage(this.id).subscribe(
      data => this.message = data.content,
      error => console.error('Failed to fetch message', error)
    );
  }

  createMessage() {
    this.dataService.createMessage({ id: this.id, content: this.message }).subscribe(
      data => console.log('Message created', data),
      error => console.error('Failed to create message', error)
    );
  }

  updateMessage() {
    this.dataService.updateMessage({ id: this.id, content: this.message }).subscribe(
      data => console.log('Message updated', data),
      error => console.error('Failed to update message', error)
    );
  }
}
