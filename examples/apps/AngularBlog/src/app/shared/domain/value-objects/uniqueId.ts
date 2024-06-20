import { ValueObject } from './../../valueObject';
export class UniqueId implements ValueObject<string> {
  private constructor(public value: string) {}

  static create(id?: string): UniqueId {
    if (id) {
      return new UniqueId(id);
    }
    return new UniqueId(Math.random().toString(36).substring(2));
  }
}
