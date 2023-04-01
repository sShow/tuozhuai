<template>
  <div
    ref="horizontalRef"
    :class="$style['scale-horizontal']">
    <div
      v-for="i in horizontalScale"
      :key="i"
      :class="$style['scale-unit']"
      :data-role="i">
      <span v-if="i === 1">0</span>
      <span v-if="i % 10 === 0">{{ i * 5 }}</span>
    </div>
    <div
      key="end"
      :class="$style['scale-unit']"
      :style="{
        position: 'absolute',
        left: `${width - 1}px`,
        height: '20px',
        margin: 0,
        color: '#79bbff',
        backgroundColor: '#79bbff'
      }">
      <span>{{ width }}</span>
    </div>
  </div>
  <div
    ref="verticalRef"
    :class="$style['scale-vertical']">
    <div
      v-for="i in verticalScale"
      :key="i"
      :class="$style['scale-unit']">
      <span v-if="i === 1">0</span>
      <span v-if="i % 10 === 0">{{ i * 5 }}</span>
    </div>
    <div
      key="end"
      :class="$style['scale-unit']"
      :style="{
        position: 'absolute',
        top: `${height - 1}px`,
        width: '20px',
        margin: 0,
        color: '#79bbff',
        backgroundColor: '#79bbff'
      }">
      <span>{{ height }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {
    computed,
    onMounted,
    ref,
  } from 'vue';

  const horizontalRef = ref();
  const verticalRef = ref();
  const width = ref(0);
  const height = ref(0);

  const horizontalScale = computed(() => Math.ceil(width.value / 5));
  const verticalScale = computed(() => Math.ceil(height.value / 5));

  onMounted(() => {
    width.value = horizontalRef.value.getBoundingClientRect().width;
    height.value = verticalRef.value.getBoundingClientRect().height;

    console.log('wiad', width.value, height.value);
  });
</script>
<style lang="postcss" module>
  .scale-horizontal {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    height: 40px;
    transform: translateY(-100%);
    align-items: flex-end;

    .scale-unit {
      position: relative;
      float: left;
      width: 1px;
      height: 3px;
      color: #909399;
      background-color: #909399;
      flex: 1 0 1px;

      & ~ .scale-unit {
        margin-left: 4px;
      }

      &:nth-child(5n) {
        height: 7px;
      }

      &:nth-child(10n) {
        height: 10px;
      }

      span {
        position: absolute;
        top: -15px;
        left: 50%;
        font-size: 12px;
        transform: translateX(-50%) scale(0.7);
      }
    }
  }

  .scale-vertical {
    position: absolute;
    top: 37px;
    bottom: 0;
    left: 0;
    display: flex;
    width: 40px;
    color: #909399;
    transform: translateX(-100%);
    align-items: flex-end;
    flex-direction: column;

    .scale-unit {
      position: relative;
      width: 5px;
      height: 1px;
      background-color: #909399;
      flex: 0 0 1px;

      & ~ .scale-unit {
        margin-top: 4px;
      }

      &:nth-child(5n) {
        width: 7px;
      }

      &:nth-child(10n) {
        width: 10px;
      }

      span {
        position: absolute;
        top: 50%;
        left: 0;
        font-size: 12px;
        transform: translateX(-100%) translateY(-50%) scale(0.7);
      }
    }
  }
</style>
