<script>
  import { fade } from "svelte/transition";
</script>

<style>

</style>

<svelte:head>
  <title>Steel Blossom Moon</title>
</svelte:head>
<div
  class="text-2xl text-center"
  in:fade={{ delay: 200 }}
  out:fade={{ duration: 200 }}>
  <p class="text-5xl p-8 glossText">
    "Here is a cool quote about Rokugan or some shit. I'm gonna say a swear.
    Heck." - Emperor Hantei the LXIX
  </p>
  <p class="text-3xl">
    Steel Blossom Moon is an actual play of Legends of the Five Rings, hosted
    and put on by Welcome to the Party. It is streamed live on Twitch, and
    edited into an audio podcast.
  </p>
</div>
