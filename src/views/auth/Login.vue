<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
        </div>
        <div class="card-body">
            <p class="login-box-msg">Login in to start your session</p>

            <form @submit.prevent="adminLogin">
                <div class="input-group mb-3">
                <input
                    type="email"
                    class="form-control"
                    v-model="form.email"
                    placeholder="Email"
                />
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                    </div>
                </div>
                </div>
                <div class="input-group mb-3">
                <input
                    type="password"
                    class="form-control"
                    v-model="form.password"
                    placeholder="Password"
                />
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember"> Remember Me </label>
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">
                    Sign In
                    </button>
                </div>
                <!-- /.col -->
                </div>
            </form>

            <p class="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p class="mb-0">
                <router-Link :to="{ name: 'Register' }" class="text-center"
                >Register a new membership</router-Link
                >
            </p>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "Login",

  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    adminLogin() {
        this.$store.dispatch("LOGIN", this.form)

        // axios.post('http://localhost:89/php_project/laravel/laravel_eight_project/student-management-api/public/api/v1/login', this.form)
        .then((res) => {
          console.log(res.data);
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err.response.data.errors);
        });
    },
  },
};
</script>

<style></style>
