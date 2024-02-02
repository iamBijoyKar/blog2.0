<script>
    import Icon from '@iconify/svelte';
    import { fade } from 'svelte/transition';
    let showMenu = false
    const toggleMenu = () => {
        showMenu = !showMenu
    }
</script>

<div class="">
    <button on:click={toggleMenu} class="flex items-center justify-center p-2 ps-0 mt-0 rounded-md "
        aria-label="Open menu">
        {#if showMenu}
            <Icon trans icon="eva:close-outline" class="w-8 h-8" />
        {:else}
            <Icon icon="eva:menu-outline" class="w-8 h-8" />
        {/if}
    </button>
    {#if showMenu}
    <nav transition:fade={{duration:100}} class="w-full absolute top-[4rem] left-0 bg-ternary-bg ">
        <ul class="flex flex-col gap-2 text-center text-xl py-4">
          <li class="">
            <a href="/">Home</a>
          </li>
          <li class="">
            <a href="/blog">Blog</a>
          </li>
          <li class="">
            <a href="/contact">Contact</a>
          </li>
        </ul>
    </nav>
    {/if}
</div>