<template>

  
      <div class="hospital-lists">
          <ul>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com//uploads/allimg/c170624/14b2A249EG0-64245.jpg" alt=""></div><p>深圳鹏爱医疗美容医院</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2A24ZDP-42O8.jpg" alt=""></div><p>杭州华山连天美医疗美容医院</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2A2460TZ-Y458.jpg" alt=""></div><p>长春中妍美容医院</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2A24555V0-62Q2.jpg" alt=""></div><p>沈阳百嘉丽医疗美容医院</p></router-link>
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
     .hospital-lists{
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


