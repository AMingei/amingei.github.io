const t=`<template>\r
	<ex-flex width="290px">\r
		<ex-selector v-model="value" filterable>\r
			<ex-option-group v-for="group in groups"\r
			:key="group.index"\r
			:label="group.label">\r
				<ex-option v-for="item in group.content"\r
				:key="item.index"\r
				:value="item.value"\r
				:label="item.label" />\r
			</ex-option-group>\r
		</ex-selector>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value = ref(1)\r
\r
const groups = [{\r
	index: 0,\r
	label: '第一部 群雄逐鹿',\r
	content: [\r
		{ index: 0, value: 1, label: '第一集：桃园三结义' },\r
		{ index: 1, value: 2, label: '第二集：十常侍乱政' },\r
		{ index: 2, value: 3, label: '第三集：董卓霸京师' },\r
	]\r
}, {\r
	index: 1,\r
	label: '第二部 赤壁鏖战',\r
	content: [\r
		{ index: 0, value: 4, label: '第二十四集：跃马檀溪' },\r
		{ index: 1, value: 5, label: '第二十五集：刘备求贤' },\r
		{ index: 2, value: 6, label: '第二十六集：回马荐诸葛' },\r
	]\r
}, {\r
	index: 2,\r
	label: '第三部 三足鼎立',\r
	content: [\r
		{ index: 0, value: 7, label: '第四十八集：张松献图' },\r
		{ index: 1, value: 8, label: '第四十九集：刘备入川' },\r
		{ index: 2, value: 9, label: '第五十集：凤雏落坡' },\r
	]\r
}]\r
\r
<\/script>`;export{t as default};
