<template>
  <div>
    <van-nav-bar title="首页" fixed />
    <div>
      <!-- 轮播图区域 -->
      <van-swipe :autoplay="3000" class="swipe">
        <van-swipe-item v-for="image in images" :key="image.id">
          <img class="swipe_img" :src="image.url" />
        </van-swipe-item>
      </van-swipe>
      <div class="product_header">热门推荐</div>
      <good-box :gid=6></good-box>
    </div>
  </div>
</template>
</>
<script>
import good from "../product/product"
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg"
      ]
    };
  },
  created(){
    this.getLunbo();
  },
  methods:{
    getLunbo(){
      this.axios.get("/lunbo").then(res=>{
        this.images= res.data
      })
    }
  },
  components: { "good-box": good },
};
</script>

<style>
div {
  box-sizing: border-box;
}
.swiper {
  height: 160px;
}
.swipe_img {
  width: 100%;
  height: 160px;
  margin-top: 46px;
}
</style>
