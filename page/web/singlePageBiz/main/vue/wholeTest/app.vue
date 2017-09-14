<template>
    <div id="app">
        <!-- 头部导航 -->
        <mg-header></mg-header>
        <main>
            <!-- 左侧导航 -->
            <div class="el-col el-col-4 side-bar">
                <mg-sideBar :getMenuDataUrl="getMenuDataUrl"></mg-sideBar>
            </div>
            <!-- 右侧主内容区 -->
            <div class="el-col el-col-20 main-right">
                <transition name="fade">
                    <router-view class="view"></router-view>
                </transition>
            </div>

        </main>
    </div>
</template>

<script>
    import $ from 'jquery'
    import mgHeader from './components/layout/header.vue'
    import mgSideBar from './components/layout/sideBar.vue'

    export default {
        name: 'wholeTest',
        data: function() {
            return {
                getMenuDataUrl: "/getMenuData"
            }
        },
        components: {
            'mg-header': mgHeader,
            'mg-sideBar': mgSideBar
        }
    }
</script>

<style>

</style>
