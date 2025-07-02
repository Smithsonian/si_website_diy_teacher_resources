<template>
  <BNavbar v-b-color-mode="'dark'" variant="dark" container="xl">
    <BNavbarBrand href="https://smithsonian.github.io/si_website_datalabs/">
      <img src="/src/assets/DataLabsLogo@2x-89.png" height="44" width="196" />
    </BNavbarBrand>
    <BNavbarNav>
      <BNavText>
        <span class="vr bg-light text-light ms-5 me-3 h-100 align-top"></span>
        <img
          class="d-inline-block align-top"
          src="/src/assets/SVG/resources_logo.svg?url"
          height="36"
          width="415"
        />
      </BNavText>
    </BNavbarNav>
    <BNavbarNav class="ms-auto">
      <BNavItem :href="SPECLAB_URL" variant="light" opacity-hover="75" class="text-uppercase">
        Spectrum Lab
      </BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>

<script setup lang="ts">
import { SPECLAB_URL } from '@/constants';
</script>
