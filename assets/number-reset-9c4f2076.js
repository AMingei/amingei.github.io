const e=`<template>\r
	<ex-flex width="50%" vertical>\r
		<ex-number v-model="currentVal_1" placeholder="please input sth. and clear it!" resetable />\r
		<ex-number :value="defaultVal" v-model="currentVal_2" placeholder="And this will reset to 123." resetable />\r
	</ex-flex>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const defaultVal = 123\r
const currentVal_1 = ref()\r
const currentVal_2 = ref()\r
<\/script>`;export{e as default};
