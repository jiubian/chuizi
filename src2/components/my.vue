<template>
  <div>
    <div class="geren">
      <img src="../assets/avatar.png" alt="">
      <p><router-link to="/my">我的订单</router-link></p>
      <p><router-link to="/address">收货地址</router-link></p>
    </div>
    <div id="fu">
      <div class="dingdan">
        <ul class="ul1">
          <li>我的订单</li>
          <li>最近三个月</li>
          <li>全部状态</li>
        </ul>
      </div>
      <div class="box">
        <div class="list">
          <div>
            <div>
              <span>2019-03-02</span>
              <span>订单号：</span>
              <span style="font-size:11px;color:blue">19875444654981</span>
              <span style="margin-left: 290px;">单价</span>
              <span style="margin-left: 50px;">数量</span>
              <span style="margin-left: 20px;">应付总额</span>
              <span style="margin-left: 50px;">商品操作</span>
            </div>
            <div style="background:#fff">
              <List v-for="item,index in commodity" :key="index" :item="item" :index="index"></List>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import List from "../components/mulist";
  export default {
    components:{
      List
    },
    data() {
      return {
        commodity:this.$store.state.shopping,
      };
    },
    created(){
      console.log(this.commodity)
    },
    // console.log(item)
  }
</script>
<style scoped lang="scss">
  .geren{
    width:220px;
    height: 270px;
    background: #fff;
    border-radius: 10px;
    margin-left: 155px;
    text-align: center;
    float: left;
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

  #fu{
    float: left;
    width: 900px;
    border: 1px solid lightgray;
    margin-left: 30px;
    border-radius: 10px;
    .dingdan{
      width: 900px;
      height: 70px;
      background: #fff;
      border-radius: 10px;
      .ul1{
        display: flex;
        li:first-child{
          margin-left: 20px;
          font-size: 17px;
          line-height: 70px;
          font-weight: 600;
          color: #545454;
        }
        li:nth-of-type(2){
          width: 100px;
          height: 30px;
          border: 1px solid lightgray;
          border-radius: 5px;
          color: gray;
          margin-left: 550px;
          text-align: center;
          line-height: 30px;
          margin-top: 20px;
        }
        li:nth-of-type(3){
          width: 100px;
          height: 30px;
          border: 1px solid lightgray;
          margin-left: 15px;
          border-radius: 5px;
          color: #545454;
          text-align: center;
          line-height: 30px;
          margin-top: 20px;
        }
      }
    }

    .box{
      width: 900px;
      >.list{
        width: 100%;
        height: 150px;
        display: flex;
        >div:nth-of-type(1){
          width: 100%;
          height: 100%;
          border-bottom: 1px solid lightgray;
          >div:nth-of-type(1){
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: #eee;
            border-right: 1px solid lightgray;
            font-size: 14px;
            color: darkgray;
          }

        }
      }
    }
  }

</style>
