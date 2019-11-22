<template>
  <div class="container">
    <van-nav-bar title="购物车" fixed>
      <van-icon name="edit" slot="right" @click="show"/>
    </van-nav-bar>

    <!-- 商品区域 -->
    <div class="cart-item" v-for='value in clist' :key="value.goodid">
      <div class="cart-mes flex">
        <!-- <van-checkbox size="20px" v-model="goodsRadio"></van-checkbox> -->
        <img class="goods-img" :src="value.goodimg" />
        <div class="goods-textBox" @click.stop="onDetail(cartItem._id)">
          <p class="product_title">{{value.goodname}}</p>
          <div class="goodsOp flex">
            <!-- <van-icon size="20px" name="diamond-o" @click.stop="onCutCart(cartItem)" /> -->
            <p>x <span>{{value.goodnum}}</span></p>
            <!-- <van-icon size="20px" name="add-o" @click.stop="onAddCart(cartItem)" /> -->
          </div>
          <p class="product_price">
            <span class="price_pre">¥</span>{{value.goodprice}}
          </p>
        </div>
      </div>
      <van-icon  class="remove" name="delete" @click.stop="onRemove(cartItem, cartIndex)" v-show="delshow" />

    </div>

    <van-submit-bar :price="3050" button-text="提交订单">
      <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
    </van-submit-bar>
  </div>
</template>
</>
<script>
export default {
  data() {
    return {
      goodsRadio: false,
      num: 1,
      delshow:false,
      clist:[]
    };
  },
  created(){
    this.getCardlist();
  },
  methods:{
    show(){//删除是否显示
      this.delshow=!this.delshow
    },
    getCardlist(){
      this.axios.get('/user/getcardlist').then(res=>{
       var list = res.data
    var obj = {};
    for(var i =0; i<list.length; i++) {
        if (!obj[list[i].goodid]) {
            this.clist.push(list[i]);
            obj[list[i].goodid] = true;
        }else{

        }
    }
    
   
      })
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 100px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  height: 120px;
  padding: 0 10px;
  background: white;
}
.flex {
  display: flex;
  align-items: center;
}
.cart-mes {
  overflow: hidden;
}
.goods-img {
  margin-right: 10px;
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
.goodsOp {
  margin: 8px 0;
  height: 19px;
}

.price_pre{
     margin-right: 4px;
}
.product_price {
    color: red;
  /* margin-top: 2px; */
  font-size: 14px;
}
.van-submit-bar {
  bottom: 50px;
  padding: 5px
}
</style>
