<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
      this.$store.state.system.menuRect = uni.getMenuButtonBoundingClientRect()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
  @import "~uview-ui/index.scss";
  @import "/src/static/css/main.scss";
	/*每个页面公共css */
</style>
