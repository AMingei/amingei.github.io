const t=`<template>\r
	<ex-flex width="600px">\r
		<ex-selector style="flex: auto" v-model="value_1">\r
			<ex-option v-for="group in groups" :key="group.index"\r
			:value="group.value"\r
			:label="group.label" />\r
		</ex-selector>\r
		<ex-selector style="flex: auto" v-model="value_2">\r
			<ex-option v-for="item in groups[value_1 - 1].content" :key="item.index"\r
			:value="item.value"\r
			:label="item.label" />\r
		</ex-selector>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const groups = [{\r
	index: 0,\r
	value: 1,\r
	label: '第一部 群雄逐鹿',\r
	content: [\r
		{ index: 0, value: 1, label: '第一集：桃园三结义' },\r
		{ index: 1, value: 2, label: '第二集：十常侍乱政' },\r
		{ index: 2, value: 3, label: '第三集：董卓霸京师' },\r
	]\r
}, {\r
	index: 1,\r
	value: 2,\r
	label: '第二部 赤壁鏖战',\r
	content: [\r
		{ index: 0, value: 24, label: '第二十四集：跃马檀溪' },\r
		{ index: 1, value: 25, label: '第二十五集：刘备求贤' },\r
		{ index: 2, value: 26, label: '第二十六集：回马荐诸葛' },\r
	]\r
}, {\r
	index: 2,\r
	value: 3,\r
	label: '第三部 三足鼎立',\r
	content: [\r
		{ index: 0, value: 48, label: '第四十八集：张松献图' },\r
		{ index: 1, value: 49, label: '第四十九集：刘备入川' },\r
		{ index: 2, value: 50, label: '第五十集：凤雏落坡' },\r
	]\r
}]\r
\r
const value_1 = ref(1)\r
const value_2 = ref()\r
<\/script>`;export{t as default};
