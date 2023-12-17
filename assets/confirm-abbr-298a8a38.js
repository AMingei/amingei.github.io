const r=`<template>\r
	<ex-space>\r
		<ex-button priority="secondary" @click="confirm('Default message.')">default</ex-button>\r
		<ex-button type="primary" @click="confirm.primary('Primary message.')">primary</ex-button>\r
		<ex-button type="success" @click="confirm.success('Success message.')">success</ex-button>\r
		<ex-button type="warning" @click="confirm.warning('Warning message!')">warning</ex-button>\r
		<ex-button type="error"   @click="confirm.error('Error message!!!')">error</ex-button>\r
	</ex-space>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useConfirm } from 'ex-ui'\r
\r
const confirm = useConfirm()\r
<\/script>`;export{r as default};
