const e=`<template>\r
	<ex-flex>\r
		<ex-badge :value="value" :max-value="15">\r
			<div class="example-avatar"></div>\r
		</ex-badge>\r
		<ex-badge :value="value" :max-value="15" ellipsis="…">\r
			<div class="example-avatar"></div>\r
		</ex-badge>\r
\r
		<ex-number v-model="value" :range="[0, Infinity]" controller />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref(50)\r
<\/script>`;export{e as default};
