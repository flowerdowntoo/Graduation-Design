<template>
	<view class="container">

		<u-form :model="form" ref="uForm" label-width="150rpx">

			<u-form-item label="名称" prop="userInfo.name" borderBottom ref="item1" required="true">
				<u--input v-model="model1.userInfo.name" border="none"></u--input>
			</u-form-item>
			<u-form-item label="所属分类" prop="userInfo.fenlei" borderBottom ref="item1" required="true">
				<u--input v-model="model1.userInfo.fenlei" border="none"></u--input>
			</u-form-item>
			<u-form-item label="手机号" prop="userInfo.phone" borderBottom ref="item1" required="true">
				<u--input v-model="model1.userInfo.phone" border="none"></u--input>
			</u-form-item>
			<u-form-item label="封面图片" required="true">

				<u-upload :fileList="fileList2" @afterRead="afterRead" @delete="deletePic" name="3" multiple
					:maxCount="10" :previewFullImage="true"></u-upload>
			</u-form-item>


			<u-form-item label="所在区域" prop="userInfo.address" borderBottom @click="selectAddress()"
				ref="item1" required="true">
				<u--input v-model="addressInfo.address" disabled disabledColor="#ffffff" placeholder="请选择区域"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

		

			<!-- <van-field v-model="phone" required label="位置坐标" placeholder="请输入手机号" error-message="手机号格式错误" /> -->

			<u-form-item label="详细地址" prop="userInfo.addressDetail" borderBottom ref="item1" required="true">
				<u--input v-model="model1.userInfo.addressDetail" border="none"></u--input>
			</u-form-item>
			
			<u-form-item label="营业时间" prop="userInfo.yysj" borderBottom ref="item1" required="true">
				<view><text @click="showyysjPicker = true;yysjStart = true">{{yysj.start}}</text> 至 <text  @click="showyysjPicker = true;yysjEnd = true">{{yysj.end}}</text></view>
			</u-form-item>
			
<!-- 			<van-field v-model="phone" required label="营业时间" required="true"> 
				<template #input class="yysj">

					<text @click="showyysjPicker = true;yysjStart = true">{{yysj.start}}</text> 至 <text
						@click="showyysjPicker = true;yysjEnd = true">{{yysj.end}}</text>

				</template>

			</van-field> -->

			<u-form-item label="环境照片" required="true">

				<u-upload :fileList="fileList3" @afterRead="afterRead" @delete="deletePic" name="3" multiple
					:maxCount="10" :previewFullImage="true"></u-upload>
			</u-form-item>

			<u-form-item label="简介描述" labelPosition="left" required="true">
				<u--textarea v-model="value3" placeholder="请输入内容" autoHeight></u--textarea>
			</u-form-item>



			<view class="title">入驻费用</view>

			<u-form-item>
				<u-radio-group v-model="value" placement="column" iconPlacement="right">
					<u-radio activeColor="red" label="一个月(99金币)"></u-radio>
					<u-radio activeColor="red" label="三个月(199金币)"></u-radio>
				</u-radio-group>
			</u-form-item>
			<view class="title">支付方式</view>
			<u-form-item>
				<u-radio-group v-model="pay" placement="column" iconPlacement="right">
					<u-radio  :customStyle="{marginBottom: '8px'}" activeColor="red" label="在线支付"></u-radio>
					<u-radio :customStyle="{marginBottom: '8px'}" activeColor="red" label="支付"></u-radio>
				</u-radio-group>
			</u-form-item>
			<!-- 		<van-radio-group v-model="pay">
			<van-cell-group inset>
				<van-cell title="在线支付" clickable @click="pay = '1'">
					<template #right-icon>
						<van-radio name="1" />
					</template>
				</van-cell>
				<van-cell title="余额支付" clickable @click="pay = '2'">
					<template #right-icon>
						<van-radio name="2" />
					</template>
				</van-cell>
			</van-cell-group>
		</van-radio-group> -->


			<van-button type="primary" size="large">提交申请</van-button>


			<u-datetime-picker :show="showyysjPicker" @confirm="onConfirm" @cancel="showyysjPicker = false" mode="time">
			</u-datetime-picker>

		</u-form>
		
	</view>

</template>

<script>
	export default {

		data() {
			return {
				value5: '',
				showyysjPicker: false,
				yysjStart: false,
				yysjEnd: false,
				yysj: {
					"start": '00:00',
					'end': '00:00'
				},
				radiovalue1: "1",
				addressInfo: {
					address: ''
				},
				pay: "1",
				fileList3: [{

				}],
			}
		},
		methods: {
			radioChange(n) {
				console.log('radioChange', n);
			},
			closePopu() {
				this.yysjStart = false;
				this.yysjEnd = false;
				this.showyysjPicker = false

			},


			onConfirm(value) {

				if (this.yysjEnd) {
					this.yysj.end = value.value;
					console.log(this.yysj)
					this.yysjEnd = false;
				} else {
					this.yysj.start = value.value;
					console.log(this.yysj);
					this.yysjStart = false;
				}


				this.showyysjPicker = false;
			},
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

		},
		onLoad(e) {
			this.key = e.key;

		}
	}
</script>

<style lang="scss">
	.title {
		background-color: #f5f5f5;
	}

	.container {
		background-color: white;
		padding: 30rpx;
	}
</style>
