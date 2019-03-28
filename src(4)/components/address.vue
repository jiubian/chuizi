<template>
    <div>
        <div class="fu">
            <div class="geren">
              <img src="./../assets/avatar.png" alt="">
              <p><router-link to="/my">我的订单</router-link></p>
              <p><router-link to="/address">收货地址</router-link></p>
            </div>
            <div class="dingdan">
              <ul>
                <li>收获信息</li>
                <li><button @click="fnShow()">+  添加新地址</button></li>
              </ul>
            </div>

            <div class="address">
              <ol>
                <li>熊大</li>
                <li><span>北京市</span><span>市辖区</span><span>昌平区</span><span>马池口镇吉利大学</span></li>
                <li>12374598741</li>
                <li>默认地址</li>
                <li style="cursor: pointer;" @click="bianji()">编辑</li>
                <li style="cursor: pointer;color:#EF9C9C;font-size:30px">×</li>
              </ol>
            </div>
            <div class="address">
              <ol>
                <li>关头强</li>
                <li><span>北京市</span><span>市辖区</span><span>昌平区</span><span>马池口镇吉利大学</span></li>
                <li>12374598741</li>
                <li>默认地址</li>
                <li style="cursor: pointer;" @click="bianji()">编辑</li>
                <li style="cursor: pointer;color:#EF9C9C;font-size:30px">×</li>
              </ol>
            </div>

        </div>
         <div class="mark" :style="show?json:''">
              <div class="xinxi">
                  <p class="p1">管理收货地址<span @click="fnShow()" style="margin-left:290px;font-size:20px;cursor:pointer">×</span></p>
                  <p><input type="text" placeholder="收货人姓名" id="input1"></p>
                  <p><input type="text" placeholder="手机号" id="phone"></p>
                  <p>
                    <input style="width:110px;height:35px;margin-left:-9px" type="text" placeholder="区号(可选)">
                    <input style="width:210px;height:35px;margin-left:30px" type="text" placeholder="固定电话(可选)"></p>
                  <p>
                    <select name="" id="" v-model="shengfen" @change="sheng">
                      <option value="请选择省份" >请选择省份</option>
                      <option :value="item.area_name" v-for="(item,index) in list" :key="index">{{item.area_name}}</option>
                    </select>
                    <select name="" id=""  v-model="chengshi" @change="xuanshi">
                      <option value="请选择城市">选择城市</option>
                      <option :value="item.area_name" v-for="(item,index) in cityList" :key="index">{{item.area_name}}</option>
                    </select>
                    <select name="" id=""  v-model="quxian">
                      <option value="请选择区县">请选择区县</option>
                      <option :value="item.area_name" v-for="(item,index) in countryList" :key="index">{{item.area_name}}</option>
                    </select>
                  </p>
                  <p><input type="text" placeholder="详细地址,如街道名称,楼层,门牌号码等"></p>
                  <p style="font-size:14px;color:gray;margin-left:-300px"><input type="checkbox" name="" id="">设为默认</p>
                  <p><button id="btn" class="btn" @click="bao">保存</button></p>
            </div>
         </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      show:false,
      bsys:false,
      json:{'display':'block'},
      jsons:{'display':'block'},
      Data:[],
      City:[],
      Qu:[],
      i:0,
			shengfen: '',
      chengshi: '',
      quxian: '',
      list: '',
      cityList:[],
      countryList: '',
    }
  },
  methods: {
    fnShow(){
      this.show=!this.show
    },
    bianji(){
      this.bsys=!this.bsys
    },
		sheng(){
      if(this.shengfen===null){
        this.chengshi=null;
        this.quxian=null;
      }
      this.list.map(item=>{
        if(item.area_name===this.shengfen){
          this.cityList=item.city_list 
          // console.log(this.cityList)
        }
      })
    },
    xuanshi(){
      this.cityList.map(item=>{
        if(item.area_name===this.chengshi){
          this.countryList=item.county_list
        }
      })
    },
		bao(){
// 			console.log(this.list)
// 			console.log(this.cityList)
		}
  },
created(){
    Axios.get('https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/address').then((res)=>{
      let {data}=res
      this.list=data   
    })
  },
}
</script>
<style scoped lang="scss">
.fu:after{content:'';display:block;clear:both;}
.geren{
  width:220px;
  height: 270px;
  background: #fff;
  border-radius: 10px;
  margin-left: 155px;
  text-align: center;
  img{
    padding: 10px 5px;
  }
  p{
    width: 220px;
    height: 40px;
    line-height: 40px;
    color: #666666;
  }
  p:hover{
    background:#98AFEE;
    color: #fff;
  }
}


.address{
   width: 60%;
   height:120px;
   background: #fff;
   margin-left: 400px;
   border-bottom: 1px solid gray;
   &>ol{
     display: flex;
     height: 120px;
     line-height: 140px;
     color: #545454;
     justify-content: space-around;
   }
}





.dingdan{
  width: 60%;
  height: 70px;
  margin-left: 400px;
  margin-top: -270px;
  background: #fff;
  border-radius: 10px;
  border-bottom: 1px solid gray;
  ul{
    display: flex;
    li:first-child{
      margin-left: 20px;
      font-size: 17px;
      line-height: 70px;
      font-weight: 600;
      color: #545454;
    }
    li:nth-of-type(2){
      width: 110px;
      height: 35px;
      border-radius: 5px;
      margin-left: 700px;
      text-align: center;
      line-height: 30px;
      margin-top: 20px;
      button{
        width: 110px;
        height: 35px;
        border: none;
        background:  #A2A2A2;
        border-radius: 5px;
        outline: none;
        color: #fff;
      }
      button:hover{
        background:#98AFEE;
      }
    }
  }
}


.mark{
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  .xinxi{
    width: 450px;
    height: 550px;
    background: #fff;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 130px;
    text-align: center;
    p{
      margin: 17px 0;
    }
    .p1{
      width: 440px;
      height: 50px;
      border-radius: 20px;
      font-size: 17px;
      color: gray;
      line-height: 50px;
      padding-left: 10px;
      background: #F2F2F2;
    }
    input[type=text]{
      width:370px;
      height:35px;
      outline: none;
      text-indent: 10px;
      border-radius: 10px;
      border: none;
      border: 1px solid gray;
    }
    select{
      width: 370px;
      height: 35px;
      border-radius: 10px;
      margin: 10px 0;
      outline: none;
    }
    .btn{
      width: 370px;
      height: 35px;
      outline: none;
      border: none;
      background: #98AFEE;
      color: #fff;
    }
  }
}




.marks{
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  .xinxi{
    width: 450px;
    height: 550px;
    background: #fff;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 130px;
    text-align: center;
    p{
      margin: 17px 0;
    }
    .p1{
      width: 440px;
      height: 50px;
      border-radius: 20px;
      font-size: 17px;
      color: gray;
      line-height: 50px;
      padding-left: 10px;
      background: #F2F2F2;
    }
    input[type=text]{
      width:370px;
      height:35px;
      outline: none;
      text-indent: 10px;
      border-radius: 10px;
      border: none;
      border: 1px solid gray;
    }
    select{
      width: 370px;
      height: 35px;
      border-radius: 10px;
      margin: 10px 0;
      outline: none;
    }
    .btn{
      width: 370px;
      height: 35px;
      outline: none;
      border: none;
      background: #98AFEE;
      color: #fff;
    }
  }
}




</style>