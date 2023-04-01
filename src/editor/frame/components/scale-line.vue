<template>
  <div :class="$style['scale-horizontal']">
    <div
      v-for="i in 1200"
      :key="i"
      :class="$style['scale-unit']"
      :data-role="i">
      <span v-if="i % 10 === 0">{{ i * 5 }}</span>
    </div>
  </div>
  <div :class="$style['scale-vertical']">
    <div
      v-for="i in 500"
      :key="i"
      :class="$style['scale-unit']">
      <span v-if="i % 10 === 0">{{ i * 5 }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .scale-horizontal {
    position: absolute;
    top: 0;
    left: 0;

    .scale-unit {
      position: relative;
      float: left;
      width: 1px;
      height: 3px;
      color: #909399;
      background-color: #909399;

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
        top: 10px;
        left: 50%;
        font-size: 12px;
        transform: translateX(-50%) scale(0.7);
      }
    }
  }

  .scale-vertical {
    position: absolute;
    top: 0;
    left: 0;
    color: #909399;

    .scale-unit {
      position: relative;
      width: 5px;
      height: 1px;
      background-color: #909399;

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
        left: 10px;
        font-size: 12px;
        transform: translateY(-50%) scale(0.7);
      }
    }
  }
</style>
