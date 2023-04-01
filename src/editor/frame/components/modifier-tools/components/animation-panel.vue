<template>
  <div :class="$style['animation-panel']">
    <div :class="$style['block']">
      <div :class="$style['block-title']">
        尺寸
      </div>
      <div :class="$style['block-item']">
        <div :class="$style['block-item-label']">
          宽度
        </div>
        <el-input size="small" />
      </div>
      <div :class="$style['block-item']">
        <div :class="$style['block-item-label']">
          高度
        </div>
        <el-input size="small" />
      </div>
    </div>
    <div :class="$style['block']">
      <div :class="$style['block-title']">
        字体
      </div>
      <div :class="$style['block-item']">
        <div :class="$style['block-item-label']">
          大小
        </div>
        <el-input size="small" />
      </div>
      <div :class="$style['block-item']">
        <div :class="$style['block-item-label']">
          颜色
        </div>
        <el-color-picker size="small" />
      </div>
      <div :class="$style['block-item']">
        <div :class="$style['block-item-label']">
          粗细
        </div>
        <el-input size="small" />
      </div>
    </div>
    <div :class="$style['block']">
      <div :class="$style['block-title']">
        背景
      </div>
      <div :class="$style['block-item']">
        <div :class="$style['block-item-label']">
          颜色
        </div>
        <el-color-picker size="small" />
      </div>
      <div :class="$style['block-item']">
        <div :class="$style['block-item-label']">
          图片
        </div>
        <el-input size="small" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .animation-panel {
    padding: 16px 0 12px;
    font-size: 12px;
    background: #fff;
  }

  .block {
    position: relative;
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
    left: 8px;
    padding: 0 4px;
    font-size: 14px;
    line-height: 24px;
    background: #fff;
  }

  .block-item {
    display: flex;
    font-size: var(--el-font-size-base);

    & ~ .block-item {
      margin-top: 8px;
    }
  }

  .block-item-label {
    flex: 0 0 40px;
    padding-right: 12px;
    text-align: right;
  }
</style>
