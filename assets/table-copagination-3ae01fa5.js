const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-pagination v-model="current_page" :page-count="Math.ceil(data_length / page_size)" ends-controller goto-controller />\r
		</ex-flex>\r
		<ex-table :data="data" :current-page="current_page" :page-size="page_size" :title="\`\${(current_page - 1) * page_size + 1}~\${Math.min(current_page * page_size, data_length)}/\${data_length}, current page: \${current_page}\`" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const Col = {\r
	Column_1: Symbol('Column 1'),\r
	Column_2: Symbol('Column 2'),\r
	Column_3: Symbol('Column 3')\r
}\r
\r
const data = {\r
	thead: [Col.Column_1, Col.Column_2, Col.Column_3],\r
	tbody: [] as any[]\r
}\r
\r
const data_length = 24\r
const current_page = ref(1)\r
const page_size = 5\r
\r
for(let i = 1; i <= data_length; i++) {\r
	data.tbody.push({\r
		key: i,\r
		[Col.Column_1]: \`1-\${i}\`,\r
		[Col.Column_2]: \`2-\${i}\`,\r
		[Col.Column_3]: \`3-\${i}\`\r
	})\r
}\r
<\/script>`;export{t as default};
