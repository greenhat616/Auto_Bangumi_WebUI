<script lang='ts' setup>
interface Props {
  modelValue: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})

const emit = defineEmits(['update:modelValue']);

const on = ref(props.modelValue);
const handleClick = () => {
  on.value = !on.value;
  emit('update:modelValue', on.value);
}
</script>

<template>
  <div
    class="y-switch"
    @click="handleClick"
  >
    <slot name="left"></slot>

    <div
      class="switch"
      :class="{on}"
    ></div>

    <slot name="right"></slot>
  </div>
</template>

<style lang='scss' scope>
// size
$width: 4.6875vw;
$height: 2.7344vw;
$slider: 2.1484vw;
// color
$default-color: #fff;
$default-hover-color: #DBD8EC;
$checked-color: #1C1259;
$checked-hover-color: #62589E;
// background
$background: #929292;
$checked-background: #E7E7E7;

$space: calc($width / 12);

.y-switch {
  @include flex(x);
  gap: .5em;
  justify-content: space-between;
  cursor: pointer;

  & > .switch {
    width: $width;
    height: $height;
    border-radius: $height * 0.5;

    box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.1);
    background: $background;

    position: relative;
    @include flex(x);

    transition: .5s;

    &::after {
      content: '';
      display: block;
      @include circle($slider, $default-color);
      transition: .5s;

      position: absolute;
      left: $space;
    }

    &:hover::after {
      background: $default-hover-color;
    }

    &.on {
      background: $checked-background;

      &::after {
        left: $width - $slider - $space;
        background: $checked-color;
      }

      &:hover::after {
        background: $checked-hover-color;
      }
    }
  }
}
</style>