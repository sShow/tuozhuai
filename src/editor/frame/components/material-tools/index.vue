<template>
  <div :class="$style['material-tools']">
    <div ref="rootRef">
      <tab-box v-model="active" />
    </div>
    <div
      ref="popRef"
      :class="$style['panel']">
      <div
        :class="$style['panel-close-btn']"
        @click="handleHidePanel">
        <el-icon>
          <close />
        </el-icon>
      </div>
      <component :is="renderPanel" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import tippy, {
    type Instance,
    type SingleTarget,
  } from 'tippy.js';
  import {
    computed,
    onBeforeUnmount,
    onMounted,
    ref,
    watch,
  } from 'vue';

  import ComponentPanel from './components/component-panel/index.vue';
  import TabBox from './components/tab-box.vue';

  const rootRef = ref();
  const popRef = ref();
  const active = ref('');

  const comMap = {
    component: ComponentPanel,
  } as Record<string, any>;

  const renderPanel = computed(() => comMap[active.value]);

  let tippyIns:Instance | undefined;

  watch(active, () => {
    if (!tippyIns) {
      return;
    }
    active.value ? tippyIns?.show() : tippyIns?.hide();
  });

  const handleHidePanel = () => {
    active.value = '';
  };

  onMounted(() => {
    tippyIns = tippy(rootRef.value as SingleTarget, {
      content: popRef.value,
      placement: 'bottom-start',
      appendTo: () => document.body,
      theme: 'light material-tools-theme',
      maxWidth: 'none',
      trigger: 'manual',
      interactive: true,
      arrow: false,
      offset: [0, 8],
      zIndex: 999999,
      hideOnClick: false,
    });
  });

  onBeforeUnmount(() => {
    if (tippyIns) {
      tippyIns.hide();
      tippyIns.unmount();
      tippyIns.destroy();
      tippyIns = undefined;
    }
  });
</script>
<style lang="postcss" module>
  .material-tools {
    position: fixed;
    top: 70px;
    left: 36px;
    z-index: 999999;
  }

  .panel {
    position: relative;
    width: 400px;
    padding: 16px 8px;
  }

  .panel-close-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    display: flex;
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #f0f2f5;
    }
  }
</style>
