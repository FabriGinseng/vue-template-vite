<template>
  <el-container style="min-height: 100vh; padding: 0;">
    <el-header style="padding: 0; margin: 0; ">
        <BaseHeader/>
    </el-header>
    <el-main>
        <RouterView/>    
    </el-main>
  </el-container>
</template>

<script setup>
import BaseHeader from "../Navbar/BaseHeader.vue";
</script>

<style scoped>
</style>
