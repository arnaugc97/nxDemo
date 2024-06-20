// Utils
import { ValueObject } from '../../valueObject';

// Exceptions
import { InvalidPrice } from '../exceptions';

export class Price implements ValueObject<number> {
  private constructor(public value: number) {}

  static validate(value: number): boolean {
    return value > 0 && value < 1000000;
  }
  static create(value: number): Price {
    if (!Price.validate(value)) {
      throw new InvalidPrice();
    }

    return new Price(value);
  }
}
