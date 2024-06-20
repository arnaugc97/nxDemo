import { ArticleResponse } from '../app/shared/types/article';

export const HTTPArticleResponse: ArticleResponse = {
  status: 'ok',
  totalResults: 2,
  articles: [
    {
      source: {
        id: 'fox-news',
        name: 'Fox News',
      },
      author: 'Paul Steinhauser',
      title:
        'Nancy Mace wins South Carolina 1st congressional district primary over Kevin McCarthy-backed challenger - Fox News',
      description:
        'Republican Rep. Nancy Mace of South Carolina, backed by former President Trump, survives a serious primary challenge, defeating a rival who was backed by former House Speaker Kevin McCarthy.',
      url: 'https://www.foxnews.com/politics/nancy-mace-wins-south-carolina-1st-congressional-district-primary',
      urlToImage:
        'https://static.foxnews.com/foxnews.com/content/uploads/2023/07/NANCY-MACE.png',
      publishedAt: '2024-06-12T00:42:00Z',
      content:
        'Join Fox News for access to this content\r\nYou have reached your maximum number of articles. Log in or create an account FREE of charge to continue reading.\r\nBy entering your email and pushing continu… [+2980 chars]',
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'LOLITA C. BALDOR',
      title:
        "US will send Ukraine another Patriot missile system after Kyiv's desperate calls for air defenses - The Associated Press",
      description:
        'Two U.S. officials say the United States will send Ukraine another Patriot missile system. It answers Kyiv’s desperate calls for more air defenses as it battles against an intense Russian assault on the northeastern Kharkiv region. The officials said Tuesday …',
      url: 'https://apnews.com/article/ukraine-russia-patriot-missile-systems-us-aid-62deb8e2c4653dfc27949f81bfa43255',
      urlToImage:
        'https://dims.apnews.com/dims4/default/d9ca048/2147483647/strip/true/crop/4032x2268+0+378/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4c%2F81%2F70280fd4b4a8f9cadca2ab20bbc8%2F5da12908dffd43eb99c62a5e6134d9a1',
      publishedAt: '2024-06-12T03:56:00Z',
      content:
        'WASHINGTON (AP) The United States will send Ukraine another Patriot missile system, two U.S. officials said Tuesday, answering Kyivs desperate calls for more air defenses as it battles an intense Rus… [+2101 chars]',
    },
  ],
};
