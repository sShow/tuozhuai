<template>
  <dragable
    :class="$style['root']"
    data-role="root"
    :parent-node="node">
    <render-component
      v-for="(componentNode, index) in node.children"
      :key="index"
      :node="componentNode" />
  </dragable>
</template>
<script setup lang="ts">
  import * as Vue from 'vue';

  import type Node from '@editor/manager/node';

  import Dragable from '../components/dragable.vue';
  import RenderComponent from '../components/render-component.vue';

  interface Props {
    node: Node
  }

  const props = defineProps<Props>();
  console.log('print Vaue  =', Vue);
  console.log('props = ', props.node);

</script>
<style lang="postcss" module>
  .root {
    min-height: 300px;
  }
</style>
