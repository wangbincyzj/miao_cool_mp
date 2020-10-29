export const mixins = {
  // 全局Toast,必须用Page组件为跟组件
  feedBackMixin: {
    methods: {
      $toast(options) {
        try {
          this.$children[0].showToast(options)
        } catch (e) {
          throw new Error("please see doc in src/utils/mixins.js")
        }
      },
      $popup(options) {
        try {
          this.$children[0].showPopUp(options)
        } catch (e) {
          throw new Error("please see doc in src/utils/mixins.js")
        }
      }
    }
  }
}
