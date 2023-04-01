<template>
  <div
    :class="$style['tool-menu']"
    :style="{
      top: '500px',
      left: '1350px'
    }">
    <div :class="$style['bar']">
      <div :class="$style['bar-left']">
        <div
          :class="[$style['bar-button'], $style['bar-button-close']]"
          title="删除页面">
          <el-icon size="10">
            <delete />
          </el-icon>
        </div>
        <div
          :class="$style['bar-button']"
          title="撤销编辑">
          <el-icon>
            <refresh-left />
          </el-icon>
        </div>
        <div
          :class="$style['bar-button']"
          title="回退上一步">
          <el-icon>
            <refresh-right />
          </el-icon>
        </div>
      </div>
      <div :class="$style['bar-center']">
        <el-input
          model-value="/index"
          readonly
          size="small"
          style="width: 350px;">
          <template #prepend>
            首页
          </template>
        </el-input>
      </div>
      <div :class="$style['bar-right']">
        <div
          :class="$style['bar-button']"
          title="切换页面">
          <el-icon>
            <arrow-down-bold />
          </el-icon>
        </div>
      </div>
    </div>
    <div :class="$style['content']">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .tool-menu {
    position: absolute;
    width: 1080px;
    min-height: 520px;
    background: #fff;
    border-radius: 12px;
    box-shadow: var(--el-box-shadow);
    transition: all 0.1s;

    &:hover {
      box-shadow: var(--el-box-shadow-dark);
    }
  }

  .bar {
    position: relative;
    display: flex;
    height: 36px;
    padding: 0 16px;
    background-color: #e6e8eb;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    align-items: center;
  }

  .bar-left,
  .bar-right {
    position: relative;
    z-index: 1;
  }

  .bar-left {
    display: flex;
    align-items: center;
  }

  .bar-center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bar-right {
    margin-left: auto;
  }

  .bar-button {
    display: flex;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background: #f0f2f5;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transition: 0.1s;

    & ~ .bar-button {
      margin-left: 12px;
    }

    &:hover {
      background-color: #fafafa;
    }
  }

  .bar-button-close {
    color: #fff;
    background-color: #f56c6c;

    &:hover {
      background-color: #f89898;
    }
  }

  .content {
    overflow-x: auto;
  }
</style>
