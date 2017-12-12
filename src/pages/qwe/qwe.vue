<template>
    <div id="qwe">
    <a href="index.html"><el-button type="primary" round>回去总页面</el-button></a>
    <p>你好！请先注册再登录，进入付款界面需先登录</p>
    <p>{{this.$store.state.logined>=0?this.$store.state.data[this.$store.state.logined].login:'未知'}}用户，您现在的登录状态为：{{ this.$store.state.logined>=0? '已登录':'未登录' }}</p>
    <router-link to="/hi"><el-button type="primary" round>登录</el-button></router-link>
    <router-link to='/hello'><el-button type="primary" round>注册</el-button></router-link>   
    <router-link to='/pay'><el-button type="primary" round>付款页面</el-button></router-link>
    <router-view></router-view>
    </div>
</template>
<script>
export default{
    data(){
        return{           
        }
    },
    mounted(){
        alert('欢迎来到支付平台，请注册登录再支付谢谢！')
    }
}
</script>
<style>

</style>