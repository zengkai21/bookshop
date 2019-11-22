<template>
  <div class="page">
    <van-nav-bar title="我的" />
    <div class="container1">
      <div class="floor_one">
        <img :src="this.userimg" alt class="user-img" />
        <p class="user-name">{{this.username}}</p>
      </div>
      <van-cell title="个人信息" is-link to="/user/info" />
      <van-cell title="我的订单" is-link to="/user/order" />
      <van-cell title="我的地址" is-link to="/user/address" />
    </div>
  </div>
</template>
</>
<script>
export default {
  data(){
    return {
      username:this.$store.getters.getuserList.username,
      userimg:this.$store.getters.getuserList.userimg
    }
  },
};
</script>

<style>
.page {
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  height: 100%;
}
.container1 {
  flex: 1;
  font-size: 14px;
}
.floor_one {
  width: 100%;
  height: 200px;
  background: #6495ed;
  text-align: center;
}
.user-img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-top: 30px;
}
.user-name {
  color: white;
  margin-top: 20px;
  font-size: 18px;
}
</style>
