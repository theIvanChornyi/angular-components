import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  @Output() onAdd = new EventEmitter<IPost>();
  @ViewChild('titleInp', { static: false })
  inputRef: ElementRef<HTMLInputElement>;
  title: string = '';
  text: string = '';

  setFocus() {
    this.inputRef.nativeElement.focus();
  }
  addPost() {
    const title = this.title.trim();
    const text = this.text.trim();
    if (title && text) {
      const post: IPost = { title, text, id: Math.ceil(Date.now()) };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
}
