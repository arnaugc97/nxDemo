/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';

// Services
import { ArticleHttpFacade } from './articleHttpFacade';

// Entities
import { Article } from '../../domain/article/article';

// Exceptions
import { GetArticlesException } from './exceptions';

// Types
import { ArticleResponse } from '../../shared/types/article';

// Fixtures
import { HTTPArticleResponse } from './../../../fixtures/HTTPArticle';

describe('ArticleHttpFacade', () => {
  let service: ArticleHttpFacade;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ArticleHttpFacade,
      ],
    });

    service = TestBed.inject(ArticleHttpFacade);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unmatched requests are outstanding.
  });

  // Mocking HTTP Calls
  it('should retrieve articles successfully', async () => {
    const mockResponse: ArticleResponse = HTTPArticleResponse;

    service.getArticles('test', 1).then((result) => {
      expect(result.status).toBe('ok');
      expect(result.totalResults).toBe(2);
      expect(result.articles.length).toBe(2);
      expect(result.articles[0]).toBeInstanceOf(Article);
      expect(result.articles[1]).toBeInstanceOf(Article);
    });

    const req = httpMock.expectOne((req) => req.url === '/top-headlines');
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('country')).toBe('us');
    expect(req.request.params.get('q')).toBe('test');
    expect(req.request.params.get('page')).toBe('1');
    req.flush(mockResponse);
  });

  it('should throw GetArticlesException on error', async () => {
    service.getArticles('test', 1).catch((error) => {
      expect(error).toBeInstanceOf(GetArticlesException);
    });

    const req = httpMock.expectOne((req) => req.url === '/top-headlines');
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
