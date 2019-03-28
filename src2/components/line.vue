<template>
  <div>
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
    <div class="fen"></div>
    <ul class="nav1">
      <li>综合排序</li>
      <div>.</div>
      <li>销量排序</li>
      <div>.</div>
      <li>价格低到高</li>
      <div>.</div>
      <li>价格低到高</li>

    </ul>
    <!--内容 :to="{path:'/xqye',query:{inde:this.sku_info[0].sku_id}}-->
    <div class="cont">
      <div class="cont1" v-for="(item,index) in dislist" :key="index" @mousemove="jin" @mouseleave="chu">
        <router-link :to="{path:'/xqye',query:{com:item.id,id:item.sku_info[color].sku_id}}">
        	<img :src="item.sku_info[color].ali_image"/>
        </router-link>
       
        <div>{{item.name}}</div>
          <div class="cai">{{item.name_title}}</div>
        <div class="dian">

            <div class="dian-first" v-for="(item1,ind) in item.sku_info" :key="ind" @click="col(ind)">
              <img :src='"http://img01.smartisanos.cn/"+item1.spec_json.image+"/20X20.jpg"'@click="col(ind)"/>
            </div>
        </div>
          <div class="niu">
            <div class="niu">
              <div class="yuan" v-show="!seen">{{item.price}}</div>
            </div>
              <div style="display: flex;flex-direction: row;justify-content: space-around" v-show="seen">
              <router-link class="xiang" tag="div" :to="{path:'/xqye',query:{com:item.id,id:item.sku_info[color].sku_id}}">查看详情</router-link>
             <div class="jinru" @click="additem(item.sku_info[color])">进入购物车</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
export default {
  name: 'line',
  data () {
    return {
       dislist:[],
      seen:false,
      color:0
    }
  },
  methods:{
      additem(item){

        this.$store.dispatch('additem',item)
      },
    
    jin(){
        this.seen=true
    },
    chu(){
        this.seen=false
    },
    col(id){
    	this.color=id
    }
  },
  created(){
   Axios.get('http://m.xyucd.com:7000/goods-list').then((res)=>{
     console.log(res)
     this.dislist=res.data.data
   }).catch((res)=>{
     console.log(res)

    })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .fen{
    width: 60%;
    height: 1px;
    border: 1px solid gainsboro;
    background: gainsboro;
    margin-left: 14%;
  }
  .nav li:hover{
    color: deepskyblue;
  }
  .nav1{
    width: 40%;
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
.nav1 div{
  width: 1rem;
  height:5rem;
  line-height: 4.5rem;
}
.nav1 li{
  width: 50rem;
}
.nav1 li:hover{
  color: deepskyblue;
}
  .cont{
    width: 80rem;
    height: 50rem;
    border:1px solid red ;
    display: flex;
    margin-left: 14rem;
  }
  .cont1{
    width: 30%;
    height: 100%;
    border: 1px solid blue;
  }
  .cont img{
    width: 86%;
    height: 37%;
    margin: 2rem;
  }
  .xiang{
    width: 7rem;
    height: 2rem;
    background: cornflowerblue;
    border: none;
  }
  .jinru{
    width: 7rem;
    height: 2rem;
    background: blue;
    border: none;
  }
  .cai{
    font-size:15px;
    color: gainsboro;
    margin-top: 2rem;
  }
  .niu{
    margin-top: 2rem;
  }
  .yuan{
    color: red;
    font-size: 2rem;
  }
  .dian{
    width: 100%;
    height:3rem;
    margin-top: 2rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;

  }
  .dian-first{
    width: 1rem;
    height: 1rem;
    border: 1px solid red;
    border-radius: 50%;
    margin: 1rem;
    z-index: -1;
  }
  .dian-first  img{
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    margin: 1px auto;
  }
  .first{
    border:1px solid gainsboro;
  }
  .first div{
    background: gainsboro;
  }
</style>
