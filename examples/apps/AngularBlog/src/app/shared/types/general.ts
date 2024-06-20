export interface Pagination<T> {
  articles: T[];
  status: string;
  totalResults: number;
}
