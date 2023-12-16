const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="() => forceList[1].focus()">focus</ex-button>\r
			<ex-button type="primary" @click="() => forceList[1].focusout()" tabindex="-1" @mousedown.prevent @keydown.prevent>focusout</ex-button>\r
			<ex-button type="primary" @click="() => forceList[1].check()">check</ex-button>\r
			<ex-button type="primary" @click="() => forceList[1].uncheck()">uncheck</ex-button>\r
		</ex-flex>\r
		<ex-checkbox-group name="example-event-2" v-model="currentValue" :value="defaultValue">\r
			<ex-flex>\r
				<ex-checkbox ref="forceList"\r
				v-for="force in threeKingdoms"\r
				:key="force.index"\r
				:value="force.label">\r
					{{ force.label }}\r
				</ex-checkbox>\r
			</ex-flex>\r
		</ex-checkbox-group>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { ExRadio } from 'ex-ui'\r
\r
const threeKingdoms = [{ index: 0, label: '魏国' }, { index: 1, label: '蜀国' }, { index: 2, label: '吴国' }]\r
\r
const defaultValue = ['魏国']\r
const currentValue = ref(defaultValue)\r
\r
const forceList = ref<InstanceType<typeof ExRadio>[]>([])\r
<\/script>`;export{t as default};
