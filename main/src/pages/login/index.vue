<!--
 * @Author: wy wang.yong@easttrans.cn
 * @Date: 2022-12-01 10:07:21
 * @LastEditors: wy wang.yong@easttrans.cn
 * @LastEditTime: 2023-03-17 15:13:41
 * @FilePath: \wujie-template\main\src\pages\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="loginPage">
    <login-form />
  </section>
</template>

<script lang="ts" setup>
import LoginForm from '~/components/Login/loginForm.vue'
</script>

<style lang="scss">
.loginPage {
  width: 100%;
  height: 100%;
  background-image: url('/images/login/loginPageBg.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  object-fit: fill;
}
</style>
