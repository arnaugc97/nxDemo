import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleService } from '../../../services/article/article.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;
  let articleServiceMock: jest.Mocked<ArticleService>;
  let activatedRouteMock: Partial<ActivatedRoute>;

  beforeEach(async () => {
    articleServiceMock = {
      getEntity: jest.fn(),
    } as unknown as jest.Mocked<ArticleService>;

    activatedRouteMock = {
      params: of({ slug: 'test-article' }),
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, ArticleDetailComponent],
      providers: [
        { provide: ArticleService, useValue: articleServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEntity with the correct id on init', () => {
    expect(articleServiceMock.getEntity).toHaveBeenCalledWith('test-article');
  });

  it('should display a message if the article does not exist', () => {
    articleServiceMock.getEntity.mockReturnValue(undefined);

    fixture.detectChanges();

    const messageElement = fixture.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain(
      'This article not exist anymore!'
    );
  });
});
