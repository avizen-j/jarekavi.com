import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const articles = (await getCollection('articles', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());

  return rss({
    title: 'Jarek Avi',
    description: 'Writing about engineering, product, distribution and lessons from the indie hacking journey.',
    site: site!,
    items: articles.map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.publishedDate,
      // The RSS helper also uses the absolute article link as its GUID.
      link: `/articles/${id}/`,
    })),
    customData: '<language>en</language>',
  });
};
