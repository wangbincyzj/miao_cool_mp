<template>
  <view class="top">
    <image class="topImage" src="../../../static/imgs/home/home.jpg"></image>
    <view class="topText">
      <text>喵酷</text>
      <text>互联网产品开发供应商</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "home-top"
}
</script>

<style scoped lang="scss">
.top {
  position: relative;
  width: 100%;
  height: 240px;

  .topImage {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .topText {
    position: absolute;
    z-index: 3;
    width: 100%;
    text-align: center;
    font-size: 16px;
    top: 30%;
    color: white;
    display: flex;
    flex-direction: column;
  }
}
</style>
