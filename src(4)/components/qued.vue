<template>
		<div>
			<div id="shou">
				<p>收货信息</p>
				<div class="zhi">
					<ol>
						<li>熊大</li>
						<li>12374598741</li>
						<li><span>北京市</span><span>市辖区</span><span>昌平区</span></li>
						<li><span>顺沙口马池口镇吉利大学</span></li>
					</ol>
					<ol>
						<li>熊大</li>
						<li>12374598741</li>
						<li><span>北京市</span><span>市辖区</span><span>昌平区</span></li>
						<li><span>顺沙口马池口镇吉利大学</span></li>
					</ol>
					<ol>
						<li>
							
						</li>
					</ol>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
#shou{
	width: 1218px;
	margin-left: 120px;

	p{
		width: 100%;
		height: 61px;
		background: #F8F8F8;
		line-height: 60px;
		padding-left: 20px;
		font-size: 25px;
	}
	.zhi{
		width: 1218px;
		height: 220px;
		background: #fff;
		padding-left: 20px;
		ol{
			display: inline-block;
			width: 278px;
			// height: 160px ;
			background: #F8F8F8;
// 			// margin-top:25px;
// 			margin-right: 20px;
// 			li{
// 				margin: 10px 5px 0px 15px ;
// 			}
		}
	}
}
</style>
