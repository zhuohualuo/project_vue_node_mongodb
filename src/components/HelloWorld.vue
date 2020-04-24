<template>
  <div class="hello">
    <h1 class="h1">{{ msg }} 
      <div>less嵌套</div>
    </h1>
  <div>
    <input type="text" placeholder="请输入" v-model="inputValue">
    <span class="ml20">{{divValue}}</span>
  </div>
<hr>
    <van-button  type="primary" @click="sendValue">发送</van-button >
    <van-button  type="primary" class="ml25" @click="getValue">获取</van-button >
    <van-button  type="primary" class="ml25" @click="getMon">获取mongodb</van-button >
    <van-popup v-model="show">{{popupValue}}</van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup, Button} from 'vant';
Vue.use(Button);
Vue.use(Popup);
import 'vant/lib/button/style';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data:()=> {
    return {
      inputValue: '',
      divValue:'',
      show:false,
      popupValue:''
    }
  },
  methods:{
    sendValue() {
      console.log('sendValue');

      
      let params={
        name:this.inputValue
      }
      this.$axios.post('/a',params).then(res=>{
        console.log(123,res);
        if(res.data.code === 0) {
          this.show = true;
          this.popupValue = res.data.msg
        }
        
      })
      
    },
    getValue() {
      console.log('getValue');
      
      this.$axios.get('/b').then(res=>{
        console.log('res',res);
        if(res.data.code===0) {
          this.divValue = res.data.data
        }
        
      })
      
    },
    getMon() {
      this.$axios.get('/getMon').then(res=> {
        if(res.data.code===0) {
          console.log('res.data.msg',res.data.msg);
          
        }
      })
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.ml20{
  margin-left: 20px;
  background: pink;
  height: 30px;
  border: 1px solid red;
  box-shadow: 5px 5px 10px gray;
  padding: 5px;
  box-sizing: border-box;

}
.ml25 {
  margin-left: 25px;
}
.h1{
  div{
    font-size: 12px;
  }
}
</style>
