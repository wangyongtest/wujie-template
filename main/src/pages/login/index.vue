<template>
  <section class="loginPage">
    <login-form />
  </section>
</template>

<script lang="ts" setup>
import LoginForm from '~/components/Login/loginForm.vue'
</script>

<style lang="less">
.loginPage {
  width: 100%;
  height: 100%;
  background-image: url('/images/login/loginPageBg.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  object-fit: fill;
}
</style>
