import { fetchAndParse } from '@/utils/fetchUtils';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import z from 'zod';

export const LoginResult = z.object({
  username: z.nullable(z.string()),
  isGroupMember: z.boolean(),
  isEducator: z.boolean(),
});

const DontCare = z.object({});

export const useAuthStore = defineStore('auth', () => {
  const username = ref<string | null>(null);
  const isGroupMember = ref<boolean>(false);
  const isEducator = ref<boolean>(false);

  const fetchLoggedIn = async () => {
    const result = await fetchAndParse('/logged-in', 'GET', LoginResult);
    storeResponse(result);
  };

  const storeResponse = (result: z.infer<typeof LoginResult>) => {
    username.value = result.username;
    isGroupMember.value = !!result.isGroupMember;
    isEducator.value = !!result.isEducator;
  };

  const submitLogin = async (email: string, password: string) => {
    const result = await fetchAndParse('/login', 'POST', LoginResult, { email, password });
    storeResponse(result);
  };

  const submitLogout = async () => {
    await fetchAndParse('/logout', 'POST', DontCare);
    await fetchLoggedIn();
  };

  return {
    username,
    isGroupMember,
    isEducator,
    fetchLoggedIn,
    submitLogin,
    submitLogout,
    storeResponse,
  };
});
