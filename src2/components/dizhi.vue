<template>
    <div class="xiang">
      <ul class="nav">
        <li>首页</li>
        <div>.</div>
        <li>手机</li>
        <div>.</div>
        <li>“足迹系列”手感膜</li>
        <div>.</div>
        <li>官方配件</li>
        <div>.</div>
        <li>周边产品</li>
        <div>.</div>
        <li>第三方配件</li>
        <div>.</div>
        <li>全部商品</li>
        <div>.</div>
        <li>服务</li>
      </ul>
      <div class="title">

          <div class="cont">收货信息</div>
          <div class="cont-first">
            <div class="cont-first-fen active">
              <div>熊大</div>
              <div>13811111111</div>
              <div>北京市市辖区昌平区</div>
              <div>顺沙路马池口镇吉利大学</div>
            </div>
            <div class="cont-first-fen">
              <div>光头强</div>
              <div>13811111111</div>
              <div>北京市市辖区朝阳区</div>
              <div>建国路sohu现代城A座</div>
            </div>
            <div class="cont-first-fen" v-for="item,index in wode" :key="index" >
              <div>{{item.name}}</div>
              <div>{{item.tel}}</div>
              <div>{{item.sel1}}{{item.sel2}}{{item.sel3}}</div>
              <div>{{item.xiang}}</div>
            </div>
            <div class="cont-first-fen" style="text-align: center;line-height: 3rem;" @click="add">
              <div>+</div>
              <div>使用新地址</div>
            </div>
          </div>



        </div>
      <div class="fapiao">

        <div class="cont">发票信息</div>
        <div class="fapiao-first">
         <div class="type">发票类型：电子发票</div>
         <div class="top">
           发票抬头:
           <input type="radio" checked="checked">个人</input>
           <input type="radio">单位</input>
         </div>
          <div class="neirong">
            发票内容：购买商品明细
          </div>
          <hr/>
          <div>电子发票是税务局认可的有效收复首付款凭证，可作为售后服务凭据。电子发票打印后可用于企业报销。</div>
        </div>



      </div>
      <div class="list">
        <div class="cont">购物清单</div>
        <div class="list-first">
          <div class="list-first-f">
            商品名称
          </div>
          <div class="list-first-s">
            <div>单价</div>
            <div>数量</div>
            <div>小计</div>
          </div>
        </div>
        <div class="list-first lf" v-for="item,index in dislist" :key="index">
          <div class="list-first-f first">
            <div style="width: 3rem;height: 3rem;border: 1px solid gainsboro;margin-top: -0.5rem;">
              <img :src="item.ali_image"/>
            </div>

            <div style="margin-left: 1rem;">{{item.title}}</div>
          </div>
          <div class="list-first-s">
             <div class="price">￥{{item.price}}</div>
            <div class="num">1</div>
            <div class="xiao">￥{{item.price}}</div>
          </div>
        </div>
        <div class="chong">
          <div class="zong">
            <div>商品总计</div>
            <div>￥{{dislist[ind].price}}</div>
          </div>
          <div class="yun">
            <div>运费</div>
            <div>+￥0.00</div>
          </div>
        </div>
        <div class="ti">
          <div class="jiao">
            <div>应付金额：<span style="color: red;font-size: 2rem;">￥{{dislist[ind].price}}</span></div>
            <div @click="tijiao">提交订单</div>
          </div>
        </div>
      </div>
      <!--<list :isvisibleadd="listshow" v-on:shuzu="listen"></list>-->
      <div class="xiang1" v-show="listshow">
      <div class="cont1">
        <!--标题-->
        <div class="title1">
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
     </div>
</template>

<script>
  import Axios from 'axios'
    export default {
//  components:{
//    list:()=>import('../components/list.vue')
//  },
        name: "dizhi",
        data(){
          return{
            dislist:this.$store.state.shopping,
            listshow:false,
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
            wode:[],
            ind:0
          }
        },
      created(){
          
          Axios.get('https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/address').then((res)=>{
            console.log(res)
            this.list=res.data

          })
      },
      methods:{
          add(){
            this.listshow=true
          },
        listen(data){
            console.log(data)
          this.listshow=false

        },
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
          this.wode=[
          {"name":this.name,"tel":this.telphone,"sel1":this.sel1,"sel2":this.sel2,"sel3":this.sel3,"xiang":this.xiangxi}         
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
          this.listshow=false
        },
        shan(){
          this.listshow=false
        },
        myFunction(){
          var reg=/^1\d{10}$/
          if(!reg.test(this.telphone.value)){
            alert("手机号码必须是11位并且开头必须是1")
          }
        },
        tijiao(){
            this.$router.push('/tijiao')
        }

      },
      beforeMount: function () {
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
    height: 80rem;
    background: gainsboro;
  }
  .nav{
    width: 60%;
    height: 5rem;
    line-height: 5rem;
    list-style:none;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-left: 13rem;
  }
  .nav div{
    width: 1rem;
    height:5rem;
    line-height: 4.5rem;
  }
  .nav li{
    width: 50rem;
  }
  .title{
    width: 80%;
    heihgt:15rem;
    margin:2rem auto;
    text-align:center;
  }
  .cont {
    width: 100%;
    height: 2rem;
    font-size: 1.2rem;
    text-align: left;
    line-height: 2rem;
    border-radius: 10px 10px 0px 0px;
    background: whitesmoke;
    padding: 1rem;
  }
  .cont-first{
    width: 100%;
    height: 11rem;
    display: flex;
    border: 1px solid gainsboro;
    border-radius:0px 0px 10px 10px;
    background: white;
    padding: 1rem;
  }
  .cont-first-fen{
    width: 15rem;
    heihgt: 10rem;
    padding: 1rem;
    text-align:left;
    background: white;
    border: 1px solid gray;
    margin-left: 2rem;
  }
  .cont-first-fen div{
    margin-top: 0.3rem;
  }
  .fapiao{
    width: 80%;
    heihgt:15rem;
    margin:2rem auto;
  }
  .fapiao-first{
    width: 100%;
    height: 11rem;
    border: 1px solid gainsboro;
    border-radius:0px 0px 10px 10px;
    background: white;
    padding: 1rem;
    text-align: left;
  }
  .fapiao-first div{
    margin-top: 0.4rem;
    margin-left: 1rem;
  }
  hr{
    margin: 1rem;
  }
  .list{
    width: 80%;
    heihgt:15rem;
    margin:2rem auto;
  }
  .list-first{
    width: 100%;
    height: 2rem;
    font-size: 1.2rem;
    text-align: left;
    line-height: 2rem;
    padding: 1rem;
    display: flex;
    background: floralwhite;
    justify-content: space-between;
  }
  .lf{
    width: 100%;
    height: 8rem;
    font-size: 1.2rem;
    text-align: left;
    line-height: 2rem;
    padding: 1rem;
    display: flex;
    background:white;
    justify-content: space-between;
  }
  .list-first-s{
    width: 30%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;

  }
  .first{
    display: flex;
    margin-top: 4rem;
  }
  .first img{
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
  }
  .chong{
    width: 100%;
    height: 4rem;
    border: 1px solid gray;
    background: white;
    padding:1rem;
  }
  .chong .zong,.chong .yun{
    width: 40%;
    display: flex;
    /*text-align:right;*/
    margin-right: 1rem;
    margin-top: 0.5rem;
    margin-left:60rem;
    margin-right: 10rem;
  }
  .ti{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    padding: 1rem;
    background: white;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
  }
  .jiao{
    width: 100%;
    display: flex;
    margin-left: 40rem;
  }
  .jiao div:nth-of-type(1){
    height: 4rem;
    line-height: 4rem;
  }
  .jiao div:nth-of-type(2){
    width: 15rem;
    height: 3rem;
    line-height: 3rem;
    margin: 0.5rem 1rem;
    background: dodgerblue;
    color: white;
    text-align: center;
    border-radius:10px;
  }
  .xiang1{
  width: 100%;
  height: 100rem;
  background: rgba(30,30,30,0.5);
  z-index: 0;
  position: fixed;
  top: 0rem;
  left: 0;
}
  .cont1{
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
  .title1{
    width: 93.4%;
    height: 2rem;
    background: gainsboro;
    border-radius:10px 10px 0px 0px;
    line-height: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .title1 div:nth-of-type(1){
    font-size: 1.2rem;
  }
  .title1 div:nth-of-type(2){
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
