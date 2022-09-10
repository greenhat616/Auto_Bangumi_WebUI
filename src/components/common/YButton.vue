<script lang='ts' setup>
import { StyleValue } from 'vue';

interface Props {
  size?: string,
  warn?: boolean,
  fill?: boolean,
  styles?: StyleValue
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  warn: false,
  fill: false,
})

const emit = defineEmits(['click']);

const classes = computed(() => {
  const classes = [];
  if (props.size === 'small') {
    classes.push('h3', 'small')
  } else {
    classes.push('h1')
  }

  if (props.warn) classes.push('warn')
  if (props.fill) classes.push('fill')

  return classes;
})
</script>

<template>
  <button
    class="y-button"
    :class="classes"
    :style="styles"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<style lang='scss' scope>
@mixin actionColor($default, $hover, $active) {
  background: $default;

  &:hover {
    background: $hover;
  }

  &:active {
    background: $active;
    transition: none;
  }
}
// default, hover, checked
$default: #4E3C94, #8E8A9C, #281E52;
$warn: #943C61, #9C8A93, #521E2A;

.y-button {
  width: 26.9531vw;
  line-height: 5.3711vw;
  text-align: center;
  border-radius: .9766vw;
  border: 0;
  cursor: pointer;

  color: #fff;
  transition: .5s;
  @include actionColor($default...);

  &.small {
    width: 16.6992vw;
    line-height: 3.5156vw;
    border-radius: .5859vw;
  }

  &.warn {
    @include actionColor($warn...);
  }

  &.fill {
    width: 100%;
  }
}
</style>