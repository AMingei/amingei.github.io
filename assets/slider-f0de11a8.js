const e=`<template>\r
	<ex-flex width="290px" vertical>\r
		<ex-slider v-model="value_1" />\r
		<ex-slider v-model="value_2" type="primary" />\r
		<ex-slider v-model="value_3" type="success" />\r
		<ex-slider v-model="value_4" type="warning" />\r
		<ex-slider v-model="value_5" type="error" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value_1 = ref(20)\r
const value_2 = ref(35)\r
const value_3 = ref(50)\r
const value_4 = ref(65)\r
const value_5 = ref(80)\r
\r
<\/script>`;export{e as default};
