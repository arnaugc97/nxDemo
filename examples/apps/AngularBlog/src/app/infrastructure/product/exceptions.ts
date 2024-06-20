/* eslint-disable @typescript-eslint/no-explicit-any */
export class GetProductsException extends Error {
  constructor(error: any) {
    super(error);
    console.error('*** INFRASTRUCTURE ERROR --> getProducts', error);
  }
}
