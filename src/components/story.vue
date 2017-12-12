<template>

  
      <div class="story-lists">
          <ul>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2B0H31Y0-215329.jpg" alt=""></div><p>救助“毛人家族”</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2B054G610-36428.jpg" alt=""></div><p>“小沈阳”要“变性”</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2B0CV50-115A3.jpg" alt=""></div><p>“暴走妈妈”</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2B0F2bZ-1GZ4.jpg" alt=""></div><p>半世阴阳一世情</p></router-link>
              </li>
          </ul>
      </div>

</template>

<script>
export default {
  data() {
      return{}
  }

}
</script>

<style lang="less">
@import '../assets/less/mixin.less' ;
     .story-lists{
         margin: .266667rem .933333rem;
         overflow: hidden;
         li{
             float: left;
             width:3.613333rem;
             text-align: center;
             &:nth-child(2n){
                 margin-left: .4rem;
             }
             &:nth-child(2n-1){
                 margin-right: .4rem;
             }
             .img{
                 width: 3.6rem;
                 height: 2.666667rem;
                 overflow: hidden;
             }
             img{
                 width:100%;
                 height: 100%;
             }
             p{
                 font-size:.32rem;
                 color:#686868;
                 height: .8rem;
                 line-height: .8rem;
                 text-align: center;
                 .clamp()
             }
         }
     }

</style>


