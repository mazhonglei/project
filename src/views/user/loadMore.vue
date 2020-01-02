<template>
    <div class="page-infinite">
        <h1 class="page-title">Infinite Scroll</h1>
        <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>

            <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
                <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
            </ul>
            <p v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>
                加载中...
            </p>

    </div>
</template>

<style>
.page-infinite-list{
    width: 100%;
}
.page-infinite-list li{
    color: #000;
    font-size: 0.6rem;
    line-height: 1rem;
}
</style>
<script type="text/babel">
    export default {
        data() {
            return {
                list: [],
                loading: false,
            };
        },
        methods: {
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    for (let i = 1; i <= 10; i++) {
                        this.list.push('第'+ i+'个');
                    }
                    this.loading = false;
                }, 2500);
            }
        },
     /*   mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
            for (let i = 1; i <= 20; i++) {
                this.list.push(i);
            }
        }*/
    };
</script>
