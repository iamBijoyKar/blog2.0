<script>
    export let slug = '';
    export let title = '';
    export let pubdate = '';
    export let author = '';
    export let tags = [];
    export let description = '';

</script>

<a href={slug} class="">
    <div
      class="flex flex-col gap-2 w-full max-w-[700px] p-4 rounded border border-secondary-text hover:shadow-lg transition-all duration-300"
    >
      <h3 class="text-2xl font-bold">
        {title}
      </h3>
      <div class="flex justify-between items-center text-secondary-text">
        <span class="">
          {pubdate}
        </span>
        <span class="">
          {author}
        </span>
      </div>
      <div class="flex flex-wrap gap-2">
        <!-- Tag's raw html  -->
        {#each tags as tag}
            <span class="bg-indigo-400 px-3 py-[4px] rounded-full text-white">
                {tag}
            </span>
        {/each}
      </div>
      <p class="">
        {description}
      </p>
    </div>
  </a>