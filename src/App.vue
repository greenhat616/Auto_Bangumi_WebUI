<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue';
</script>

<template>
  <Suspense>
    <div class="app">
      <MenuBar />

      <main>
        <RouterView />
      </main>
    </div>
  </Suspense>
</template>

<style lang="scss">
@import 'styles/base';

.app {
  display: flex;
  height: 100vh;
  background: #F0F0F0;

  main {
    flex: 1;
  }
}
</style>