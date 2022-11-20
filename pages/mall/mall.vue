<template>
	<view>
		<swiper indicator-dots="true" autoplay="true" interval="2500" circular="true">
			<swiper-item v-for="image in images" :key="image">
				<view class="swiper-item">
					<image :src="image" />
				</view>
			</swiper-item>
		</swiper>
	</view>
	<view class="shop_info">
		<text class="shop_name">我是啊打完爱我的爱我的爱我的安慰</text>
		<view class="yingye">
		<view><van-icon name="clock" />营业中</view><view class="split"></view><view>00:00-23:59</view>
		</view>
		
		<view>
			<text>地址</text>
			<view class="address"><van-icon name="location" />江江西乐平市江西乐平市江西乐平市江西乐平市西乐平市</view>
		</view>
		
		<van-tabs class="tabs">
			<van-tab title="回收">内容 1</van-tab>
			<van-tab title="服务">内容 2</van-tab>
			<van-tab title="介绍">内容 3</van-tab>
			<van-tab title="发帖">内容 4</van-tab>
			<van-tab title="评价">内容 5</van-tab>
		</van-tabs>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				images: [
					'https://img2.woyaogexing.com/2022/11/19/243d0ed2b35471f0!400x400.jpg',
					'https://img2.woyaogexing.com/2022/11/19/9db7231a6f643b3b!400x400.jpg'
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	text{
		margin-left: 20rpx;
	}
	.tabs{
		
	}
	.address{
		font-weight: normal;
		display: flex;
		margin-left: 20rpx;
	}
	.shop_info{
		margin-top: 20rpx;
		
		font-weight: 800;
	}
	.split{
		margin-left: 10rpx;
		margin-right: 10rpx;
		width: 2rpx;
		height: 30rpx;
		background-color: #000;
		transform: translateY(25%);
	}
	.shop_info{
			background-color: white
	}
	.yingye{
		margin-left: 20rpx;
		margin-bottom: 30rpx;
		display: flex;
		font-weight: normal;
		
	}
	swiper {
		height: 330rpx;

		.swiper-item,
		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
