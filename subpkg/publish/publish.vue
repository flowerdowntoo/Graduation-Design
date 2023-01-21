<template>
	<view class="container">
		<view class="top">
			<view class="left">
				<image src="../../static/shop_small.png" style="width: 80rpx;height: 80rpx;"></image>
			</view>
			<view class="middle" @click="toRegisterbusiness">
				<text class="middle-top">我是回收商家，我要申请入驻</text>
				<text class="middle-bottom">点此进入申请页面</text>
			</view>
			<view class="right">
				<image src="../../static/right.png" style="width: 60rpx;height: 60rpx;"></image>
			</view>
		</view>
		<van-divider />
		<view class="bottom">
			<text>请选择您要发布的分类</text>
			<view class="image">
				<view class="item" @click="toPublishDetail(item.id)" v-for="(item,index) in list" :key="index">
					<van-image round width="4rem" height="4rem" src="/../static/messi.webp" />

					<text>{{item.title}}</text>

				</view>
				<!-- 				<view class="item">
					<van-image round width="4rem" height="4rem" src="/../static/messi.webp" />
					<text>废品求购</text>
				</view>
				<view class="item">
					<van-image round width="4rem" height="4rem" src="/../static/messi.webp" />
					<text>二手发布</text>
				</view>
				<view class="item">
					<van-image round width="4rem" height="4rem" src="/../static/messi.webp" />
					<text>招租招聘</text>
				</view>
				<view class="item">
					<van-image round width="4rem" height="4rem" src="/../static/messi.webp" />
					<text>敬请期待</text>
				</view> -->

			</view>
		</view>
	
	</view>


</template>

<script>
	export default {
		data() {
			return {
				fileList:[],
				list: [{
					id: "1",
					title: "废品发布",
					img: ""
				}, {
					id: "2",
					title: "废品求购",
					img: ""
				}, {
					id: "3",
					title: "二手发布",
					img: ""
				}, {
					id: "4",
					title: "招租招聘",
					img: ""
				}, {
					id: "5",
					title: "敬请期待",
					img: ""
				}],
				checked:'1'
			}
		},
		methods: {
			
			toRegisterbusiness() {

				uni.navigateTo({
					url: `/subpkg/business_enter/business_enter`,
					
				})
			},
			toPublishDetail(index) {
			
				uni.navigateTo({
					url: `/subpkg/publish_detail/publish_detail?key=${index}`,
					
				})
			}
		}
	}
</script>

<style lang="scss">
	.top {
		display: flex;
		justify-content: space-around;

		.middle {
			display: flex;
			flex-direction: column;
		}

		.middle-top {
			font-weight: bold;
		}

		.middle-bottom {
			color: red;
		}
	}

	.bottom {
		text {
			padding-bottom: 30rpx;
			color: cornflowerblue;
			display: flex;
			justify-content: center;
		}

		.image {
			flex-wrap: wrap;
			padding-left: 50rpx;

			display: flex;
			justify-content: first baseline;

			.item {
				margin-right: 40rpx;
				padding-top: 10rpx;

				van-image {
					border-radius: 10rpx 10rpx 10rpx 10rpx;
				}
			}
		}
	}

	.myPhoto {
		height: 90rpx;
		width: 90rpx;
		position: absolute;
		z-index: 2;
		margin-left: 3%;
		margin-top: 3%;
	}
</style>
