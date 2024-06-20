// Angular Modules
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { lastValueFrom } from 'rxjs';

// Infrastructure
import { ArticleFacade } from './articleFacade';

// Exceptions
import { GetArticlesException } from './exceptions';

// Entities
import { Article } from '../../domain/article/article';

// Types
import { ArticleResponse, NewArticle } from '../../shared/types/article';
import { Pagination } from '../../shared/types/general';

@Injectable({
  providedIn: 'root', // Ensure it's provided in the root injector
})
export class ArticleHttpFacade implements ArticleFacade {
  constructor(private _httpClient: HttpClient) {}

  async getArticles(
    searchQuery: string,
    page: number
  ): Promise<Pagination<Article>> {
    try {
      let params = new HttpParams();
      params = params.set('country', 'us');
      params = params.set('pageSize', 10);
      params = params.set('q', searchQuery);
      params = params.set('page', page);
      const response$ = this._httpClient.get<ArticleResponse>(
        `/top-headlines`,
        { params }
      );
      const response = await lastValueFrom(response$);
      const paginatedArticles: Pagination<Article> = {
        articles: [],
        status: response.status,
        totalResults: response.totalResults,
      };
      paginatedArticles.articles = response.articles.map(
        (article: NewArticle) => {
          return Article.create(article);
        }
      );
      return paginatedArticles;
    } catch (e) {
      throw new GetArticlesException(e);
    }
  }
}
