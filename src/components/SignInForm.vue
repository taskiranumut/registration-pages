<script>
export default {
  name: "SignInForm",
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
    <section class="border p-5 shadow">
      <form @submit="submitForm">
        <header>
          <h3>Sign in to your account</h3>
        </header>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col">
              <label for="password" class="form-label">Password</label>
            </div>
            <div class="col">
              <label for="password" class="form-label"
                >Forgot your password?</label
              >
            </div>
          </div>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="signin-checkbox"
          />
          <label class="form-check-label" for="signin-checkbox"
            >Stay signed in</label
          >
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Continue</button>
        </div>
      </form>
    </section>

    <section>
      <p>
        Don't have an account?
        <span @click="getSignUpPage" class="text-primary">Sign up</span>
      </p>
    </section>

    <footer>
      <p>Privacy & terms</p>
    </footer>
  </div>
</template>
