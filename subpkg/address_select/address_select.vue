<template>
	<view class="container">

		<view class="content" v-for="(item,index) in addressList">
			<view class="left">
				<icon :type="item.isdef  ?'success':'circle'" @click="handleCheckAddress(index)"></icon>

			</view>
			<view class="center">
				<view class="center_top">
					<view class="name">{{item.username}}</view>
					<view class="phone">{{item.phone}}</view>
					<view class="default" v-if="item.isdefault">默认</view>
				</view>
				<view class="center_bottom">
					<view class="address">{{item.address+item.detail}}</view>

				</view>
			</view>
 

			<view class="right" @click="editAddress(index)">
				<image style="width: 40rpx;height: 40rpx;" src="../../static/edit.png"></image>
			</view>
		</view>

		<view class="sbtView">
			<button class="sbtBtn" @click="addAdress">新增地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [{
					id: "1",
					username: '曹国舅',
					phone: '13010101010',
					address: '浙江省杭州市西湖区',

					detail: '文三路138号东方通大厦7楼501室',
					isdef: false
				}, {
					id: "2",
					username: '吕洞宾',
					phone: '17605093090',
					address: '浙江省杭州市西湖区',
					detail: '文三路138号东方通大厦7楼501室',
					isdef: false
				}, {
					id: "3",
					username: '何仙姑',
					phone: '13123397867',
					address: '福建省厦门市翔安区',
					detail: '村北117号',
					isdef: true
				}]

			}
		},
		methods: {
			// handleRadioGroup(name) {
			// 	// let benefitRadio = [];
			// 	// for (let i = 0; i < 15; i++) {
			// 	// 	benefitRadio.push(-1);
			// 	// }
			// 	// benefitRadio = ref(benefitRadio);
			// 	console.log(name)
			// },

			handleCheckAddress(idx) {
				//选取地址
				this.addressList.forEach(function(v){
					v.isdef = false;
				})
				this.addressList[idx].isdef = true;

				// 1. 获取当前页面栈实例（此时最后一个元素为当前页）
				let pages = getCurrentPages()

				// 2. 上一页面实例
				// 注意是length长度，所以要想得到上一页面的实例需要 -2
				// 若要返回上上页面的实例就 -3，以此类推
				let prevPage = pages[pages.length - 2]

				// 3. 给上一页面实例绑定getValue()方法和参数（注意是$vm）
				prevPage.$vm.getValue(this.addressList[this.checkedIdx].id)

				// 4. 返回上一页面
				uni.navigateBack({
					delta: 1 // 返回的页面数
				})
			},
			addAdress() {

				uni.navigateTo({
					url: `/subpkg/address_add/address_add`,
				})
			},
			editAddress(index) {
				const key = this.addressList[index];

				let currentSite = JSON.stringify(key)
				uni.navigateTo({
					url: '/subpkg/address_add/address_add?key=' + currentSite
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		margin-top: 20rpx;
	}


	.content {



		background-color: white;
		border-radius: 35rpx;
		margin: 20rpx;
		padding-top: 10rpx;
		padding-right: 20rpx;
		display: flex;

		.left {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 15%;
		}

		.center {
			.center_top {
				display: flex;
				padding-bottom: 20rpx;

				.phone {
					padding-left: 10rpx;
					padding-right: 10rpx;
				}

				.default {
					color: white;
					text-align: center;
					width: 100rpx;
					background-color: red;
					border-radius: 30rpx;
				}
			}

		}

		.right {

			position: fixed;
			right: 0;
			display: flex;
			justify-content: center;
			padding-right: 40rpx;
			padding-top: 10rpx;
			align-items: center;
		}



	}

	.sbtView {
		text-align: center;
		left: 0;
		right: 0;
		position: fixed;
		bottom: 15rpx;
		// text-decoration: underline;
		font-weight: 400;
		color: cornflowerblue;
		padding: 0 5%;

		.sbtBtn {
			color: white;
			border-radius: 25px;
			background-color: red;
		}
	}
</style>
