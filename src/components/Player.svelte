<script context="module">
  let current;
</script>

<script>
  export let episode;

  let audio;
  let paused = true;

  function stopOthers() {
    if (current && current !== audio) current.pause();
    current = audio;
  }
</script>

<li class="p-8 flex flex-col items-center border-b border-gray-800">
  <p>{episode.title}</p>
  <audio
    bind:this={audio}
    controls
    src={episode.enclosure.url}
    on:play={stopOthers}
    bind:paused />
</li>
