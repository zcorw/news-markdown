<script setup lang="ts">
import { ref } from "vue"
import { ElInput, ElButton } from 'element-plus'
import axios from 'axios'
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.get["Cache-Control"] = "no-cache";

const text = ref('')
const md = ref('')
function submit() {
  axios.post('api/cut', {
    text: text.value
  }).then(res => {
    md.value = res.data
  })
}
function copyText() {
  // 创建一个临时的文本框元素
  var textarea = document.createElement("textarea");
  // 设置文本框的值为要复制的文本
  textarea.value = md.value;
  // 将文本框元素添加到文档中
  document.body.appendChild(textarea);
  // 选中文本
  textarea.select();
  // 执行复制命令
  document.execCommand("copy");
  // 移除文本框元素
  document.body.removeChild(textarea);
  // 弹出提示
  alert("文本已复制到剪贴板！");
}
</script>

<template>
  <header>
    <div>
      <el-button type="primary" @click="submit">Submit</el-button>
    </div>
    <el-input v-model="text" :row="8" type="textarea" style="flex: 1; margin-top: 10px" input-style="height: 100%" />
  </header>

  <main>
    <div>
      <el-button type="primary" style="float: right" @click="copyText">Copy</el-button>
    </div>
    <div style="margin-top: 10px;white-space: pre-line; flex: 1;min-height: 0;overflow: auto;">{{ md }}</div>
  </main>
</template>

<style scoped>
header {
  flex: 1;
  display: flex;
  padding: 10px;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

</style>
