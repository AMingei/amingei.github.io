const r=`<template>\r
	<ex-flex width="50%" vertical>\r
		<ex-number v-model="val" controller controller-justify="start" />\r
		<ex-number v-model="val" controller controller-justify="between" />\r
		<ex-number v-model="val" controller controller-justify="end" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const val = ref<number>(12)\r
<\/script>`;export{r as default};
