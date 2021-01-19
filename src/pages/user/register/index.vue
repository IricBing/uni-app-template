<template>
  <view class="div">
    主应用注册页面
    <button @click="mainLogin">去主应用登录页面</button>
    <button @click="sub1Login">去子应用1登录页面</button>
    <button @click="sub2Login">去子应用2登录页面</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: '主应用注册页面'
    };
  },
  methods: {
    mainLogin() {
      this.$Router.push({ path: '/pages/user/login/index' });
    },
    sub1Login() {
      this.$Router.push({ path: '/subpackages/app1/pages/user/login/index' });
      //or this.$Router.push({ name: 'subapp1/login' });
    },
    sub2Login() {
      this.$Router.push({ path: '/subpackages/app2/pages/user/login/index' });
    }
  }
};
</script>

<style lang="scss" scoped>
.div {
  padding: 10rpx;
}
</style>
