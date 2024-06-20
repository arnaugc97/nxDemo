// Utils
import { ValueObject } from '../../valueObject';

// Exceptions
import { InvalidISODate } from '../exceptions';

export class ISODate implements ValueObject<Date> {
  private constructor(public value: Date) {}

  static validate(value: string): boolean {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
  static create(value: string): ISODate {
    if (!ISODate.validate(value)) {
      throw new InvalidISODate();
    }

    return new ISODate(new Date(value));
  }
}
