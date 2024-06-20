import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Application
import { ArticleService } from '../../../services/article/article.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent implements OnInit {
  searchQuery = signal<string>('');
  page = signal<number>(1);
  articleService = inject(ArticleService);

  ngOnInit() {
    this.articleService.getArticles(this.searchQuery(), this.page());
  }

  onSearchUpdated(sq: string) {
    this.searchQuery.set(sq);
    this.articleService.getArticles(this.searchQuery(), this.page());
  }

  nextPage() {
    this.page.update((currentPage: number) => currentPage + 1);
    this.articleService.getArticles(this.searchQuery(), this.page());
  }

  prevPage() {
    this.page.update((currentPage: number) => currentPage - 1);
    this.articleService.getArticles(this.searchQuery(), this.page());
  }
}
