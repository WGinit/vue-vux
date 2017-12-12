<template>
   <div class="about">
        <x-header>关于亚华</x-header>
       <div class="about-content">
           <p>{{ $route.params.id }}</p>
           <p>亚华智库亚华智库</p>
       </div>
   </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'about',
  data () {
      return {
      }
  },
  components: {
      XHeader
  }
}
</script>

