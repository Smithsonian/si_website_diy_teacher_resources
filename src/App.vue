<script setup lang="ts">
import { useHead } from '@unhead/vue';
import AllModals from './components/modals/AllModals.vue';

useHead({ title: 'Teacher Resources | DIY' });
</script>

<template>
  <BApp>
    <header>
      <TeacherResourcesNavBar />
    </header>

    <main>
      <TeacherResourcesIntro />
      <TeacherResourcesModuleList />
    </main>

    <footer>
      <TeacherResourcesFooter />
    </footer>

    <AllModals />
  </BApp>
</template>
