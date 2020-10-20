<template>
  <view class="home-count">
    <image class="image" src="/static/imgs/home/home-count.jpg" mode="aspectFill"></image>
    <view class="textArea col">
      <text class="t1">不大不小, 刚刚好</text>
      <text class="t2"><text style="color: #007aff; font-weight: 600">喵酷</text>希望成为你最靠谱,最信任的技术合伙人</text>
    </view>
    <view class="count-list row">
      <view class="count-item col" v-for="item in list" :key="item.text">
        <view class="line-1">
          <text class="item-num">{{item.num}}</text>
          <text class="item-unit">{{item.unit}}</text>
        </view>
        <view class="line-2">
          <text class="item-num-text">{{item.text}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "home-count",
  data() {
    return {
      list: [
        {num: "10", unit: "年", text: "坚持"},
        {num: "100", unit: "名", text: "队员"},
        {num: "10+", unit: "地", text: "城市"},
        {num: "100+", unit: "个", text: "案例"}
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.home-count {
  width: 100%;
  height: 200px;
  overflow: hidden;
  color: white;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .textArea{
    width: 100%;
    top: 20%;
    position: absolute;
    z-index: 2;
    text-align: center;
    .t1{
      font-weight: 600;
      font-size: 18px;
    }
  }
  .count-list{
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 50%;

    .count-item{
      width: 25%;
      .item-num{
        font-weight: 600;
        font-size: 18px;
        color: #4cd964;
        margin-right: 5rpx;
      }
    }
  }
}
</style>
