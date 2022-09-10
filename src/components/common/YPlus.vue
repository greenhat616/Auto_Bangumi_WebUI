<script lang='ts' setup>
const emit = defineEmits(['click']);
</script>

<template>
  <div class="y-plus-btn" @click="$emit('click')"></div>
</template>

<style lang='scss' scope>
$size: 3.5156vw;
$line-width: calc($size / 2);
$line-height: calc($line-width / 3);
$color: #fff;
$background: #493475;
$hover-background: #756596;

.y-plus-btn{
  @include circle($size);
  background: $background;
  @include flex(cer);
  position: relative;
  transition: .5s;
  cursor: pointer;

  &::after,
  &::before{
    content: '';
    display: block;
    width: $line-width;
    height: $line-height;
    background: $color;
    position: absolute;
  }

  &::before{
    transform: rotate(90deg);
  }

  &:hover{
    background: $hover-background;
  }
}
</style>