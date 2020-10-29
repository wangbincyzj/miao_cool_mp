<template>
  <Page enable-pop-up>
    <template #header>123</template>
    <template #popup>
      <GetUserInfo/>
    </template>
    <view @click="test">456</view>
  </Page>
</template>

<script>
	import GetUserInfo from "@/components/getUserInfo/get-user-info";
  export default {
    components: {GetUserInfo},
    data() {
			return {

			}
		},
    methods:{
      test() {
        this.$popup()
      }
    }
  }
</script>

<style lang="scss">

</style>
