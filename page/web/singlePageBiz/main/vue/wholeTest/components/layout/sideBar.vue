<template>
    <el-menu class="menu-tree" :default-active="defaultActive" unique-opened @open="handleOpen" @select="goToLink" @close="handleClose" :default-openeds="defaultOpen">
        <menu-tree v-for="menuItem in menuTreeData" :menuItem="menuItem"></menu-tree>
    </el-menu>
</template>

<script>
    import menuTree from './menuTree'
    export default {
        name: "sideBar",
        components: {
            'menu-tree': menuTree
        },
        props: ["getMenuDataUrl"],
        data: function() {
            return {
                menuTreeData: {},
                defaultActive: "",
                defaultOpen: []
            }
        },
        created: function() {
            var that = this;
            this.$http.get(that.getMenuDataUrl, {name: "userName"}).then(function(response) {
                that.menuTreeData = response.body.data;
                var pagePath = window.location.pathname.match(/\/(\w+).html$/)[1];
                var routePath = that.$route.path.split("/").splice(1,1);
                var fullPath = [];
                fullPath.push(pagePath);
                that.defaultOpen = fullPath.concat(routePath);
                that.defaultActive = that.defaultOpen.pop();
            });
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goToLink: function(index, indexPath) {
                window.location.href = event.target.getAttribute("link");
            }
        }
    }
</script>