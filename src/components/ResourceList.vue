<template>
  <ul class="list-unstyled">
    <ResourceSubList header="Teacher Guide">
      <ResourceItem :href="teacherGuide">PDF</ResourceItem>
    </ResourceSubList>
    <ResourceSubList header="Classroom Slides">
      <ResourceItem :href="slides">Google slides</ResourceItem>
      <ResourceItem :href="slidesPdf">PDF</ResourceItem>
      <ResourceItem :href="slidesPpt">PowerPoint</ResourceItem>
    </ResourceSubList>
    <ResourceSubList header="Student Notebook Worksheets">
      <ResourceItem :href="notebook">Google doc</ResourceItem>
      <ResourceItem :href="notebookPdf">PDF</ResourceItem>
      <ResourceItem :href="notebookWord">Word doc</ResourceItem>
    </ResourceSubList>
    <ResourceSubList header="Student Notebook Answer Keys">
      <ResourceItem :href="answers">PDF</ResourceItem>
    </ResourceSubList>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  teacherGuide?: string;
  slides?: string;
  slidesPdf?: string;
  slidesPpt?: string;
  notebook?: string;
  notebookPdf?: string;
  notebookWord?: string;
  answers?: string;
  datasheet?: string;
  isFinalProject?: boolean;
}>();
</script>
