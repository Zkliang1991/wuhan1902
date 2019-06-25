<template>
   <div class="swiper-container" :id="id"> 
        <div class="swiper-wrapper">
            <slot></slot>    
        </div>
   </div>
</template>

<script>
export default {
        name:"swipe",
        props:["id","swiperOptions"],
        mounted(){
            var mySwiper = new Swiper("#"+this.id,this.swiperOptions);
        },
        updated(){
            console.log("updated")
           
                var mySwiper = new Swiper("#"+this.id,this.swiperOptions);
         
        }



}
</script>



