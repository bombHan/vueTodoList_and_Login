<template>
    <div id="pay">
        <p>这是付款界面，以下是当前用户的信息</p>
        <p>账号信息：{{this.$store.state.data[this.$store.state.logined].login}}</p>
        <p>编号信息：{{this.$store.state.logined}}</p>
        <p>姓名：{{this.$store.state.data[this.$store.state.logined].name}}</p>
        <p>收货地址：{{this.$store.state.data[this.$store.state.logined].adr}}</p>
        <p>手机号：{{this.$store.state.data[this.$store.state.logined].phone}}</p>
        <el-button type="success" @click="send" round>确认付款</el-button>
        <el-button type='danger' round @click="logout">退出登录</el-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
                logout(){
                    this.$store.state.logined= -1;
                    this.$router.push('/hi');
                },
                send(){
                    this.$alert('尊敬的'+this.$store.state.data[this.$store.state.logined].login+'用户，您的终极小可爱已经发货，敬请查收谢谢！', '发货信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                            type: 'success',
                            message: '已经成功发货！'
                            });
                        }
                        });
                }
            }
        }
    

</script>
<style></style>