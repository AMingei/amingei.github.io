const e=`<template>\r
	<ex-flex width="290px">\r
		<ex-color-selector v-model="value" alpha picker />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref('FF00FF66')\r
<\/script>`;export{e as default};
