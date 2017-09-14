<template>
        <el-menu-item v-if="!isFolder" :index="menuItem.menuCode" :link="menuItem.link">{{menuItem.menuName}}</el-menu-item>
        <el-submenu v-else :index="menuItem.menuCode">
            <template slot="title">{{ menuItem.menuName}}</template>
            <menu-tree v-for="item in menuItem.children" :menuItem="item"></menu-tree>
        </el-submenu>
</template>
<script>
    export default {
        name: 'menuTree',
        props: ['menuItem'],
        data() {
            return {
                open: false
            }
        },
        computed: {
            isFolder: function() {
                return this.menuItem.children && this.menuItem.children.length
            }
        },
        methods: {
            toggle: function() {
                if (this.isFolder) {
                    this.open = !this.open
                }
            }
        }
    }
</script>
<style>

</style>