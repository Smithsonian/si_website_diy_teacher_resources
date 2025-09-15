<template>
  <li>
    <template v-if="!href">
      <slot></slot>
    </template>
    <BLink v-else-if="alwaysAllowed || auth.isEducator" :href="href">
      <slot></slot>
    </BLink>
    <LinkButton v-else :button-click="showPleaseRegister">
      <slot></slot>
    </LinkButton>
  </li>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { useModalsStore } from '@/store/modals';

defineProps<{
  href?: string;
  alwaysAllowed?: boolean;
}>();

const auth = useAuthStore();
const modals = useModalsStore();

const showPleaseRegister = () => {
  modals.showPleaseRegister = true;
};
</script>
