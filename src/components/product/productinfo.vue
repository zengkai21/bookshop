<template>
  <div>
    <van-nav-bar title="商品详情" left-arrow @click-left="onBack" />
    <div class="good-info">
      <div class="dg-i">
<img class="g-i" :src="goodinfo.url" alt="">
      </div>
      
      <p class="good-name">{{goodinfo.name}}</p>
      <p class="good-price">￥{{goodinfo.price}}</p>
      <hr />
      <div class="info">
        <p>---详情---</p>
        <p>{{goodinfo.info}}</p>
        <img :src="goodinfo.infourl" alt="">
      </div>
    </div>
    <van-goods-action>
            <van-goods-action-button type="danger" text="加入购物车" @click="addCard(goodinfo)"/>
        </van-goods-action>
  </div>
</template>
<script>  
export default {
  data() {
    return {
      oid:this.$route.params.id,
      goodinfo:{}
    };
  },
  created() {
    this.getGoodInfo(this.oid)
  },
  
  methods: {
    getGoodInfo(id) {
      this.axios.get("/goodslist/goodsinfo/?id=" + id).then(res => {
        this.goodinfo=res.data[0];
      });
    },
    addCard(good){
       this.$store.commit("getgood", good);
      var book = this.$store.getters.updategood;
      this.axios.post('/user/addcard',book).then(res=>{
        console.log(res.data[0].cardList);
      })
    }
  },
};
</script>
<style>
.good-info {
  box-sizing: border-box;
  margin-bottom: 10px;
}
.dg-i{
  text-align: center
}
.g-i{
  width:300px;
  height:300px;
  
}
.good-name {
  font-size: 20px;
  font-weight: bold;
  margin: 5px 5px 5px;
}
.good-price {
  font-size: 24px;
  color: red;
  margin-top: 0px;
  margin-left: 5px;
  margin-bottom: 0px;
}
.info{
  padding:5px;
}
.info p:nth-child(1){
  text-align: center;
  font-size: 18px;
  font-weight: bold;
 margin-top: 5px;
}
.info p:nth-child(2){
  
  font-size: 15px;
   text-indent:2em;
   letter-spacing:1px;
}
img{
  width:100%;
}
.van-goods-action {
 bottom: 50px;
  padding: 5px
}
</style>