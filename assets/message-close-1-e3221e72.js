const e=`<template>\r
	<ex-button type="primary" @click="onClick">Mount message</ex-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
import { onDeactivated, reactive } from 'vue'\r
\r
const message = useMessage()\r
\r
const messageRef = reactive<any[]>([])\r
\r
const onClick = () => messageRef.push(\r
	message({\r
		text: '点击右侧 ✖ 主动关闭 Message',\r
		duration: 0,\r
		closable: true\r
	})\r
)\r
\r
onDeactivated(() => {\r
	messageRef.forEach((value) => value && value.unmount && value.unmount())\r
	messageRef.length = 0\r
})\r
<\/script>`;export{e as default};
