const t=`<template>\r
	<ex-flex>\r
		disabled\r
		<ex-switch disabled v-model="a" />\r
		readonly\r
		<ex-switch readonly v-model="b" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
const a = ref(false)\r
const b = ref(false)\r
<\/script>`;export{t as default};
