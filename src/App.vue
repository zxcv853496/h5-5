<template>
  <div id="app">
    <Mainpage />
    <Content1page />
    <Carouselcard :main_data="main_data.carouselcard"/>
    <Content2page/>
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
              title:'Title-1',
              price:'$1280',
              img:'item-1'
            },
            {
              title:'Title-2',
              price:'$1400',
              img:'item-2'
            },
            {
              title:'Title-3',
              price:'$2545',
              img:'item-3'
            },
            {
              title:'Title-4',
              price:'$2480',
              img:'item-4'
            },
            {
              title:'Title-5',
              price:'$3500',
              img:'item-5'
            },
            {
              title:'Title-6',
              price:'$480',
              img:'item-6'
            },
            {
              title:'Title-7',
              price:'$2100',
              img:'item-7'
            },
            {
              title:'Title-8',
              price:'$2360',
              img:'item-8'
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


