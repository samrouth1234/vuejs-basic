<script setup>
import Hero from "@/components/Hero.vue";
import MainCard from "@/components/MainCard.vue";
import MainJob from "@/components/MainJob.vue";
</script>

<template>
  <Hero
    title="The Progressive JavaScript Framework"
    subtitle="An approachable, performant and versatile framework for building web user interfaces."
  />
  <MainCard />
  <MainJob :limit="4"/>
</template>
