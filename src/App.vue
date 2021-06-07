<template>
  <div id="app">
    <Mainpage />
    <Content1page />
    <Carouselcard />
  </div>
</template>

<script>
import '@/assets/css/app.scss'
import Mainpage from './components/mainpage/index.vue'
import Content1page from './components/content1page/index.vue'
import Carouselcard from './components/carouselcard/index.vue'

export default {
  name: 'App',
  components: {
    Mainpage,
    Content1page,
    Carouselcard,
  }
}
</script>


