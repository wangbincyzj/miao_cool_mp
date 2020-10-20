<template>
  <view class="demo-list-item col" @click="handleItemClick">
    <view class="image-wrapper col">
      <image class="image" :src="obj.src"></image>
    </view>
    <view class="text-wrapper col">
      <text class="title">{{obj.title}}</text>
      <text class="detail">{{obj.detail}}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "demo-list-item",
  props:{
    obj:{}
  },
  methods:{
    handleItemClick() {
      console.log(this.obj.id)
      uni.navigateTo({
        url: `/pages/demo/detail/detail?id=${this.obj.id}`,
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .demo-list-item{
    padding-top: 10px;
    .image-wrapper{
      padding: 30px 10px;
      width: 80%;
      background-color: #fff;
      .image{
        width: 200rpx;
        height: 200rpx;
      }
    }
    .text-wrapper{
      width: 60%;
      background: #fff;
      position: relative;
      top: -10px;
      -webkit-box-shadow: 0 0 8px -5px #2c2c2c;
      box-shadow: 0 0 8px -5px #2c2c2c;
      color: #333;

      .detail{
        width: 100%;
        color: $uni-text-color-grey;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        text-overflow: ellipsis;
      }
    }
  }
</style>
