<template>
   <div class="news">
        <x-header>亚华新闻</x-header>
       <div class="about-content">
           <p>{{ $route.params.id }}</p>
           <p>亚华新闻亚华新闻</p>
       </div>
   </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'news',
  data () {
      return {
      }
  },
  components: {
      XHeader
  }
}
</script>

