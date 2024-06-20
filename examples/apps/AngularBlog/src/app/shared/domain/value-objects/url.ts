// Utils
import { ValueObject } from '../../valueObject';

// Exceptions
import { InvalidURL } from '../exceptions';

export class URL implements ValueObject<string> {
  private constructor(public value: string) {}

  static validate(value: string): boolean {
    // Regex to check if it is a valid URL
    const urlRegex = new RegExp(
      '^(https?:\\/\\/)?' + // Protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+:]*)*' + // Port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string
        '(\\#[-a-z\\d_]*)?$', // Fragment locator
      'i'
    );
    return urlRegex.test(value);
  }
  static create(value: string, field: string): URL {
    if (!URL.validate(value)) {
      throw new InvalidURL(field);
    }

    return new URL(value);
  }
}
