<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <el-date-picker
    v-model="value1"
    type="datetime"
    placeholder="Select date and time"
  />
  <el-popconfirm>
    <template #reference>
      <el-button>CLICK</el-button>
    </template>
  </el-popconfirm>
  <div v-if="smallwindow">
    something will show when the init-width less than 992px
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { ElButton, ElDatePicker, ElPopconfirm } from "element-plus";

const value1 = ref();
const screenwidth = ref(innerWidth);
const smallwindow = computed(() => {
  // console.warn("innerWidth:", screenwidth.value);
  return screenwidth.value < 992;
});
</script>
