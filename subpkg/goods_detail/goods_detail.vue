<template>
	<view class="container">
		<view >
			<image mode="scaleToFill" class="top_img" src="../../static/messi.jpg"></image>
		</view>
		<view class="two">
		<view class="two_one">
			<view class="name">抽纸巾</view>
			<view class="two-two">
				<view class="price">￥ 3 +
				</view>
				<view>
					<image src="../../static/money.png" style=" width: 40rpx;height: 40rpx;margin-bottom: -5rpx;">
					</image>
					<text style="color: #EF9B3B;font-size: 35rpx;">123</text>
				</view>
				<view class="discount">￥3
				</view>
			</view>
		</view>
		<view class="home-header-line"></view>
		<view class="yunfei">运费：<view @click="">免运费</view>
		</view>
		<view class="home-header-line"></view>
		<view>
			<u--form label-width="150rpx">
			<u-form-item label="配送地址"  prop="userInfo.address" borderBottom @click="selectAddress()"
				ref="item1">
				<u--input v-model="addressInfo.address" disabled disabledColor="#ffffff" placeholder="请选择配送地址"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			</u--form>
		</view>



		<view class="detail">
			<view class="detail_name">商品详情</view>
			<view class="home-header-line"></view>
			<view class="detail_text">积分兑换抽纸巾</view>
		</view>
	</view>
		<button style="text-align: center;" class="sbtBtn">马上兑换</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
		selectAddress(){
			uni.navigateTo({
				url: `/subpkg/address_add/address_add`,
			})
		
		}
		}
	}
</script>

<style lang="scss">

	.container {
		background-color: white;
	
	}

	.home-header-line {
		margin-top: 10rpx;
		background: #e0e3da;
		width: 100%;
		height: 2rpx;
	}

	.sbtBtn {
		
		background-color: darkturquoise;
		position: fixed;
		bottom: 0;
		width: 100%;

	}

	.detail {
		.detail_name {
			font-size: 15px;
			color: #808080;
		}

		.detail_text {
			font-weight: 500;

		}
	}

	.yunfei {

		display: flex;
		font-size: 12px;
		color: #808080;
	}

	.two {
			padding-left: 15rpx;
		.discount {
			margin-left: 10rpx;
			text-decoration: line-through;

		}

		.name {
			font-weight: bold;
		}

		.price {
			font-size: 20px;
			font-weight: bold;
			color: orange;
		}

		display: flex;
		flex-direction: column;

		.two-two {
			display: flex;
		}
	}

	.name {
		font-family: '黑体';
	}

	.top_img {
		
		width: 100%;
		height: 600rpx;
		
	}
</style>
