const t=`<template>\r
	<ex-flex width="290px" vertical>\r
		<ex-date-selector v-model="date_1" turn-now />\r
		<ex-date-selector v-model="date_2" turn-now :limination="limitFunc"  />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const date_1 = ref(new Date())\r
\r
const now = new Date()\r
now.setDate(now.getDate() + 1)\r
const date_2 = ref(now)\r
\r
function limitFunc(year: number, month: number, date: number) {\r
	const now = new Date()\r
	return year === now.getFullYear() && month === now.getMonth() + 1 && date === now.getDate()\r
}\r
\r
<\/script>`;export{t as default};
