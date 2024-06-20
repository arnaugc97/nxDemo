/* eslint-disable @typescript-eslint/no-explicit-any */

export abstract class ProductFacade {
  abstract getProducts(): Promise<any>;
}
