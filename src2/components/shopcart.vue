<template>
    <div class="xiang">
      <!--导航-->
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
        购物清单
      </div>
      <div class="mess">
        <div>商品信息</div>
        <div class="xiao">
          <div>单价</div>
          <div>数量</div>
          <div>小计</div>
          <div>操作</div>
        </div>
      </div>
      <!--内容-->
      <div class="cont">
      	<div style="width: 100%;">
      		<div class="cont-first" v-for="item,index in dislist" :key="index">
          <div class="cont-f">
            <div class="check">
              <input type="checkbox" class="check-input"/>
            </div>
            <div class="img">
              <img :src="item.ali_image"/>
            </div>
            <div class="topic">
              <div>{{item.title}}</div>
              <div style="color: gainsboro;margin-top: 0.3rem;font-size: 14px;">{{item.spec_json.show_name}}</div>
            </div>
          </div>
          <div class="cont-section">
            <div class="pic">￥{{item.price}}</div>
            <div class="xiaoji">
              <button @click="jian">-</button>
              <div class="shu">{{num}}</div>
              <button @click="jia">+</button>
            </div>
            <div class="jiaqian">￥{{item.price*num}}</div>
            <div class="shanchu"@click='del(index)'>X</div>
          </div>
        </div>

      	</div>
        

      </div>
      <div class="choose mess">
        <div class="choose-first">
          <input type="checkbox" class="check-input"/>
          <div>全选</div>
          <div>删除选中的商品</div>
        </div>
        <div class="choose-section">
          <div>已选择 <span  style="font-weight: bolder;">0</span> 件商品</div>
          <div>共计{{dislist.length}}件商品</div>
        </div>
        <div class="choose-tirth">
          <div>应付总额：<span style="font-weight: bolder;">￥{{dislist[ind].price*num}}</span></div>
          <div>应付总额不包含运费</div>
        </div>
        <div class="choose-fitth" @click="dizhi">
          结算
        </div>
      </div>
      
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
        name: "shopcart",
        data(){
          return{
            dislist:this.$store.state.shopping,
            check:false,
            num:1,
            ind:0
          }
        },
      methods:{
      dizhi(){
        this.$router.push('/dizhi')
      },
      jia:function(){
            if(this.num>=5){
              alert("我也是有极限的")
            }else{
              this.num++
            }
          },
          jian:function(){
            if(this.num<=1){
              alert("不能再少了，再少就没有了")
            }else{
              this.num--
            }
          },
          del(index){
          	this.$store.dispatch("del",index)
          }
      },
      computed:{
      	
      }

    }
</script>

<style scoped>
  .xiang{
    width: 100%;
    height: 70rem;
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
    height: 5rem;
    text-align:left;
    padding-left: 3rem;
    font-size: 1.5rem;
    line-height: 5rem;
    background: #F4F4F4;
    border-radius:10px 10px 0px  0px;
    margin: 0 auto;
    border:1px solid lightgray;
  }
  .mess{
    width: 80%;
    height: 1.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
    text-align:left;
    background:  #F4F4F4;
    border: 1px solid lightgray;
  }
  .xiao{
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
  .cont{
    width: 80%;
    height: auto;
    background: white;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
  }
  .cont-first{
    width:100%;
    height: 10rem;
    border: 1px solid gray;
    display: flex;

  }
  .cont-f{
    width: 50%;
    height: 100%;
    display: flex;
  }
  .check{
    width: 10rem;
    height: 50%;
    text-align: center;
    line-height:3rem;
    margin-top: 4rem;
  }
  .img{
    width: 5rem;
    height: 5rem;
    border: 1px solid gainsboro;
    border-radius: 5px;
    margin: 3rem auto;

  }
  .img img{
    width: 4rem;
    height: 4rem;
    margin-top: 0.5rem;
  }
  .topic{
    text-align: left;
    position: absolute;
    top: 26rem;
    left: 43.5rem;
  }
  .cont-section{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    text-align: center;
  }
  .xiaoji{
    display: flex;
    margin-top: 5rem;
  }
  .xiaoji button{
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid gray;
    border-radius: 50% ;
    background:none;
    text-align: center;
    line-heihgt:1.5rem;
  }
  .shu{
    width: 3rem;

  }
  .jiaqian{
    margin-top: 5rem;
    margin-left: -4rem;
  }
  .shanchu{
    margin-top: 5rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid gray;
    border-radius:50%;
    line-height: 1.5rem;
  }
  .pic{
    margin-top: 5rem;
    margin-left:0rem ;
  }
  .choose{
    height: 5rem;
    font-size:0.4rem;
  }
  .choose-first{
    width: 50%;
    display:flex;
    flex-direction: row;
    justify-content:left;
  }
  .choose-first input{
    margin-top: 2rem;
  }
  .choose-first div:nth-of-type(1){
    margin-top: 1.8rem;
    margin-left: 0.3rem;
  }
  .choose-first div:nth-of-type(2){
    color: gray;
    margin-top: 1.8rem;
    margin-left:1rem;
  }
  .choose-section{
    height: 3rem;
    padding: 1rem;
    border-right: 1px solid gray;
  }
  .choose-section div:nth-of-type(1){
    font-size: 1rem;
  }
  .choose-section div:nth-of-type(2){
    color: gray;
  }
  .choose-tirth{
    padding: 1rem;
  }
  .choose-tirth div:nth-of-type(1){
    font-size: 1rem;
  }
  .choose-section div:nth-of-type(2){
    color: gray;
  }
  .choose-fitth{
    width: 13rem;
    height: 3rem;
    margin-top: 1rem;
    color: white;
    border: none;
    border-radius:10px;
    background: lightgray;
    text-align: center;
    line-height: 3rem;
    margin-right: 2rem;
    font-size: 1rem;
  }
</style>
