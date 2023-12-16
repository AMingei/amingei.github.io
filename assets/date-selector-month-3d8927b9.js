const t=`<template>\r
	<ex-flex width="290px" vertical>\r
		<ex-date-selector mode="month" />\r
		<ex-date-selector mode="month" :limination="limitFunc" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
// import { ref } from 'vue'\r
\r
// const date = ref(new Date())\r
\r
function limitFunc(_year: number, month: number, _date: number) {\r
	return month === 5\r
}\r
\r
<\/script>`;export{t as default};
