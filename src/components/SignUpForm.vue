<script>
import CountrySelect from "@/components/CountrySelect";

export default {
  name: "SignInForm",
  components: {
    CountrySelect,
  },
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
        <!-- Title -->
        <header class="mb-26">
          <h3 class="m-0 form-title">Create an account</h3>
        </header>
        <!-- Email -->
        <div class="mb-32">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <!-- Fullname -->
        <div class="mb-34">
          <label for="fullName" class="form-label">Full name</label>
          <input type="text" class="form-control" id="fullName" />
        </div>
        <!-- Country -->
        <div class="mb-42">
          <label for="country" class="form-label"
            >Country
            <span><i class="fas fa-info-circle info-icon"></i></span>
          </label>
          <CountrySelect />
        </div>
        <!-- Password -->
        <div class="mb-56">
          <label for="password1" class="form-label">Password</label>
          <input type="password" class="form-control" id="password1" />
        </div>
        <!-- Password (again) -->
        <div class="mb-58">
          <label for="password2" class="form-label">Password (again)</label>
          <input type="password" class="form-control" id="password2" />
        </div>
        <!-- Get emails from us -->
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
        <!-- Create account -->
        <div class="d-grid">
          <button type="submit" class="btn form-btn">Create account</button>
        </div>
      </form>
      <!-- go Sign in -->
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
  font-size: 13px;
  font-weight: 600;
  color: #7d8696;
}

.info-icon {
  font-size: 12px;
  color: #4f566b;
}
</style>
