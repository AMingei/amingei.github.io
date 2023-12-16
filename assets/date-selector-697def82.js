const e=`<template>\r
	<ex-flex width="290px">\r
		<ex-date-selector v-model="date" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const date = ref(new Date())\r
<\/script>`;export{e as default};
