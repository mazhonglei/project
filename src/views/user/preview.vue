<template>
    <!--vue2-preview-->
    <div>
        <img src="../../assets/images/zd_type1.png" alt="" @click="isTrue=true">
            <div class="container" @click="isShow()" v-if="isTrue">
                <div class="container_swiper">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(slide, index) in list" :key="index">
                            <img :src="slide.src" alt="" style="width: 100%">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
            <!--<vue-preview :slides="slide1" @close="handleClose"></vue-preview>-->
        <p  @click="open('picker2')" >日期{{dateTime}}</p>
        <vue-preview :slides="list" @close="handleClose"></vue-preview>
        <span @click="is()" style="font-size: 0.28rem;color: #000;display: inline-block">价格
        <span class="iconfont " style="font-size: 0.28rem;color: #000;" :class="{rotate:isRotate}">&#xe630;</span></span>
        <p>{{ message|timeDate}}</p>
        <p style="font-size: 0.4rem">手机号{{phone|phoneFilter}}</p>
        <mt-datetime-picker
                ref="picker2"
                type="date"
                v-model="value2"
                @confirm="handleChange">
        </mt-datetime-picker>
    </div>
</template>

<script>
    import moment from 'moment'//导入文件
    Vue.use(moment);
    import VuePreview from 'vue-preview';
    import Vue from 'vue';
    Vue.use(VuePreview);

    function preview() {
    }

    Vue.use(preview, {
        mainClass: 'pswp--minimal--dark',
        barsSize: {top: 0, bottom: 0},
        captionEl: false,
        fullscreenEl: false,
        shareEl: false,
        bgOpacity: 0.85,
        tapToClose: true,
        tapToToggleControls: false
    })
    export default {
        name: "preview",
        data() {
            return {
                value2: null,
                dateTime:'',
                phone:"18306751157",
                message:'2019-11-13:16:24',
                list: [
                    {
                        name:'缩略图1',
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        w: 600,
                        h: 400

                    },
                    {
                        name:'缩略图2',
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        w: 1200,
                        h: 900
                    }
                ],
                slide1: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1200,
                        h: 900
                    }
                ],
                swiperOption:{
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    },
                    loop:true ,
                    observer:true,
                    observeParents:true
                },
                isTrue:false,
                isRotate:false
            }
        },
        filters:{
            phoneFilter(value){
                let arrPhone=value.split('');
                var str="";
                arrPhone.forEach((item,index)=>{
                    if(index===3||index===4||index===5||index===6){
                        return str+='*';
                    };
                    str+=item;
                });
                return str;
            }
        },
        methods:{
            handleChange(value) {
                this.dateTime=moment(value).format('YYYY-MM-DD');
            },
            open(picker) {
                this.$refs[picker].open();
            },
            // 即将关闭的时候，调用这个处理函数
            handleClose() {
                console.log('closeHandler')
            },
            isShow(){
                this.isTrue=false;
            },
            is(){
                this.isRotate=!this.isRotate
            }

        },
        mounted() {
            this.list.forEach((item)=>{
                item.w=600;
                item.h=400;
            })
        }
    }
</script>

<style scoped>
    .rotate{
        color: red!important;
        transform: rotate(180deg)!important;
        display: inline-block;
    }
.container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
}
    .container_swiper{
        width: 100%;
    }
    .swiper-pagination{
        color: #fff;
        font-size: 0.4rem;
    }
</style>
