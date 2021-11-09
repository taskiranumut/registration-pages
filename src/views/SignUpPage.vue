<script>
import SignUpForm from "@/components/SignUpForm.vue";
import SignUpLeftSideTexts from "@/components/SignUpLeftSideTexts.vue";

export default {
  name: "SignUpPage",
  components: {
    SignUpForm,
    SignUpLeftSideTexts,
  },
};
</script>

<template>
  <div class="container signup-container-wrapper">
    <div class="row">
      <div class="col-xl-6 order-2 order-xl-1 left-side-wrapper">
        <SignUpLeftSideTexts />
      </div>
      <div class="col-xl-6 order-1 order-xl-2 signup-wrapper">
        <SignUpForm />
      </div>
    </div>
  </div>
</template>
