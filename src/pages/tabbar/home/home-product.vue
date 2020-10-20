<template>
  <view class="home-product">
    <view class="title">产品开发服务</view>
    <view class="list">
      <view class="list-item col" v-for="item in list" :key="item.title">
        <image class="image" :src="item.imagePath" mode="widthFix"></image>
        <text class="item-title">{{item.title}}</text>
        <text class="item-detail">{{item.detail}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "home-product",
  data() {
    return {
      list: [
        {title:"App开发", detail: "多领域APP开发解决方案，满足各种业务需求", imagePath: "/static/imgs/home/item-1.png"},
        {title:"全平台小程序", detail: "快速引流，提高用户访问，功能灵活多样", imagePath: "/static/imgs/home/item-2.png"},
        {title:"物联网", detail: "定制化设计，全场景实现，设备互联完美统一", imagePath: "/static/imgs/home/item-3.png"},
        {title:"区块链", detail: "去中心化的共识机制，交易透明，数据不可篡改", imagePath: "/static/imgs/home/item-4.png"},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .row{
    display: flex;
    flex-wrap: wrap;
  }
  .col{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-product{
    margin: 80rpx 0;
    .title{
      text-align: center;
      font-weight: 600;
      font-size: 18px;
    }
    .list{
      display: flex;
      flex-wrap: wrap;
      .list-item{
        width: 50%;
        padding: 30rpx;
        .image{
          width: 40%;
        }
        text-align: center;
        font-size: 12px;
        .item-title{
          font-weight: 600;
        }
      }
    }
  }
</style>
