<template>
	<view class="container">
		<van-tabs v-model:active="active">

			<van-tab title="已预约">
				<view class="content" v-for="(item,index) in orderList">
					<button @click="toOrderDetail"></button>
					<view class="content_top" @click="toOrderDetail(item.id)">

						<view>订单详情</view>

						<image style="width: 30rpx;height: 30rpx;" src="../../static/right.png">
						</image>
					</view>
					<view class="center">
						<view class="center_item">

							<van-field label="电话" v-model="item.phone" model-value="输入框只读" readonly />
						</view>

						<view class="center_item">
							<van-field label="上门地址:" v-model="item.address" model-value="输入框只读" readonly />
						</view>
						<view class="center_item">
							<van-field label="上门时间:" v-model="item.time" model-value="输入框只读" readonly />

						</view>
						<view class="center_item">
							<van-field label="回收类型:" v-model="item.type" model-value="输入框只读" readonly />

						</view>
					</view>
					<view class="content_bottom">
						<van-button round plain hairline type="danger" size="small">取消</van-button>
					</view>
				</view>
			</van-tab>
			<van-tab title="已接单">内容 2</van-tab>
			<van-tab title="已完成">内容 3</van-tab>
		</van-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [{
						"id": 1,
						"phone": "17605093090",
						"time": "01月25日 00:00",
						"type": "上门回收",
						"address": "福建省厦门市翔安区马巷镇窗东村117号"
					},
					{
						"id": 2,
						"phone": "13123397867",
						"time": "0月25日 00:00",
						"type": "上门回收",
						"address": "福建省厦门市翔安区马巷镇窗东村117号"
					}
				]
			}
		},
		methods: {
			toOrderDetail(id) {
				uni.navigateTo({
					url: `/subpkg/order_detail/order_detail?id=${id}`,
				})
			},
		}
	}
</script>

<style lang="scss">
	.container {

		.content {
			background-color: white;
			border-radius: 30rpx;
			margin: 20rpx;
			padding-right: 10rpx;

			.content_top {
				height: 100rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-weight: bold;
			}
		}

		.content_bottom {
			text-align: right;

		}
	}

	.center {
		.center_item {
			display: flex;

		}

		.center_item_left {
			width: 200rpx;
			padding-right: 40rpx;
		}
	}
</style>
