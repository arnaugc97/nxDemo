import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { ArticleService } from '../../../services/article/article.service';
import { Article } from '../../../domain/article/article';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
})
export class ArticleDetailComponent implements OnInit {
  article!: Article | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    public articleService: ArticleService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id: string = params['slug'];
      this.article = this.articleService.getEntity(id);
    });
  }
}
