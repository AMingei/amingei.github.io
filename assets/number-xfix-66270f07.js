const e=`<template>\r
	<ex-flex width="50%" vertical>\r
		<ex-number style="flex: auto" v-model="val_1" precision="2" prefix="$" />\r
		<ex-number style="flex: auto" v-model="val_2" precision="2" suffix="yuan" />\r
		<ex-number style="flex: auto" v-model="val_3" precision="2" suffix="%" auto-fit />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const val_1 = ref(2.05)\r
const val_2 = ref(2.05 * 6.8883)\r
const val_3 = ref(50)\r
<\/script>`;export{e as default};
