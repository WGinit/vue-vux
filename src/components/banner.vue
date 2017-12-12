<template>
    <div class="banner">
        <swiper loop auto :list="banner_list"  :aspect-ratio="260/750" dots-position="center" :show-desc-mask="false"></swiper>
    </div>
</template>

<script>
import { Swiper } from 'vux'
// import { apiUrl } from '../api/api'

// import api from './../axios/api.js'


const bannerList = [{
  url: 'javascript:',
  img:    'http://rev.86ym.cn/Uploads/Picture/2017-11-09/5a03c19cbb1a1_520_300.jpg'
}, {
  url: 'javascript:',
  img: 'http://rev.86ym.cn/Uploads/Picture/2017-11-09/5a03c2992857e_520_300.jpg'
}, {
  url: 'javascript:',
  img: 'http://rev.86ym.cn/Uploads/Picture/2017-11-09/5a03c5591e6c8_520_300.jpg',
  fallbackImg: 'http://iph.href.lu/'
}]

const urlList = bannerList.map((item, index) => ({
  url: item.url,
  img: item.img,
  fallbackImg: item.fallbackImg  //图片加载失败显示
}))


export default {
  components: {
    Swiper
  },
  ready () {

  },
  // created () {
  //   this.setBanner()
  // },
  // methods: {
  //   setBanner: function() {
  //     api.getBanner(apiUrl.banner,'a=1')
  //     .then(res => {
  //         console.log(res);
  //         this.banner_List = res.banners;
  //         console.log(this.banner_List)
  //       });
  //     },

  // },
  data () {
    return {
      banner_list: urlList
    }
  }
}
</script>

<style lang="less">
.banner{
  margin: .266667rem 0;
  overflow: hidden;
  .vux-indicator{
    bottom: 0 !important;
    height: 1rem;
    line-height: 1rem;
  }
 .vux-icon-dot{
    width: .16rem !important;
    height: .16rem !important;
    background-color: #a0b9d7 !important;
  }
  .vux-icon-dot.active{
    background-color: #fff !important;
  }
}
.swiper-demo-img img {
  width: 100%;
}
</style>

