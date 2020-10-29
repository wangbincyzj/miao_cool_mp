<template>
  <view>
    <Header v-if="customHeader" :bg-color="headerColor">
      <slot name="header"/>
    </Header>
    <view class="body" :style="styleObj">
      <slot></slot>
    </view>
    <view class="footer">

    </view>

    <view>
      <u-toast ref="uToast"/>
    </view>


    <view>
      <u-popup v-model="popupShow" mode="bottom" @open="handlePopOpen" @close="handlePopClose">
        <slot name="popup"/>
      </u-popup>
    </view>

  </view>
</template>

<script>
import Header from "@/components/header/Header"
import {jsUtils} from "@/utils/jsUtils";
import {baseConfig} from "@/config/baseConfig";

export default {
  name: "Page",
  components: {Header},
  props: {
    customHeader: {
      type: Boolean,
      default: true
    },
    headerColor: {
      type: String,
      default: "red"
    },
    isBodyTopping: {
      type: Boolean,
      default: false
    },
    // 开启toast?
    enableToast: {
      type: Boolean,
      default: false
    },
    // 开启popUp?
    enablePopUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      popupShow: false
    }
  },
  computed: {
    styleObj() {
      return jsUtils.objToString({
        "padding-top": this.isBodyTopping ? ""
          : this.$store.state.system.menuRect.bottom + baseConfig.headerBottomHeight + "px"
      })
    }
  },
  methods: {
    // 开启toast
    showToast(options) {
      if (!this.enableToast) {
        throw new Error("`page` component does not enable toast component")
      }
      this.$refs.uToast.show(options)
    },

    // 开启popUp
    showPopUp(options) {
      if(!this.enablePopUp){
        throw new Error("`page` component does not enable popup component")
      }
      this.popupShow = true
    },


    // 弹出框逻辑
    handlePopOpen() {
      uni.hideTabBar()
    },
    handlePopClose() {
      uni.showTabBar()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
