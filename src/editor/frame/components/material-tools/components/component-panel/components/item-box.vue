<template>
  <div
    ref="boxRef"
    :class="$style['box']">
    <div :class="$style['item']">
      按钮1
    </div>
    <div :class="$style['item']">
      链接2
    </div>
    <div :class="$style['item']">
      按钮3
    </div>
  </div>
</template>
<script setup lang="ts">
  import Sortable from 'sortablejs';
  import {
    onMounted,
    ref,
  } from 'vue';

  const boxRef = ref();

  onMounted(() => {
    const sortable = Sortable.create(boxRef.value, {
      group: {
        name: 'render',
        pull: 'clone',
      },
      sort: false,
      onChoose(event) {
        console.log('on choose = ', event);
      },
    });

    console.log('Sortable = ', sortable);
  });
</script>
<style lang="postcss" module>
  .box {
    display: flex;
  }

  .item {
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

    & ~ .item {
      margin-left: 12px;
    }
  }
</style>
