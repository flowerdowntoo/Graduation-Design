<template>
	<view>
		<movable-area class="movable-area">
			<movable-view class="movable-view" :x="x" :y="y" direction="all">
				<van-button round type="info">发布</van-button>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x: 320, //x坐标
				y: 500, //y坐标
			}
		}
	}
</script>

<style lang="scss">
	$all_width: 110rpx;
	$all_height:110rpx;

	.movable-area {
		height: 100vh;
		width: 750rpx;
		top: 0;
		z-index: 100000;
		position: fixed;
		pointer-events: none; //此处要加，鼠标事件可以渗透

		.movable-view {
			border-radius: 50%;
			width: $all_width;
			height: $all_height;
			pointer-events: auto; //恢复鼠标事件
			image {
				width: $all_width;
				height: $all_height;
			}

			button {
				background-color: darkturquoise;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 11px;
				width: $all_width;
				height: $all_height;
				border-radius: 50%;

			}
		}
	}
</style>
