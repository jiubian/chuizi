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
      <div class="zhifu">
        <div class="zhifu-title">
          支付订单
        </div>
        <div class="zhifu-cont">
          <div style="font-size: 2rem;font-weight: bolder;">提交订单成功</div>
          <div>请在<span style="color: red">24小时内</span>完成支付，超市订单将自动取消。</div>
          <div>我们将在您完成支付后的72小时内发货</div>
        </div>
        <div class="chenggong">
          <div>
            应付金额：<span style="font-size: 1.5rem;color: red;">￥{{ji+yun}}</span>
            <button @click="zhifu">现在支付</button>
          </div>
        </div>
      </div>
      <!--支付的信息-->
      <!--订单编号-->
      <div class="bian">
        <h3>订单编号</h3>
        <P>155512345667678</P>
      </div>
      <div class="biann">
        <h3>收货信息</h3>
        <p>姓名：熊大</p>
        <p>联系电话：12345678901</p>
        <p>北京市市辖区昌平区顺沙路马池口镇北京吉利大学</p>
      </div>
      <div class="bian">
        <h3>发票信息</h3>
        <p>发票类型：电子发票</p>
        <p>发票抬头：个人</p>
        <p>发票内容：购买商品明细</p>
      </div>
      <!--表单-->
      <div class="tab">
        <!--标题-->
        <div class="tab-title">
          <div class="tabl">商品信息</div>
          <div>单价</div>
          <div>数量</div>
          <div>小计</div>
        </div>
        <div class="tab-title tab-cont" v-for="item,index in dislist">
          <div class="tabl">{{item.title}}</div>
          <div>￥{{item.price}}</div>
          <div>1</div>
          <div>￥{{item.price}}</div>
        </div>
        <div class="tab-title tab-end">
              <div>商品总计：{{ji}}</div>
              <div>运费{{yun}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            ji:49.00,
            yun:8.00,
            sum:0,
            dislist:this.$store.state.shopping
          }
        },
      methods:{
        zhifu:function(){
          alert("付款成功")
          this.$router.push('/my')
        }
    },
      computed:{

      }
    }
</script>

<style scoped>
  .bian{
    width: 70%;
    height: 5rem;
    margin: 1rem auto;
    border-top: 1px solid gray;
    margin-top: 3rem;
    text-align: left;
    ling-height:5rem;
    padding: 1rem;
  }
  .bian p{
    margin-top: 1rem;
  }
  .biann{
    width: 70%;
    height: 5rem;
    margin: 0 auto;
    border-top: 1px solid gray;
    text-align: left;
    ling-height:5rem;
    padding: 1rem;
  }
  .biann p{
    margin-top: 1rem;
  }
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
  .zhifu{
    width: 70%;
    height: auto;
    margin: 1rem auto;
  }
  .zhifu-title{
    width: 100%;
    height:4rem;
    text-align: left;
    padding-left: 1rem;
    font-size: 1.5rem;
    background: whitesmoke;
    line-height:4rem;
    border: 1px solid gray;
    border-radius:5px 5px 0px 0px;
  }
  .zhifu-cont{
    width: 100%;
    height: 13rem;
    background: white;
    text-align: center;
    line-height: 8rem;
    padding-left: 1rem;
  }
  .zhifu-cont div:nth-of-type(1){
    height: 4rem;
  }
  .zhifu-cont div:nth-of-type(2){
    height: 2rem;
  }
  .zhifu-cont div:nth-of-type(3){
    height: 3rem;
  }
  .chenggong{
    width: 100%;
    height:4rem;
    text-align: right;
    padding-left: 1rem;
    background: whitesmoke;
    line-height:4rem;
    border: 1px solid gray;
    border-radius:0px 0px 5px 5px ;
  }
  .chenggong button{
    width: 20rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background: dodgerblue;
    border-radius: 5px;
    margin-right: 2rem;
    margin-left: 1rem;
    border: none;
  }
  .tab{
    width: 70%;
    height:auto;
    margin: 5rem auto;
    text-align:left;
    padding: 1rem;
  ;
  }
  .tab-title{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
  }
  .tab-cont{
    height: 6rem;
    line-height: 6rem;
  }
  .tabl{
    width: 50%;
  }
</style>
