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
  import { onMount } from "svelte";
  import Player from "../components/Player.svelte";
  export let feed;
</script>

<svelte:head>
  <title>Episodes - Steel Blossom Moon</title>
  <meta name="twitter:title" content="Episodes" />
  <meta
    name="twitter:description"
    content="Get links to all the live episodes" />
</svelte:head>

<div class="flex flex-col items-center text-center p-8" in:fade>
  <!-- <img
    src="/steelblossommoon.png"
    width="772"
    height="423"
    alt="Steel Blossom Moon logo" /> -->
  <ul class="glossText text-2xl">
    {#each feed as episode}
      <Player {episode} />
    {/each}
  </ul>

</div>
