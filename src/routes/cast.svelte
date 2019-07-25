<script>
  import Fa from "svelte-fa";
  import {
    faTwitter,
    faTwitch,
    faEtsy,
    faDAndD
  } from "@fortawesome/free-brands-svg-icons";
  import { fade } from "svelte/transition";
  const cast = [
    {
      name: "Throck",
      pronouns: "he/him",
      twitter: "throckplays",
      twitch: "welcomepartyrpg",
      bio: "Throck is extremely cool"
    },
    {
      name: "Quinn",
      pronouns: "he/him",
      twitter: "soulbearrpg",
      twitch: "soulbearrpg",
      bio: "Quinn is very cool"
    },
    {
      name: "Micchi",
      pronouns: "he/him",
      twitter: "micchisaurus",
      etsy: "MonstersNMayhemSoaps",
      bio: "Micchi is superbly cool"
    },
    {
      name: "Rain",
      pronouns: "any pronouns",
      bio: "Rain is super cool",
      twitter: "xrainxghostx",
      dnd: "Rain%20Hayes"
    },
    {
      name: "Kayla",
      pronouns: "she/her",
      twitter: "Ms_Misery_",
      twitch: "ms_misery",
      bio: "Kayla is extra cool"
    },
    {
      name: "Lily",
      pronouns: "she/her",
      twitter: "lilypadnebula",
      twitch: "lilypadnebula",
      bio: "Lily is sorta cool"
    }
  ];
</script>

<svelte:head>
  <title>Cast - Steel Blossom Moon</title>
  <meta name="twitter:title" content="Cast" />
  <meta
    name="twitter:description"
    content="Details about the cast members of Steel Blossom Moon" />
</svelte:head>

<div class="flex flex-wrap items-center justify-around" in:fade>
  {#each cast as person, i}
    <div
      class="flex w-full md:w-1/3 {i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
      items-center justify-around m-8">
      <img
        src="https://via.placeholder.com/150?text=Pic+of+{person.name}"
        alt="Picture of {person.name}" />
      <div class="text-center">
        <p class="text-3xl goblinText">{person.name}</p>
        <p class="text-2xl">{person.pronouns}</p>
        <p class="text-2xl">{person.bio}</p>
        <p class="flex justify-center">
          {#if person.twitter}
            <a href="https://twitter.com/{person.twitter}" class="m-1">
              <Fa icon={faTwitter} size="lg" />
            </a>
          {/if}
          {#if person.twitch}
            <a href="https://twitch.tv/{person.twitch}" class="m-1">
              <Fa icon={faTwitch} size="lg" />
            </a>
          {/if}
          {#if person.etsy}
            <a href="https://etsy.com/{person.etsy}" class="m-1">
              <Fa icon={faEtsy} size="lg" />
            </a>
          {/if}
          {#if person.dnd}
            <a
              href="https://www.dmsguild.com/browse.php?author={person.dnd}"
              class="m-1">
              <Fa icon={faDAndD} size="lg" />
            </a>
          {/if}
        </p>
      </div>
    </div>
  {/each}
</div>
