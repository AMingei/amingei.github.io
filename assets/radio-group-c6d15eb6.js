const r=`<template>\r
	<ex-radio-group name="example-group" v-model="currentValue">\r
		<ex-flex>\r
			<ex-radio value="魏国">魏国</ex-radio>\r
			<ex-radio value="蜀国">蜀国</ex-radio>\r
			<ex-radio value="吴国">吴国</ex-radio>\r
			{{ currentValue }}\r
		</ex-flex>\r
	</ex-radio-group>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue';\r
\r
const currentValue = ref(undefined)\r
<\/script>`;export{r as default};
