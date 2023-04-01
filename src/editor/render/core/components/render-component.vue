<template>
  <div>
    <component :is="node.type" />
    <div>form render component</div>
  </div>
</template>
<script setup lang="ts">
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import PrivateBlock from '../layout/block.vue';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import PrivateColumn from '../layout/column.vue';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import PrivateForm from '../layout/form.vue';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import PrivateFree from '../layout/free.vue';

  interface Props {
    node: any
  }

  defineProps<Props>();
</script>
