// Fixtures
import {
  articleBadDateFixture,
  articleBadURLFixture,
  articleOKFixture,
} from './../../../fixtures/article';

// Exceptions
import { InvalidISODate, InvalidURL } from '../../shared/domain/exceptions';

// Entities
import { Article } from './article';

describe('Article', () => {
  it('should create an instance', () => {
    expect(Article.create(articleOKFixture)).toBeTruthy();
  });

  it('should throw domain exception for URL', () => {
    expect(() => Article.create(articleBadURLFixture)).toThrow(InvalidURL);
  });

  it('should throw domain exception for date', () => {
    expect(() => Article.create(articleBadDateFixture)).toThrow(InvalidISODate);
  });
});
