<script>
import store  from "./store"
	export default {
    onLaunch: function () {
      this.init()
    },
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

    methods:{
      init() {
        Object.keys(startUp).forEach(func => startUp[func].call())
      },
    }
	}

	// 启动时候需要执行的方法
	const startUp = {
    getMenuRect() {
      store.state.system.menuRect = uni.getMenuButtonBoundingClientRect()
    }
  }


</script>

<style lang="scss">
  @import "~uview-ui/index.scss";
  @import "/src/static/css/main.scss";
</style>
