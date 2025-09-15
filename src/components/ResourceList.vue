<template>
  <ul class="list-unstyled">
    <ResourceSubList header="Educator Guide">
      <ResourceItem :href="educatorGuide">PDF</ResourceItem>
    </ResourceSubList>
    <ResourceSubList v-if="hasNotebook" header="Student Notebook Worksheets">
      <ResourceItem :href="notebook">Google doc</ResourceItem>
      <ResourceItem :href="notebookPdf">PDF</ResourceItem>
    </ResourceSubList>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  hasNotebook?: boolean;
  educatorGuide?: string;
  notebook?: string;
  notebookPdf?: string;
}>();
</script>
