<script lang='ts' setup>
interface Props {
  modelValue?: string,
  placeholder?: string,
  judge?: Function
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Text',
})

const inputVal = ref(props.modelValue);
const emit = defineEmits(['update:modelValue', 'input']);
const inputChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  inputVal.value = value;
  judgeError(value);
  emit('update:modelValue', value);
  emit('input', value);
}

// 判断错误内容
const error = ref(false);
const judgeError = (value: string) => {
  if (typeof props.judge === 'function') {
    error.value = props.judge(value)
  }
}
</script>

<template>
  <div
    class="y-input"
    :class="{error}"
  >
    <slot name="left"></slot>

    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputChange"
    />

    <slot name="right"></slot>
  </div>
</template>

<style lang='scss' scope>
$width: 19.5313vw;
$padding: .7813vw 1.1719vw;
$ra: .5859vw;

$color: #000;
$hover-color: #7A46AE;
$error-color: #CA0E0E;

.y-input {
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: .5em;

  & > input {
    width: $width;
    min-width: 0;
    outline: none;

    border-radius: $ra;
    border: 1px solid $color;
    box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.1);

    padding: $padding;
    text-align: right;

    &:hover,
    &:focus {
      border-color: $hover-color;
    }
  }

  &.error {
    & > input {
      border-color: $error-color;
    }
  }
}
</style>