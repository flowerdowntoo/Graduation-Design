<template>
	<view class="container">
		<view class="header1">

		
	<van-image width="100%" height="100%" round class="myPhoto" src="../../../static/messi.webp">
			</van-image>
			<view class="info">
				<view class="namephone">
					<view class="name">洪晓斌</view>
					<view>17605093090</view>
				</view>
				<view class="address">
					<view>
						<van-icon name="clock" />福建省厦我巷镇窗东村
					</view>
				</view>
			</view>
			<uni-icons type="forward" size="30"></uni-icons>
		</view>
		<view class="body">
			<!--pages/cssCase/newTab/index.wxml-->
			<view class="mb20">
				<view class="head_tab ">
					<block v-for="(item, index) in tab" :key="index">
						<view @click="navTab(index,$event)" :class=" [index==nav_type&&'head_item_active','head_item']"
							>{{item.name}}</view>
					</block>
				</view>

				<view class="head_con" v-if="nav_type == 0">

					<van-cell is-link title="选择时间" @click="openDatetimePicker" :value="birthday" />
					<view class="huishouleimu">
						<SimpleDateTimePicker ref="myPicker" @submit="handleSubmit" :start-year="2000"
							:end-year="2030" />

						<view class="top">
							<view>回收泪目</view>
						</view>
						<view class="middle">

							<view v-if="itemList.length != 0" class="item" v-for="(item,index) in itemList"
								:key="index">
								<text class="item-name">纸类/纯黄纸</text>
								<text class="item-weight">5-10kg</text>
								<text class="item-price">1.50元/kg</text>
								<view class="circle">
									<van-icon name="minus" />
								</view>
							</view>
							<view v-else>
								<image style="width: 100rpx; height: 100rpx;" src="../../static/order.png"></image>
								<view>无物品回收</view>
							</view>
						</view>
						<view class="bottom">
							<view class="price">预估价：￥<text class="count">0.00</text></view>
							<view class="bottom-right">
								<uni-icons type="plusempty" size="30" @click="showPopup"></uni-icons>
							</view>

						</view>
					</view>
					<view class="memo">
						备注
						<uni-easyinput style="font-size:15px" type="textarea" autoHeight v-model="value"
							placeholder="请输入内容"></uni-easyinput>

					</view>
					<view class="notify">
						通知须知
						<rich-text :nodes="strings"></rich-text>
					</view>

				</view>
				<!--公益捐赠-->
				<view class="head_con" v-if="nav_type == 1">
					<van-cell is-link title="选择时间" @click="openDatetimePicker" :value="birthday" />
					<van-cell is-link title="捐赠项目" value="birthday" />
					<view class="huishouleimu">
						<SimpleDateTimePicker ref="myPicker" @submit="handleSubmit" :start-year="2000"
							:end-year="2030" />

						<view class="top">
							<view>回收泪目</view>
						</view>
						<view class="middle">
							<!-- <image style="width: 100rpx; height: 100rpx;" src="../../static/order.png"></image>
							<view>无物品回收</view> -->
							<view class="item" v-for="(item,index) in itemList" :key="index">
								<text class="item-name">纸类/纯黄纸</text>
								<text class="item-weight">5-10kg</text>
								<text class="item-price">1.50元/kg</text>
								<view class="circle">
									<van-icon name="minus" />
								</view>
							</view>
						</view>
						<view class="bottom">
							<view class="price">感谢您对公益事业的支持！</view>
							<view class="bottom-right">
								<uni-icons type="plusempty" size="30" @click="showPopup"></uni-icons>
							</view>

						</view>
					</view>
					<view class="memo">
						备注
						<uni-easyinput style="font-size:15px" type="textarea" autoHeight v-model="value"
							placeholder="请输入内容"></uni-easyinput>

					</view>
					<view class="notify">
						通知须知
						<rich-text :nodes="strings"></rich-text>
					</view>

				</view>
			</view>

		</view>

		<!--底部bar-->
		<view class="submitbar" v-if="nav_type ==0">

			<view class="submitbtn-left">
				<view class="popup-bottom-left">
					<view class="popup-price" style="color: darkorange;">
						<text style="font-weight: bold;color: #000;">预估价：
						</text>
						￥
						<text class="count">0.00</text><br>
					</view>
					<view>
						<text style="color: #000;font-weight: 100;font-size: 13px;margin-top: 0;">成交价根据实际为准</text>
					</view>
				</view>

			</view>
			<view class="submitbtn">
				<van-button round type="primary">圆形按钮</van-button>
			</view>
		</view>
		<view v-else class="submitbar">
			<view class="submitbtn2">
				<van-button round type="primary">圆形按钮</van-button>
			</view>
		</view>


		<!-- 弹出层 -->
		<van-popup @close="closePopu" :show="popushow" closeable position="bottom">
			<view class="popup-huishouleimu">


				<view class="popup-top">
					<view>回收泪目</view>
				</view>
				<van-tabs v-model:active="active" scrollspy>
					<van-tab v-for="index in 8" :title="'选项 ' + index">
						<view class="popup-middle">
							<view> 选择分类(可多选)</view>
							<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120"
								show-scrollbar="false">
								<view id="demo1" class="scroll-view-item_H uni-bg-red">
									<view class="item">
										<image src="../../static/Reserved.png"></image>
										<view>无敌</view>
									</view>
								</view>
								<view id="demo2" class="scroll-view-item_H uni-bg-green">
									<view class="item">
										<image src="../../static/Reserved.png"></image>
										<view>无敌</view>
									</view>
								</view>
								<view id="demo3" class="scroll-view-item_H uni-bg-blue">
									<view class="item">
										<image src="../../static/Reserved.png"></image>
										<view>无敌</view>
									</view>
								</view>
								<view id="demo4" class="scroll-view-item_H uni-bg-blue">
									<view class="item">
										<image src="../../static/Reserved.png"></image>
										<view>无敌</view>
									</view>
								</view>
								<view id="demo5" class="scroll-view-item_H uni-bg-blue">
									<view class="item">
										<image src="../../static/Reserved.png"></image>
										<view>无敌</view>
									</view>
								</view>
							</scroll-view>
						
							<view class="weight-text">请选择预估重量</view>
							<view class="weight-btn">
								<van-button size="small" round plain type="primary">朴素按钮</van-button>
								<van-button size="small" round plain type="primary">朴素按钮</van-button>
								<van-button size="small" round plain type="primary">朴素按钮</van-button>
								<van-button size="small" round plain type="primary">朴素按钮</van-button>
							</view>
						</view>
						
						<view class="popup-bottom">
							<view class="popup-bottom-left" v-if="nav_type==0">
								<view class="popup-price" style="color: darkorange;">
									<text style="font-weight: bold;color: #000;">预估价：
									</text>
									￥
									<text class="count">0.00</text><br>
								</view>
								<view>
									<text style="color: #000;font-weight: 100;font-size: 13px;margin-top: 0;">成交价根据实际为准</text>
								</view>
						
							</view>
							<view class="popup-bottom-left" v-else-if="nav_type==1">
						
						
							</view>
							<view class="popup-bottom-right">
								<van-button round type="primary">&nbsp;&nbsp;添加&nbsp;&nbsp;</van-button>
							</view>
						
						</view>
					</van-tab>
				</van-tabs>
				
			</view>
		</van-popup>
	</view>
</template>

<script>
	import SimpleDateTimePicker from "../../uni_modules/buuug7-simple-datetime-picker/components/buuug7-simple-datetime-picker/buuug7-simple-datetime-picker.vue";
	export default {

		components: {
			SimpleDateTimePicker,
		},
		data() {
			return {
				tab: [{
						name: "上门回收"
					},
					{
						name: "公益捐赠"
					},
				],
				tabshow: true,
				strings: '<ol style="margin-left:center;padding-left:0; list-style-position:inside; "> <li > Coffee < /li> <li > Milk < /li> </ol>',
				itemList: [1, 2, 3, 4, 5],
				birthday: "",
				nav_type: 0,
				show: false,
				popushow: false

			}
		},

		methods: {

			openDatetimePicker() {
				this.$refs.myPicker.show();
			},

			// 关闭picker
			closeDatetimePicker() {
				this.$refs.myPicker.hide();
			},

			handleSubmit(e) {
				// {year: "2019", month: "07", day: "17", hour: "15", minute: "21"}
				console.log(e);
				this.birthday = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`;
			},
			showPopup() {
				console.log("我我")
				this.popushow = true;
			},
			navTab(i, e) {
				console.log(e)
				let {
					index
				} = e.currentTarget.dataset;

				if (this.nav_type === index || index === undefined) {
					return false;
				} else {
					this.nav_type = index;

				}
			},
			closePopu() {
				this.popushow = false
				console.log(123)
			},
			formatter(type, val) {
				if (type === 'year') {
					return val + '年';
				}
				if (type === 'month') {
					return val + '月';
				}
				if (type === 'day') {
					return val + '日';
				}
				return val;
			}
		}
	}
</script>

<style lang="scss">
	.submitbar {
		width: 100%;
		height: 100rpx;
		background-color: red;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;

		.submitbtn-left {
			margin-left: 20rpx;
			display: flex;
			justify-content: center;
			flex-direction: column;
		}

		.submitbtn {

			display: flex;
			justify-content: center;
			flex-direction: column;
		}

		.submitbtn2 {
			display: flex;
			justify-content: center;
			flex-direction: column;
			width: 100%;

			.van-button {
				width: 100%;
			}
		}
	}

	.container {
		padding-bottom: 100rpx;

	}

	.popup-huishouleimu {
		width: 100%;
		background: #red;
		border-radius: 30rpx 30rpx 20rpx 20rpx;
		background-color: azure;

		.popup-top {
			display: flex;
			align-items: center;
			width: 100%;
			height: 80rpx;
			background: #green;
			border-radius: 30rpx 30rpx 0rpx 0rpx;
			box-shadow: 5rpx 5rpx 5rpx rgba(235, 41, 70, 0.5);
			background-color: green;

			view {
				margin-left: 30rpx;
				color: aliceblue;
			}

		}


		.popup-middle {
			margin-top: 20rpx;
			margin-right: 20rpx;
			margin-left: 20rpx;

			display: flex;
			flex-direction: column;

			.scroll-view_H {
				display: flex;
				justify-content: center;
				align-items: center;


				white-space: nowrap;
				width: 100%;
			}

			.scroll-view-item_H {
				display: inline-block;
				width: 33%;
				margin-bottom: 20rpx;
				font-size: 36rpx;

				.item {
					margin-top: 20rpx;

					margin-left: 20rpx;
					background-color: white;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					image {
						height: 100rpx;
						width: 100rpx;
					}

				}

			}

			.weight-btn {
				display: flex;
				justify-content: space-around;
				margin-top: 20rpx;
				margin-bottom: 20rpx;
			}
		}

		.popup-bottom {

			height: 20%;
			display: flex;
			justify-content: space-between;

			.popup-bottom-right {

				margin: 20rpx;
				background: blue;

				background-color: white;
			}

			.popup-bottom-left {
				margin-left: 20rpx;
				display: flex;
				justify-content: center;
				flex-direction: column;
			}
		}
	}



	.select-time-panel {
		width: 324px;
		height: 360px;
		background: #ffffff;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #0743ea;
	}

	.example-body {
		background-color: #fff;
		padding: 10px;
	}



	html {
		background: linear-gradient(180deg, #c0e0e4 0%, #F4F4F4 100%);
		padding: 20rpx;
	}

	.head_tab {
		width: 100%;
		text-align: center;
		height: 85rpx;
		line-height: 85rpx;
		display: flex;
		background: linear-gradient(180deg, #d6001f 50%, #fff 50%);
		border-radius: 20rpx 20rpx 0 0;
		color: #ccc;
		font-size: 30rpx;
		overflow: hidden;

		&_four {
			border-radius: 20rpx;
		}

		.head_item {
			flex: 1;
			text-align: center;
			background: #d6001f;
			color: rgb(231, 199, 199);
			border-radius: 20rpx 20rpx 20rpx 0;
			text-shadow: -1rpx 0 #fff, 0 1rpx #fff, 1rpx 0 #fff, 0 -1rpx #fff;

			&:last-child {
				border-radius: 20rpx 20rpx 0 20rpx;
			}

			&_active {
				background: #fff;
				color: #333;
				text-shadow: -1rpx 0 #e98383, 0 1rpx #e98383, 1rpx 0 #e98383, 0 -1rpx #e98383;
			}
		}



	}

	.head_con2 {
		width: 100%;
		height: 100%;
		background: yellow;
		border-radius: 0 20rpx 20rpx;
		box-shadow: 5rpx 5rpx 5rpx rgba(235, 41, 70, 0.5);
	}

	.head_con {

		width: 100%;
		height: 100%;
		background: #fff;
		border-radius: 0 20rpx 20rpx;

		.huishouleimu {
			margin-left: initial;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 20rpx;
			width: 100%;
			background: #red;
			border-radius: 30rpx 30rpx 20rpx 20rpx;


			.top {

				display: flex;
				align-items: center;
				width: 90%;
				height: 80rpx;
				background: #green;
				border-radius: 30rpx 30rpx 0rpx 0rpx;
				box-shadow: 5rpx 5rpx 5rpx rgba(235, 41, 70, 0.5);
				background-color: green;

				view {
					margin-left: 30rpx;
					color: aliceblue;
				}

			}

			.middle {
				width: 90%;
				height: auto;
				background-color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				image {
					width: 20rpx;
					height: 20rpx;
				}

				.item {
					width: 100%;
					margin-top: 10rpx;
					margin-bottom: 10rpx;
					margin-left: 20rpx;
					display: flex;
					justify-content: space-between;

					.circle {
						display: flex;
						justify-content: center;
						margin-right: 50rpx;
						width: 45rpx;
						height: 45rpx;
						background-color: red;
						border-radius: 50px;
						/* 图形的半径 */


					}


				}
			}

			.bottom {
				width: 90%;
				height: 100rpx;
				align-items: center;
				background-color: red;
				display: flex;
				justify-content: space-between;

				.bottom-right {

					display: flex;
					justify-content: center;
					align-items: center;
					width: 100rpx;
					height: 100rpx;
					background: blue;
					border-radius: 30rpx 0rpx 20rpx 0rpx;
					background-color: white;
				}

				.price {

					background-color: pink;
					margin-left: 20rpx;

				}

			}
		}

		.memo {
			margin: 20rpx;
			font-size: 40rpx;
			font-weight: 500;
			border-radius: 30rpx 30rpx 30rpx 30rpx;

			.uni-easyinput {
				margin-top: 20rpx;
			}
		}

		.notify {
			margin-left: 20rpx;

			.num {
				list-style-type: decimal;
			}
		}

	}

	.head_tab_one {
		width: 450rpx;
		text-align: center;
		height: 85rpx;
		line-height: 85rpx;
		display: flex;
		border-radius: 43rpx;
		color: #ccc;
		font-size: 30rpx;
		overflow: hidden;
		background-color: #d6001f;

		.head_item {
			flex: 1;
			border-radius: 43rpx;

			&_active {
				background-color: #fff;
			}
		}
	}

	.head_tab_two {
		width: 450rpx;
		text-align: center;
		height: 85rpx;
		line-height: 85rpx;
		display: flex;
		border-radius: 43rpx;
		color: #ccc;
		font-size: 30rpx;
		overflow: hidden;
		background-color: #d6001f;

		.head_item {
			flex: 1;

			&_active {
				background-color: #fff;
			}
		}
	}

	.head_tab_three {
		width: 450rpx;
		text-align: center;
		height: 85rpx;
		line-height: 85rpx;
		display: flex;
		border-radius: 43rpx;
		color: #ccc;
		font-size: 30rpx;
		overflow: hidden;
		background-color: #d6001f;
		padding: 10rpx;
		box-sizing: border-box;

		.head_item {
			flex: 1;
			border-radius: 43rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			&_active {
				background-color: #fff;
			}
		}
	}

	.web_tab1 {
		position: relative;
		background: #d6001f;
		border-radius: 10px 0 10px 0;
		z-index: 10;
	}

	.header1 {
		
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.info {
		
		width: 60%;
		margin-left: 30rpx;

		.namephone {
			display: flex;

			.name {
				margin-right: 20rpx;
			}

		}

		.address {
			display: flex;
		}
	}

	.myPhoto {
		height: 150rpx;
		width: 150rpx;
		z-index: 2;
	}
</style>
