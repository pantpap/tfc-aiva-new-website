import {Component, ViewEncapsulation} from '@angular/core';
import { news } from 'src/app/data/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent {
    readonly news = news;
}
