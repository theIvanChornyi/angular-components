import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IPost } from '../app.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @ContentChild('postInfo', { static: true })
  infoRef: ElementRef<HTMLDivElement>;
  ngOnInit(): void {
    console.log(this.infoRef.nativeElement);
  }
  deletePost() {
    this.onDelete.emit(this.post.id);
  }
}
