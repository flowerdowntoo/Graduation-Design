<template>
	<van-tabs v-model:active="active">
		<van-tab title="标签 1">
			<view class="shop_item" v-for="item in list" @click="toShopfont()">
				<image mode="widthFix" style="width: 100px;height: 100px;" src="../../static/home.png"></image>
				<view class="right">
					<view class="one">
						<view class="hot"><text>822</text>
							<van-icon name="fire" class="fire" />
						</view>
						<view class="text">乐平乐平乐资源又像是乐资源又像是</view>

					</view>
					<view>
						<van-icon name="clock" />00:00-23:59
					</view>
					<view>
						<view class="four">443.24km</view><view class="text"><van-icon name="location" />江江西乐平市江西乐平市江西乐平市江西乐平市西乐平市</view>
					</view>
				</view>
			</view>
		</van-tab>
		<van-tab title="标签 2">内容 2</van-tab>
		<van-tab title="标签 3">内容 3</van-tab>
		<van-tab title="标签 4">内容 4</van-tab>
	</van-tabs>
	
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
  <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
</van-action-bar>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,3,4]
			}
		},
		methods: {
			toShopfont(){
				uni.navigateTo({
					url:"/subpkg/shop_font/shop_font"
				});
			}
		}
	}
</script>

<style>
	.one {
		/* background-color: red; */
	}

	.right {
	
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.hot {
		/* background-color: aqua; */
		float: right;

	}

	.shop_item {
		
		display: flex;
		margin-bottom: 5px;
	}

	.four {
		/* background-color: aquamarine; */
		float: right;
	}

	.text {
		width: 200px;
		colof: #999;
		overflow: hidden;
		word-break: break-all;
		/* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;
		/* 超出部分省略号 */
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1;
		/** 显示的行数 **/
	}
</style>
