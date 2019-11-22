<template>
  <div id="app">
    <div class="app-container">
       <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
      <!-- 底部 Tabbar 区域 -->
      <van-tabbar v-model="active" style="z-index: 10;" route>
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="cluster-o" to="/classify">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/shopcar">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        return {
            active: 0
        };
    },
};
</script>

<style>
.app-container {
  padding-bottom: 50px;
  overflow-x: hidden
}
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity 0.1s;
}
.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}
</style>
