const e=`<template>\r
	<ex-flex width="290px" vertical>\r
		<ex-slider v-model="value" max="100" step="20" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value = ref(40)\r
\r
<\/script>`;export{e as default};
