<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide><img src="../assets/images/recovery_img1.png"></swiper-slide>
            <swiper-slide><img src="../assets/images/recovery_img1.png"></swiper-slide>

        </swiper>
        <div class="swiper-pagination"></div> //标页码
    </div>
</template>

<script>

    export default {
        name: "swiper",
        data(){
            return{
                swiperOption: {//swiper3
                    autoplay: 3000,
                    speed: 1000,
                    loop:true,

                }
            }
        }
    }
</script>

<style lang="scss">

</style>