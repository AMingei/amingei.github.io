const r=`<template>\r
	<ex-flex width="290px" vertical>\r
		<ex-slider v-model="value" max="10" step="2" :marks="marks" strict-mark />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value = ref(2)\r
const marks = [\r
	{ value: 2, label: '20%' },\r
	{ value: 8, label: '80%' },\r
	{ value: 10, label: '100%' }\r
]\r
\r
<\/script>`;export{r as default};
