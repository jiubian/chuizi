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
      <!--内容-->
      <!--主题-->
      <div class="qing">
        <!--<div>图片和分析</div>-->
        <div class="tu">
          <!--tupian -->
          <div class="tu-first">
               <div v-for="em,dex in dislist.ali_images" :key="dex" @click="photo(dex)" :class="{img:dex==picture}">
               	<img :src="em" />
               </div>
          </div>
          <div class="zheng">
            <img :src="dislist.ali_images[picture]"/>
          </div>
        </div>
        <!--wenzi-->
        <div class="content">
             <h2>{{dislist.title}}</h2>
             <div class="cont-first">
               <div>{{dislist.sub_title}}</div>
               <div>￥{{dislist.price}}</div>
              </div>
             <div class="xian"></div>
          <!--颜色-->
             <div class="colo">
               <div class="colo-first">颜色</div>
               <div class="colo-sec"  v-for="ite2,dex2 in dislist.sku_list"  :key="dex2" :class="{on:dex2==color}">
                 <div class="colo-d" @click="col(ite2.id,dex2)">
                     <img :src="ite2.image" alt=""/>
                 </div>
                 
               </div>
             </div>
          <div class="colo">
            <div class="colo-first">数量</div>
            <div class="colo-sec">
              <div class="jian" @click="jian()" >-</div>
              <div class="shuzi">{{sum}}</div>
              <div class="jia" @click="jia()">+</div>
            </div>
          </div>
          <div class="xian"></div>
          <div class="button">
            <button class="jiaru" @click="additem(dislist.sku_list[color].id)">加入购物车</button>
            <button class="goumai">现在购买</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
        name: "xqye",

      data(){
          return{
            list:[],
            dislist:[],
            sum:1,
            seen:false,
            id:this.$router.query,
            picture:0,
            color:0
          }
      },
      created(){
      	var id=this.$route.query.id
        Axios.get('https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/goods-detail').then((res)=>{
          res.data.map((item,index)=>{
          	if(item.sku_id==id){
          		this.dislist=item;
          		console.log()
          	}
          })
        })
      },
      methods:{
          jia:function(){
            if(this.sum>=5){
              alert("我也是有极限的")
            }else{
              this.sum++
            }
          },
          jian:function(){
            if(this.sum<=1){
              alert("不能再少了，再少就没有了")
            }else{
              this.sum--
            }
          },
          col:function(id,color){//换颜色
				Axios.get('https:www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/goods-detail').then((res)=>{
					res.data.map((item,index)=>{
						if(item.sku_id==id){
							this.dislist=item;
						}
					})
				})
				this.color=color;
			},
			photo:function(id){//换图片
				this.picture=id;
			},
			additem:function(ids){//加入购物车
				var id=this.$route.query.com;
				Axios.get('http://m.xyucd.com:7000/goods-list').then((res)=>{
					for(var i=0;i<res.data.data.length;i++){
						if(res.data.data[i].id==id){
							res.data.data[i].sku_info.map((item,index)=>{
								if(item.sku_id==ids){
									this.$store.dispatch("additem",item);
								}
							})
						}
					}
				})
				this.$router.push('/shopcart')
				
			}
   }
      }
</script>

<style scoped>
  .deng{
    width: 20rem;
    height: 15rem;
    background: white;
    border-radius: 10px;
    position: fixed;
    top: 6rem;
    right: 5rem;
    z-index: 1;
  }
  .deng img{
    width: 4rem;
    height: 4rem;
  }
  .neth{
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
  .imge{
    width: 4.5rem;
    height: 4.5rem;
    border: 1px solid gainsboro;
    border-radius: 5px;
    margin-left: 4rem;
  }
  .cint{
    margin-left: 2rem;
  }
  .nth{
    width: 100%;
    height: 4rem;
    border-radius: 5px;
    background: whitesmoke;
    text-align: left;
    padding-top: 2rem;
    margin-top: 1rem;
    display: flex;
  }
 .btn{
   width: 10rem;
   height:3rem ;
   border-radius:5px ;
   background: cornflowerblue;
   color: white;
   border:none;
   margin-left: 2rem;
 }
  .xiang{
    width: 100%;
    height: 70rem;
    background: gainsboro;
  }
  .qing{
    width: 80%;
    height: 40rem;
    background: white;
    margin: 1rem auto;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
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
  .tu{
    width: 50%;
    height: 40rem;
    
   
    align-items: center;
    margin-left: 5rem;
  }
  .tu-fiest{
    width: 50%;
    height: 100%;
    margin: 2rem auto;
  }
  .tu-first div:nth-of-type(1){
    width: 4rem;
    height: 4rem;
    border: 3px solid gainsboro;
    border-radius: 5px;
    margin-top: 1rem;
  }
  .tu-first div{
    width: 4rem;
    height: 4rem;
    border: 1px solid gainsboro;
    border-radius: 5px;
    margin:2rem auto;
  }
  .tu-first div img{
  	width: 100%;
  	height: 100%;
  }
  .zheng{
    width:50%;
    height: 100%;
    margin-left: 5rem;
    margin-top:5rem;
  }
  .zheng img{
  	width: 100%;
  	height: 80%;
  }
  .content{
    width: 50%;
    height: 100%;
    text-align: left;
    margin-top: 4rem;
    margin-left: 5rem;
  }
  .cont-first{
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cont-first div:nth-of-type(1){
    color: gainsboro;
  }
  .cont-first div:nth-of-type(2){
    margin-left: 1rem;
    color: red;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  .xian{
    width: 80%;
    height: 0.5px;
    border: 1px solid gainsboro;
    background: gainsboro;
    margin-top: 1rem;
  }
  .colo{
    width: 100%;
    height: 2rem;
    margin-top: 2rem;
    display: flex;

  }
  .colo-first{
    width: 30%;
    color: grey;
    line-height: 1rem;
  }
  .colo-sec{
    width: 70%;
    display: flex;
    margin-left: 0rem;
  }
  .colo-d{
    width: 2rem;
    height: 2rem;
    border: 2px solid gainsboro;
    border-radius: 50%;
    margin-left: 1rem;
  }
  .colo-d img{
    width: 1.6rem;
    height: 1.6rem;
    border: none;
    border-radius: 50%;
    background: red;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
  
  .jia,.jian{
    width: 2rem;
    height: 2rem;
    border: 1px solid black;
    border-right: 10px;
    text-align: center;
    line-height: 2rem;
    margin-left: 0.5rem;
  }
  .shuzi{
    width: 3rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
  .button{
    width: 100%;
    height: 4rem;
    margin-top: 3rem;
  }
  .jiaru,.goumai{
    width:10rem ;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    border: 1px solid lightgray;
    border-radius: 5px;

  }
  .jiaru{
    background: #7094E7;
    color: white;
  }
  .goumai{
    background: white;
  }
</style>
