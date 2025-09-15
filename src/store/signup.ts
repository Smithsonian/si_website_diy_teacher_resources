import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSignupStore = defineStore('signup', () => {
  const signupEmail = ref('');

  const setSignupEmail = (newSignupEmail: string) => {
    signupEmail.value = newSignupEmail;
  };

  return { signupEmail, setSignupEmail };
});
