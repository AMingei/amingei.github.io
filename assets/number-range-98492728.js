const n=`<template>\r
	<ex-flex width="60%" gap=".5rem">\r
		<ex-number v-model="minVal" style="width: 6rem" />\r
		≤\r
		<ex-number v-model="val" :range="[minVal, maxVal]" controller />\r
		≤\r
		<ex-number v-model="maxVal" style="width: 6rem" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const minVal = ref<number>(-Infinity)\r
const maxVal = ref<number>(Infinity)\r
const val = ref<number>()\r
<\/script>`;export{n as default};
