<script context="module">
  export async function preload() {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`episodes.json`);
    const feed = await res.json();

    if (res.status === 200) {
      return { feed };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { fade } from "svelte/transition";
  export let feed;
</script>

<svelte:head>
  <title>Episodes - Steel Blossom Moon</title>
</svelte:head>

<div
  class="flex flex-col items-center text-center p-8"
  in:fade={{ delay: 200 }}
  out:fade={{ duration: 200 }}>
  <!-- <img
    src="/steelblossommoon.png"
    width="772"
    height="423"
    alt="Steel Blossom Moon logo" /> -->
  <ul class="glossText text-3xl">
    {#each feed as episode}
      <li class="m-4">
        <a href={episode.link}>{episode.title}</a>
      </li>
    {/each}
  </ul>

</div>
