/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from '@angular/core/testing';
import { ArticleService } from './article.service';
import { ArticleFacade } from '../../infrastructure/article/articleFacade';
import { Article } from '../../domain/article/article';
import { Pagination } from '../../shared/types/general';
import { ApplicationStateService } from '../../shared/services/application-state.service';
import { HTTPArticleResponse } from 'apps/AngularBlog/src/fixtures/HTTPArticle';

describe('ArticleService', () => {
  let service: ArticleService;
  let articleFacadeMock: jest.Mocked<ArticleFacade>;

  beforeEach(() => {
    const mockFacade = {
      getArticles: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ArticleService,
        { provide: ArticleFacade, useValue: mockFacade },
        ApplicationStateService,
      ],
    });

    service = TestBed.inject(ArticleService);
    articleFacadeMock = TestBed.inject(
      ArticleFacade
    ) as jest.Mocked<ArticleFacade>;
  });

  it('should retrieve articles successfully and update the state', async () => {
    const mockArticles: Article[] = [
      Article.create(HTTPArticleResponse.articles[0]),
      Article.create(HTTPArticleResponse.articles[1]),
    ];
    const mockResponse: Pagination<Article> = {
      articles: mockArticles,
      status: 'ok',
      totalResults: 2,
    };

    articleFacadeMock.getArticles.mockResolvedValue(mockResponse);

    await service.getArticles('test', 1);

    expect(articleFacadeMock.getArticles).toHaveBeenCalledWith('test', 1);
    expect(service.entities$()).toEqual(mockArticles);
    expect(service.totalResults$()).toBe(mockResponse.totalResults);
    expect(service.error$()).toBe(false);
  });

  it('should handle error and update the state accordingly', async () => {
    articleFacadeMock.getArticles.mockRejectedValue(new Error('Error'));

    await service.getArticles('test', 1);

    expect(articleFacadeMock.getArticles).toHaveBeenCalledWith('test', 1);
    expect(service.entities$()).toEqual([]);
    expect(service.totalResults$()).toBe(0);
    expect(service.error$()).toBe(true);
  });
});
