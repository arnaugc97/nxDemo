import { Article } from '../../domain/article/article';
import { Pagination } from '../../shared/types/general';

export abstract class ArticleFacade {
  abstract getArticles(
    searchQuery: string,
    page: number
  ): Promise<Pagination<Article>>;
}
