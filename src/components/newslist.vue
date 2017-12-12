<template>

    <div class="news-link">
      <router-link :to="newsDate.url">
      <div class="img">
        <img :src= 'newsDate.thumbnail_pic_s' alt="">
      </div>
      <div class="text">
          <h5>{{ newsDate.title }}</h5>
          <p class="desc">{{ newsDate.desc }}</p>
          <p class="time">{{newsDate.date | getYMD}}</p>
      </div>
  </router-link>
</div>
   
</template>

<script>

export default {
  components: {
  },
  methods: {
   
  },
props: {
    newsDate: Object
 },
  data () {
    return {
  }
}

}
</script>

<style lang="less" scoped>
@import '../assets/less/mixin.less';

  .news-link{
    height: 1.266667rem;
    margin: .266667rem .373333rem;
    overflow: hidden;
    a{
      display: block;
    }
    .img{
      float: left;
      width:18%;
      height: 1.266667rem;
      img{
        width:100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .text{
      float: right;
      width:78%;
      height: 2.666667rem;
      overflow: hidden;
      h5{
        font-size: .33rem;
        height: .33rem;
        line-height: .33rem;
        .clamp();
      }
      .desc {
         font-size: .293333rem;
        color: #7b7b7b;
        height: .5rem;
        line-height: .6rem;
        .clamp()
      }
      .time{
        font-size: .293333rem;
        color:#999;
      }
    }
  }
</style>
