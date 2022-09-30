<script lang='ts' setup>
const items = [
  { icon: 'menu-unfold' },
  { icon: 'home' },
  { icon: 'calendar' },
  { icon: 'play' },
  { icon: 'download' },
  { icon: 'setting-two' },
  { icon: 'log' },
]
</script>

<template>
  <div class="menu-bar">

    <template v-for="i in items">
      <RouterLink
        class="link"
        to="home"
      >
        <iconpark-icon :name="i.icon" />
      </RouterLink>
    </template>
  </div>
</template>

<style lang='scss' scope>
.menu-bar {
  width: 4.6875vw;
  height: 100%;

  @include flex(y);
  gap: 2.9297vw;
  padding: 1.9531vw 1.1719vw 1.1719vw;

  background: $theme-color;
  color: #fff;

  @include fontSize(24);
  text-align: center;

  .link {
    color: inherit;
  }
}
</style>