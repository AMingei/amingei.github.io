const r=`<template>\r
	<ex-flex width="290px">\r
		<ex-slider v-model="value" step="0.5" min="0" max="100" :marks="marks" :title-function="titleFunc" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value = ref(36.5)\r
\r
const marks = [\r
	{ value: 0, label: '0°C' },\r
	{ value: 100, label: '100°C' }\r
]\r
\r
const titleFunc = (val: number) => {\r
	return \`\${val.toFixed(2)} °C<br />= \${(val * 1.8 + 32).toFixed(2)} °F<br />= \${(val + 273.15).toFixed(2)} K\`\r
}\r
\r
<\/script>`;export{r as default};
