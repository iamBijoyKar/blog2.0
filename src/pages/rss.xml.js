import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blogs");
  console.log(context.site);
  return rss({
    title: "Blog | Bijoy Kar",
    description: "Bijoy Kar's blog",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubdate,
      link: `/blogs/${post.slug}/`,
    })),
  });
}
