<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="text"
        v-model="user.firstName"
        id="firstName"
        name="firstName"
        class="form-control"
        :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
      />
      <div
        v-if="submitted && !$v.user.firstName.required"
        class="invalid-feedback"
      >
        First Name is required
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Register</button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      user: {
        firstName: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      firstName: { required },
    },
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
