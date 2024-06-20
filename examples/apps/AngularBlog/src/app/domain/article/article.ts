// Types
import { NewArticle } from '../../shared/types/article';

// Value Objects
import { ISODate } from '../../shared/domain/value-objects/ISODate';
import { URL } from '../../shared/domain/value-objects/url';
import { UniqueId } from '../../shared/domain/value-objects/uniqueId';

export class Article {
  constructor(
    public readonly id: UniqueId,
    public readonly title: string,
    public readonly description: string,
    public readonly sourceName: string,
    public readonly author: string,
    public readonly image: string | null,
    public readonly articleUrl: URL,
    public readonly publishedAt: ISODate,
    public readonly content: string
  ) {}

  changeTitle(title: string): Article {
    return new Article(
      this.id,
      title,
      this.description,
      this.sourceName,
      this.author,
      this.image,
      this.articleUrl,
      this.publishedAt,
      this.content
    );
  }

  static create({
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  }: NewArticle): Article {
    return new Article(
      UniqueId.create(),
      title,
      description,
      source.name,
      author,
      urlToImage,
      URL.create(url, 'url'),
      ISODate.create(publishedAt),
      content
    );
  }
}
