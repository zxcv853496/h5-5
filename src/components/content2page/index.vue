<template src="./template.html">
  
</template>

<script>

export default {
    data(){
        return{
            show_product : false,
        }
    },
    components:{
    },
    props:[
        'main_data'
    ],
    watch:{
        show_product(){
            console.log(123)     
        }
    },
    methods:{
      showProduct() {
          this.show_product =! this.show_product
          this.main_data.show_product =! this.main_data.show_product
      }  
    }
}
</script>

<style>

</style>