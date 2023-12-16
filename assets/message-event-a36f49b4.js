const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
		</ex-flex>\r
		<ex-flex>\r
			<ex-button type="primary" @click="onClick">Mount message</ex-button>\r
		</ex-flex>\r
		<ex-flex wrap>\r
			<code v-for="item in state" class="log">{{ item }}</code>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
import { reactive } from 'vue'\r
\r
const message = useMessage()\r
\r
const state = reactive<string[]>([])\r
\r
const onClick = () => message({\r
	text: 'this is message',\r
	onShow: () => state.push('mount a message'),\r
	onHide: () => state.push('unmount a message')\r
})\r
<\/script>`;export{t as default};
