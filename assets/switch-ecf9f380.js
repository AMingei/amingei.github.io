const t=`<template>\r
	<ex-flex>\r
		开关\r
		<ex-switch v-model="cur" />\r
		{{ cur }}\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const cur = ref(false)\r
<\/script>`;export{t as default};
