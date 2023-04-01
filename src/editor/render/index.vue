<template>
  <div
    ref="rootRef"
    :class="$style['render']">
    <div :class="$style['wrapper']">
      <main-ui-menu :style="scaleStyles">
        <main-ui-render />
        <scale-line />
      </main-ui-menu>
      <tool-box v-model="scaleNum" />
      <active-path />
      <position-rocker />
    </div>
  </div>
</template>
<script setup lang="ts">
  import {
    computed,
    onMounted,
    ref,
  } from 'vue';

  import Node from '@editor/manager/node';

  import ActivePath from './extends/active-path/index.vue';
  import MainUiMenu from './extends/main-ui/menu.vue';
  import MainUiRender from './extends/main-ui/render.vue';
  import PositionRocker from './extends/position-rocker.vue';
  import ScaleLine from './extends/scale-line.vue';
  import ToolBox from './extends/tool-box.vue';

  const node = new Node('el-button');
  // const style = { ...node.style };
  console.log('node = ', node);

  const rootRef = ref();
  const scaleNum = ref(1);

  const scaleStyles = computed(() => ({
    transform: `scale(${scaleNum.value.toFixed(1)})`,
    transformOrigin: 'center top',
  }));

  onMounted(() => {
    rootRef.value.scrollTo(900, 300);
  });
</script>
<style lang="postcss" module>
  .render {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    user-select: none;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  .wrapper {
    min-width: 6000px;
    min-height: 3500px;
    padding-right: 300px;
    padding-bottom: 300px;
    overflow: hidden;
    background-image: radial-gradient(rgb(9 89 194 / 30%) 6%, transparent 0);
    background-position: 0 0, 2px 2px;
    background-size: 10px 10px;
  }
</style>
