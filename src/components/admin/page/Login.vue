<template>
    <div>
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="70px">
            <el-form-item label="用户名" prop=userName>
                <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="form.pwd" type="password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
        </el-form>
    </div>
</template>
<script>


export default {
    name: "Login",
    data() {
        return {
            form: {
                userName: '',
                pwd: ''
            },
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                pwd: [
                    { required:true, message: '请输入密码', tigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        
    },
    methods: {
        login() {
            this.$refs['loginForm'].validate((val) => {
                if(val) {
                    this.$http.post(this.$url + 'users/login',this.form).then((rsp) => {
                        console.log(rsp)
                    }).catch((error) => {
                        console.log(error)
                    })
                }
            })
        }
    }
}
</script>
<style scoped>

</style>

