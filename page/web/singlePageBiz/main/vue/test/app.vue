<template>
    <div id="app">
        <div>this is a vue demo</div>
        <div class="main_data">{{mainData}}</div>
        <component-A></component-A>
        <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        <el-button type="primary">主要按钮</el-button>
    </div>
</template>

<style>
    #app {
        color: blue;
    }
    .main_data {
        color: darkred;
    }
</style>

<script>
    import componentA from "./components/componentA"
    export default {
        name: 'test',
        data: function() {
            return {
                mainData: "bindData",
                radio: '1'
            }
        },
        components: {
            'component-A': componentA
        }
    }
</script>