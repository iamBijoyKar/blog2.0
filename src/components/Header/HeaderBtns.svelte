<script> 
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { backIn } from 'svelte/easing'
    
    const themes = ['light', 'dark', 'auto']
    let theme;
    const setTheme = (theme_) => {
        localStorage.setItem('theme', theme_)
        if(theme_ === 'auto') {
            try{
                document.documentElement.removeAttribute('data-theme')
                theme = theme_
            }
            catch(err) {
                console.log(err)
            }
        } else {
            document.documentElement.setAttribute('data-theme', theme_)
            theme = theme_
        }
    }

    onMount(() => {
        theme = localStorage.getItem('theme') || 'auto'
        setTheme(theme)
    })

</script>

<div class="flex items-center gap-2">
    <a href="https://github.com/iamBijoyKar" target="_blank" class="border border-secondary-text p-[6px] rounded-lg">
        <Icon icon="line-md:github-loop" class="text-primary-text w-6 h-6" />
    </a>
    <div class="flex justify-center items-center border border-secondary-text p-1 rounded-lg">
        <label for="mode-toggle" class="flex justify-center items-center gap-1 sm:gap-2 cursor-pointer">
            {#if theme === 'light'}
            <Icon icon="carbon:sun" class="text-primary-text w-6 h-6" />
            {:else if theme === 'dark'}
            <Icon icon="carbon:moon" class="text-primary-text w-6 h-6" />
            {:else}
            <Icon icon="carbon:fade" class="text-primary-text w-6 h-6" />
            {/if}
            <select on:change={(e) => setTheme(e.target.value)} name="mode-toggle" id="mode-toggle" class="rounded capitalize bg-primary-bg p-1 outline-none cursor-pointer" aria-label="Mode Toggler">
                {#each themes as theme_}
                <option value={theme_} selected={theme_ === theme} role="button" >{theme_}</option>
                {/each}
            </select>
        </label>
    </div>
</div>