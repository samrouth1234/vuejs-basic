<script setup>
import { defineProps } from "vue";

const cardProps = defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
  textColor: {
    type: String,
    default: "text-gray-900",
  },
});

const { bg, textColor } = cardProps;
</script>

<template>
  <section
    :class="`${bg} ${textColor} {} h-72 flex items-center justify-center `"
  >
    <slot />
  </section>
</template>
