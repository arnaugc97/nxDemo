// Utils
import { ValueObject } from '../../valueObject';

// Exceptions
import { InvalidDiscount } from '../exceptions';

export class Discount implements ValueObject<number> {
  private constructor(public value: number) {}

  static validate(value: number): boolean {
    return value > 0 && value < 100;
  }
  static create(value: number): Discount {
    if (!Discount.validate(value)) {
      throw new InvalidDiscount();
    }

    return new Discount(value);
  }
}
