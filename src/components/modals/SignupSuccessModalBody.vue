<template>
  <div>
    <p>We sent a confirmation email to your email address "{{ signupEmail }}".</p>
    <p>Please click the link in the email to activate your account.</p>
    <p>
      Once you have confirmed your email, you'll have access to all the Data Labs educational
      materials.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useSignupStore } from '@/store/signup';

const { signupEmail } = useSignupStore();
</script>
