<template>
  <div :class="$style['component-panel']">
    <div :class="$style['block']">
      <div :class="$style['block-title']">
        基础组件
      </div>
      <item-box />
    </div>
  </div>
</template>
<script setup lang="ts">
  import ItemBox from './components/item-box.vue';
</script>
<style lang="postcss" module>
  .component-panel {
    padding: 16px 0 12px;
    font-size: 12px;
    background: #fff;
  }

  .block {
    position: relative;
    display: flex;
    padding: 16px 8px 12px;
    border-top: 1px solid var(--el-border-color);
    border-radius: 5px;

    & ~ .block {
      margin-top: 24px;
    }
  }

  .block-title {
    position: absolute;
    top: -12px;
    left: 18px;
    padding: 0 4px;
    font-size: 14px;
    line-height: 24px;
    background: #fff;
  }
</style>
