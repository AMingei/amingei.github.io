const e=`<template>\r
	<ex-flex>\r
		<ex-flex width="290px">\r
			<ex-color-selector v-model="value" />\r
		</ex-flex>\r
		<span :style="{ color: '#' + value, fontWeight: 'bold' }">#{{ value }}</span>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref('FF00FF')\r
<\/script>`;export{e as default};
