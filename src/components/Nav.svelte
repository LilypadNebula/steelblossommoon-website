<script>
  export let segment;
</script>

<style>

</style>

<nav
  class="shadow glossText flex flex-col text-center md:flex-row justify-around
  items-center p-2">
  <a href="/" class="text-5xl p-1">Steel Blossom Moon</a>
  <a
    class="text-2xl goblinText hover:border-b hover:border-black {segment === 'about' ? 'border-b border-black' : ''}"
    href="about">
    About
  </a>
  <a
    class="text-2xl goblinText hover:border-b hover:border-black {segment === 'cast' ? 'border-b border-black' : ''}"
    href="cast">
    Cast
  </a>
  <a
    class="text-2xl goblinText hover:border-b hover:border-black {segment === 'characters' ? 'border-b border-black' : ''}"
    href="characters">
    Characters
  </a>

</nav>
