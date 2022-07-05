<script setup lang="ts">
const confirm = () => {
  console.log("confirm");
};
</script>

<template>
  <SButton type="primary" size="small" @click="confirm">按钮</SButton>
  <SButton type="primary" size="medium" @click="confirm">按钮</SButton>
  <SButton type="primary" size="large" @click="confirm" disabled>按钮</SButton>
  <SButton type="primary" size="large" @click="confirm" block>按钮</SButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
