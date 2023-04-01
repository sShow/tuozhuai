<template>
  <div :class="$style['tab-box']">
    <div
      :class="{
        [$style['button']]: true,
        [$style['active']]: modelValue === 'prop'
      }"
      @click="handleClick('prop')">
      配置
    </div>
    <div
      :class="{
        [$style['button']]: true,
        [$style['active']]: modelValue === 'event'
      }"
      @click="handleClick('event')">
      交互
    </div>
    <div
      :class="{
        [$style['button']]: true,
        [$style['active']]: modelValue === 'animation'
      }"
      @click="handleClick('animation')">
      动画
    </div>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    modelValue: string
  }
  interface Emits {
    (e: 'update:modelValue', value: string): void
  }

  defineProps<Props>();

  const emits = defineEmits<Emits>();

  const handleClick = (value: string) => {
    emits('update:modelValue', value);
  };
</script>
<style lang="postcss" module>
  .tab-box {
    display: flex;
    height: 32px;
    padding: 0 4px;
    background: #fff;
    border-radius: 16px;
    box-shadow: var(--el-box-shadow-lighter);
    align-items: center;
  }

  .button {
    display: flex;
    width: 26px;
    height: 26px;
    padding: 0 4px;
    cursor: pointer;
    background: #f2f6fc;
    border-radius: 13px;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;

    &:hover {
      color: var(--el-color-white);
      background-color: var(--el-color-primary-light-3);
    }

    &.active {
      color: #fff;
      background: var(--el-color-primary);
    }

    & ~ .button {
      margin-left: 8px;
    }
  }
</style>
