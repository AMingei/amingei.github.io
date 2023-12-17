const n=`<template>\r
	<ex-space>\r
		<ex-button type="primary" @click="onCustomIconClick">自定义图标</ex-button>\r
		<ex-button type="primary" @click="onNonIconClick">无图标</ex-button>\r
	</ex-space>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useConfirm } from 'ex-ui'\r
import { h } from 'vue';\r
\r
const confirm = useConfirm()\r
\r
const onCustomIconClick = () => confirm.primary({\r
	title: 'Custom icon',\r
	text: 'any Questions?',\r
	confirmButton: 'Yes',\r
	cancelButton: 'No',\r
	icon: h('svg', {\r
		'xmlns': 'http://www.w3.org/2000/svg',\r
		'xmlns:xlink': 'http://www.w3.org/1999/xlink'\r
	}, h('use', {\r
			'xlink:href': '#eg-confirm-question'\r
		})\r
	)\r
})\r
\r
const onNonIconClick = () => confirm.primary({\r
	title: 'Non-icon',\r
	text: 'there is non-icon.',\r
	hasIcon: false\r
})\r
<\/script>`;export{n as default};
