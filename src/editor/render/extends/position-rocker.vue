<template>
  <div :class="$style['position-rocker']">
    <div :class="$style['layout']">
      <el-icon>
        <caret-top />
      </el-icon>
    </div>
    <div :class="$style['layout']">
      <div>
        <el-icon>
          <caret-left />
        </el-icon>
      </div>
      <div>
        <el-icon>
          <aim />
        </el-icon>
      </div>
      <div>
        <el-icon>
          <caret-right />
        </el-icon>
      </div>
    </div>
    <div :class="$style['layout']">
      <el-icon>
        <caret-bottom />
      </el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .position-rocker {
    position: fixed;
    right: 10px;
    bottom: 24px;
    font-size: 24px;
    color: #c8c9cc;

    :global {
      .el-icon {
        cursor: pointer;
        transition: all 0.1s;

        &:hover {
          color: #409eff;
        }
      }
    }
  }

  .layout {
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }
</style>
