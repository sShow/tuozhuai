<template>
  <div
    ref="rootRef"
    role="drag">
    <!-- <slot :list="parentNode.children" /> -->
  </div>
</template>
<script setup lang="ts">
  import Sortable from 'sortablejs';
  import {
    onMounted,
    ref,
  } from 'vue';

  import type Node from '@editor/manager/node';

  interface Props {
    parentNode: Node
  }

  interface Emits {
    (e: 'remove', index: number): void,
    (e: 'add', index: number): void,
    (e: 'sort', lastIndex: number, newIndex: number): void,
  }

  const props = defineProps<Props>();
  const emits = defineEmits<Emits>();

  const rootRef = ref();

  onMounted(() => {
    const sortable = Sortable.create(rootRef.value, {
      group: 'render',
      sort: true,
      onStart(event) {
        console.log('onStart event', event);
      },
      onAdd(event) {
        console.log('onAdd event', event);
        emits('add', 1);
      },
      onSort(event) {
        console.log('onSort event', event);
        emits('sort', 1, 2);
      },
      onRemove() {
        console.log('onRemove event', event);
        emits('remove', 1);
      },
      onEnd(event) {
        console.log('onEnd event', event);
        console.log('props = ', props.parentNode);
      },
    });

    console.log('Sortable = ', sortable);
  });
</script>
<style lang="postcss">
  .root {
    display: block;
  }
</style>
