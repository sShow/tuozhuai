<template>
  <div :class="$style['style-panel']">
    <div :class="$style['block']">
      <div :class="$style['block-title']">
        基础组件
      </div>
      <div :class="$style['block-item']">
        按钮
      </div>
      <div :class="$style['block-item']">
        链接
      </div>
      <div :class="$style['block-item']">
        按钮
      </div>
    </div>
    <div :class="$style['block']">
      <div :class="$style['block-title']">
        基础组件
      </div>
      <div :class="$style['block-item']">
        按钮
      </div>
      <div :class="$style['block-item']">
        链接
      </div>
      <div :class="$style['block-item']">
        按钮
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .style-panel {
    padding: 16px 0 12px;
    font-size: 12px;
    background: #fff;
  }

  .block {
    position: relative;
    display: flex;
    padding: 16px 8px 12px;
    border: 1px solid var(--el-border-color);
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

  .block-item {
    width: 100px;
    padding: 4px 0;
    font-size: var(--el-font-size-base);
    text-align: center;
    cursor: default;
    border: var(--el-border);
    border-color: var(--el-border-color);
    border-radius: 2px;

    &:hover {
      color: var(--el-color-primary);
      background-color: var(--el-color-primary-light-9);
      border-color: var(--el-color-primary-light-7);
      outline: none;
    }

    & ~ .block-item {
      margin-left: 12px;
    }
  }
</style>
