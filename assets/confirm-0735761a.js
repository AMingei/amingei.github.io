const r=`<template>\r
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
import { useConfirm, ConfirmType } from 'ex-ui'\r
\r
const confirm = useConfirm()\r
\r
const onDefaultClick = () => confirm('Default message.')\r
const onPrimaryClick = () => confirm({ type: ConfirmType.primary, title: 'Primary message.' })\r
const onSuccessClick = () => confirm({ type: ConfirmType.success, title: 'Success message.' })\r
const onWarningClick = () => confirm({ type: ConfirmType.warning, title: 'Warning message!' })\r
const onErrorClick   = () => confirm({ type: ConfirmType.error,   title: 'Error message!!!' })\r
<\/script>`;export{r as default};
