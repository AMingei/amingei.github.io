const t=`<template>\r
	<ex-space>\r
		<ex-button type="primary" @click="onClick">mount confirm</ex-button>\r
	</ex-space>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useConfirm } from 'ex-ui'\r
\r
const confirm = useConfirm()\r
\r
const onClick = () => confirm.primary({\r
	title: 'This is a confirm box',\r
	text: 'You can \\'cancel\\' it by the \\'cancel-button\\' or \\'cross-button\\'.',\r
	cancelButton: 'CANCEL',\r
	confirmButton: 'CONFIRM'\r
})\r
<\/script>`;export{t as default};
