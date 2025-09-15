<template>
  <div>
    <div v-if="loading">
      <p>Confirming your email...</p>
      <BSpinner variant="primary" />
    </div>
    <div v-else>
      <div v-if="error" class="form-error">
        {{ error }}
      </div>
      <div v-else>
        <p>Your email address "{{ email }}" has been confirmed.</p>
        <p>You can now log in with your email and password.</p>
        <p v-if="educatorRequestStatus === 'DENIED'" class="form-error fs-6">
          However, your request to be a Data Labs Educator has been denied. If you think this
          decision was made in error, please contact diyadmin@cfa.harvard.edu.
        </p>
        <p v-else-if="educatorRequestStatus === 'APPROVED'">
          You are now approved as a Data Labs Educator and can access all the Data Labs educational
          materials.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchAndParse } from '@/utils/fetchUtils';
import { ref, watchEffect } from 'vue';
import z from 'zod';

const ConfirmResult = z.object({
  email: z.string(),
  educatorRequestStatus: z.string(),
});

const props = defineProps<{ confirmationCode: string | null }>();
const email = ref('');
const educatorRequestStatus = ref('');
const loading = ref(true);
const error = ref('');
watchEffect(async () => {
  if (!props.confirmationCode) {
    return;
  }
  try {
    const result = await fetchAndParse('/confirm-email', 'POST', ConfirmResult, {
      confirmationCode: props.confirmationCode,
    });
    email.value = result.email;
    educatorRequestStatus.value = result.educatorRequestStatus;
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    } else {
      error.value = `${e}`;
    }
  } finally {
    loading.value = false;
  }
});
</script>
