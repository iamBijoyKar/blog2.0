<script>
    import { onMount } from "svelte";
    import ArticlePreview from "./ArticlePreview.svelte";
    export let articles = {};
    let query = '';
    let filteredArticles = [];

    onMount(() => {
        filteredArticles = articles;
    });

    function searchBlog(query) {
        const filteredArticles = articles.filter(article => {
            if (article.data.title.toLowerCase().includes(query.toLowerCase())) {
                return article;
            }
            else if (article.data.description.toLowerCase().includes(query.toLowerCase())) {
                return article;
            }
            else if (article.data.author.toLowerCase().includes(query.toLowerCase())) {
                return article;
            }
            else if (article.data.tags.map(tag => tag.toLowerCase()).includes(query.toLowerCase())) {
                return article;
            }
        });
        return filteredArticles;
    }
    $: filteredArticles = searchBlog(query);

</script>

<section class="mt-10 w-full md:w-[600px] lg:w-[700px]">
    <div class="w-full">
      <input
        bind:value={query}
        type="text"
        class="w-full px-2 py-1 rounded h-10 outline-none border border-gray-400 focus:border-primary-text transition-all duration-300 focus:shadow-md"
        name=""
        id=""
      />
    </div>
    <div class="mt-10">
      <ul class="">
        {#if filteredArticles.length > 0}
            {#each filteredArticles as article}
            <li class="mb-4">
                <ArticlePreview 
                    title={article.data.title}
                    description={article.data.description}
                    pubdate={article.data.pubdate}
                    author={article.data.author}
                    slug={`/blog/${article.slug}`}
                    tags={article.data.tags}
                    />
                </li>
            {/each}
        {:else}
            <p class="text-center">No articles found</p>
        {/if}
      </ul>
    </div>
  </section>
