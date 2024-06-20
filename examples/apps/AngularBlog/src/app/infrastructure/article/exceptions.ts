/* eslint-disable @typescript-eslint/no-explicit-any */
export class GetArticlesException extends Error {
  constructor(error: any) {
    super(error);
    console.error('*** INFRASTRUCTURE ERROR --> getArticles', error);
  }
}
