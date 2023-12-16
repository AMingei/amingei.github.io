const e=`<template>\r
	<ex-flex width="290px" vertical>\r
		<ex-slider v-model="value" max="10" step="2" marks="step" show-title />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value = ref(2)\r
\r
<\/script>`;export{e as default};
