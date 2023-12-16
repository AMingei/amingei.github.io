const e=`<template>\r
	<ex-flex style="align-items: baseline;" width="50%">\r
		<label for="example-1">数字输入</label>\r
		<ex-flex style="flex: auto" vertical>\r
			<ex-number id="example-1" placeholder="Please input number..." v-model="val" />\r
			<span style="height: 1.5em; padding-left: .5em;">{{ val }}</span>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const val = ref<number>()\r
<\/script>`;export{e as default};
