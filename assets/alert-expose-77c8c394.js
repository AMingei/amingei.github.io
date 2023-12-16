const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" priority="secondary" readonly>isFolded: {{ alert?.isFolded }}</ex-button>\r
			<ex-button type="primary" priority="secondary" readonly>isClosed: {{ alert?.isClosed }}</ex-button>\r
		</ex-flex>\r
\r
		<ex-flex>\r
			<ex-button type="primary" :disabled="alert && (alert.isClosed || !alert.isFolded)" @click="alert.unfold()">unfold</ex-button>\r
			<ex-button type="primary" :disabled="alert && (alert.isClosed || alert.isFolded)" @click="alert.fold()">fold</ex-button>\r
			<ex-button type="primary" :disabled="alert && alert.isClosed" @click="alert.close()">close</ex-button>\r
			<ex-button type="primary" :disabled="alert && !alert.isClosed" @click="alert.reopen()">reopen</ex-button>\r
		</ex-flex>\r
\r
		<transition name="eg-alert">\r
			<ex-alert foldable closable \r
			ref="alert" type="primary" \r
			title="PRIMARY ALERT" description="There're something important for you." />\r
		</transition>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { ExAlert } from 'ex-ui'\r
\r
const alert = ref<InstanceType<typeof ExAlert> | null>(null)\r
<\/script>\r
\r
<style scoped>\r
.eg-alert-enter-from,\r
.eg-alert-leave-to {\r
	opacity: 0;\r
	max-height: 0;\r
}\r
\r
.eg-alert-enter-to,\r
.eg-alert-leave-from {\r
	max-height: 100vh;\r
}\r
\r
.eg-alert-enter-active,\r
.eg-alert-leave-active {\r
	transition: all 1s ease-in;\r
}\r
</style>`;export{t as default};
