<template>
	<view class="container">
		<view class="comment_head">
			<view class="comment_top">
				<view class="left_img">
					<image src="../../static/messi.jpg" style="width: 100rpx;height: 100rpx;"></image>
				</view>
				<view class="right">
					<view class="top_name">人在路途</view>
					<view class="bottom_time">1月25日 19:25</view>
				</view>
			</view>
			<view class="comment_bottom">
				<view class="location">
					<van-icon name="location" /><text class="viewCount" @click="openMap">{{address}}</text>
				</view>
				<view class="km">距离您<text>1353.84km</text></view>
			</view>
		</view> 
		<my-divider></my-divider>
		<view class="comment_body">
			<view class="comment_detail">确实是这样1231231231232131231232</view>
			<view class="comment_data">
				<view class="viewCount">
					<van-icon name="eye-o" /><text class="viewCount">19121</text>
				</view>
				<view class="commentCount">
					<van-icon name="comment-o" /><text class="commentCount">19121</text>
				</view>
				<view class="goodsCount">
					<van-icon name="good-job-o" /><text class="goodsCount">19121</text>
				</view>
			</view>
		</view>

		<view class="comment_tail">
			<view class="comment_title">
				推荐帖子
			</view>
			<hb-comment ref="hbComment" @add="add" @del="del" @like="like" @focusOn="focusOn" :deleteTip="'确认删除？'"
				:cmData="commentData" v-if="commentData"></hb-comment>
		</view>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '17605093090',
				address: '上海',
				latitude: 24.61854, //纬度
				longitude: 118.24722, //经度
				commentData: {},
				options: [{
					icon: 'home',
					text: '首页'
				}, {
					icon: 'redo',
					text: '分享',

					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'star',
					text: '收藏',

				}],
				buttonGroup: [{
						text: '评论',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '联系Ta',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					}
				],
				"focus": false, // 输入框自动聚焦
				"submit": false, // 弹出评论
				"KeyboardHeight": 0 // 键盘高度
			}
		},
		onLoad() {
			this.abc()
		},
		methods: {
			like(commentId) {
				console.log(commentId)
				this.$refs.hbComment.likeComplete(commentId);
			},
			del(commentId) {
				console.log(commentId)
				this.$refs.hbComment.deleteComplete(commentId);
			},
			add(commentReq) {
				// console.log(commentReq)
				var a = {
					"id": 16,
					"owner": false,
					"hasLike": false,
					"likeNum": 2,
					"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797761970/0",
					"nickName": "我",
					"content": commentReq.content,
					"parentId": commentReq.pId,
					"createTime": "2021-07-02 17:05:50"
				};

				this.commentData.comment.push(a);
				this.commentData.commentSize++;
				this.commentData.comment = this.getTree(this.commentData.comment)
				this.$refs.hbComment.addComplete();
				this.toBottom()
			},
			focusOn(commentReq) {
				console.log(commentReq)
			},

			abc() {
				var res = {
					"readNumer": 193,
					"commentList": [{
							"id": 1,
							"owner": false,
							"hasLike": false,
							"likeNum": 2,
							"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
							"nickName": "超长昵称超长...",
							"content": "啦啦啦啦",
							"parentId": null,
							"createTime": "2021-07-02 16:32:07"
						},
						{
							"id": 2,
							"owner": false,
							"hasLike": false,
							"likeNum": 2,
							"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797761970/0",
							"nickName": "寂寞无敌",
							"content": "我是评论的评论",
							"parentId": 1,
							"createTime": "2021-07-02 17:05:50"
						},
						{
							"id": 4,
							"owner": true,
							"hasLike": true,
							"likeNum": 1,
							"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797763270/0",
							"nickName": "name111",
							"content": "评论啦啦啦啦啦啦啦啦啦啦",
							"parentId": null,
							"createTime": "2021-07-13 09:37:50"
						},
						{
							"id": 5,
							"owner": false,
							"hasLike": false,
							"likeNum": 0,
							"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
							"nickName": "超长昵称超长...",
							"content": "超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论超长评论",
							"parentId": null,
							"createTime": "2021-07-13 16:04:35"
						},
						{
							"id": 13,
							"owner": false,
							"hasLike": false,
							"likeNum": 0,
							"avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
							"nickName": "超长昵称超长...",
							"content": "@寂寞无敌 你怕不是个大聪明",
							"parentId": 1,
							"createTime": "2021-07-14 11:01:23"
						}
					]
				};
				this.commentData = {
					"readNumer": res.readNumer,
					"commentSize": res.commentList.length,
					"comment": this.getTree(res.commentList)
				}
			},
			getTree(data) {
				let result = [];
				let map = {};
				data.forEach(item => {
					map[item.id] = item;
				});
				data.forEach(item => {
					let parent = map[item.parentId];
					if (parent) {
						(parent.children || (parent.children = [])).push(item);
						// console.log(item)
					} else {
						// (result.children || (result.children = [])).push(item);
						// console.log(item)
						result.push(item);
						
					}
				});
				return result;
			},
			openMap() {
				uni.openLocation({
					// latitude: parseFloat(this.details.lat),
					// longitude: parseFloat(this.details.lon),
					// 上海东方明珠的定位
					latitude: this.latitude, //纬度
					longitude: this.longitude, //经度

					address: address,
					// name: "景点名称"

				})
			},
			buttonClick(e) {
				if (e.index == 0) { //如果点击第一个按钮触发
					this.$refs.hbComment.commentInput();
				} else {
					uni.makeBluetoothPair({
						phoneNumber: this.phone
					})
				}
			},
			toBottom() {
				this.$nextTick(() => {
			
					// document.getElementById("scrolldIV2").scrollIntoView();	 //h5端定位到指定位置	
					setTimeout(() => {
						uni.createSelectorQuery().select(".comment_tail").boundingClientRect(function(
						res) { //定位到你要的class的位置
							console.log("标签获取====>", res)
							uni.pageScrollTo({
								scrollTop: res.height,
								duration: 0
							});
						}).exec()
			
					}, 50)
			
					//this.viewIndex = "im_" + this.ChatList.length;
			
				})
			},
			
		}
	}
</script>

<style lang="scss">
	.container {
		// background-color: red;
		margin: 10rpx;
	}

	.comment_head {
		display: flex;
		flex-direction: column;

		.comment_top {
			display: flex;

			.left_img {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.right {
				display: flex;
				flex-direction: column;
				padding-left: 10rpx;
				justify-content: space-around;

				.top_name {
					font-weight: bold;
				}

				.bottom_time {
					color: #808080;
					font-size: 12px;
				}
			}
		}

		.comment_bottom {
			padding: 30rpx;
			display: flex;
			justify-content: space-between;

			.km {
				color: #808080;
			}

			.viewCount {
				color: rgb(0, 0, 238);
			}
		}
	}

	.comment_body {
		padding-top: 20rpx;
		display: flex;
		flex-direction: column;

		.comment_detail {
			font-weight: bold;
		}

		.comment_data {
			font-size: 13px;
			display: flex;
			margin: 20rpx;

			view {
				display: flex;
				padding-right: 10rpx;
			}
		}
	}

	.comment_tail {

		font-weight: bold;

		.comment_title {
			text-indent: 10px;
			line-height: 30px;
			border-left: 5px solid skyblue;
		}
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>
