<template>
  <BButton @click="buttonClick" variant="link" class="border-0 p-0 align-baseline">
    <slot></slot>
  </BButton>
</template>

<script setup lang="ts">
defineProps<{ buttonClick: () => void }>();
</script>
