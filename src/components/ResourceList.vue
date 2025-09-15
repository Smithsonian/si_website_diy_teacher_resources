<template>
  <ul class="list-unstyled">
    <ResourceSubList header="Educator Guide">
      <ResourceItem>Coming soon</ResourceItem>
    </ResourceSubList>
    <ResourceSubList v-if="hasNotebook" header="Student Notebook Worksheets">
      <ResourceItem :href="notebook">Google doc</ResourceItem>
      <ResourceItem :href="notebookPdf">PDF</ResourceItem>
      <ResourceItem :href="notebookWord">Word doc</ResourceItem>
    </ResourceSubList>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  hasNotebook?: boolean;
  teacherGuide?: string;
  notebook?: string;
  notebookPdf?: string;
  notebookWord?: string;
}>();
</script>
