const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
			<ex-button type="primary" @click="show = !show">{{ show ? 'hide' : 'show' }}</ex-button>\r
		</ex-flex>\r
		<ex-flex wrap>\r
			<code v-for="item in state" class="log">{{ item }}</code>\r
		</ex-flex>\r
	</ex-flex>\r
\r
	<ex-modal ref="modalRef" v-model="show"\r
	@show="state.push('show')"\r
	@hide="state.push('hide')"\r
	@mask-click="state.push('mask-click')"\r
	@esc-press="state.push('esc-press')">\r
		可以尝试点击关闭按钮或遮罩\r
		<br>\r
		或按下 <kbd>Esc</kbd> 键\r
		<template #footer>\r
			<ex-flex vertical>\r
				<ex-button type="warning" @click="modalRef.hide()">关闭</ex-button>\r
			</ex-flex>\r
		</template>\r
	</ex-modal>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive, ref } from 'vue'\r
\r
const show = ref(false)\r
\r
const modalRef = ref()\r
\r
const state = reactive<string[]>([])\r
<\/script>`;export{t as default};
