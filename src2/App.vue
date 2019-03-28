<template>
  <div id="app">
       <!--头部-->
       <div class="head">
         <div class="img">
           <img src="./assets/logo.png"/>
         </div>
         <ul class="luyou">
           <li>在线商城</li>
           <li>坚果Pro</li>
           <li>SmartisanM1/M1L</li>
           <li>Smartisan OS</li>
           <li>欢喜云</li>
           <li>应用下载</li>
           <li>官方论坛</li>
          <div>|</div>
           <router-link to="/my" tag="li">
           	<img src="./assets/img/锤子科技官网_02.png" alt="">
           	<div class="user">
						<ul>
							<li>+86 138****9453</li>
							<li>我的订单</li>
							<li>收货地址</li>
						</ul>
					</div>
           </router-link>
           <li><a href="#"><img src="./assets/img/锤子科技官网_03.png" alt=""></a>
					<div class="trade">
						<div class="shopping">
							<div class="list" v-if="show" v-for="item,index in shoppingList" :key="index">
								<div class="img"><img :src="item.ali_image" /></div>
								<div class="shop">
									<p>{{item.title}}</p>
									<span>{{item.spec_json.show_name}}</span>
									<span>￥{{item.price}}*1</span>
								</div>
								<input type="button" value="x" @click="del(index)"/>
							</div>
							<div class="bot" v-if="show">
								<div>
									<p>共{{shoppingList.length}}件商品</p>
									<p>合计:<span>￥{{sum}}</span></p>
								</div>
								<router-link to="/shopcart"><input type="button" value="去购物车" /></router-link>
							</div>
						</div>
						<div class="shopping-empty" v-if="!show">
							<h3>购物车为空</h3>
							<p>您还没有选购任何商品，现在前往商城选购吧！</p>
						</div>
					</div>
				</li>
         </ul>
       </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
			return {
				shoppingList:this.$store.state.shopping,
				show:true,
				sum:0
			};
		},
		created(){
			
		},
		methods:{
			del(index){
				this.$store.dispatch("del",index);
			}
		},
		watch:{
			shoppingList(){
				this.shoppingList.length==0?this.show=false:this.show=true;
				this.sum=0;
				this.shoppingList.map((item,index)=>{
					this.sum+=item.price;
				})
			},
			
		}
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .head{
    width: 100%;
    height: 10rem;
    background: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;

  }
  .img{
    width: 5rem;
    height: 5rem;
    margin-left: 8rem;
  }
  .img img{
    width: 100%;
    height: 100%;
  }
  .luyou{
    width: 70%;
    height: 100%;
    color: white;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    line-height: 10rem;
  }
  .luyou div{
    width: 1rem;
  }
  li{
    width: 40rem;
  }
  li:active{
    color: blue;
    background: white;
  }
  .user{
	width: 150px;
	color: #888;
	background: white;
	border-radius: 10px;
	border: 0 solid hsla(0,0%,100%,.01);
	box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 20px 40px rgba(0,0,0,.15);
	position: absolute;
	left: 1400px;
	display: none;
}
.user ul{
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.user ul li{
	width: 100%;
	line-height: 40px;
	text-align: center;
	border-bottom: 1px solid #eee;
}
.user ul li:nth-child(1){
	line-height: 100px;
}
.user ul li:nth-child(3){
	border: none;
}
.trade{
	width: 370px;
	background: white;
	border-radius: 10px;
	border: 0 solid hsla(0,0%,100%,.01);
	position: absolute;
	left: 1210px;
	z-index: 1;
	box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 20px 40px rgba(0,0,0,.15);
	display: none;
}
.trade .shopping-empty{
	width: 100%;
	height: 300px;
	display: flex;
	flex-direction: column;
	-webkit-justify-content: center;
	align-items: center;
}
.trade .shopping-empty h3{
	margin: 0;
	color: black;
}
.trade .shopping{
	color: black;
}
.trade .shopping .list{
	padding: 20px;
	display: flex;
	align-items: center;
}
.trade .shopping .list .shop{
	width: 200px;
	padding: 0 5px 0 10px;
	display: flex;
	flex-direction: column;
}
.trade .shopping .list .shop p{
	margin: 0;
	overflow:hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.trade .shopping .list .shop span{
	color: #aaa;
}
.trade .shopping .list .shop span:nth-child(3){
	color: #ccc;
	font-size: 11px;
	margin-top: 20px;
}
.trade .shopping .list .img{
	width: 75px;
	height: 75px;
	border: 1px solid rgba(0,0,0,.06);
	border-radius: 5px;
}
.trade .shopping .list .img img{
	width: 100%;
	height: 100%;
	border-radius: 5px;
}
.trade .shopping .list input{
	width: 20px;
	height: 20px;
	margin-left: 10px;
	text-align: center;
	outline: none;
	border-radius: 50%;
	display: none;
}
.trade .shopping .list:hover input{
	display: block;
}
.trade .shopping .bot{
	padding: 20px;
	border-radius: 0 0 10px 10px;
	background: linear-gradient(#fdfdfd,#f9f9f9);
	border-top: 1px solid #e9e9e9;
	box-shadow: 0 -3px 8px rgba(0,0,0,.04);
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.trade .shopping .bot p{
	margin: 5px;
}
.trade .shopping .bot p span{
	color: #DE4037;
	font-size: 17px;
	font-weight: 600;
}
.trade .shopping .bot p:nth-child(1){
	font-size: 10px;
	color: #ccc;
}
.trade .shopping .bot input{
	width: 110px;
	height: 40px;
	outline: none;
	border-radius: 10px;
	background: linear-gradient(#7DA2F5,#5B83F0);
	border: 1px solid #6288E3;
	color: white;
}
</style>
