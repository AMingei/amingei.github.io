const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
		</ex-flex>\r
		<ex-flex>\r
			<ex-button type="primary" @click="onClick">Mount confirm</ex-button>\r
		</ex-flex>\r
		<ex-flex wrap>\r
			<code v-for="item in state" class="log">{{ item }}</code>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useConfirm } from 'ex-ui'\r
import { reactive } from 'vue'\r
\r
const confirm = useConfirm()\r
\r
const state = reactive<string[]>([])\r
\r
const onClick = () => confirm({\r
	title: 'Title',\r
	text: 'Watching the \\'cancel\\', \\'confirm\\', \\'mask-click\\', \\'esc-press\\' events.',\r
	confirmButton: '确认',\r
	cancelButton: '取消',\r
	onShow: () => state.push('mount'),\r
	onHide: () => state.push('unmount'),\r
	onConfirm: () => state.push('confirm'),\r
	onCancel: () => state.push('cancel'),\r
	onMaskClick: () => state.push('mask-click'),\r
	onEscPress: () => state.push('esc-press')\r
})\r
<\/script>`;export{t as default};
