import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Blog | Bijoy Kar",
    description: "Bijoy Kar's blog",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blogs/${post.slug}/`,
    })),
  });
}
