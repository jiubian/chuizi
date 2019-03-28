<template>
    <div>
        <div class='item'>
                <div class="img">
                    <router-link :to="{path:'/xiang',query:{id:item.sku_info[color].sku_id}}" >
                      <img id="imgs" :src="item.sku_info[color].ali_image"/>
                    </router-link>
                </div>
                <div class="div">{{item.name}}</div>
                <h3>{{item.name_title}}</h3>
        
                <div class='foot'>
                    <ul>
                        <li v-for="(i,indexs) in item.sku_info" :key="indexs">
                          <a href='javascript:;' :title=i.spec_json.show_name class='active'>
                            <img @click="xuan(indexs)" :src='"http://img01.smartisanos.cn/"+i.spec_json.image+"/20X20.jpg"'/>
                          </a>
                        </li>
                    </ul>
                </div>

              <div class="qian">￥{{item.price}}</div>

              <div class="btn">
                <button class="btn1"><router-link  :to="{path:'/xiang',query:{id:item.sku_info[color].sku_id}}" >查看详情</router-link></button>
                <button class="btn2" @click="additem(item.sku_info[color])">加入购物车</button>
              </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['item'],
  data () {
    return {
      ind:0,
      aa:[],
      bb:[],
			color:0,
    }
  },
  created() {

  },
  methods: {
    xuan(indexs){
      this.color=indexs
    },
		additem(item){
			this.$store.dispatch("additem",item);
			console.log(item)
		}
  },
}
</script>
<style lang="scss">

.item{
  width:26%;
  height:410px;
  float: left;
  padding: 10px;
  position: relative;
  border-right: 1px solid #efefef;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: rgb(239, 239, 239);
    border-bottom: 1px solid #efefef;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(239, 239, 239);
    
    .qian{
      text-align: center;
      margin-top: 70px;
      color: red;
      margin-left: -4px;
    }
  
}
 .item img{
  display: block;
    width: 206px;
    height: 206px;
    margin: 0px auto 10px;
    // margin-top: 50px;
    // margin-right: auto;
    // margin-bottom: 10px;
    margin-left: auto;
    z-index: 100;
}
.item .div{
    font-size:17px;
    font-weight: 500;
    color:#424242;
   text-align: center;
   margin-bottom:2px ;
}
 .item h3{
   font-size:12px;
   color:lightgray;
   text-align: center;
}
 .item .foot{
  margin-top:-20px;
  margin-left:100px;
}
 .item .foot ul{
  width:96px;
  height:10px;
  display:flex;
  justify-content: space-around;
}
 .item .foot ul li{
    width:10px;
    height: 10px
}
// .mouse .item .foot .active{
//   display:inline-block;
//   width:10px;
//   height:10px;
//   border: 1px solid #000;
//   border-radius: 50%;
//   margin-top:50px;
//   text-decoration: none; 
//   color: #666;
//   cursor: pointer; 
// }
 .item .foot img{
  position: absolute;
  bottom:110px;
  border-radius: 50%;
  width:8px;
  height: 8px;
}
.item .btn{
  text-align: center;
  margin-top: 70px;
  background: #fff;
  display: none;
  .btn1{
    width: 103px;
    height: 30px;
    border: none;
    background: #fff;
    border: 1px solid gray;
    border-radius: 5px;
    color: gray;
    outline:none;
  }
  .btn2{
    width: 103px;
    height: 30px;
    border: none;
    background: #fff;
    background: lightblue;
    border-radius: 5px;
    color: #fff;
    outline:none;
  }
}
.item:hover{
  box-shadow:0px 0px 3px 3px #e7e6e6 inset;
  .btn{
    display: block;
  }
  .qian{
    display:none;
  }
}
</style>

