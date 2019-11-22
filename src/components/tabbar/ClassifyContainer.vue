<template>
  <div>
    <!-- Header区域 -->
    <van-nav-bar title="分类" fixed />
    <!-- 导航栏区域 -->
    <van-tabs v-model="active" swipeable>
      <van-tab title="全部">
        <good-box :gid=1></good-box>
      </van-tab>
      <van-tab title="童书">
       <good-box :gid=2></good-box>
      </van-tab>
      <van-tab title="文学">
        <good-box :gid=3></good-box>
      </van-tab>
      <van-tab title="小说">
        <good-box :gid=4></good-box>
      </van-tab>
      <van-tab title="励志">
        <good-box :gid=5></good-box>
      </van-tab>
    </van-tabs>
  </div>
</template>
</>
<script>
import good from "../product/product";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: { "good-box": good }
};
</script>

<style>
div {
  box-sizing: border-box;
}
.van-tabs {
  margin-top: 46px;
}
</style>
