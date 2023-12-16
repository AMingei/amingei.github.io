const n=`<template>\r
	<ex-pagination v-model="value" :page-count="20" :pagenumber-label="pagenumberLabelGenerator" ends-controller />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref(1)\r
\r
function pagenumberLabelGenerator(num: number) {\r
	switch((num > 10 && num < 20) ? num : num % 10) {\r
		case 1:\r
			return \`\${num}st.\`\r
		case 2:\r
			return \`\${num}nd.\`\r
		case 3:\r
			return \`\${num}rd.\`\r
		default:\r
			return \`\${num}th.\`\r
	}\r
}\r
<\/script>`;export{n as default};
