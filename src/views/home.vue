<template>
    <div class="wraper-index">
        <HeaderBar :title="title"></HeaderBar>
        <!-- nav -->
        <div class="nav">
            <ul>
                <li><router-link to="/about/01"><i class="icon icon-about"></i><p>关于亚华</p></router-link></li>
                <li><router-link to="/news/02"><i class="icon icon-news"></i><p>亚华新闻</p></router-link></li>
                <li><router-link to=""><i class="icon icon-team"></i><p>亚华团队</p></router-link></li>
                <li><router-link to=""><i class="icon icon-hospital"></i><p>合作医院</p></router-link></li>
            </ul>
            <ul>
                <li><router-link to=""><i class="icon icon-video"></i><p>故事回放</p></router-link></li>
                <li><router-link to=""><i class="icon icon-footer"></i><p>亚华足迹</p></router-link></li>
                <li><router-link to=""><i class="icon icon-example"></i><p>故事案例</p></router-link></li>
                <li><router-link to=""><i class="icon icon-service"></i><p>服务内容</p></router-link></li>
            </ul>
        </div>
        <!-- banner -->
         <Banner></Banner>
   
        <!-- 亚华新闻 -->
  <div class="news">
    <div class="head-title vux-1px-b"><span>亚华新闻</span><router-link to="#" class="more">more+</router-link></div>
        <div v-for="(item, key) in newsListShow" class="news-item">
                <NewsList :newsDate="item" :key="key"></NewsList>
         </div>
    </div>

        <!-- 亚华团队 -->
        <div class="team">
            <div class="head-title vux-1px-b"><span>亚华团队</span><router-link to="#" class="more">more+</router-link></div>
            <Team></Team>
        </div>
        

        <!-- 合作医院 -->
        <div class="hospital">
             <div class="head-title vux-1px-b"><span>合作医院</span><router-link to="#" class="more">more+</router-link></div>
            <Hospital></Hospital>
        </div>
        
        <!-- 故事案例 -->
        <div class="story">
            <div class="head-title vux-1px-b"><span>故事案例</span><router-link to="#" class="more">more+</router-link></div>
            <Story></Story>
        </div>

    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Banner from '@/components/banner'
import NewsList from '@/components/newslist'
import Team from '@/components/yhteam'
import Hospital from '@/components/hospital'
import Story from '@/components/story'
// import axios from 'axios'
import { apiUrl } from '../api/api'

import api from './../axios/api.js'

export default {
  name: 'home',
  data () {
      return {
          title: '亚华智库',
          newsListShow: [],
      }
  },
  components: {
      HeaderBar,
      Banner,
      NewsList,
      Team,
      Hospital,
      Story
  },
    // created(){

    //   axios.get('/mock/news/all')
    //   .then(response=>{
    //      console.log(response);
    //     //  this.oftenGoods=response.data;

    //   })
    // }
created() {

        this.setNewsApi();

 },
 methods:{

  setNewsApi: function() {

   api.JH_news('/news/index')

   .then(res => {

    //console.log(res);

    this.newsListShow = res.articles;
   // console.log(this.newsListShow)

   });

  },
 }
}
</script>

<style lang="less" scoped>
    .nav{
        width: 100%;
        padding-top: .4rem;
        background: #fff;
        overflow: hidden;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
                .icon{
                    display: inline-block;
                    width: 1.52rem;
                    height: 1.52rem;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    overflow: hidden;
                }
                .icon-about{
                    background-image: image-set(url('../assets/images/nav/about@2x.png') 2x,url('../assets/images/nav/about@3x.png') 3x);
                }
                .icon-news{
                     background-image: image-set(url('../assets/images/nav/news@2x.png') 2x,url('../assets/images/nav/news@3x.png') 3x);
                }
                .icon-team{
                    background-image: image-set(url('../assets/images/nav/team@2x.png') 2x,url('../assets/images/nav/team@3x.png') 3x);
                }
                .icon-hospital{
                    background-image: image-set(url('../assets/images/nav/hospital@2x.png') 2x,url('../assets/images/nav/hospital@3x.png') 3x);
                }
                .icon-video{
                    background-image: image-set(url('../assets/images/nav/video@2x.png') 2x,url('../assets/images/nav/video@3x.png') 3x);
                }
                .icon-footer{
                    background-image: image-set(url('../assets/images/nav/footer@2x.png') 2x,url('../assets/images/nav/footer@3x.png') 3x);
                }
                .icon-example{
                    background-image: image-set(url('../assets/images/nav/example@2x.png') 2x,url('../assets/images/nav/example@3x.png') 3x);
                }
                .icon-service{
                    background-image: image-set(url('../assets/images/nav/service@2x.png') 2x,url('../assets/images/nav/service@3x.png') 3x);
                }
                p{
                    font-size: .346667rem;
                    color: #686868;
                    padding-bottom: .4rem;
                }
            }
        }
    }

    .news{
        margin-bottom: .266667rem;
        background: #fff;
    }
    .head-title{
        font-size: .32rem;
        height: .8rem;
        line-height: .8rem;
        padding: 0 .373333rem;
        color: #686868;
        span{
            display: inline-block;
            height: .266667rem;
            line-height: .266667rem;
            text-indent: 5px;
            border-left: 3px solid #fcae14;
        }
        a{
            float: right;
            font-size: .293333rem;
            color:#686868;
        }
  
    }
    .news-item{
        width: 100%;
        background: #fff;
        border-bottom:1px dotted #e4e4e4;
        overflow: hidden;
    }
     .team, .hospital, .story{
         width:100%;
        background: #fff;
        margin-bottom: .266667rem;
        overflow: hidden;
     }

</style>


