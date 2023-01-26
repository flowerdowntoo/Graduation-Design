<template>
	<view class="common-list">
		<view class="common-left">
			<image style="width: 100rpx; height: 100rpx;" src="../../static/cate_active.png"></image>
		</view>
		<view class="common-right">
			<view class="top">
				<view class="left">{{item.username}}</view>
				<view class="right">
					<van-button icon="phone" size="small" type="primary">拨打电话</van-button>
					<van-button v-if="item.isZhiding" size="small" type="warning">顶</van-button>
				</view>
			</view>
			<view class="middle">
				<view class="text">
					{{item.title}}
				</view>
				<view class="image">

					<view v-for="(item,index) in item.titleimg" :key="index">

						<image style="width: 180rpx; height: 180rpx;" :src="item"></image>

					</view>
				</view>
			</view>
			<view class="bottom">
			<view class="bottom-top">
				<van-icon name="location" /><text class="text">平市江西乐平市江西乐平市西乐平市</text>
			</view>
				<view class="bottom-inner">
					
					<view class="item">
						<text class="date">07月06 14:43</text>
					</view>
					<view  class="item">
						<van-icon name="location" /><text class="viewCount">10678</text>
					</view> 
					<view  class="item">
						<image style="width: 30rpx;height: 30rpx;" src="../static/评论.png"></image><text class="commentCount">0</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	
	export default {
		name: "comment",
		props: {
			item: Object,
			index: Number
		}

	}
</script>

<style lang="scss">
	.common-list {
	
		.common-left {
			// background-color: green;

			image {

				background: red;
			}
		}

		display: flex;
		padding-top: 20rpx;
	}

	.common-right {
		
		// background-color: blue;
		width: 90%;

		.top {

			.left {
				// background-color: blue;
			}

			display: flex;
			justify-content: space-between;

			.right {
				display: flex;
				// height: 50rpx;
			}
		}

		.middle {
			.text {
				padding-left: 30rpx;
			}

			.image {
				flex-wrap: wrap;
				padding-left: 30rpx;
				padding-right: 30rpx;
				display: flex;
			
				// justify-content: space-between;

				image {
					margin: 6rpx;
					border-radius: 20rpx;
				}
			}
		}

		.bottom {
			padding-left: 30rpx;
			font-size: 12px;	
			display: flex;
			flex-direction: column;
			.bottom-top{
				padding-bottom: 10rpx;
			}
			
			.bottom-inner{
				display: flex;
				.item{
					display: flex;
					padding-right: 20rpx;
				}
			}
		}
	}
	.commentCount{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
