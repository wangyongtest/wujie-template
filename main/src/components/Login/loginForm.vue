<template>
  <section class="loginForm clearAble">
    <p class="loginTitle">登陆</p>
    <el-form class="submitForm">
      <el-form-item>
        <el-input
          v-model="from.userName"
          size="large"
          clearable
          :prefix-icon="Avatar"
          placeholder="请输入用户名户名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="from.password"
          clearable
          type="password"
          size="large"
          show-password
          :prefix-icon="Unlock"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submitBtn" type="primary" size="large" @click="submit">登陆</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script lang="ts" setup>
import { Avatar, Unlock } from '@element-plus/icons-vue'
const router = useRouter()

const from = ref({
  password: 'admin',
  userName: 'admin'
})

const submit = () => {
  router.push('/home')
}
</script>

<style lang="less">
.loginForm {
  width: 320px;
  height: 400px;
  background: #ffffff;
  float: right;
  margin-right: 5%;
  margin-top: 20%;
  border-radius: 8px;
  padding: 2% 0;

  .loginTitle {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    padding: 5px;
    letter-spacing: 12px;
  }

  .submitForm {
    padding: 20px 10px;
  }

  .submitBtn {
    width: 100%;
  }
}
</style>
