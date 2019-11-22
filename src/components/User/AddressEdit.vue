<template>
  <div>
    <van-nav-bar title="地址管理" left-arrow @click-left="onBack"></van-nav-bar>
    <van-address-edit :area-list="areaList" show-postal show-delete @save="onSave" @delete="onDelete"/>
  </div>
</template>
<script>
import areaList from "@/assets/js/areaList.js";
export default {
  data() {
    return {
      areaList: null,
      addinfo: null,
    };
  },
  created() {
    this.areaList = areaList;
  },
  methods: {
    onSave(content) {
      this.addinfo =
          content.country +
          content.province +
          content.city +
          content.county +
          content.addressDetail;
        
      if (this.$route.query.state == "edit") {
        var address = {
          name: content.name,
          tel: content.tel,
          address: this.addinfo,
          aid:this.$route.query.item.aid
        };
        this.axios.post('/user/addressedit',{"address":address,"username":this.$store.state.userName}).then(res=>{
          console.log(res.data);
        })
        
      }else{
        var address = {
          name: content.name,
          tel: content.tel,
          address: this.addinfo,
          aid:this.$store.state.addressList.length+1
        };
        this.axios.post('/user/addressSave',address).then(res=>{
          console.log(res.data);
        })
      }
    },
    onDelete(){
      this.axios.post('/user/addressdel',{"aid":this.$route.query.item.aid,"username":this.$store.state.userName}).then(res=>{
          console.log(res.data);
        })
    }
  }
};
</script>
<style>
.area {
  position: absolute;
  bottom: 50px;
  width: 100%;
}
</style>