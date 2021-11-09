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
  <div
    class="content-wrapper"
    style="
      width: 56.25%;
      margin: auto;
      border-right: 1px solid #eceef4;
      border-left: 1px solid #eceef4;
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-6" style="padding: 162px 80px 0 16px">
          <SignUpLeftSideTexts />
        </div>
        <div class="col-sm-6 px-0 pb-0" style="padding-top: 56px">
          <SignUpForm />
        </div>
      </div>
    </div>
  </div>
</template>
