<template>
  <li>
    <span v-if="header">{{ header }}</span>
    <ul class="resource-sub-list">
      <slot></slot>
    </ul>
  </li>
</template>

<script setup lang="ts">
defineProps<{ header?: string }>();
</script>

<style>
/* .resource-sub-list {
  padding-left: 32px;
} */
</style>
