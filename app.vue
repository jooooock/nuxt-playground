<template>
  <div :class="isDev ? 'debug-screens' : ''" class="flex flex-col h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const isDev = !import.meta.env.PROD;
</script>

<style>
body {
  overscroll-behavior: none; /* 阻止滚动到页面边缘的效果 */
}
</style>
