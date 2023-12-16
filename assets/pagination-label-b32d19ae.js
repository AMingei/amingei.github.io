const e=`<template>\r
	<ex-pagination v-model="value" :page-count="20" ends-controller goto-controller\r
	start-label="首页" last-label="上一页" next-label="下一页" end-label="尾页" goto-label="跳转至：" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref(1)\r
<\/script>`;export{e as default};
