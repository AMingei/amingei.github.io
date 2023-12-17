const e=`<template>\r
	<ex-space>\r
		<ex-button priority="secondary" @click="message('Default message.')">default</ex-button>\r
		<ex-button type="primary" @click="message.primary('Primary message.')">primary</ex-button>\r
		<ex-button type="success" @click="message.success('Success message.')">success</ex-button>\r
		<ex-button type="warning" @click="message.warning('Warning message!')">warning</ex-button>\r
		<ex-button type="error"   @click="message.error('Error message!!!')">error</ex-button>\r
	</ex-space>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
\r
const message = useMessage()\r
<\/script>`;export{e as default};
