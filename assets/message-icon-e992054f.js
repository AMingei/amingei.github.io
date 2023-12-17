const t=`<template>\r
	<ex-flex>\r
		<ex-button type="primary" @click="onCustomIconClick">指定图标</ex-button>\r
		<ex-button type="primary" @click="onNonIconClick">无图标</ex-button>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
import { h } from 'vue'\r
\r
const message = useMessage()\r
\r
const onCustomIconClick = () => message({\r
	text: '自定义图标',\r
	duration: 5000,\r
	icon: h('svg', {\r
		'xmlns': 'http://www.w3.org/2000/svg',\r
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',\r
		'class': 'eg-message-wait'\r
	}, h('use', {\r
			'xlink:href': '#eg-message-wait'\r
		})\r
	)\r
})\r
\r
const onNonIconClick = () => message({\r
	text: '无图标',\r
	duration: 5000,\r
	hasIcon: false\r
})\r
<\/script>\r
\r
<style>\r
.eg-message-wait {\r
	animation: eg-message-wait 2s 1s ease-in normal infinite;\r
}\r
@keyframes eg-message-wait {\r
	from { rotate: 0deg; }\r
	to   { rotate: 360deg; }\r
}\r
</style>`;export{t as default};
