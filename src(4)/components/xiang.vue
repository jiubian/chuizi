<template>
  <div class="detail">
        <div>
          <div class='left'>
            <div class='xiang'>
              <div class='left-list'>
                <ul v-for="em,dex in list.ali_images" :key="dex" @click="photo(dex)" :class="{img:dex==picture}">
                  <li><img :src="em"/></li>
                </ul>
              </div>
              <div class='zong-list'>
                <ul>
                  <li class='on'><img :src="list.ali_images[picture]" /></li>
                </ul>
              </div>
            </div>
              <div class='right'>
                <div class='top'>
            
              <div class='jian'>
                <h4 style="font-size:25px">{{list.title}}</h4>
                <h6>{{Arr.sub_title}}</h6>
                </div>
                  <div class='many'>
                <span><em>￥</em><i>{{list.price}}</i></span>
              </div>
              </div>
              <div class='center'>
                <span style="color:#A5AAAA"> 颜色</span>
                <ul>
									<li v-for="ite2,dex2 in list.sku_list" :key="dex2" :class="{on:dex2==color}">
										<div class="icon-image" @click="col(ite2.id,dex2)">
											<img :src="ite2.image" alt=""/>
										</div>
									</li>
								</ul>
              </div>
                  <div class='foot'>
                    <div class='shu' style="color:#A5AAAA">数量</div>
                    <div class='sp'> 
                      <span class='jian' @click="jian()">-</span><span>{{this.num}}</span><span class='jia' @click="jia()">+</span> </div>
                    </div>
                  </div>
            </div>

              <div style="margin-left:730px;margin-top:-200px">
                <button @click="additem()" style="width:140px;height:40px;border-radius:10px;border:none;background:#5E82DA;color:#fff;">加入购物车</button>
                <button style="width:140px;height:40px;border-radius:10px;border:1px solid #545454;background:#fff">现在购买</button>
              </div>
        </div>
  </div>
</template>


<script>
import Axios from 'axios'
export default {
 
  data () {
    return {
      eq:0,
       json:[],
       jsonId:[],
       num:1,
       Arr:[],
			 list: [],
				picture: 0,
				color: 0,
    }
  },
  created(){
     var id=this.$route.query.id;
			Axios.get(`https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/goods-detail`).then((res)=>{
				res.data.map((item,index)=>{
					if(item.sku_id==id){
						this.list=item;
						console.log(this.list)
					}
				})
			}) 	
  },
  methods: {
    jian(){
      this.num--;
      if(this.num<1){
        alert('商品最少购买量为1，无法继续减少')
        this.num=1
      }
    },
    jia(){
      this.num++;
      if(this.num>5){
        alert('商品已达到最大可购买数量，无法继续添加')
        this.num=5
      }
    },
   xuan(indexs){
   	this.ind=indexs
   },
	 dian(index){
	 console.log(index)
	 // this.eq=index
	 },
	 col(id,color){//换颜色
	 		Axios.get(`https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/goods-detail`).then((res)=>{
	 			res.data.map((item,index)=>{
	 				if(item.sku_id==id){
	 					this.list=item;
	 				}
	 			})
	 		})
	 		this.color=color;
	 	},
	 	photo(id){//换图片
	 		this.picture=id;
	 	},
	 	additem(){//加入购物车
		console.log('111')
// 	 		var id=this.$route.query.com;
// 	 		Axios.get(`http://m.xyucd.com:7000/goods-list`).then((res)=>{
// 	 			for(var i=0;i<res.data.data.length;i++){
// 	 				if(res.data.data[i].id==id){
// 	 					res.data.data[i].sku_info.map((item,index)=>{
// 	 						if(item.sku_id==ids){
// 	 							this.$store.dispatch("additem",item);
// 	 						}
// 	 					})
// 	 				}
// 	 			}
// 	 		})
	 	}
  },
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
ul {
  list-style-type: none;
}


.detail{


 background: #fff;
  width:80%;
  height:650px;
  border-radius: 5px;
  margin-left:150px;
  
  .left{
    width:80%;
    height:600px;
.xiang{
  width:50%;
    height:440px;
   position:absolute;
   left:100px;
   top:300px;
.left-list{
     width:80px;
     height:440px;
     /* background:#000; */
     margin-left:130px;
     margin-top: -50px;
     ul{
       width:80px;
      //  height:440px;
       li{
        width: 54px;
    // height: 54px;
    margin-top: 10px;
    padding: 12px;
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 5px;
    cursor: pointer;
         img{
           width:54px;
           height:54px;
           
         }
       }
     }
   } 
   .zong-list{
         width:460px;
         height:440px;
         position: absolute;
         top:-35px;
         left:200px;
         ul{
           width:440px;
           height:440px;
           
            .on{
              width:440px;
              height:440px;
              img{
                width:440px;
              height:440px;
              }
            }
           
          
         }
   }
}
 .right{
     width:450px;
     height:440px;
      position:absolute;
      /* background:red; */
      left:800px;
      top:300px;
      .top{
        width:450px;
        height:90px;
        position: absolute;
        left:100px;
        .jian{
          width:360px;
          height:40px;
         position: absolute;
         top:50px;
        h4{
          font-size:20px;
           margin-bottom:10px;


        }
        h6{
          font-size:15px;
          color:#A5AAAA;
        }
        }
         .many{
           width:40px;
           position:absolute;
           left:300px;
           top:80px;
           color:red;
         }
      }
      .center{
        width:450px;
        height:360px;
        margin-top:150px;
        margin-left:100px;
        ul{
          margin-top:-25px;
          margin-left:50px;
          width:160px;
          height:40px;
          display:flex;
          justify-content: space-around;
          li{
            width:40px;
            height:40px;
           /* // line-height:40px; */
            .icon-image{
              display:inline-block;
                width:33px;
                height:33px;
                border: 1px solid #000;
                border-radius: 50%;
              /* //  margin-top:-20px; */
                text-decoration: none; 
                color: #666;
                cursor: pointer; 
                text-align:center;
                img{
                  width:26px;
                  height:26px;
                  border-radius: 50%;
                  position: relative;
                  bottom:-3px;
                  left:0px;
                }
            }
          }
        }
      }
.foot{
  width:440px;
  height:36px;
  position:absolute;
  top:200px;
  left:100px;
  .sp{
    width:128px;
    height: 36px;
    margin-left:60px;
    margin-top:-20px;
    .jian{
      display:inline-block;
      width:20px;
      height:20px;
      border-radius: 50%;
      border:1px solid #000;
      text-align: center;
      cursor: pointer;
    }
    .jia{
      display:inline-block;
      width:20px;
      height:20px;
      border-radius: 50%;
      border:1px solid #000;
      text-align: center;
      cursor: pointer;
    }
    span{
      display:inline-block;
      width:50px;
      height:36px;
      text-align: center;
    }
  
  }
}


   }


  }
}

</style>