const e=`<template>\r
	<ex-flex>\r
		<ex-button type="primary" @click="mountMessage">Mount message</ex-button>\r
		<ex-button type="primary" @click="unmountMessage">Unmount message</ex-button>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
import { onDeactivated, ref, unref } from 'vue'\r
\r
const message = useMessage()\r
\r
const messageRef = ref()\r
\r
const mountMessage = () => {\r
	if(!unref(messageRef)) {\r
		messageRef.value = message({\r
			text: '点击另一个 Button 主动关闭 Message',\r
			duration: 0\r
		})\r
	}\r
}\r
\r
const unmountMessage = () => {\r
	messageRef.value && messageRef.value.unmount()\r
	messageRef.value = null\r
}\r
\r
onDeactivated(() => {\r
	unmountMessage()\r
})\r
<\/script>`;export{e as default};
