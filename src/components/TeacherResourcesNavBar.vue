<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark" container="xl">
    <BNavbarBrand :href="DATA_LABS_BASE">
      <img src="/src/assets/DataLabsLogo@2x-89.png" height="44" width="196" />
    </BNavbarBrand>
    <BNavbarNav>
      <BNavText>
        <span class="vr bg-light text-light ms-5 me-3 h-100 align-top"></span>
        <img
          class="d-inline-block align-top"
          src="/src/assets/SVG/diy_resources_logo.svg?url"
          height="36"
          width="415"
        />
      </BNavText>
    </BNavbarNav>
    <BNavbarNav class="ms-auto">
      <BNavItem :href="DIY_URL" variant="light" opacity-hover="75" class="text-uppercase">
        DIY Planet Search
      </BNavItem>
      <BNavText class="text-gen-grey">|</BNavText>
      <BButton
        v-if="!auth.username"
        @click="modals.showLogin = true"
        variant="link"
        opacity-hover="75"
        class="nav-link link-light text-uppercase"
      >
        Login
      </BButton>
      <BButton
        v-else
        @click="submitLogout"
        variant="link"
        opacity-hover="75"
        class="nav-link link-light text-uppercase"
        :loading="logoutLoading"
        loading-fill
      >
        Logout
      </BButton>
    </BNavbarNav>
  </BNavbar>
</template>

<script setup lang="ts">
import { DIY_URL } from '@/constants';
import { DATA_LABS_BASE } from '@/constants';

import { useAuthStore } from '@/store/auth';
import { useModalsStore } from '@/store/modals';
import { useToast } from 'bootstrap-vue-next';
import { ref } from 'vue';
const logoutLoading = ref(false);
const auth = useAuthStore();
const modals = useModalsStore();
const { create } = useToast();
const submitLogout = async () => {
  logoutLoading.value = true;
  try {
    await auth.submitLogout();
    create({
      variant: 'success',
      body: 'Log out successful.',
      progressProps: {
        variant: 'success',
      },
      closeClass: 'btn-close-white',
    });
  } catch (error) {
    console.error(error);
  } finally {
    logoutLoading.value = false;
  }
};
</script>
