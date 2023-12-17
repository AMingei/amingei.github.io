const e=`<template>\r
	<ex-space>\r
		<ex-button priority="secondary" @click="onDefaultClick">default</ex-button>\r
		<ex-button type="primary" @click="onPrimaryClick">primary</ex-button>\r
		<ex-button type="success" @click="onSuccessClick">success</ex-button>\r
		<ex-button type="warning" @click="onWarningClick">warning</ex-button>\r
		<ex-button type="error"   @click="onErrorClick">error</ex-button>\r
	</ex-space>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage, MessageType } from 'ex-ui'\r
\r
const message = useMessage()\r
\r
const onDefaultClick = () => message('Default message.')\r
const onPrimaryClick = () => message({ type: MessageType.primary, text: 'Primary message.' })\r
const onSuccessClick = () => message({ type: MessageType.success, text: 'Success message.' })\r
const onWarningClick = () => message({ type: MessageType.warning, text: 'Warning message!' })\r
const onErrorClick   = () => message({ type: MessageType.error,   text: 'Error message!!!' })\r
<\/script>`;export{e as default};
