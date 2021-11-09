<script>
import PrivacyFooter from "@/components/PrivacyFooter";

export default {
  name: "SignInForm",
  components: {
    PrivacyFooter,
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log("Form submited.");
    },
    getSignUpPage() {
      this.$router.push({
        name: "SignUpPage",
      });
    },
  },
};
</script>

<template>
  <div>
    <section class="signin-form-section shadow">
      <form @submit="submitForm">
        <header class="mb-24">
          <h3 class="m-0">Sign in to your account</h3>
        </header>
        <div class="mb-30">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-26">
          <div class="row">
            <div class="col-3">
              <label for="password" class="form-label">Password</label>
            </div>
            <div class="col-9 d-flex justify-content-end">
              <label class="form-label forgot-pass"
                >Forgot your password?</label
              >
            </div>
          </div>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="form-check mb-32">
          <input
            type="checkbox"
            class="form-check-input"
            id="signin-checkbox"
            checked
          />
          <label class="form-check-label" for="signin-checkbox"
            >Stay signed in</label
          >
        </div>
        <div class="d-grid">
          <button type="submit" class="btn form-btn">Continue</button>
        </div>
      </form>
    </section>

    <section class="signin-route-sec">
      <p>
        Don't have an account?
        <span @click="getSignUpPage">Sign up</span>
      </p>
    </section>
    <PrivacyFooter />
  </div>
</template>

<style scoped>
.form-label {
  padding-left: 2px;
  margin-bottom: 10px;
}

.forgot-pass {
  color: #635bff;
  cursor: pointer;
}
</style>
