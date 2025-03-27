<template>
  <div class="flex-1 py-5">
    <div class="flex gap-5">
      <UButton>GetItem</UButton>
      <UButton @click="set">SetItem</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '首页 | Nuxt Playground',
});
import { createStorage } from "unstorage";
import localStorageDriver from "unstorage/drivers/localstorage";

const storage = createStorage({
  driver: localStorageDriver({
    base: "app:",
    storage: sessionStorage
  }),
});

async function set() {
  await $fetch('/api/storage')
  // await storage.set('key', 'value');
}
</script>
