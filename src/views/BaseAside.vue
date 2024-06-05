<template>
  <div class="base-aside">
    <h2>这里用来展示主应用</h2>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="vueuse A">{{ a }}</el-descriptions-item>
      <el-descriptions-item label="ice/stark-data B">{{ b }}</el-descriptions-item>
      <el-descriptions-item label="子应用定时器实时刷新 VueX C">{{
      Store.state.persistedData
    }}</el-descriptions-item>
    </el-descriptions>
    <div class="base-aside__operate">
      <el-button @click="commitValue">点击变更C的值为1</el-button>
      <el-button @click="resetValue">点击重置C</el-button>
      <el-button @click="changeBValue">点击变更B的值为6</el-button>
      <el-button @click="changeAValue">点击变更A的值为11</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Store from "@/store/index";
import { CHANGE_COUNT } from "@/store/mutation-types";
import { ref } from "vue";
import { store as iceStore, event as iceEvent } from "@ice/stark-data";
import { useGlobalState } from "@/vueuse/store"; 

Store.state.persistedData;
const commitValue = () => {
  Store.commit(CHANGE_COUNT, 1);
};
const resetValue = () => {
  Store.commit(CHANGE_COUNT, 0);
};

const b = ref<any>(1);
// 发布
iceStore.set("iceData", 1);
// 订阅
iceStore.on(
  "iceData",
  (data: unknown) => {
    b.value = data;
  },
  true
);
// 注册事件
iceEvent.on('freshEvent', (payload: any) => {
  console.log("主应用响应了子应用的事件", payload)
});

const changeBValue = () => {
  iceStore.set("iceData", 6);
};

// vueuse全局状态的取值与变更
const { getter, setter } = useGlobalState();
const a = getter("count");
const changeAValue = () => {
  setter("count", 11);
}
</script>
