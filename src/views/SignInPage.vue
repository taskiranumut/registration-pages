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
  <div
    class="content-wrapper"
    style="
      width: 56.25%;
      margin: auto;
      border-right: 1px solid #eceef4;
      border-left: 1px solid #eceef4;
      padding-top: 96px;
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-sm px-5">
          <SignInForm />
        </div>
      </div>
    </div>
  </div>
</template>
