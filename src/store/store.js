import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        userName: "",
        userPasswd: "",
        user:{},//用户
        userList:[],//用户列表
        addressList:[{
            "aid" : 1,
            "name" : "张三",
            "tel" : "13000000333",
            "address" : "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 506 室"
        }, 
        {
            "aid" : 2,
            "name" : "王五",
            "tel" : "13000000009",
            "address" : "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        }],//地址列表
        cartLsit:[],
        good:'',//要添加进购物车里面的商品
        obj:{}
    },
    mutations:{
        onLogin(state) {
            state.user={
              userName:state.userName,
              userPasswd:state.userPasswd
            }
         },
         getUser(state,userlist){
                state.userList=userlist
        },
        getaddress(state,glist){
            state.addressList=glist
        },
        getgood(state,good){
            good.num=1
            state.good=good
        }
        //  getCardlist(state,list){
        //     for (var i = 0; i < list.length; i++) {
        //         if(!state.obj[list[i].goodid]){
        //             state.cartLsit.push(list[i])
        //         }
        //     }
        //  }
    },
    getters:{
        getuserList(state){
            return state.userList
        },
        updateaddress(state){
            return state.addressList
        },
        updategood(state){
            return state.good
        },
        // upcardList(state){
        //     return state.cartLsit
        // }
    }
})
