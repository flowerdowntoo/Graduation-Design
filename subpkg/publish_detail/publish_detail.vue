<template>
	<view class="container">
		<u-form :model="form" ref="uForm" label-width="150rpx">
			<u-form-item>
				<u--textarea border="none" v-model="value1" placeholder="请输入内容" height="150"></u--textarea>
			</u-form-item>
			<u-form-item>
				<u-upload :fileList="fileList3" @afterRead="afterRead" @delete="deletePic" name="3" multiple
					:maxCount="10" :previewFullImage="true">
					<image src="../../static/add.png" mode="widthFix" style="width: 160rpx;height: 160rpx;">点击上传图片
				</u-upload>
			</u-form-item>
			<text class="tip">温馨提示：请文明发帖，请不要发布虚假信息</text>

			<u-form-item label="地址" leftIcon="map" prop="userInfo.address" borderBottom @click="selectAddress()"
				ref="item1" >
				<u--input v-model="addressInfo.address" disabled disabledColor="#ffffff" placeholder="请选择区域"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="手机号" prop="userInfo.phone" borderBottom ref="item1" >
				<u--input v-model="model1.userInfo.phone" border="none" placeholder="请输入手机号"></u--input>
			</u-form-item>

			<u-form-item label="是否置顶">
				<u-switch v-model="switchVal" @change="change"></u-switch>
			</u-form-item> 
 
 
			<u-form-item>  
				<u-radio-group v-model="pay" placement="column" iconPlacement="right" >
					<u-radio borderBottom :customStyle="{marginBottom: '8px'}" activeColor="red" label="在线支付"></u-radio>
				  <view class="home-header-line"></view>
					<u-radio :customStyle="{marginTop: '8px'}"activeColor="red" >余额支付</u-radio>
					<view style="font-size: 10px;color: #808080;">可用金币<text style="color: red;">{{LeaveGold}}</text>({{isGoldEnough == false?'金币不足':''}})</view>
				</u-radio-group>
			</u-form-item>

		</u-form>

		<view style="margin:auto ;text-align: center;padding:0 10%;">
			<u-button @click="submit" type="primary" :ripple="true" ripple-bg-color="#909399"
				style="text-align: center;">立即发布({{gold}}金币)</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isGoldEnough:false,
				LeaveGold:'2',
				gold:'2',
				switchVal:false,
				pay: "1",
				addressInfo: {
					address: ''
				},
				fileList3: [{

				}],
			}
		},
		methods: {
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {

					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
			selectAddress() {
				console.log(132)
				// 点击调起地图选择位置
				const that = this
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						console.log('scope.userLocation获得授权', res)
						// 选择位置
						uni.chooseLocation({
							success: function(res) {
								console.log('选择地点成功', res)
								console.log('位置名称：' + res.name)
								console.log('详细地址：' + res.address)
								console.log('纬度：' + res.latitude)
								console.log('经度：' + res.longitude)
								that.addressInfo.address = res.address
								that.addressInfo.latitude = res.latitude
								that.addressInfo.longitude = res.longitude
								console.log(that.addressInfo.address)
							},
							fail(error) {
								console.log('选择位置失败', error)
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-header-line{
		background: #e0e3da;
		width: 100%;
		height: 2rpx;
	}
	.tip {
		background-color: #f5f5f5;
		font-size: 15px;
		color: #808080;
	}

	.container {
		background-color: white;
		padding: 20rpx;
	}
	.sbt_btn{
		
		u-button{
			width: 80%;
			display: flex;
			justify-content: center;
		}
		
	}
</style>
