const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
			<ex-button type="primary" :disabled="alert && !alert.isClosed" @click="alert.reopen()">reopen</ex-button>\r
		</ex-flex>\r
\r
		<transition name="eg-alert">\r
			<ex-alert foldable closable \r
			ref="alert" type="primary"\r
			title="PRIMARY ALERT" description="There're something important for you."\r
			@beforeFold="state.push('before-fold')"\r
			@fold="state.push('fold')"\r
			@beforeUnfold="state.push('before-unfold')"\r
			@unfold="state.push('unfold')"\r
			@beforeClose="state.push('before-close')"\r
			@close="state.push('close')"\r
			@beforeReopen="state.push('before-reopen')"\r
			@reopen="state.push('reopen')"/>\r
		</transition>\r
\r
		<ex-flex wrap>\r
			<code v-for="item in state" class="log">{{ item }}</code>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { ExAlert } from 'ex-ui'\r
\r
const alert = ref<InstanceType<typeof ExAlert> | null>(null)\r
\r
const state = ref<string[]>([])\r
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
