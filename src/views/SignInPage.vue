<script>
import SignInForm from "@/components/SignInForm.vue";

export default {
  name: "SignInPage",
  components: {
    SignInForm,
  },
};
</script>

<template>
  <div class="container container-wrapper">
    <div class="row">
      <div class="col">
        <SignInForm />
      </div>
    </div>
  </div>
</template>
