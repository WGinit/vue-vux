<template>
  <div id="yhzk">
    <router-view></router-view>
    <!-- 底部 -->
     <FooterBar></FooterBar>
     
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'

export default {
  name: 'yhzk',
  data() {
    return {}
  },
  components: {
    FooterBar
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #f5f5f5;
}
</style>
