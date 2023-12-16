const e=`<template>\r
	<ex-flex width="50%" style="align-items: baseline;">\r
		<label for="example-step-1">步长</label>\r
		<ex-number id="example-step-1" v-model="step" style="width: 20%" />\r
		<ex-flex style="flex: auto" vertical>\r
			<ex-number v-model="val_1" :step="step" controller :placeholder="\`步长：\${step}\`" />\r
			<ex-number v-model="val_2" :strict-step="step" controller :placeholder="\`严格步长：\${step}\`" />\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const val_1 = ref<number>()\r
const val_2 = ref<number>()\r
const step = ref<number>(2)\r
<\/script>`;export{e as default};
