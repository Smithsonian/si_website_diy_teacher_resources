<template>
  <li>
    <BLink v-if="href" :href="href">
      <slot></slot>
    </BLink>
    <template v-else>
      <slot></slot>
    </template>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  href?: string;
}>();
</script>
