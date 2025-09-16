<template>
  <div>
    <BForm @submit="submitLogin" class="mb-2">
      <BFormGroup id="login-group-email" label="Email" label-for="login-email" class="mb-3">
        <BFormInput
          id="login-email"
          v-model="email"
          type="email"
          placeholder="Enter email"
          autocomplete="username email"
          required
        />
      </BFormGroup>
      <BFormGroup
        id="login-group-password"
        label="Password"
        label-for="login-password"
        class="mb-3"
      >
        <BFormInput
          id="login-password"
          v-model="password"
          type="password"
          placeholder="Enter password"
          autocomplete="current-password"
          required
        />
      </BFormGroup>
      <div v-if="error" class="form-error">{{ error }}</div>
      <BButton type="submit" variant="primary" :loading="loading" loading-fill>Log in</BButton>
    </BForm>
    <div>
      <p>
        Don't have an account?
        <LinkButton :button-click="switchToSignupModal">Sign up</LinkButton>
      </p>
      <p class="mb-0">
        Forgot your password?
        <BLink href="https://datalabs.cfa.harvard.edu/diy/recover.php">Reset it</BLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { useModalsStore } from '@/store/modals';
import { useToast } from 'bootstrap-vue-next';
import { ref } from 'vue';

const auth = useAuthStore();
const modals = useModalsStore();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const switchToSignupModal = () => {
  modals.showLogin = false;
  modals.showSignup = true;
};
const { create } = useToast();
const submitLogin = async (event: Event) => {
  event.preventDefault();
  try {
    loading.value = true;
    await auth.submitLogin(email.value, password.value);
    error.value = '';
    modals.showLogin = false;

    create({
      variant: 'success',
      body: 'Log in successful.',
      progressProps: {
        variant: 'success',
      },
      closeClass: 'btn-close-white',
    });
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    } else {
      error.value = `${e}`;
    }
  } finally {
    loading.value = false;
  }
};
</script>
