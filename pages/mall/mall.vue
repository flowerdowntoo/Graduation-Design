<template>
	<view class="uni-flex uni-column">
		<van-tree-select
		  @click-nav="clickNav"
		  v-model:main-active-index="activeIndex"
		  :items="items"
		  height="100vh"
		>
		<template #content>
			<view>
				<view v-for="(item, index) in scoreList" :key="index" class="uni-column" style="float: left;width: 50%;">
					<image src='../../static/messi.jpg' class="goods_image"
						style="width: 250rpx;height: 250rpx;margin:20rpx 16rpx;text-align: center;" mode="aspectFill"></image>
					<view style="text-align: left;margin-left: 16rpx;">
						<text class="content_title" style="width: 350rpx;">{{item.name}}</text>
					</view>
					<view class="goods-bottom">
						<view class="goods_bottom_left">
							<image src="../../static/money.png" style=" width: 20rpx;height: 20rpx;margin-bottom: -5rpx;">
							</image>
							<text style="color: #EF9B3B;font-size: 28rpx;">{{item.score/10}} + {{item.money}}</text>
						</view>
						<view class="duihuanbtn">
							<van-button round plain hairline type="danger" size="small" @click="toGoodsDetail">兑换</van-button>
			<!-- 				<u-button type="primary" plain="true" hairline="true" @click="toGoodsDetail" shape="circle" size="small" text="立即兑换"
								color="green"></u-button> -->
						</view>
					</view> 
				</view>
			</view>
		</template>
		</van-tree-select>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeId:1,
				activeIndex:0,
				items:[
				      {
						id:'1',
				        text: '家具日用',
				      
				      },
				      {
						  id:'2',
				        text: '生鲜蔬菜',
				       
				      },
					  {
						  id:'3',
					    text: '工具使用',
					   
					  },
				    ],
				scoreList: [{
					name: "盆子",
					score: '500',
					money:5000
				}, {
					name: "矿泉水",
					score: '500',
					money:60
				}],
				scoreList2: [{
					name: "洗洁精",
					score: '500',
					money:500
				}, {
					name: "一次性手套",
					score: '500',
					money:60
				}]
			}
		},
		onLoad(option) {
			// this.loadData();
		},
		methods: {
			// loadData(){
			// 	uni.request({
			// 		url: 'http://'+this.$storess.state.serverUrl+'/score/gs', //仅为示例，并非真实接口地址。
			// 		success: (res) => {
			// 			console.log(res.data);
			// 			this.scoreList = res.data.rs;
			// 		}
			// 	});
			// },
			//详情页
			taskDetail(item) {
				uni.navigateTo({
					url: '/pages/index/task_detail?item=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			toGoodsDetail(){
				uni.navigateTo({
					url:'/subpkg/goods_detail/goods_detail',
				})
			},
			clickNav(index){
				if(index.detail.index == 1){
					// this.scoreList2 = this.scoreList
				}else{
					this.scoreList = this.scoreList2
				}
				
				// console.log(this.items[index.detail.index].id)
			}
		}
	}
</script>

<style lang="scss">
	.duihuanbtn {
		margin: auto;
		

	}

	.goods-bottom {
		margin-left: 16rpx;
		display: flex;
		justify-content: space-between;
		.goods_bottom_left{
			display: flex;
			align-items: center;
		}

	}

	.title {}

	.goods_image {
		border-radius: 30rpx;
	}
</style>
