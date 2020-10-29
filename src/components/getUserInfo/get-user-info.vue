<template>
  <view class="getUserInfo">
    <view class="header line">
      <u-image class="img" src="/static/mp_logo.png" mode="widthFix"></u-image>
      <text class="title">欢迎来到喵酷科技</text>
    </view>
    <view class="content line">
      <view class="line1">为提供更优质的服务,喵酷科技需要获取以下信息</view>
      <view class="line2">你的公开信息(昵称、头像等)</view>
    </view>
    <view class="footer">
      <u-button open-type="getUserInfo" @getuserinfo="getUserInfo">确认</u-button>
    </view>
  </view>
</template>

<script>
export default {
  name: "get-user-info",
  methods: {
    getUserInfo(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
  .getUserInfo{
    padding: 50rpx;
  }
  .line{
    margin-bottom: $mk-spacing-row-lg;
  }
  .header{
    display: flex;
    align-items: center;
    .img{
      width: 70rpx;
      height: 70rpx;
      margin-right: 20rpx;
    }
    .title{
      font-weight: 600;
      font-size: 40rpx;
    }
  }
  .content{
    .line1{
      margin-bottom: $mk-spacing-row-base;
    }
    .line2{
      font-size: $font-small;
      color: $text-info;
    }
  }
</style>
