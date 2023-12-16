const t=`<template>\r
	<ex-flex wrap>\r
		<transition-group name="example-tag">\r
			<ex-tag v-for="item in list"\r
			:key="item.index"\r
			type="primary"\r
			closable\r
			@close="onClose(item.index)">\r
				{{ item.label }}\r
			</ex-tag>\r
			<ex-tag editable\r
			type="primary"\r
			:key="-1"\r
			@insert="onInsert"></ex-tag>\r
		</transition-group>\r
	</ex-flex>\r
</template>\r
\r
<style scoped>\r
.example-tag-move,\r
.example-tag-enter-active,\r
.example-tag-leave-active {\r
	transition: all .4s;\r
	\r
	&:is(.example-tag-leave-active) {\r
		position: absolute;\r
	}\r
}\r
\r
.example-tag-enter-from,\r
.example-tag-leave-to {\r
	opacity: 0;\r
}\r
\r
</style>\r
\r
<script lang="ts" setup>\r
\r
import { ref, unref } from 'vue'\r
\r
const list = ref([{ index: 0, label: 'editable=true' }])\r
const nextIndex = ref(1)\r
\r
function onClose(index: number) {\r
	list.value = unref(list).filter((item) => item.index !== index)\r
}\r
\r
function onInsert(val: string) {\r
	list.value.push({ index: unref(nextIndex), label: val })\r
	nextIndex.value++\r
}\r
\r
<\/script>`;export{t as default};
