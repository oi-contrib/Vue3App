<template>
    <view class="container">
        <view class="logo"></view>
        <view class="tips">
            <view class="name">介绍</view>：一个基于Vue3+Vite开发的跨端项目，支持H5、微信小程序、支付宝小程序等。
        </view>
        <view class="tips">
            <view class="name">初衷</view>：一个自由的跨端产品。
        </view>
        <view class="tips">
            欢迎任何人贡献代码！
        </view>

        <button @click="goto('/pages/Example1')">
            例子一
        </button>
    </view>
</template>
<script lang="ts" setup>

function goto(url: string) {
    vue3app.navigateTo({
        url: url
    })
}
</script>
<style scoped>
.container {
    &>.logo {
        background-image: url("@/static/logo.png");
        width: 375px;
        height: 100px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100px auto;
        margin: 50px 0 15px 0;
    }

    &>.tips {
        font-size: 14px;
        padding: 0 50px;
        text-indent: 2em;
        margin-bottom: 25px;

        &>.name {
            display: inline-block;
            font-weight: 800;
            text-indent: 0;
        }
    }
}
</style>