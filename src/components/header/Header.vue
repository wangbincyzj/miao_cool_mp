<template>
  <view class="header" :style="headerStyle">
    <div class="header-slot row">
      <slot/>
    </div>
  </view>
</template>

<script>
import {jsUtils} from "@/utils/jsUtils";
import {baseConfig} from "@/config/baseConfig";

export default {
  name: "Header",
  props:{
    bgColor:{
      type: String,
    },
    bottom:{
      type: Number,
      default: 10
    }
  },
  data() {
    return {}
  },
  computed: {
    headerStyle() {
      const rect = this.$store.state.system.menuRect
      return jsUtils.objToString({
        height: rect.bottom + this.bottom + "px",
        "background-color": this.bgColor,
        "padding-top": rect.top + "px",
        "padding-bottom": baseConfig.headerBottomHeight + "px"
      })

    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s;
  .header-slot{
    font-weight: 600;
    height: 100%;
    justify-content: center;

  }
}
</style>
