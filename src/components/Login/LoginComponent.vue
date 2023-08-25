<template>
    <el-container >
    <el-main>
      <el-row justify="center">
        <el-col>
          <el-card style="margin-left: 25%; margin-right: 25%;">
            <el-form v-model="user" ref="form">
              <el-row justify="center">
                  <el-image class="loginLogo" src="test.png" style="width: 100px; height: 100px; margin-bottom: 10px; background-color: white;"
                    fit="contain" />
              </el-row>
              <el-row justify="center">
                <el-col>
                  <el-form-item prop="username" :rules="[
                    {
                      required: true,
                      message: 'Please input username',
                      trigger: 'blur',
                    }
                  ]">
                    <el-input placeholder="Username"
                     v-model="user.username" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row justify="center">
                <el-col>
                  <el-form-item prop="password" :rules="[
                    {
                      required: true,
                      message: 'Please input password',
                      trigger: 'blur',
                    }
                  ]">
                    <el-input placeholder="Password" type="password" v-model="user.password" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">Accedi</el-button>
                </el-form-item>
              </el-row>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script setup>
import { toggleDark } from "../../composables";
import { reactive } from "vue";
import router from "../../router";




defineProps({
})

const user = reactive({
  username: "",
  password: ""
})

const onSubmit = async() => {
  console.log('entro')
  router.push('/')
}
</script>

<style scoped>


body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

</style>
