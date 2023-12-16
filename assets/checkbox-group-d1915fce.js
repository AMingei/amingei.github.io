const e=`<template>\r
	<ex-checkbox-group name="example-group" v-model="currentValue" :value="defaultValue">\r
		<ex-flex>\r
			<ex-checkbox value="魏国">魏国</ex-checkbox>\r
			<ex-checkbox value="蜀国">蜀国</ex-checkbox>\r
			<ex-checkbox value="吴国">吴国</ex-checkbox>\r
			{{ currentValue }}\r
		</ex-flex>\r
	</ex-checkbox-group>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue';\r
\r
const defaultValue = ['魏国']\r
const currentValue = ref(defaultValue)\r
<\/script>`;export{e as default};
