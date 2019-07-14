<template>
    <div class="swiper-container" :id="id" >
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// 封装 swipe 组件  props slot 
export default {
    name:'swipe',
    props:['id','swiperOptions'],
    mounted(){
        
        this.$nextTick(()=>{
            var mySwiper = new Swiper("#"+this.id,this.swiperOptions);
        })
    },

    updated() {
        console.log("update ...")
        this.$nextTick(()=>{
            var mySwiper = new Swiper("#"+this.id,this.swiperOptions);
        })
    },
}
</script>