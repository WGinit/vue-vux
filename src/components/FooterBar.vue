<template>
  <div class="footer">
      <div class="footer-nav">
          <router-link to="#">网站首页</router-link>
          <router-link to="#">乘车路线</router-link>
          <router-link to="#">联系我们</router-link>
      </div>
      <div class="company">
          <p>联系电话:0755-2 7210948</p>
          <p>联系地址: 深圳宝安中心区宏发中心大厦2108-2110</p>
          <p>CopyRight@2017亚华智库</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
      return {}
  }
}
</script>

<style lang="less">
.footer {
    width:100%;
    height: 3.666667rem;
    background: #fff;
    text-align: center;
    color:#fff;
    overflow: hidden;
    .footer-nav{
        width:100%;
        height: .8rem;
        margin: .466667rem 0 .266667rem 0;
        background: #eeeeee;
       a{
           display: inline-block;
           line-height: .8rem;
           font-size: .32rem;
           color:#333333;
           vertical-align: top;
           &:first-child:after{
               content: '';
               display: inline-block;
               width: 2px;
               height: .3rem;
               border-left:2px solid #333;
               margin: 0 .2rem 0 .3rem;
               vertical-align: middle;
           }
           &:last-child:before{
               content: '';
               display: inline-block;
               width: 2px;
               height: .3rem;
               border-left:2px solid #333;
               margin: 0 .3rem 0 .2rem ;
               vertical-align: middle;
           }
       }

    }
    .company{
        line-height: .533333rem;
        overflow: hidden;
        p{
            font-size: .293333rem;
            color: #686868;
        }
    }
}
</style>

