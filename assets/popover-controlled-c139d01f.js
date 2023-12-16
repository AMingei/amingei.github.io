const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
		</ex-flex>\r
		<ex-popover\r
		confirm-button="OK"\r
		cancel-button="cancel"\r
		@confirm="state.push('confirm')"\r
		@cancel="state.push('cancel')">\r
			<template #content>\r
				阿巴阿巴，<br />\r
				这是一个可关闭的 Popover。\r
			</template>\r
			<div class="example-box" tabindex="1">controlled</div>\r
		</ex-popover>\r
		<ex-flex wrap>\r
			<code v-for="item in state" class="log">{{ item }}</code>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive } from 'vue'\r
\r
const state = reactive([] as string[])\r
<\/script>`;export{t as default};
