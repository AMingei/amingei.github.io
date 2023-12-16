const e=`<template>\r
	<ex-flex width="290px" vertical>\r
		<ex-slider v-model="value_1" disabled />\r
		<ex-slider v-model="value_2" readonly />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value_1 = ref(20)\r
const value_2 = ref(20)\r
\r
<\/script>`;export{e as default};
