const t=`<template>\r
	<ex-flex width="50%" vertical>\r
		<ex-number style="flex: auto" v-model="val_1" precision="6" split="3 ," prefix="$" />\r
		<ex-number style="flex: auto" v-model="val_2" precision="2" :split="[4,' ']" suffix="元" auto-fit />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const val_1 = ref(12000300.123)\r
const val_2 = ref(12000300.123)\r
<\/script>`;export{t as default};
