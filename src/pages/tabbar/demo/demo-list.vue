<template>
  <view class="demo-list row">
    <template v-for="item in demoList" >
      <DemoListItem style="width: 50%" :obj="item" :key="item.id"/>
    </template>
  </view>
</template>

<script>
import DemoListItem from "@/pages/tabbar/demo/demo-list-item";
export default {
  name: "demo-list",
  components: {DemoListItem},
  data() {
    return {
      demoList: [
        {id: 27, title: "三瓜公社", detail: "旅游区社员通", src: "https://gw.pluss.cn/resources/images/upload/file_202003045844983.jpg"},
        {id: 64, title: "蛋白质检测", detail: "蛋白质检测", src: "https://gw.pluss.cn/resources/images/upload/file_202003030235660.jpg"},
        {id: 26, title: "狐狸小妖", detail: "专注进口美妆连锁", src: "https://gw.pluss.cn/resources/images/upload/file_202003032459161.jpg"},
        {id: 29, title: "隔离带售卖机", detail: "酒店便捷式自助售卖机", src: "https://gw.pluss.cn/resources/images/upload/file_202003032167604.jpg"},
        {id: 55, title: "顽皮小券", detail: "顽皮小券", src: "https://gw.pluss.cn/resources/images/upload/file_202003037140926.jpg"},
        {id: 28, title: "收银呗APP", detail: "为商户打造的专业收银平台", src: "https://gw.pluss.cn/resources/images/upload/file_202003036838583.jpg"},
        {id: 35, title: "粉客多APP", detail: "任务发布，线下推广神器", src: "https://gw.pluss.cn/resources/images/upload/file_202003038749604.jpg"},
        {id: 40, title: "水果拼团", detail: "水果拼团", src: "https://gw.pluss.cn/resources/images/upload/file_202002289371411.jpg"},
      ]
    }
  }
}
</script>

<style scoped>

</style>
