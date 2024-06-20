import { NewArticle } from '../app/shared/types/article';

export const articleOKFixture: NewArticle = {
  source: {
    id: null,
    name: 'ReadWrite',
  },
  author: 'Radek Zielinski',
  title: 'Bitcoin trades above supports, bank collapses are a good omen',
  description:
    'Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within… Continue reading Bitcoin trades above supports, bank collapses are a good omen\nThe post Bitcoin trades above supports, bank col…',
  url: 'https://readwrite.com/bitcoin-trades-above-supports-bank-collapses-are-a-good-omen/',
  urlToImage:
    'https://readwrite.com/wp-content/uploads/2024/06/fc23b9c7-9438-4ba4-a436-fabd4fed874e.webp',
  publishedAt: '2024-06-05T11:32:13Z',
  content:
    'Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within a narrow range, hinting at a possible breakout.\r\nJamie Coutts Real V… [+2258 chars]',
};

export const articleBadURLFixture: NewArticle = {
  source: {
    id: null,
    name: 'ReadWrite',
  },
  author: 'Radek Zielinski',
  title: 'Bitcoin trades above supports, bank collapses are a good omen',
  description:
    'Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within… Continue reading Bitcoin trades above supports, bank collapses are a good omen\nThe post Bitcoin trades above supports, bank col…',
  url: 'This is not an url',
  urlToImage:
    'https://readwrite.com/wp-content/uploads/2024/06/fc23b9c7-9438-4ba4-a436-fabd4fed874e.webp',
  publishedAt: '2024-06-05T11:32:13Z',
  content:
    'Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within a narrow range, hinting at a possible breakout.\r\nJamie Coutts Real V… [+2258 chars]',
};

export const articleBadDateFixture: NewArticle = {
  source: {
    id: null,
    name: 'ReadWrite',
  },
  author: 'Radek Zielinski',
  title: 'Bitcoin trades above supports, bank collapses are a good omen',
  description:
    'Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within… Continue reading Bitcoin trades above supports, bank collapses are a good omen\nThe post Bitcoin trades above supports, bank col…',
  url: 'https://readwrite.com/bitcoin-trades-above-supports-bank-collapses-are-a-good-omen/',
  urlToImage:
    'https://readwrite.com/wp-content/uploads/2024/06/fc23b9c7-9438-4ba4-a436-fabd4fed874e.webp',
  publishedAt: 'This is not a date',
  content:
    'Bitcoin (BTC) is nearing a potentially pivotal moment as its average price across three different time frames has converged within a narrow range, hinting at a possible breakout.\r\nJamie Coutts Real V… [+2258 chars]',
};
