<template>
	<view class="page">
		<u-modal v-model="show" title="输入名称进入聊天室" :show-confirm-button="false">
			<view class="form">
				<u-input v-model="username" width="80%" />
				<u-button size="mini" @click="close">
					确定
				</u-button>
			</view>
		</u-modal>

		<!--信息区-->
		<view class="contentWrapper">
			<scroll-view class="scrollView" scroll-y>
				<view :class="msg.self?'right':'left'" v-for="msg in msgs" :key="msg">
					<view class="name">
						<span class="circle">{{msg.username}}</span></view>
					<text class="content">
						{{msg.msg}}
					</text>
				</view>
				<!--<view class="right">
          <view class="name">
            <span class="circle">张三</span></view>
          <view class="content">scroll-view 不适合放长列表，有性能问题。长列表滚动和下拉刷新，应该使用原生导航栏搭配页面级的滚动和下拉刷新实现。包括在app-nvue页面，长列表应该使用list而不是scroll-view</view>
        </view>-->
			</scroll-view>
		</view>


		<!--输入区-->
		<view v-if="username" class="inputWrapper">
			<view class="inputArea">
				<input type="text" v-model="msg" class="sendInput" />
				<button size="mini" class="sendBtn" @click="sendMsg">发送</button>
			</view>
		</view>
	</view>


</template>

<script>
	import {
		websocketConfig
	} from "@/config/websocket";

	export default {
		data() {
			return {
				conn: null,
				show: true,
				username: "",
				msg: "",
				msgs: [
					// {from: "", msg: ""}
				]
			};
		},
		methods: {
			open() {
				this.show = true;
			},
			close() {
				if (!this.username) {
					uni.showToast({
						title: "请输入用户名",
						icon: "none"
					})
				} else {
					uni.showToast({
						title: "欢迎",
						success: () => {
							this.show = false
							this.getConn()
						}
					})
				}
			},
			getConn() {
				let conn = uni.connectSocket({
					url: websocketConfig.ip + "/" + this.username,
					fail: () => {
						console.log("fail")
					},
					complete: () => {}
				})
				conn.onMessage(({
					data
				}) => {
					console.log(data)
					let split = data.split(":", 2)
					console.log(split)
					let username = split[0]
					let msg = split[1]
					this.msgs.push({
						msg,
						self: username === this.username,
						username
					})
				})
				this.conn = conn
			},
			sendMsg() {
				if (!this.msg) {
					return
				} else {
					this.conn.send({
						data: this.msg
					})
					this.msg = ""
				}
			},
		},
		created() {
			let a = uni.getSystemInfoSync()
			this.test()
		}

	}
</script>

<style lang="scss">
	.page {
		background-color: #eee;
		display: flex;
		flex-direction: column;
		height: 100%;

		.contentWrapper {
			height: calc(100% - 60rpx);
			overflow: hidden;

			.scrollView {
				height: 100%;
			}
		}

		.inputWrapper {
			height: 60rpx;
		}
	}

	.form {
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.inputArea {
		display: flex;
		align-items: center;
		padding: 5rpx;

		.sendInput {
			height: 60rpx;
			flex: 1;
			border-bottom: 1px silver solid;
		}
	}

	.test {
		height: 50px;
		margin: 10px;
		background-color: silver;
	}

	.left {
		display: flex;
		padding-right: 100rpx;
		margin: 50rpx 0;

		.name {
			width: 100rpx;
			text-align: center;
			margin: 0 5rpx;

			.circle {
				padding: 0 8rpx;
				border: 1px solid red;
				border-radius: 8rpx;
				background-color: white;
			}
		}

		.content {
			flex: 1;
			border-radius: 8rpx;
			border: 1px solid #333333;
			padding: 10rpx;
			background-color: white;
		}
	}

	.right {
		display: flex;
		padding-left: 100rpx;
		margin: 50rpx 0;

		.name {
			order: 10;
			width: 100rpx;
			text-align: center;
			margin: 0 5rpx;

			.circle {
				padding: 0 8rpx;
				border: 1px solid red;
				border-radius: 8rpx;
				background-color: white;
			}
		}

		.content {
			order: 2;
			flex: 1;
			border-radius: 8rpx;
			border: 1px solid #333333;
			padding: 10rpx;
			background-color: white;

		}
	}
</style>
