<template>
    <div class="header vux-1px-b">
         <span>{{ title }}</span>
    </div>
</template>

<script>

import { XHeader } from 'vux'

export default {
  name: 'header',
  data () {
      return {
      }
  },
  components: {
      XHeader
  },
  props: {
      title: String
  },
  methods: {
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';

.header {
    width:100%;
    padding: .466667rem 0;
    text-align: center;
    font-size: .48rem;
    color: #333;
    background: #fff;
}
</style>
