<script>
export default {
  name: "SignInForm",
  methods: {
    createAccount(e) {
      e.preventDefault();
      console.log("Account created.");
    },
    getSignInPage() {
      this.$router.push({
        name: "SignInPage",
      });
    },
  },
};
</script>

<template>
  <div>
    <section class="signup-form-section shadow">
      <form @submit="createAccount">
        <header class="mb-26">
          <h3 class="title-color">Create an account</h3>
        </header>
        <div class="mb-32">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-34">
          <label for="fullName" class="form-label">Full name</label>
          <input type="text" class="form-control" id="fullName" />
        </div>
        <div class="mb-42">
          <label for="country" class="form-label"
            >Country
            <span><i class="fas fa-info-circle info-icon"></i></span>
          </label>
          <select
            class="form-select form-control"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="mb-56">
          <label for="password1" class="form-label">Password</label>
          <input type="password" class="form-control" id="password1" />
        </div>
        <div class="mb-58">
          <label for="password2" class="form-label">Password (again)</label>
          <input type="password" class="form-control" id="password2" />
        </div>
        <div class="form-check mb-36">
          <input
            type="checkbox"
            class="form-check-input"
            id="signup-checkbox"
          />
          <label class="form-check-label" for="signup-checkbox"
            >Get emails from us.</label
          >
        </div>
        <div class="d-grid">
          <button type="submit" class="btn form-btn">Create account</button>
        </div>
      </form>
      <section class="signup-route-sec">
        <p>
          Have an account?
          <span @click="getSignInPage">Sign in</span>
        </p>
      </section>
    </section>
  </div>
</template>

<style scoped>
.form-label {
  padding-left: 2px;
  margin-bottom: 6px;
}

.form-check-label {
  color: #7d8696;
}

.info-icon {
  font-size: 12px;
  color: #4f566b;
}
</style>
