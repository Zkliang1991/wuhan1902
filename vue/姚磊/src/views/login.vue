<template>
    <div>
        <Head></Head>
        <van-tabs>
            <van-tab title="登录">
                <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
                </van-cell-group>
                <van-button type="info" @click="login" class="wd">登录</van-button>

            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                    <van-field
                        v-model="username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"
                    />

                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        label="确认密码"
                        placeholder="请确认密码"
                        required
                    />
                    <van-button type="info" @click="login" class="wd">注册</van-button>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    props:["password","username"],
    methods:{
        login(){
            
        }
    }
}
</script>


<style>
.wd{
    width: 100%;
}
</style>
