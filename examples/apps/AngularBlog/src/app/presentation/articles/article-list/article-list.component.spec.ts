import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleListComponent } from './article-list.component';
import { ArticleService } from '../../../services/article/article.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;
  let articleServiceMock: jest.Mocked<ArticleService>;

  beforeEach(async () => {
    articleServiceMock = {
      getArticles: jest.fn(),
      totalResults$: jest.fn().mockReturnValue(of(0)),
      loading$: jest.fn().mockReturnValue(of(false)),
      error$: jest.fn().mockReturnValue(of(false)),
      entities$: jest.fn().mockReturnValue(of([])),
    } as unknown as jest.Mocked<ArticleService>;

    await TestBed.configureTestingModule({
      imports: [CommonModule, ArticleListComponent],
      providers: [{ provide: ArticleService, useValue: articleServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getArticles on init', () => {
    expect(articleServiceMock.getArticles).toHaveBeenCalledWith('', 1);
  });

  it('should update search query and call getArticles', () => {
    const input = fixture.nativeElement.querySelector('.search-bar');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));

    expect(articleServiceMock.getArticles).toHaveBeenCalledWith('test', 1);
  });

  it('should go to the next page and call getArticles', () => {
    component.nextPage();

    expect(component.page()).toBe(2);
    expect(articleServiceMock.getArticles).toHaveBeenCalledWith('', 2);
  });

  it('should go to the previous page and call getArticles', () => {
    component.nextPage();
    component.prevPage();

    expect(component.page()).toBe(1);
    expect(articleServiceMock.getArticles).toHaveBeenCalledWith('', 1);
  });
});
