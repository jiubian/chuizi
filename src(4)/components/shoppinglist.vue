<template>
		<ul class="ul">
				<li style="margin-left: 10px;"><input type="checkbox" name="" id="" :checked="pitch"></li>
				<li><img style="vertical-align: middle;width: 100px;"  :src="item.ali_image" alt=""></li>
				<li style="width: 300px;">
					<p>{{item.title}}<span style="font-size:12px;color:red">{{item.spec_json.show_name}}</span></p>
				</li>
				<li style="margin-left: 260px">￥{{item.price}}</li>
				<li style="margin-left: 100px">
					<button  @click="jian">-</button>
					<span>{{num}}</span>
					<button  @click="jia">+</button>
				</li>
				<li style="margin-left: 100px;width: 80px;">￥{{item.price*num}}</li>
				<li style="margin-left: 70px;font-size:25px"  @click="del(index)">×</li>
			</ul>
</template>
					
<script>
	export default {
		props:["item","index"],
		data() {
			return {
				num:1,
				pitch:false
			};
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
			del(index){
				this.$store.dispatch("del",index);
			}
		}
	}
</script>

<style scoped lang="scss">
.ul{
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

</style>
