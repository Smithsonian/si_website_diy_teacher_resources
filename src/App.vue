<script setup lang="ts">
import { useHead } from '@unhead/vue';
import AllModals from './components/modals/AllModals.vue';
import { configure } from 'vue-gtag';

useHead({ title: 'Educator Resources | DIY' });

configure({ tagId: 'G-CQCJ1860S7' });
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
