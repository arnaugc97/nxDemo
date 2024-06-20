export type NewArticle = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface ArticleResponse {
  status: string;
  totalResults: number;
  articles: NewArticle[];
}
