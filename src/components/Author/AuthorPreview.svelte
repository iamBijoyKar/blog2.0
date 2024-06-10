<script> 
    export let name = '';
    export let headlines = '';
    export let profileImgLink = '';
    export let skills = [];
    export let college = '';
    export let links = {};
    export let articleCount = 0;
    export let slug = '';

</script>
<a href={slug}>
    <div class="flex flex-col items-center p-4 rounded border border-slate-700 min-h-[400px] max-h-[400px] hover:shadow-lg transition-all duration-300">
        <div class="w-32 h-32 rounded-full overflow-hidden">
            <img src={profileImgLink} alt={name} class="w-full h-full object-cover" />
        </div>
        <h2 class="text-2xl font-bold mt-4 text-center">{name}</h2>
        <p class="text-md text-gray-500 text-center mt-2 h-[75px] min-h-[75px] max-h-[75px] overflow-hidden w-full ">{headlines}</p>
        <p class="text-lg text-gray-400 mt-2">{college}</p>

        <p class="mt-4">{articleCount} articles</p>
    </div>
</a>