<script lang='ts' setup>
const input = ref('');
const show = () => {
  console.log(input.value);
}

const switchBtn = ref(false);
</script>

<template>
  <view class="app-home">
    <YButton>test</YButton>
    <YButton size="small">test</YButton>
    <YButton warn>test</YButton>
    <YButton fill>test</YButton>

    <YCheckbox />
    <YCheckbox checked />
    <YCheckbox size="small" />
    <YCheckbox size="small">text</YCheckbox>

    <YSwitch v-model="switchBtn">
      <template #left>left text</template>
    </YSwitch>

    <YInput v-model="input" />
    <YButton @click="show">Button</YButton>

    <YPlus/>


  </view>
</template>

<style lang='scss' scope>

</style>