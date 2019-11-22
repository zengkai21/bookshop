<template>
  <div>
    <van-nav-bar title="我的地址" left-arrow @click-left="onBack" />
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: "",
      list:this.$store.getters.updateaddress,
      username:this.$store.state.userName,
    };
  },
  created(){
    this.getlist(this.username)
  },
  methods: {
    onAdd() {
       this.$router.push({ 
        path: "/userAddress/addressedit",
        query: {
                    state: "add"
                }
      });
    },

    onEdit(item, index) {
      this.$router.push({ 
        path: "/userAddress/addressedit",
        query: {
                    state: "edit",
                    item: item
                }
      });
    },
    getlist(username){
      this.axios.get("/user/addresslist?username=" + username).then(res=>{
        this.$store.commit('getaddress',res.data)
      })
    }
  }
};
</script>
<style>
</style>