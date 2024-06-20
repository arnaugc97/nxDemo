import { Article } from '../domain/article/article';

export class ArticleUseCase {
  updateArticleTitle(currentArticle: Article, newTitle: string): Article {
    return currentArticle.changeTitle(newTitle);
  }
}
