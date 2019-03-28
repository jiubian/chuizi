<template>
  <div id="app">
      <div class="head">
          <ul>
            <li class="img"><img src="./assets/a.png" alt=""></li>
            <li>在线商城</li>
            <li>坚果Pro</li>
            <li>Smartisan M1 / M1L</li>
            <li>Smartisan OS</li>
            <li>欢喜云</li>
            <li>应用下载</li>
            <li>官方论坛</li>
            <span class="span">
              <li class="hover">
                <img src="./assets/tou.png" alt="">
                <div class="ren">       
                      <img src="./assets/avatar.png" alt="">    
                      <div>+86 138****9453 </div> 
                      <div><router-link to="/my">我的订单</router-link></div>
                      <div><router-link to="/address">收获地址</router-link></div>
                </div>
              </li>
              <li class="hover">
                <img src="./assets/shopping.png" alt=""><span style="display:inline-block;width:20px;height:20px;background:gray;text-align:center;line-height:20px;border-radius:50%">0</span>
                <div class="gou">
                  <dl style="display:flex;padding:20px"  v-if="show" v-for="item,index in shoppingList" :key="index">
                     <dt style="flex:1"><img style="width:60px;border:1px solid gray"  :src="item.ali_image" alt=""></dt>
                     <dt style="flex:2">
                        <p style="color:#000;font-size:16px">{{item.title}}</p>
                        <p>{{item.spec_json.show_name}}</p>
                        <p><span>￥{{item.price}}*1</span></p>
                     </dt>
                  </dl>
                  <dl style="display:flex;padding:0px 20px"  v-if="show">
                    <dt style="flex:1">
                      <p style="color:#000;font-size:13px">共{{shoppingList.length}}件商品</p>
                      <p style="color:red;font-size:16px">合计:<span>￥{{sum}}</span></p>
                    </dt>
                    <dt style="flex:1">
                      <button style="width:100px;height:30px;background:lightblue;color:#fff;border:none"><router-link to="/shop">购物车</router-link></button>
                    </dt>
                  </dl>
                </div>
                </li>
            </span>
          </ul>
      </div>
      <div class="eyes">
        <ol>
            <li>首页</li>
            <li>手机</li>
            <li>"足迹系列"手感膜</li>
            <li class="guan"><router-link to="/">官方配件</router-link></li>
            <li>周边产品</li>
            <li>第三方配件</li>
            <li>全部商品</li>
            <li>服务</li>
        </ol>
      </div>
      <router-view/>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
		data() {
			return {
				shoppingList:this.$store.state.shopping,
				show:false,
				sum:0
			};
		},
		created(){
			
		},
		methods:{
		
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

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body{
  background: #EDEDED;
}
ul,ol,li{
  list-style: none;
}
.head{
  width: 100%;
  height: 120px;
  background: #000;
  &>ul{
    width:50%;
    color:#C8C8C8;
    display: flex;
    justify-content: space-around;
    margin-left: 400px;
    font-size: 14px;
    cursor: pointer;
    .img{
      position: absolute;
      left: 150px;
      top: 25px;
    }
    &>li{
      line-height: 120px;
      display: inline-block;
    }
    &>li:hover{
      color: #fff;
    }
    &>.span{
      display: inline-block;
      position: absolute;
      right: 200px;
      margin-top: 40px;
      &>li:first-child{
        display: inline-block;
        img{
          vertical-align: middle;
        }
        &>.ren{
          width:130px;
          height:150px;
          border-radius: 10px;
          background: #fff;
          position: fixed;
          top: 80px;
          right: 200px;
          text-align: center;
          font-size: 12px;
          display: none;
          &>img{
            width: 50px;
            border-radius: 50%; 
          }       
          &>div{
            width: 120px;
            margin-top: 6px;
            padding: 5px;
            text-align: center;
          }
          &>div:hover{
            background: #EDEDED;
          }
        }
      }
      &>li:last-child{
        display: inline-block;
        
        img{
          width: 30px;
          vertical-align: middle;
        }
        &>.gou{
          width: 300px;
          // height: 150px;
          border-radius: 10px;
          background: #fff;
          position: fixed;
          top: 80px;
          right: 200px;
          display: none;
        }
      }
      &>.hover:hover{
        .ren{
          display: block;
        }
        .gou{
          display: block;
        }
      } 
    }
  }
}

.eyes{
  width: 76%;
  height: 80px;
  margin-left: 150px;
  border-bottom: 1px solid #D8D8D8;
  ol{
    width: 60%;
    height: 80px;
    display:flex;
    justify-content: space-around;
    font-size: 14px;
    color: #666666;
    cursor: pointer;
    li{
      line-height: 80px;
    }
    li:hover{
      color: lightblue;
    }
    .guan{
      font-weight: 600;
    }
  }
}
a{
  color: gray;
  text-decoration: none;
}
</style>
