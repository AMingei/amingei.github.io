const n=`<template>\r
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
	title: 'PRIMARY CONFIRM',\r
	text: 'This is an IMPORTANT confirm box'\r
})\r
<\/script>`;export{n as default};
