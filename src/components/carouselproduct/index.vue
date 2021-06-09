<template src='./template.html'>
  
</template>

<script>
export default {
    data(){
        return{
            transitionName:'fade-in',
            show:0,
        }
    },
    props:[
        'main_data'
    ],
    methods:{
        addShow(){
            if(this.show >= this.main_data.img.length-1){
                this.show = 0
            }
            else{
                this.show = this.show+1
            }
        },
        subShow(){
            if(this.show <= 0 ){
                this.show = this.main_data.img.length-1
            }
            else{
                this.show = this.show - 1
            }
        }
    }
}
</script>

<style>
</style>