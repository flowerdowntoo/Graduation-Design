<template>
  <view>
      <button @click="toShopList()" type="primary">nutsui</button>
	  
	
  </view>
</template>

<script>
	export default {
		data() {
			return {
				
			} 
		},
		methods: {
			toShopList(){
				uni.navigateTo({
					url:"/subpkg/shop_list/shop_list"
				});
			}
		}
	}
</script>

<style>

</style>
