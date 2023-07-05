<template>
  <div class="v-layout-wrapper">
    <div class="v-layout-wrapper-left">
      <el-scrollbar>
        <slot name="left" />
      </el-scrollbar>
    </div>
    <div class="v-layout-wrapper-container">
      <slot />
    </div>
    <div class="v-layout-wrapper-right">
      <slot name="right" />
    </div>
  </div>
</template>
<style scoped lang="less">
  @layoutLeft: 280px;
  @layoutRight: 280px;
  .v-layout-wrapper {
    display: flex;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
    &-left {
      width: @layoutLeft;
      border: 1px solid #a6aeb8;
      border-radius: 4px;
    }
    &-container {
      width: calc(100% - 32px - @layoutLeft - @layoutRight);
    }
    &-right {
      width: @layoutRight;
      border: 1px solid #a6aeb8;
      border-radius: 4px;
    }
  }
</style>
