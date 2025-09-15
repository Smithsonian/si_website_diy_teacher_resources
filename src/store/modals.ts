import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalsStore = defineStore('modals', () => {
  const showLogin = ref(false);
  const showSignup = ref(false);
  const showSignupSuccess = ref(false);
  const showConfirmEmail = ref(false);
  const showPleaseRegister = ref(false);
  const showRequestEducator = ref(false);
  const showRequestEducatorSuccess = ref(false);

  return {
    showLogin,
    showSignup,
    showSignupSuccess,
    showConfirmEmail,
    showPleaseRegister,
    showRequestEducator,
    showRequestEducatorSuccess,
  };
});
