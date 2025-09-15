<template>
  <div v-if="!auth.username">
    <p>
      Please register for Data Labs as an educator. Once you register for an educator account,
      you’ll gain access to all the educational resources for DIY Planet Search as well as other
      Data Labs.
      <LinkButton :button-click="switchToSignupModal">Sign up here.</LinkButton>
    </p>
    <p>
      If you already have an educator account, please
      <LinkButton :button-click="switchToLoginModal">log in</LinkButton>.
    </p>
    <p>
      If you have a Group Leader account on DIY Planet Search, you have been automatically set up as
      a Data Labs educator. Please log in with your DIY email and password.
    </p>
    <p>We’re looking forward to supporting you and your students on your educational journey!</p>
  </div>
  <div v-else-if="auth.isGroupMember">
    <p>
      These resources are intended only for educators. DIY group member accounts are not eligible
      for educator status.
    </p>
    <p>
      If you are in fact the group leader, log out, then log back in with your group leader account.
      DIY group leaders automatically have educator status.
    </p>
  </div>
  <div v-else-if="!auth.isEducator">
    We need some additional information to set up your DIY Planet Search account as a Data Labs
    Educator account. Once you provide your educator information, you’ll gain access to all the
    educational resources for Spectrum Lab as well as other Data Labs.
    <LinkButton :button-click="switchToRequestEducator">Request educator account here.</LinkButton>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { useModalsStore } from '@/store/modals';

const modals = useModalsStore();
const auth = useAuthStore();

const switchToSignupModal = () => {
  modals.showPleaseRegister = false;
  modals.showSignup = true;
};
const switchToLoginModal = () => {
  modals.showPleaseRegister = false;
  modals.showLogin = true;
};
const switchToRequestEducator = () => {
  modals.showPleaseRegister = false;
  modals.showRequestEducator = true;
};
</script>
