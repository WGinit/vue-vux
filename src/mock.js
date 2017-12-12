const Mock = require("mockjs")

// 引入api集
const apiUrl = require("./api/api.js")

// 获取 mock.Random 对象


const Random = Mock.Random

// mock数据

// banner图
const banner = function(n){
  let banners = [];

  for(let i = 0; i< n; i++){
    let bannerObject = {
      imgSrc: Random.dataImage("260x750", "banner图"),
      url: Random.url()
    };
    banners.push(bannerObject);
  }

  return {
    banners: banners
  };
}

Mock.mock(apiUrl.banner, "get", banner(3));

// 新闻列表
const produceNewsData = function(n) {
  let articles = [];

  for (let i = 0; i < n; i++) {
    let newArticleObject = {
      url: Random.url(),
      title: Random.csentence(5, 30), // Random.csentence( min, max )

      desc: Random.csentence(50,100),

      thumbnail_pic_s: Random.dataImage("130x95", "新闻图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码

      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };

    articles.push(newArticleObject);
  }

  return {
    articles: articles
  };
};

// Mock.mock( url, post/get , 返回的数据)；

Mock.mock("/news/index", "post", produceNewsData(5));
