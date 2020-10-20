<template>
	<view>
    <view class="container" v-html="html"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  html: ""
			};
		},
		onLoad({id}) {
      console.log(id)
      this.fetchPageData(id)
		},
    methods:{
      fetchPageData(id) {
        uni.request({
          url: `http://wap.yunlankeji.com/case/caseDetails?id=${id}`,
          success: ret => {
            uni.setNavigationBarTitle({
              title: ret.data.details.caseTitle
            })
            this.html = ret.data.details.caseContent
          }
        })
      }
    }
	}
</script>

<style lang="scss">

</style>
