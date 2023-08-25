<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelectHeader">
    <el-menu-item index="">HOME</el-menu-item>
    <el-menu-item index="configuration"> {{ t('nameHeaderSettingMenu') }}</el-menu-item>
    <el-menu-item index="maintenance">{{ t('nameHeaderManutenzione') }}</el-menu-item>
    <div class="flex-grow" />
    <el-radio-group v-model="radioChoice"  @change="ChangeLanguage(radioChoice)" size="small">
      <el-radio-button label="it">
        <flag iso="it" />
      </el-radio-button>
      <el-radio-button label="en">
        <flag iso="gb" />
      </el-radio-button>
    </el-radio-group>
    <el-sub-menu>
      <template #title> <el-icon>
          <User />
        </el-icon>Mario Rossi</template>
      <el-menu-item @click="router.push('/login')">
        Logout
      </el-menu-item>
      <el-menu-item>
        <el-switch v-model="valueSwitch" :loading="loading1" :before-change="beforeChange" 
          :active-icon="Sunny"
          :inactive-icon="Moon" />
      </el-menu-item>

    </el-sub-menu>

  </el-menu>
</template>
<script setup>
import { toggleDark } from "../../composables";
import { ref } from "vue";
import { Sunny, Moon, User } from '@element-plus/icons-vue'
import router from "../../router";
import { useI18n } from "vue-i18n";

const { t,locale } = useI18n({ useScope: 'global' })
const radioChoice = ref('en')
const loading1 = ref(false)
const valueSwitch = ref(false)
const activeIndex = ref("");
const country = ref({ flag: 'flag-icon flag-icon-gr', name: 'italia' })


const ChangeLanguage=(value)=>{
 locale.value=value
}

const handleSelectHeader = async (key, keyPath) => {
  console.log(key, keyPath);
  activeIndex.value = key;
  await router.push("/" + key);
};

const beforeChange = () => {
  loading1.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false
      valueSwitch.value = toggleDark()
      return resolve(true)
    }, 500)
  })
}
</script>
<style scoped>
.el-menu-demo {
  background-color: #80808014;
}

.flex-grow {
  flex-grow: 1;
}</style>
