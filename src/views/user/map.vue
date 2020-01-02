<template>
<div id="map" style="padding-top: 1rem">
    <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" style="position:absolute;width:100%;left: 0rem;top: 0;right:0;bottom:0;min-height: 100%" :scroll-wheel-zoom="true">
        <!--<bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>-->
        <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" style="position: absolute;top: 347px!important;">
            <bm-label content="北京天安门" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: -30, height: 32}"/>
        </bm-marker>
    </baidu-map>
</div>
</template>

<script>
    export default {
        name: "scroll",
        data(){
            return {}
        },
        mounted(){

    }
    }
</script>

<style scoped>
    #map{
        width: 100%;
    }
</style>
