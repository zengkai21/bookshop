<template>
  <div class="box">
    <van-nav-bar title="登录" left-arrow @click-left="onBack" />

    <div class="login">
      <van-cell-group>
        <van-field
          v-model="$store.state.userName"
          required
          clearable
          left-icon="contact"
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="$store.state.userPasswd"
          left-icon="closed-eye"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <van-button class="login_btn" size="small" round type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // userName: "",
      // userPasswd: "",
      // user:{}
    };
  },

  methods: {
    onLogin() {
      //    this.user={
      //      userName:this.userName,
      //      userPasswd:this.userPasswd
      //    }
      //    this.$cookies.set('user',this.user)
      // //  this.$router.go(-1)
      this.$store.commit("onLogin");
      let user = this.$store.state.user;
      this.axios.post("/user/login", { user }).then(res => {
        if(res.data){
           this.$store.commit("getUser",res.data);
          this.$router.push('/user')
        }else{
          console.log("密码错误")
        }
      });

      

      
    }
  }
};
</script>
<style>
.box {
  background-color: white;
}
.login {
  text-align: center;
  margin-top: 200px;
  margin-left: 10px;
  margin-right: 10px;
}
.login_btn {
  margin: 20px;
  width: 100px;
}
</style>