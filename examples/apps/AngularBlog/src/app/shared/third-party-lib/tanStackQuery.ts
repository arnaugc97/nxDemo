/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectQuery } from '@tanstack/angular-query-experimental';
import { Query } from './query';

export function queryFactory(): Query {
  return {
    queryFetch(queryKey: string, queryFn: any, options?: any): any {
      const queryResponse = injectQuery(() => ({
        queryKey: [queryKey],
        queryFn: queryFn,
        ...options,
      }));

      return queryResponse;
    },
  };
}
