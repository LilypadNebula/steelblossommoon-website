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

<style>

</style>

<svelte:head>
  <title>Steel Blossom Moon</title>
  <meta name="twitter:title" content="Steel Blossom Moon" />
  <meta
    name="twitter:description"
    content="An actual play podcast of Legend of the Five Rings by Welcome to
    the Party" />
</svelte:head>
<div class="text-2xl text-center" in:fade>
  <p class="text-5xl p-8 glossText">
    "Here is a cool quote about Rokugan or some shit. I'm gonna say a swear.
    Heck." - Emperor Hantei the LXIX
  </p>
  <p class="text-3xl p-8">
    Steel Blossom Moon is an actual play of Legends of the Five Rings, hosted
    and put on by Welcome to the Party. It is streamed live on Twitch, and
    edited into an audio podcast. Check out all of our episodes below!
  </p>
  <ul
    class="glossText text-2xl flex flex-col items-center md:flex-row
    md:flex-wrap">
    {#each feed as episode}
      <Player {episode} />
    {/each}
  </ul>
</div>
