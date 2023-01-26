<template>
	<view class="container">
		<u-form :model="form" ref="uForm" label-width="180rpx" labelAlign="left" >

			<u-form-item label="" label="姓名" prop="k.name" borderBottom ref="item1">
				<u--input v-model="key.username" border="none" placeholder="姓名"></u--input>
			</u-form-item>
			<u-form-item label="电话" prop="userInfo.phone" borderBottom ref="item1">
				<u--input v-model="key.phone" border="none" placeholder="电话"></u--input>
			</u-form-item>
			<u-form-item label="地区" prop="userInfo.phone" borderBottom ref="item1" @click="showPopup">

				<u--input disabled v-model="key.address" border="none" placeholder="请选择地区">
				</u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>


			<u-form-item label="详细地址" prop="userInfo.address" borderBottom ref="item1">
				<u--input v-model="key.detail" border="none" placeholder="详细地址"></u--input>
			</u-form-item>

			<u-form-item label="设置为默认地址" labelWidth="250">

				<u-switch slot="right" v-model="key.isdef" @change="SwtichChange"></u-switch>
			</u-form-item>
			<!-- 			<u-form-item :label-position="labelPosition" label="验证码" prop="code" label-width="150">
				<u-input :border="border" placeholder="请输入验证码" v-model="model.code" type="text"></u-input>
				<u-button slot="right" type="success" size="mini" @click="getCode">{{codeTips}}</u-button>
			</u-form-item>
 -->

		</u-form>

		<view style="margin:auto ;text-align: center;padding:0 10%;padding-bottom: 20rpx;padding-top: 60rpx;">
			<u-button :customStyle="btnSav" @click="toAddressAdd" shape="circle" type="primary" :ripple="true"
				ripple-bg-color="#909399" style="text-align: center;">保存</u-button>

		</view>
<!-- 		<view style="margin:auto ;text-align: center;padding:0 10%;">
			<u-button :customStyle="btnDel" @click="submit" shape="circle" type="primary" :ripple="true"
				ripple-bg-color="#909399" style="text-align: center;">删除</u-button>
		</view> -->

		<van-popup :show="popushow"  position="bottom">
			<van-area :area-list="areaList" @cancel="closePopu" @confirm="onConfirm" @change="onChange"/>
		</van-popup>

	</view>
</template>

<script>
	import {
		areaList
	} from '../../static/areaList.js';
	export default {

		data() {
			return {
				key:{},
				isDefault:false,
				address:"",
				popushow: false,
				areaList,
				btnSav: {

					color: 'white',
					backgroundColor: 'red'
				},
				// btnDel: {

				// 	color: 'black',
				// 	backgroundColor: 'white'
				// }
			}
		},
		methods: {

			showPopup() {

				this.popushow = true;
			},

			
			SwtichChange(val){
				this.isDefault =val;
				console.log(this.isDefault)
			},
			//value=0改变省，1改变市，2改变区
			onChange(picker, index, value) {

				// let val = picker.target.values;

				// console.log(val) //查看打印

				// let areaName = ''

				// for (var i = 0; i < val.length; i++) {

				// 	areaName = areaName + (i == 0 ? '' : '/') + val[i].name

				// }

				// this.carmodel = areaName

			},

			//确定选择城市

			onConfirm(val) {
	// console.log(val) //查看打印
	// 			console.log(val.target.values[0].name + "," + val.target.values[2].name)
				
				this.key.address = val.target.values[0].name+val.target.values[1].name+val.target.values[2].name
				
				this.popushow = false //关闭弹框

			},
			closePopu(){
				this.popushow = false;
			},
			toAddressAdd(){
				uni.navigateTo({
					url: `/subpkg/address_select/address_select`,
				})
			}

		},
		onLoad(e) {
			let currentSite = JSON.parse(e.key)
			this.key = currentSite;
			console.log(currentSite)
		}
	}
</script>

<style lang="scss">
	.container :not(u-button) {
		padding-left: 10rpx;
		padding-right: 5rpx;
	}
</style>
