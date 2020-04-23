<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  <div>
    <input type="text" placeholder="请输入" v-model="inputValue">
    <span class="ml20">{{divValue}}</span>
  </div>
<hr>
    <Button  type="primary" @click="sendValue">发送</Button >
    <Button  type="primary" class="ml25" @click="getValue">获取</Button >
    <van-popup v-model="show">{{popupValue}}</van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup, Button} from 'vant';
import 'vant/lib/button/style';
Vue.use(Button);
Vue.use(Popup);

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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
