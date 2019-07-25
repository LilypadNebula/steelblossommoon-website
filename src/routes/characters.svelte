<script>
  import { fade } from "svelte/transition";
  const characters = [
    {
      name: "Toritaka Aoshi",
      pronouns: "she/her",
      clan: "Falcon Clan",
      bio: "Aoshi is one of the group's creepies"
    },
    {
      name: "Doji Sayaka",
      pronouns: "she/her",
      clan: "Crane Clan",
      bio: "Sayaka is a trained courtier, and the Topaz Champion"
    },
    {
      name: "Kaito Rei",
      pronouns: "she/her",
      clan: "Phoenix Clan",
      bio: "Rei is a skilled archer and another of the group's creepies"
    },
    {
      name: "Moto Muunokohi",
      pronouns: "he/him",
      clan: "Unicorn Clan",
      bio: "Muunokohi is straight-forward and good with a scimitar"
    },
    {
      name: "Soshi Kuroyuki",
      pronouns: "she/her",
      clan: "Scorpion Clan",
      bio:
        "Kuroyuki is another creepy in the group, and also apparently a ninja or something"
    }
  ];
</script>

<svelte:head>
  <title>Characters - Steel Blossom Moon</title>
  <meta name="twitter:title" content="Characters" />
  <meta
    name="twitter:description"
    content="Learn about the main player characters we follow through Rokugan in
    Steel Blossom Moon" />
</svelte:head>

<div class="flex flex-wrap items-center justify-around" in:fade>
  {#each characters as person, i}
    <div
      class="flex w-full md:w-1/3 {i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
      items-center justify-around m-8">
      <div class="text-center">
        <p class="text-3xl glossText">{person.name}</p>
        <p class="text-2xl goblinText">of the {person.clan}</p>
        <p class="text-2xl">{person.pronouns}</p>
        <p class="text-2xl">{person.bio}</p>
      </div>
    </div>
  {/each}
</div>
