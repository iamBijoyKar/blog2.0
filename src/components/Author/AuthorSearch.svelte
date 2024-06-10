<script>
    import { onMount } from 'svelte';
    import AuthorPreview from './AuthorPreview.svelte';
    export let authors = {};
    let query = '';
    let filteredAuthors = [];

    onMount(() => {
        filteredAuthors = authors;
    });

    function searchAuthors(query) {
        const filteredAuthors = authors.filter(author => {
            if (author.data.name.toLowerCase().includes(query.toLowerCase())) {
                return author;
            }
            else if (author.data.skills.map(skill => skill.toLowerCase()).includes(query.toLowerCase())) {
                return author;
            }
            else if (author.data.college.toLowerCase().includes(query.toLowerCase())) {
                return author;
            }
        });
        return filteredAuthors;
    }

    $: filteredAuthors = searchAuthors(query);

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
        <ul class="grid gap-3 grid-flow-row grid-cols-1 md:grid-cols-2  ">
            {#if filteredAuthors.length > 0}
                {#each filteredAuthors as author}
                <li class="mb-4">
                    <AuthorPreview 
                        name={author.data.name}
                        headlines={author.data.headlines}
                        profileImgLink={author.data.profileImgLink}
                        skills={author.data.skills}
                        college={author.data.college}
                        links={author.data.links}
                        articleCount={author.data.articleCount}
                        slug={`/authors/${author.id}`}
                        />
                    </li>
                {/each}
            {:else}
                <p class="text-center">No authors found</p>
            {/if}
        </ul>
    </div>
</section>