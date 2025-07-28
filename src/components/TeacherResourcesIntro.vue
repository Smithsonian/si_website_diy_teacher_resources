<template>
  <div
    class="teacher-resources-intro-header-image text-light d-flex flex-column justify-content-end"
  >
    <BContainer>
      <BRow>
        <BCol cols="12" xl="10" xxl="8">
          <p class="mb-5"></p>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<style>
.teacher-resources-intro-header-image {
  background-image:
    linear-gradient(0deg, rgb(66 42 22 / 100%) 0%, rgb(66 42 22 / 0%) 100%),
    url(/src/assets/hand_drawing@2x.webp);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: top 100% left 50%;
  min-height: 402px;
}
</style>
