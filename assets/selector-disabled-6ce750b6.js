const t=`<template>\r
	<ex-flex width="600px" vertical>\r
\r
		<ex-flex>\r
			<ex-selector style="flex: auto" v-model="value_1" disabled>\r
				<ex-option-group v-for="group in groups"\r
				:key="group.index"\r
				:label="group.label">\r
					<ex-option v-for="item in group.content"\r
					:key="item.index"\r
					:value="item.value"\r
					:label="item.label" />\r
				</ex-option-group>\r
			</ex-selector>\r
\r
			<ex-selector style="flex: auto" v-model="value_2" readonly>\r
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
\r
		<ex-flex>\r
			<ex-selector style="flex: auto" v-model="value_3">\r
				<ex-option-group v-for="group in groups"\r
				:key="group.index"\r
				:label="group.label">\r
					<ex-option v-for="item in group.content"\r
					:key="item.index"\r
					:value="item.value"\r
					:label="item.label"\r
					:disabled="item.disabled" />\r
				</ex-option-group>\r
			</ex-selector>\r
\r
			<ex-selector style="flex: auto" v-model="value_4">\r
				<ex-option-group v-for="group in groups"\r
				:key="group.index"\r
				:label="group.label"\r
				:disabled="group.disabled">\r
					<ex-option v-for="item in group.content"\r
					:key="item.index"\r
					:value="item.value"\r
					:label="item.label" />\r
				</ex-option-group>\r
			</ex-selector>\r
		</ex-flex>\r
\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value_1 = ref(1)\r
const value_2 = ref(2)\r
const value_3 = ref(3)\r
const value_4 = ref(4)\r
\r
const groups = [{\r
	index: 0,\r
	label: '第一部 群雄逐鹿',\r
	content: [\r
		{ index: 0, value: 1, label: '第一集：桃园三结义', disabled: true },\r
		{ index: 1, value: 2, label: '第二集：十常侍乱政', disabled: false },\r
		{ index: 2, value: 3, label: '第三集：董卓霸京师', disabled: false },\r
	],\r
	disabled: true\r
}, {\r
	index: 1,\r
	label: '第二部 赤壁鏖战',\r
	content: [\r
		{ index: 0, value: 4, label: '第二十四集：跃马檀溪', disabled: false },\r
		{ index: 1, value: 5, label: '第二十五集：刘备求贤', disabled: false },\r
		{ index: 2, value: 6, label: '第二十六集：回马荐诸葛', disabled: false },\r
	],\r
	disabled: false\r
}, {\r
	index: 2,\r
	label: '第三部 三足鼎立',\r
	content: [\r
		{ index: 0, value: 7, label: '第四十八集：张松献图', disabled: false },\r
		{ index: 1, value: 8, label: '第四十九集：刘备入川', disabled: false },\r
		{ index: 2, value: 9, label: '第五十集：凤雏落坡', disabled: false },\r
	],\r
	disabled: false\r
}]\r
\r
<\/script>`;export{t as default};
