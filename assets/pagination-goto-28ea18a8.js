const t=`<template>\r
	<ex-pagination v-model="value" :page-count="20" ends-controller goto-controller />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref(1)\r
<\/script>`;export{t as default};
