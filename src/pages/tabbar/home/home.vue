<template>
  <view>
    <Header :bg-color="bgColor">
      <text v-if="lastFlag">喵酷科技</text>
    </Header>

    <HomeTop/>

    <HomeProduct/>

    <HomeCount/>

    <HomeDemo/>
  </view>
</template>

<script>
import HomeProduct from "@/pages/tabbar/home/home-product";
import HomeTop from "@/pages/tabbar/home/home-top";
import HomeCount from "@/pages/tabbar/home/home-count";
import HomeDemo from "@/pages/tabbar/home/home-demo";
import Header from "@/components/header/Header";

export default {
  components: {Header, HomeDemo, HomeCount, HomeTop, HomeProduct},
  data() {
    return {
      lastFlag: false,
      bgColor: "transparent"
    };
  },
	onPageScroll({scrollTop}) {
		this.handleScroll(scrollTop);
	},
  methods:{
    handleScroll(scrollTop) {
      let flag = scrollTop > 100
      if(flag===this.lastFlag){

      }else{
        this.lastFlag = flag
        if (flag){
          this.bgColor = "skyblue"
        }else{
          this.bgColor = "transparent"
        }
      }

    }
  }
}
</script>

<style lang="scss">

</style>
