<template>
 
      <div class="team-lists">
          <ul>
              <li>
                  <router-link to="">
                      <div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2B1Q21030-42E4.jpg" alt=""></div><p>田亚华</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2B1PKE0-32440.jpg" alt=""></div><p>赵冬松</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2B1E50060-O361.jpg" alt=""></div><p>黄卫华</p></router-link>
              </li>
              <li>
                  <router-link to=""><div class="img"><img src="http://www.tyh120.com/uploads/allimg/c170624/14b2B1BOC0-2N32.jpg" alt=""></div><p>杨先定</p></router-link>
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
     .team-lists{
        padding:.266667rem 1.333333rem;
         overflow: hidden;
         li{
             float: left;
             width:2.866667rem;
             text-align: center;
             overflow: hidden;
             .img{
                 width:100%;
                 height: 3.6rem;
                 overflow: hidden;
                 img{
                    width:100%;
                    height: 100%;
                }
             }
             a{
                 font-size: .213333rem
             }
             &:nth-child(2n){
                 margin-left: .8rem
             }
             &:nth-child(2n-1){
                 margin-right: .8rem;
             }
             p{
                 width:100%;
                 height: .8rem;
                 line-height: .8rem;
                 font-size: .293333rem;
                 color: #686868;
                 text-align: center;
                 overflow: hidden;
             }
         }
     }

</style>


