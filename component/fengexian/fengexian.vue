<template>
	
	<view>
<!-- 		<view>{{height}}</view> -->
		<view  :style="[style]" class="home-header-line"></view>
	</view>
</template>
<script>
	export default {
		props:["height"],
		
		data() {
			return {
				height: 0, //x坐标
				style:{height:this.height+"rpx"}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.home-header-line {
		margin-top: 10rpx;
		background: #e0e3da;
/* 		background:#f5f5f5; */
		width: 100%;
		height: 2rpx;
	}
</style>
