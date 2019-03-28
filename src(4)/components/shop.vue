<template>
    <div class="box">
			<div class="gou1">购物清单</div>
				<ol class="ol">
						<li style="margin-left:20px;">商品信息</li>
						<li style="margin-left:620px;">单价</li>
						<li style="margin-left:120px;">数量</li>
						<li style="margin-left:120px;">小计</li>
						<li style="margin-left:120px;">操作</li>
				</ol>	
				<div class="list">
							<List v-for="item,index in commodity" :key="index" :item="item" :index="index"></List>
						<ol class="ol2">
							<li style="margin-left:20px;font-size:13px"><input type="checkbox" name="" id="">    全选</li>
							<li style="font-size:11px;margin-left:10px">删除选中的商品</li>
							<li style="margin-left:520px">
								<div style="margin-top:-10px">已选择<span>1</span>件商品</div>
								<div style="margin-top:-50px;font-size:13px">共计<span>{{commodity.length}}</span>件商品</div>
							</li>
							<li style="margin-left:40px;">
								<div style="margin-top:-10px;">应付总额：<span>￥0</span></div>
								<div style="margin-top:-50px;font-size:13px">应付总额不含运费</div>
							</li>
							<li style="margin-left:110px;"><button style="border:none;border-radius: 5px;width:130px;height:40px;background:#597EDB;color:#fff;outline:none"><router-link to="/qued">现在结算</router-link></button></li>
						</ol>
				</div>



    </div>
</template>
<script>
import List from "./shoppinglist";
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
	}
</script>
<style scoped lang="scss">
.box{
	  width: 88%;
	  height: auto;
		margin-left: 150px;
	  >.gou1{
	    width: 85.5%;
	    height: 60px;
	    padding: 0 10px 0 28px;
	    background: #f5f5f5;
	    background: linear-gradient(#fff,#f5f5f5);
	    border-bottom: 1px solid #dcdcdc;
	    border-radius: 10px 10px 0 0;
	    box-shadow: 0 1px 7px rgba(0,0,0,.06);
	    line-height: 60px;
	    color: #646464;
	  }
		>.ol{
			width: 88%;
			height: 35px;
			display: flex;
			line-height: 35px;
			font-size: 13px;
			color: gray;
		}
		>.list{
			width: 88%;
			// height: 140px;
			>List{
				>.ul{
					width: 100%;
					height: 120px;
					line-height: 120px;
					display: flex;
					background: #fff;
					color: #545454;
					button{
						width: 20px;
						height: 20px;
						border-radius: 50%;
						border: none;
						background: lightgray;
						outline: none;
						
					}
				}
			}
			
			&>.ol2{
				width: 100%;
				height: 80px;
				line-height: 80px;
				border-top: 1px solid lightgray;
				display: flex;
				color: #545454;
				background: #fff;
			}
		}
	  
	}
</style>
