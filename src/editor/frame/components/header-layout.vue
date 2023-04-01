<template>
  <div :class="$style['header']">
    <div :class="$style['left']">
      <div :class="$style['button']">
        保存
      </div>
      <div :class="$style['button']">
        预览
      </div>
      <div :class="$style['button']">
        新建页面
      </div>
      <div :class="$style['button']">
        视图
      </div>
      <div :class="$style['button']">
        设置
      </div>
      <div :class="$style['button']">
        帮助
      </div>
    </div>
    <div :class="$style['center']">
      <el-input
        :model-value="720"
        size="small" />
      <span>X</span>
      <el-input
        disabled
        model-value="auto"
        readonly
        size="small" />
    </div>
    <div :class="$style['right']">
      <div :class="$style['text']">
        操作人：admin
      </div>
      <div :class="$style['text']">
        最新修改时间：2023-01-14
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .header {
    position: relative;
    z-index: 99999;
    display: flex;
    height: 36px;
    background-color: #f2f3f5;
    box-shadow: 0 3px 4px 0 rgb(0 0 0 / 4%);
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
    padding-left: 24px;
  }

  .center {
    display: flex;
    align-items: center;

    :global {
      .el-input {
        width: 60px;
      }
    }

    span {
      padding: 0 4px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    padding-right: 24px;
  }

  .button {
    display: flex;
    height: 24px;
    padding: 0 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.1s;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #e6e8eb;
    }

    & ~ .button {
      margin-left: 8px;
    }
  }

  .text {
    display: flex;
    height: 24px;
    padding: 0 8px;
    justify-content: center;
    align-items: center;

    & ~ .text {
      margin-left: 8px;
    }
  }
</style>
