<template>
	<view>
		<view class="content">

			<van-cell-group inset>
				<!-- 输入任意文本 -->
				<van-field v-model="item.yytime" label="上门时间" />
				<!-- 输入手机号，调起手机号键盘 -->
				<van-field v-model="item.tel" type="tel" label="手机号" />
				<van-field v-model="item.address" type="tel" label="上门地址">
					<template #button>
						<van-button size="small" type="primary" @click="location(item.address)">查看位置</van-button>
					</template>
				</van-field>
				<!-- 				<van-field label="查看位置">
				</van-field> -->
				<!-- 允许输入正整数，调起纯数字键盘 -->
				<van-field v-model="item.type" type="digit" label="回收类型" />
				<!-- 允许输入数字，调起带符号的纯数字键盘 -->
				<van-field v-model="item.tjtime" type="number" label="提交时间" />
				<!-- 输入密码 -->
				<van-field v-model="item.bianhao" type="password" label="订单编号" />



				<view style="display: flex;background-color: white;">
					<view class="form-left">
						上传图片
					</view>
					<view style="margin-left: 6px;">
						<view style="display: flex;">
							<view>
								<image  mode="scaleToFill" src="../../static/messi.jpg" class="upLoadImg"></image>
							</view>

						</view>
					</view>


				<!-- 	<view>上传图片<image src="../../static/messi.jpg"></image>
					</view> -->
				</view>

			</van-cell-group>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

				item: {
					yytime: "2023-01-05 09:00-10:00",
					address: "福建省厦门市翔安区翔安西路6999号",
					latitude: 24.61854, //纬度
					longitude: 118.24722, //经度
					type: "商家回收",
					tjtime: "2023-01-05 00:24",
					bianhao: "RE2023012598545199",
					tel:"17605093090"
				}
			}
		},
		methods: {
			location(address) {
				// uni.chooseLocation({
				// 	success: function (res) {
				// 		console.log('位置名称：' + res.name);
				// 		console.log('详细地址：' + res.address);
				// 		console.log('纬度：' + res.latitude);
				// 		console.log('经度：' + res.longitude);

				// 	}
				// });
				uni.openLocation({
					// latitude: parseFloat(this.details.lat),
					// longitude: parseFloat(this.details.lon),
					// 上海东方明珠的定位
					latitude: this.item.latitude, //纬度
					longitude: this.item.longitude, //经度

					address: address,
					// name: "景点名称"

				})
			}
		},
	}
</script>

<style lang="scss">
	.content {
		// background-color: white;
		// margin: 20rpx;
		// display: flex;
		// border-radius: 30%;
		// .left{
		// 	width: 40%;
		// 	display: flex;
		// 	justify-content: center;
		// 	align-items: center;
		// }
	}
	.form-left{
		
		padding:18px 32rpx;
		
}

	.upLoadImg{
		width: 500rpx;
	
		background-color: #FFFFFF;
		margin-top: 16rpx;
		margin-left: 6px;
}
</style>
