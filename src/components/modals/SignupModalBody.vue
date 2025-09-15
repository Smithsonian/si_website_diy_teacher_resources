<template>
  <div>
    <BForm @submit="submitSignup" method="post">
      <BRow>
        <BCol cols="12" lg="6">
          <div class="mb-3">
            <label for="signup-email" class="form-label">Email</label>
            <BFormInput
              id="signup-email"
              v-model="email"
              type="email"
              autocomplete="username email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signup-password" class="form-label">Password</label>
            <BFormInput
              id="signup-password"
              v-model="password"
              type="password"
              autocomplete="new-password"
              required
              passwordrules="minlength: 7; maxlength: 16; required: lower; required: upper; required: digit;"
            />
          </div>
          <div class="mb-3">
            <label for="signup-password-confirmation" class="form-label">Confirm password</label>
            <BFormInput
              id="signup-password-confirmation"
              v-model="passwordConfirmation"
              type="password"
              autocomplete="new-password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signup-username" class="form-label">Username</label>
            <BFormInput id="signup-username" v-model="username" type="text" required />
          </div>
          <div class="mb-3">
            <label for="signup-zipcode" class="form-label">Zip code</label>
            <BFormInput
              id="signup-zipcode"
              v-model="userZipCode"
              type="text"
              autocomplete="postal-code"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signup-firstname" class="form-label">First name</label>
            <BFormInput
              id="signup-firstname"
              v-model="firstName"
              type="text"
              autocomplete="given-name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signup-lastname" class="form-label">Last name</label>
            <BFormInput
              id="signup-lastname"
              v-model="lastName"
              type="text"
              autocomplete="family-name"
              required
            />
          </div>
        </BCol>
        <BCol>
          <div class="mb-3">
            <label for="signup-courseName" class="form-label">Course name</label>
            <BFormInput id="signup-courseName" v-model="courseName" type="text" required />
          </div>
          <div class="mb-3">
            <label for="signup-institutionname" class="form-label">Institution name</label>
            <BFormInput
              id="signup-institutionname"
              v-model="institutionName"
              type="text"
              autocomplete="organization"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signup-institutioncountry" class="form-label">Institution country</label>
            <BFormInput
              id="signup-institutioncountry"
              v-model="institutionCountry"
              type="text"
              autocomplete="country-name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signup-institutionstate" class="form-label">Institution state</label>
            <BFormInput
              id="signup-institutionstate"
              v-model="institutionState"
              type="text"
              autocomplete="address-level1"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signup-institutioncity" class="form-label">Institution city</label>
            <BFormInput
              id="signup-institutioncity"
              v-model="institutionCity"
              type="text"
              autocomplete="address-level2"
              required
            />
          </div>
          <div class="mb-3">
            <label for="signup-institutionzip" class="form-label">Institution zip code</label>
            <BFormInput
              id="signup-institutionzip"
              v-model="institutionZipCode"
              type="text"
              autocomplete="postal-code"
              required
            />
          </div>
        </BCol>
      </BRow>
      <div class="mb-3">
        <BFormCheckbox id="signup-accept-tos" v-model="agreedToTerms" required>
          I accept and agree to abide by the
          <a href="https://www.si.edu/termsofuse" target="_blank" rel="noopener"
            >Smithsonian Terms of Use</a
          >.
        </BFormCheckbox>
      </div>
      <div class="mb-3">
        <BFormCheckbox id="signup-get-updates" v-model="signedUpForUpdates">
          Sign up for news and updates (optional).
        </BFormCheckbox>
      </div>
      <div v-if="errorArray" class="form-error">
        <p v-for="[field, message] in errorArray" v-bind:key="field">{{ field }}: {{ message }}</p>
      </div>
      <BButton type="submit" variant="primary" :loading="loading" loading-fill>Sign up</BButton>
    </BForm>
  </div>
  <div>
    Already have an account?
    <LinkButton :button-click="switchToLoginModal">Log in</LinkButton>
  </div>
</template>

<script setup lang="ts">
import { useModalsStore } from '@/store/modals';
import { useSignupStore } from '@/store/signup';
import { fetchAndParse } from '@/utils/fetchUtils';
import { computed, ref } from 'vue';
import z from 'zod';

const modals = useModalsStore();

const switchToLoginModal = () => {
  modals.showSignup = false;
  modals.showLogin = true;
};

const switchToSuccessModal = () => {
  modals.showSignup = false;
  modals.showSignupSuccess = true;
};

const username = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const userZipCode = ref('');
const agreedToTerms = ref(false);
const signedUpForUpdates = ref(false);

const firstName = ref('');
const lastName = ref('');
const courseName = ref('');
const institutionName = ref('');
const institutionCountry = ref('');
const institutionState = ref('');
const institutionCity = ref('');
const institutionZipCode = ref('');

const error = ref('');
const loading = ref(false);
const signupStore = useSignupStore();
const SignupResult = z.object({});
const submitSignup = async (event: Event) => {
  event.preventDefault();
  try {
    loading.value = true;
    signupStore.setSignupEmail(email.value);
    await fetchAndParse('/signup', 'POST', SignupResult, {
      user: {
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
        zipCode: userZipCode.value,
        initialDataLab: 'Speclab',
        agreedToTerms: agreedToTerms.value,
        signedUpForUpdates: signedUpForUpdates.value,
      },
      educator: {
        firstName: firstName.value,
        lastName: lastName.value,
        curriculum: courseName.value,
        institution: {
          name: institutionName.value,
          country: institutionCountry.value,
          state: institutionState.value,
          city: institutionCity.value,
          zipCode: institutionZipCode.value,
        },
      },
    });
    error.value = '';
    switchToSuccessModal();
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    } else {
      error.value = `${e}`;
    }
    console.error(e);
  } finally {
    loading.value = false;
  }
};

const errorArray = computed((): [string, string][] => {
  if (!error.value) {
    return [];
  }
  const errorLines = error.value.split('\n');
  return errorLines.map((line, i) => {
    let [field, message] = line.split(':');
    if (!message) {
      field = `${i}`;
      message = line;
    }
    return [field, message];
  });
});
</script>
