<template>
  <div :class="$style['prop-panel']">
    <div :class="$style['block']">
      <div :class="$style['block-title']">
        默认值
      </div>
      <div :class="$style['block-item']">
        <el-input size="small">
          <template #prepend>
            model-value
          </template>
        </el-input>
      </div>
    </div>
    <div :class="$style['block']">
      <div :class="$style['block-title']">
        大小
      </div>
      <div :class="$style['block-item']">
        <el-input size="small">
          <template #prepend>
            size
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .prop-panel {
    padding: 16px 0 12px;
    font-size: 12px;
    background: #fff;
  }

  .block {
    position: relative;
    font-size: var(--el-font-size-base);

    & ~ .block {
      margin-top: 12px;
    }
  }

  .block-title {
    font-size: 14px;
    line-height: 24px;
    background: #fff;
  }

  .block-item {
    font-size: var(--el-font-size-base);
  }
</style>
