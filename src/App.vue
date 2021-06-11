<template>
  <div id="app">
    <Mainpage />
    <Content1page :main_data="main_data.content1page"/>
    <Carouselcard :main_data="main_data.carouselcard"/>
    <Content2page :main_data="main_data.content2page"/>
    <Carouselproduct :main_data="main_data.carouselproduct"/>
    <Content3page :main_data="main_data.content3page"/>
    <Footer />
  </div>
</template>

<script>
import '@/assets/css/app.scss'
import Mainpage from './components/mainpage/index.vue'
import Content1page from './components/content1page/index.vue'
import Carouselcard from './components/carouselcard/index.vue'
import Content2page from './components/content2page/index.vue'
import Carouselproduct from './components/carouselproduct/index.vue'
import Content3page from './components/content3page/index.vue'
import Footer from './components/footer/index.vue'

export default {
  name: 'App',
  data(){
    return{
      main_data:{
        content1page:{
          product:[
            {
              img:'/img/content1page/img-1.jpg'
            },
            {
              img:'/img/content1page/img-2.jpg'
            },
            {
              img:'/img/content1page/img-3.jpg'
            },
            {
              img:'/img/content1page/img-4.jpg'
            },
            {
              img:'/img/content1page/img-5.jpg'
            },
            {
              img:'/img/content1page/img-6.jpg'
            },
            {
              img:'/img/content1page/img-7.jpg'
            },
            {
              img:'/img/content1page/img-8.jpg'
            },
          ]
        },
        content2page:{
          show_product:false,
          product_top:[
            {
              content:'伸縮餐桌',
              img:'/img/content2page/top-1.jpg'
            },
            {
              content:'多層書桌',
              img:'/img/content2page/top-2.jpg'
            },
            {
              content:'簡約茶几',
              img:'/img/content2page/top-3.jpg'
            },
            {
              content:'尊爵茶几',
              img:'/img/content2page/top-4.jpg'
            },
            {
              content:'伸縮餐桌',
              img:'/img/content2page/top-5.jpg'
            },
            {
              content:'黑鐵套桌',
              img:'/img/content2page/top-6.jpg'
            },
          ],
          product_bottom:[
            {
              price:'6500',
              content:'沙發 / 【卡莉可收納L型布沙發-深藍色】',
              img:'/img/content2page/bottom-1.jpg'
            },
            {
              price:'1500',
              content:'椅凳/【Owen 馬卡龍方型椅凳 (葡紫)】',
              img:'/img/content2page/bottom-2.jpg'
            },
            {
              price:'8700',
              content:'沙發 / 【北歐風三人沙發(含抱枕)-灰色】',
              img:'/img/content2page/bottom-3.jpg'
            },
            {
              price:'4900',
              content:'沙發 / 【Bello 貝洛高背L型布沙發-咖啡】',
              img:'/img/content2page/bottom-4.jpg'
            },
          ]
        },
        carouselcard:{
          card:[
            {
              price:'5',
              content:'購物滿100元用'
            },
            {
              price:'10',
              content:'購物滿150元用'
            },
            {
              price:'20',
              content:'購物滿200元用'
            },
            {
              price:'30',
              content:'購物滿300元用'
            },
            {
              price:'40',
              content:'購物滿350元用'
            },
            {
              price:'50',
              content:'購物滿400元用'
            },
            {
              price:'60',
              content:'購物滿500元用'
            },
            {
              price:'70',
              content:'購物滿600元用'
            },
            {
              price:'80',
              content:'購物滿700元用'
            },
            {
              price:'90',
              content:'購物滿800元用'
            },
          ]
        },
        carouselproduct:{
          img:[
            {
              title:'舒眠床組',
              price:'$12800',
              img:'/img/carousel-product/product-1.jpg'
            },
            {
              title:'多功能組合茶几',
              price:'$1400',
              img:'/img/carousel-product/product-2.jpg'
            },
            {
              title:'辦公桌椅',
              price:'$3545',
              img:'/img/carousel-product/product-3.jpg'
            },
            {
              title:'化妝檯',
              price:'$2480',
              img:'/img/carousel-product/product-4.jpg'
            },
            {
              title:'白色系沙發套組',
              price:'$8500',
              img:'/img/carousel-product/product-5.jpg'
            },
            {
              title:'客廳桌+椅',
              price:'$4050',
              img:'/img/carousel-product/product-6.jpg'
            },
            {
              title:'人體工學沙發',
              price:'$2700',
              img:'/img/carousel-product/product-7.jpg'
            },
            {
              title:'轉角沙發床',
              price:'$8360',
              img:'/img/carousel-product/product-8.jpg'
            },
            {
              title:'人體工學椅',
              price:'$3360',
              img:'/img/carousel-product/product-9.jpg'
            },
          ]
        },
        content3page:{
          item:[
            '項目1',
            '項目2',
            '項目3',
            '項目4',
            '項目5',
            '項目6',
            '項目7',
            '項目8',
            '項目9',
            '項目10',
          ]
        }
      },
    }
  },
  mounted(){
  },
  components: {
    Mainpage,
    Content1page,
    Carouselcard,
    Content2page,
    Carouselproduct,
    Content3page,
    Footer,
  }
}
</script>


