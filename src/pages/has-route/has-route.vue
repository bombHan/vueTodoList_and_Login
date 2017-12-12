<template>
    <div>
        <el-button type="primary" round><a href="index.html" class="back">回去总页面</a></el-button>
        <h3>此页面包含路由</h3>
        <ul>
            <li><router-link to="/test">test</router-link></li>
            <li><router-link to="/async">async load a router view</router-link></li>
        </ul>
        <div>
            <h4>路由组件挂载点：</h4>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
	/**
	 * Created by fuzl on 2017-11-9.
	 */
</script>
<style>
a.back{
        text-decoration: none;
        color:white;
}
</style>