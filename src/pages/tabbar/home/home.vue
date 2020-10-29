<template>
  <Page :header-color="bgColor" is-body-topping>
    <template #header>
      <text v-if="lastFlag">喵酷科技</text>
    </template>

    <template #default>

      <HomeTop/>

      <HomeProduct/>

      <HomeCount/>

      <HomeDemo/>

    </template>
  </Page>
</template>

<script>
import HomeProduct from "@/pages/tabbar/home/home-product";
import HomeTop from "@/pages/tabbar/home/home-top";
import HomeCount from "@/pages/tabbar/home/home-count";
import HomeDemo from "@/pages/tabbar/home/home-demo";
import Header from "@/components/header/Header";
import Page from "@/components/page/Page";

export default {
  components: {Page, Header, HomeDemo, HomeCount, HomeTop, HomeProduct},
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
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>
