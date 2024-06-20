/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class Query {
  abstract queryFetch(queryKey: string, queryFn: any, options?: any): any;
}
