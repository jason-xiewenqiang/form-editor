<template>
  <div class="v-editor">
    <Toolbar />
    <LayoutWrapper class="v-center">
      <template #left>
        <LeftBar />
      </template>
      <Container />
      <template #right>
        <RightProperty />
      </template>
    </LayoutWrapper>
  </div>
</template>
<script setup lang="ts">
  import LayoutWrapper from './editor-layout/LayoutWrapper.vue'
  import LeftBar from './editor-components/LeftBar.vue'
  import RightProperty from './editor-components/RightProperty.vue'
  import Container from './editor-components/Container.vue'
  import Toolbar from './editor-components/Toolbar.vue'
</script>
<style scoped lang="less">
@toolbar: 60px;
  .v-editor {
    height: 100%;
    .v-toolbar {
      height: @toolbar;
    }
    .v-center {
      height: calc(100% - @toolbar);
    }
  }
</style>
