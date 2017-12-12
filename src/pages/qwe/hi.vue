<template>
    <div id="hi">
        <p>你好啊,请登录！</p>
        账号：<el-input  placeholder="账号" id="login_login" clearable></el-input><br>
        密码：<el-input  placeholder="密码" id="login_pass" clearable></el-input>
        <br>
        <el-button @click="login">登录</el-button>
        <el-button @click="back">去注册</el-button>
        
    </div>
</template>
<script>
    export default{
        data(){
            return{
                
            }
        },
        methods:{
            back(){
                    this.$router.push('/hello')
                },
            login(){
                    const oLogin=document.getElementById('login_login');
                    const oPass=document.getElementById('login_pass');
                    let index=-1;
                    console.log(this.$store.state.data[0].login)
                    console.log(this.$store.state.data[0].pass)
                    for(let i=0;i<this.$store.state.data.length;i++){
                        if(oLogin.value===this.$store.state.data[i].login&&oPass.value===this.$store.state.data[i].pass){
                            index=i;
                            console.log(index);
                        }
                    }
                    this.$store.state.logined=index;
                    if(this.$store.state.logined>=0){
                        alert('恭喜你登录成功！');
                        this.$router.push('/pay');
                    }else{
                        alert('您的账号或者密码有误或者是未注册！');
                    }
                    oLogin.value=oPass.value='';
                }
            },
        mounted(){
                const oPass=document.getElementById('login_pass');
                const _this=this;
                oPass.addEventListener('keydown',function(ev){
                    
                    if(ev.keyCode===13){
                        _this.login();
                    }
                });
            }
        }
    

</script>
<style></style>