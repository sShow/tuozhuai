<template>
  <div :class="$style['active-path']">
    <div :class="$style['extend-wrapper']">
      <div :class="$style['extend-tag']">
        dialog1
      </div>
      <div :class="$style['extend-tag']">
        dialog2
      </div>
    </div>
    <div :class="$style['path-wrapper']">
      <span>aaa</span>
      <span>>bbb</span>
      <span>>ccc</span>
      <span>>ddd</span>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .active-path {
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 12px;
  }

  .extend-wrapper {
    display: flex;
    padding-bottom: 4px;

    .extend-tag {
      display: flex;
      align-items: center;
      height: 24px;
      padding: 0 8px;
      margin-left: 8px;
      cursor: pointer;
      background-color: #ecf5ff;
      border-radius: 4px;
    }
  }

  .path-wrapper {
    display: flex;
    height: 24px;
    padding: 0 8px;
    background-color: #e9e9eb;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    align-items: center;
  }
</style>
