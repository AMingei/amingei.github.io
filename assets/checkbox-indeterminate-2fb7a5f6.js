const e=`<template>\r
	<ex-flex>\r
		<ex-checkbox-group name="example-group-1" v-model="isAllChecked">\r
			<ex-checkbox  :value="true" :indeterminate="indeterminate">全选</ex-checkbox>\r
		</ex-checkbox-group>\r
		<ex-checkbox-group name="example-group-2" v-model="currentValue">\r
			<ex-flex>\r
				<ex-checkbox value="魏国">魏国</ex-checkbox>\r
				<ex-checkbox value="蜀国">蜀国</ex-checkbox>\r
				<ex-checkbox value="吴国">吴国</ex-checkbox>\r
				{{ currentValue }}\r
			</ex-flex>\r
		</ex-checkbox-group>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { computed, ref, watch } from 'vue'\r
\r
const kingdoms = ['魏国', '蜀国', '吴国']\r
const currentValue = ref([kingdoms[0]])\r
const isAllChecked = ref([] as boolean[])\r
const indeterminate = computed(() => currentValue.value.length > 0 && currentValue.value.length < kingdoms.length)\r
\r
watch(isAllChecked, (val) => {\r
	if(val.includes(true) && currentValue.value.length < kingdoms.length) {\r
		currentValue.value = kingdoms\r
	} else if(!val.includes(true) && currentValue.value.length > 0) {\r
		currentValue.value = []\r
	}\r
})\r
\r
watch(currentValue, (val) => {\r
	if(val.length === 0 && isAllChecked.value.includes(true)) {\r
		isAllChecked.value = []\r
	} else if(val.length === kingdoms.length && !isAllChecked.value.includes(true)) {\r
		isAllChecked.value.push(true)\r
	}\r
})\r
\r
<\/script>`;export{e as default};
