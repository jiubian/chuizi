<template>
    <div class="xiang">
      <div class="cont">
        <!--标题-->
        <div class="title">
        <div> 管理收货地址</div>
        <div @click="shan">X</div>
        </div>
        <!--内容-->
        <div class="content">
          <div class="tao">
            <input type="text" v-model="name" placeholder="收货人姓名"/><br>
          </div>
          <div class="tao">
            <input type="text" v-model="telphone" placeholder="手机号"  @mouseleave="myFunction"/>
          </div>

          <div class="quhao">
            <div class="taozi">
              <input type="text" v-model="qu" placeholder="区号（可选）"/>
            </div>
            <div class="taozi">
              <input type="text" v-model="gu" placeholder="固定电话（可选）"/>
            </div>

          </div>
          <!--城市三级联动-->
          <div class="cssj">
            <select name="" v-model="sel1">
              <option value="请选择省份">请选择省份</option>
              <option v-for="(item,index) in list" :key="index" :value="item.area_name">{{item.area_name}}</option>
            </select>
            <select name="" v-model="sel2">
              <option value="请选择城市">请选择城市</option>
              <option v-for="(item,index) in li" :key="index" :value="item.area_name">{{item.area_name}}</option>
            </select>
            <select name="" v-model="sel3">
              <option value="请选择区县">请选择区县</option>
              <option v-for="(item,index) in oo" :key="index" :value="item.area_name">{{item.area_name}}</option>
            </select>
            <div class="xi">
              <input type="text" placeholder="详细地址，如街道名称，楼层、门牌号码等" v-model="xiangxi"></input>
            </div>
          </div>
          <div class="she">
            <input type="radio" />设为默认
          </div>
          <div class="btn" @click="bao">
            保存
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import Axios from 'axios'
    export default {
        name: "list",
      data(){
          return{
            sel1:"请确定省份",
            sel2:"北京",
            sel3:"朝阳区",
            name:'',
            telphone:'',
            qu:'',
            gu:'',
            xiangxi:'',
            list:[],
            li:[],
            oo:[],


          }
      },
    created(){
          Axios.get('https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/address').then((res)=>{
            console.log(res)
            this.list=res.data

          })
    },
      methods:{
        updateCity:function(){
          for(var i in this.list){
            var obj=this.list[i]
            console.log(obj.area_name)
            if(obj.area_name===this.sel1){
                 this.li=obj.city_list;
                 break;
            }
          }
         console.log(this.li)
        },
        updateDistrict:function(){
          for(var i in this.li){
            var obj=this.li[i]
            if(obj.area_name ==this.sel2){
              this.oo=obj.county_list;
              break;
            }
          }

        },
        bao(){
          var wode=[
            name:this.name,

               this.name,this.telphone,this.qu,this.gu,this.sel1,this.sel2,this.sel3,this.xiangxi
        ]

          console.log(wode)
          if(this.name==''){
            alert("收件人姓名不能为空")
          }
          if(this.telphone==""){
            alert("手机号不能为空")
          }
          if(this.xiangxi==""){
            alert("详细信息不能为空")
          }
         
        },
        shan(){
          this.seen=false
        },
        myFunction(){
          var reg=/^1\d{10}$/
          if(!reg.test(this.telphone.value)){
            alert("手机号码必须是11位并且开头必须是1")
          }
        }

      }
      ,beforeMount: function () {
        this.updateCity();
        this.updateDistrict();
      },
      watch: {
        sel1: function () {
          this.updateCity();
          this.updateDistrict();
        },
        sel2: function () {
          this.updateDistrict();
        },
        name:function(){
          var reg= /^\b[A-Za-z]{10,15}$/
          if(!reg.test(this.name.value)){
            alert("用户名只能是10-15位大小写字母")
          }
        },
  }

    }
</script>

<style scoped>
.xiang{
  width: 100%;
  height: 100rem;
  background: rgba(30,30,30,0.5);
  z-index: 0;
  position: fixed;
  top: 0rem;
  left: 0;
}
  .cont{
    width: 30rem;
    height: 40rem;
    border: 1px solid gray;
    border-radius:10px;
    background: white;
    z-index: 1;
    position: fixed;
    top: 10rem;
    left: 20rem;
  }
  .title{
    width: 93.4%;
    height: 2rem;
    background: gainsboro;
    border-radius:10px 10px 0px 0px;
    line-height: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .title div:nth-of-type(1){
    font-size: 1.2rem;
  }
  .title div:nth-of-type(2){
    font-size: 1.5rem;
    color: white;
  }
  .content{
    width: 100%;
    margin-top: 1rem;
  }
  .content input{
    border: none;
    background: none;
    margin-left: 1rem;
  }
  .tao{
    margin-top: 1rem;
    width: 80%;
    height: 3rem;
    border: 1px solid gray;
    border-radius:5px;
    background: none;
    line-height: 3rem;
    margin: 1rem auto;
    text-align: left;
  }
  .tao input:active{
    border: none;
  }
  .quhao{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 1rem auto;
  }
  .taozi{
    width: 30%;
    height: 3rem;
    border: 1px solid gray;
    border-radius:5px ;
    text-align: center;
    line-height: 3rem;

  }
  .quhao .taozi:nth-of-type(1){
    margin-left: 1rem;
  }
  .quhao .taozi:nth-of-type(2){
    width: 40%;
  }
  .cssj{
    width: 80%;
    margin:2rem auto ;
  }
  select:nth-of-type(1){
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    border: 1px solid gray;
    background: ghostwhite;
    border-radius: 5px;
  }
  select:nth-of-type(2),select:nth-of-type(3){
    width: 49%;
    height: 3rem;
    height: 3rem;
    border: 1px solid gray;
    background: ghostwhite;
    border-radius:5px;
    margin-top: 1rem;
  }
  .xi{
    width: 100%;
    height: 3rem;
    line-height:3rem;
    border: 1px solid gainsboro;
    border-radius:5px;
    margin-top: 1rem;
  }
  .xi input{
    width: 100%;
    border: none;
    background: none;
  }
  .she{
    width: 80%;
    margin:1rem;
    text-align: left;
  }
  .she input{
    margin-left:2rem ;
  }
  .btn{
    width: 80%;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    margin: 1rem auto;
    background: deepskyblue;
    border-radius:5px;
    color: white;
  }
</style>
