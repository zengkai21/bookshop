<template>
  <div class="good-list">
    <div class="good-item" v-for="goods in list" :key="goods.id" @click="toRouter(goods.id)">
      <img :src="goods.url" alt class="good-img" />
      <div class="flex-space">
        <div class="product_item_text">
          <div class="product_title">{{goods.name}}</div>
          <div class="product_price">
            <div>
              <span class="price_pre">¥{{goods.price}}</span>
            </div>
          </div>
        </div>
        <div class="goods-cartBox" @click.stop="addCard(goods)">
          <van-icon size="20px" name="cart-o" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      id: this.gid
    };
  },
  created() {
    this.getGoodslist(this.id);
  },
  methods: {
    getGoodslist(id) {
      this.axios.get("/goodslist/" + id).then(res => {
        this.list = res.data;
      });
    },

    toRouter(pid) {
      this.$router.push("/productInfo/" + pid);
    },
    addCard(good) {
      this.$store.commit("getgood", good);
      var book = this.$store.getters.updategood;
      this.axios.post('/user/addcard',book).then(res=>{
        console.log(res.data[0].cardList);
      })
    }
  },

  props: ["gid"]
};
</script>
<style>
.good-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.product_header {
  font-size: 14px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.good-item {
  width: 50%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background: white;
  padding: 10px;
  margin-bottom: 5px;
}
.good-img {
  width: 100%;
  height: 180px;
}
.flex-space {
  display: flex;
  justify-content: space-between;
}

.product_item_text {
  color: #666;
  padding: 1px 8px;
  font-size: 13px;
}
.van-icon-cart-o {
  margin-right: 10px;
}
</style>