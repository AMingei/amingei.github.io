const t=`<template>\r
	<ex-flex width="50%" vertical>\r
		<ex-flex>\r
			<label for="eg-reset">清空</label>\r
			<ex-input resetable\r
			v-model="currentVal_1"\r
			id="eg-reset" \r
			placeholder="input sth. and clear it!" />\r
		</ex-flex>\r
\r
		<span style="padding-left: 3.7rem;">v-model: {{ currentVal_1 }}</span>\r
\r
		<ex-flex>\r
			<label for="eg-reset-to">重置</label>\r
			<ex-input resetable\r
			:value="defaultVal_2"\r
			v-model="currentVal_2"\r
			id="eg-reset-to" \r
			placeholder="input sth. and clear it!" />\r
		</ex-flex>\r
\r
		<span style="padding-left: 3.7rem;">default: {{ defaultVal_2 }}</span>\r
		<span style="padding-left: 3.7rem;">v-model: {{ currentVal_2 }}</span>\r
	</ex-flex>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const currentVal_1 = ref('')\r
\r
const defaultVal_2 = 'input sth. and reset it!'\r
const currentVal_2 = ref(defaultVal_2)\r
<\/script>`;export{t as default};
