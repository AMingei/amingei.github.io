const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
		</ex-flex>\r
		<ex-flex>\r
			事件触发\r
			<ex-switch v-model="value"\r
			value-off="off"\r
			value-on="on"\r
			@focus="focus"\r
			@focusout="focusout"\r
			@change="change"/>\r
			{{ value }}\r
		</ex-flex>\r
		<ex-flex wrap>\r
			<code v-for="item in state" class="log">{{ item }}</code>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref, Ref } from 'vue'\r
\r
const value = ref('off')\r
const state: Ref<string[]> = ref([])\r
\r
function focus() {\r
	state.value.push('focus')\r
}\r
function focusout() {\r
	state.value.push('focusout')\r
}\r
function change(value: string | undefined) {\r
	state.value.push(\`change \${value}\`)\r
}\r
<\/script>`;export{t as default};
