const t=`<template>\r
	<ex-flex width="290px">\r
		<ex-date-selector v-model="date" :limination="limitFunc" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const date = ref(new Date())\r
\r
function limitFunc(_year: number, _month: number, date: number) {\r
	return date < 15\r
}\r
<\/script>`;export{t as default};
