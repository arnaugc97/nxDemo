export abstract class DomainError extends Error {
  protected constructor(error: string) {
    super(`*** DOMAIN ERROR --> ${error} ***`);
    console.error(`*** DOMAIN ERROR --> ${error} ***`);
  }
}
