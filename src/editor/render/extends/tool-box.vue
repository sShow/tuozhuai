<template>
  <div :class="$style['tool-box']">
    <el-input-number
      :max="4"
      :min="0.1"
      :model-value="modelValue"
      :precision="1"
      size="small"
      :step="0.1"
      style="width: 100px;"
      @change="handleChange" />
  </div>
</template>
<script setup lang="ts">
  import _ from 'lodash';
  import {
    onBeforeUnmount,
    onMounted,
  } from 'vue';

  interface Props{
    modelValue: number
  }

  interface Emits{
    (e: 'update:modelValue', value: number): void
  }

  defineProps<Props>();
  const emits = defineEmits<Emits>();

  const handleChange = _.throttle((value: number) => {
    emits('update:modelValue', value);
  }, 100);

  let scale = 1;
  const handleWheel = (event: WheelEvent) => {
    if (event.ctrlKey === true || event.metaKey) {
      event.preventDefault();
      event.stopPropagation();
      scale += event.deltaY * -0.01;

      scale = Math.min(Math.max(.1, scale), 4);
      handleChange(scale);
    }
  };

  onMounted(() => {
    window.addEventListener('wheel', handleWheel, {
      passive: false,
    });
  });
  onBeforeUnmount(() => {
    window.removeEventListener('wheel', handleWheel);
  });
</script>
<style lang="postcss" module>
  .tool-box {
    position: fixed;
    right: 150px;
    bottom: 36px;
    display: flex;
    height: 48px;
    padding: 0 12px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: var(--el-box-shadow);
    align-items: center;
  }
</style>
