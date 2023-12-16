const e=`<template>\r
	<ex-flex width="290px" vertical>\r
		<ex-color-selector v-model="value" disabled />\r
		<ex-color-selector v-model="value" readonly />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref('FF00FF')\r
<\/script>`;export{e as default};
