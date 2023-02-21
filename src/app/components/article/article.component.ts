import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../interfaces";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  // @ts-ignore
  @Input() article: Article;
  // @ts-ignore
  @Input() index: number;

  constructor() { }

  ngOnInit() {}

}
