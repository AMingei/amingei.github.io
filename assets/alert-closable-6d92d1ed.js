const t=`<template>\r
	<ex-flex vertical>\r
		<ex-button type="primary" style="width: fit-content;"\r
		:disabled="alert && !alert.isClosed"\r
		@click="onReopenClick">reopen</ex-button>\r
\r
		<transition name="eg-alert">\r
			<ex-alert ref="alert" closable title="CLOSABLE ALERT" description="Click the button at top-right corner to close this window." />\r
		</transition>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const alert = ref()\r
\r
function onReopenClick() {\r
	alert.value.reopen()\r
}\r
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
