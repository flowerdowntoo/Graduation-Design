<template>
	<view>
			<button @click="toPage2()">huishou</button>
		<button @click="toPage()">abc</button>
		<van-tabs v-model:active="active">
		
			<van-tab title="最新发布">
			<mescroll-body ref="mescrollRef"  @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
										 
				<block v-for="(lista,listindex) in list" :key="listindex">
						
						<homeComment
						
						:item="lista"
						:index="listindex"
					
						></homeComment>
				<van-divider
				  style="padding: '5 10px'"
				>
				  
				</van-divider>

				</block>
				 </mescroll-body>
			</van-tab>
			<van-tab title="最新回复">内容 2</van-tab>
			<van-tab title="距离最近">内容 3</van-tab>
			<van-tab title="标签">内容 4</van-tab>
		</van-tabs>
	</view>		
</template>
<script> 
import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import homeComment from '../../component/home-comment.vue';	
	export default {
	mixins: [MescrollMixin], // 使用mixin
	components:{
		homeComment
	},
	data() {
		return {
			downOption:{
				auto:false
			},
			list:[
				{
					//文字
				  userimg:'/../static/cate_active.png',
				  username:'张三',
				  userage:'30',
				  sex:0,//0代表男，1 代表女
				  isguanzhu:false,
				  title:'庆祝祖国成立90周年！庆祝祖国成立90周年!庆祝祖国成立90周年!',
				  titleimg:["/../static/messi.jpg","/../static/messi.jpg","/../static/messi.jpg","/../static/messi.jpg","/../static/messi.jpg"],
				  video:false,
				  sharea:false,
				  positiona:'深圳 龙岗',
				  sharenum:30,
				  pinglunnum:100,
				  zannum:50
				   
				},{
					//文字
				  userimg:'/../static/cate_active.png',
				  username:'张三',
				  userage:'30',
				  sex:0,//0代表男，1 代表女
				  isguanzhu:false,
				  title:'庆祝祖国成立90周年！庆祝祖国成立90周年!庆祝祖国成立90周年!',
				  titleimg:["/../static/messi.jpg","/../static/messi.jpg","/../static/messi.jpg","/../static/messi.jpg"],
				  video:false,
				  sharea:false,
				  positiona:'深圳 龙岗',
				  sharenum:30,
				  pinglunnum:100,
				  zannum:50
				   
				}
				]
		}
	},
		methods: {
		upCallback(page) {
			
		},
		toPage(){
			uni.navigateTo({
				url:'/subpkg/publish/publish',
			});
		},
		toPage2(){
			uni.navigateTo({
				url:'/subpkg/huishou/huishou',
			});
		}
		}
	}
</script>

<style >
	.homeComment{
		padding-bottom: 20rpx;
		padding-top: 20rpx;
	}
</style>
