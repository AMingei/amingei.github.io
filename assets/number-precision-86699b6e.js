const e=`<template>\r
	<ex-flex width="50%">		\r
		<label for="example-precision-1">精度</label>\r
		<ex-number id="example-step-1" v-model="precision" style="width: 20%" />\r
		<ex-number v-model="val" :precision="precision" controller style="flex: auto"  />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const val = ref<number>()\r
const precision = ref<number>(2)\r
<\/script>`;export{e as default};
