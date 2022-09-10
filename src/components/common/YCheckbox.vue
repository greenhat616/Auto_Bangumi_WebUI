<script lang='ts' setup>
interface Props {
  size?: string,
  value?: string | null,
  checked?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  value: null,
  checked: false,
})

const emit = defineEmits(['change']);

const on = ref(props.checked !== false ? true : false);
const handleClick = () => {
  on.value = !on.value;
  emit('change', { status: on.value, value: props.value })
}
</script>

<template>
  <div
    class="y-checkbox"
    :class="{small: size === 'small'}"
    @click="handleClick"
  >
    <div
      class="checkbox"
      :class="{on}"
    ></div>
    <slot></slot>
  </div>
</template>

<style lang='scss' scope>
$defaultSize: 3.125vw;
$smallSize: 1.5625vw;
$ra: .3906vw;

$color: #3C239F;
$hoverColor: #CCCAD4;

.y-checkbox {
  display: flex;
  align-items: center;
  gap: .5em;
  cursor: pointer;
  user-select: none;
  width: max-content;

  & > .checkbox {
    width: $defaultSize;
    height: $defaultSize;
    min-width: .6em;
    min-height: .6em;
    border-radius: $ra;
    background: $color;

    @include flex(cer);
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 80%;
      height: 80%;
      border-radius: $ra * 0.75;
      background: #fff;
      @include abs(cer);
    }

    &::after {
      content: '';
      display: block;
      width: 50%;
      height: 50%;
      background: transparent;
      transition: .5s;
      position: relative;
      z-index: 1;
      border-radius: $ra * 0.5;
    }

    &:hover::after {
      background: $hoverColor;
    }

    &.on::after {
      background: $color;
    }
  }

  &.small {
    & > .checkbox {
      width: $smallSize;
      height: $smallSize;
    }
  }
}
</style>