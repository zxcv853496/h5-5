<template>
  <div id="app">
    <Mainpage />
    <Content1page />
    <Carouselcard :main_data="main_data.carouselcard"/>
    <Content2page/>
    <Content3page />
  </div>
</template>

<script>
import '@/assets/css/app.scss'
import Mainpage from './components/mainpage/index.vue'
import Content1page from './components/content1page/index.vue'
import Carouselcard from './components/carouselcard/index.vue'
import Content2page from './components/content2page/index.vue'
import Content3page from './components/content3page/index.vue'

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
        }
      },
    }
  },
  components: {
    Mainpage,
    Content1page,
    Carouselcard,
    Content2page,
    Content3page,
  }
}
</script>


