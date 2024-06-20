import { DomainError } from '../base-expections';

export class InvalidISODate extends DomainError {
  constructor() {
    super('Invalid date');
  }
}

export class InvalidURL extends DomainError {
  constructor(field: string) {
    super('Invalid url in field: ' + field);
  }
}

export class InvalidPrice extends DomainError {
  constructor() {
    super('Invalid price');
  }
}

export class InvalidDiscount extends DomainError {
  constructor() {
    super('Invalid discount');
  }
}
