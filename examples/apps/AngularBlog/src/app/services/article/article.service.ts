// Angular Modules
import { Injectable } from '@angular/core';
// Entities
import { Article } from '../../domain/article/article';

// Utils
import { ApplicationStateService } from '../../shared/services/application-state.service';

// Infrastructure
import { ArticleFacade } from '../../infrastructure/article/articleFacade';
import { Pagination } from '../../shared/types/general';

@Injectable({ providedIn: 'root' })
export class ArticleService extends ApplicationStateService<Article> {
  constructor(private _articleFacade: ArticleFacade) {
    super();
  }

  async getArticles(searchQuery: string, page: number): Promise<void> {
    await this.dispatch(async () => {
      const paginatedArticles: Pagination<Article> =
        await this._articleFacade.getArticles(searchQuery, page);
      this.setEntities(paginatedArticles.articles);
      this.setTotalResults(paginatedArticles.totalResults);
    }).catch((e) => {
      this.setError();
      console.log(e);
    });
  }
}
