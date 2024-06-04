<template>
  <div class="base-aside">
    <h2>这里用来展示主应用</h2>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="qiankun Action A">kooriookami</el-descriptions-item>
      <el-descriptions-item label="ice/stack-data B">{{ 5 }}</el-descriptions-item>
      <el-descriptions-item label="子应用定时器实时刷新 VueX C">{{
        Store.state.persistedData
      }}</el-descriptions-item>
      <el-descriptions-item label="Remarks">111 </el-descriptions-item>
    </el-descriptions>
    <div class="base-aside__operate">
      <el-button @click="commitValue">点击变更C的值为1</el-button>
      <el-button @click="resetValue">点击重置C</el-button>
      <!-- <el-button @click="commitValueB">点击变更B的值为1</el-button> -->

    </div>
  </div>
</template>
<script setup lang="ts">
import Store from "@/store/index";
import { CHANGE_COUNT } from "@/store/mutation-types";


Store.state.persistedData;
const commitValue = () => {
  Store.commit(CHANGE_COUNT, 1);
};
const resetValue = () => {
  Store.commit(CHANGE_COUNT, 0);
}

</script>
