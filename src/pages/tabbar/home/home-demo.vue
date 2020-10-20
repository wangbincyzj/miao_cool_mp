<template>
  <view class="home-demo">
    <view class="title">成功案例</view>
    <DemoList/>
  </view>
</template>

<script>
import DemoList from "@/pages/tabbar/demo/demo-list";
export default {
  name: "home-demo",
  components: {DemoList}
}
</script>

<style scoped lang="scss">

.home-demo{
  background-color:#eee;
  padding: 80rpx 0;
  .title{
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 40rpx;
  }
}

</style>
