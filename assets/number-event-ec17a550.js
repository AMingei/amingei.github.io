const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
		</ex-flex>\r
		<ex-flex width="50%">\r
			<ex-number resetable\r
			v-model="value"\r
			id="example-event-1"\r
			style="flex: auto"\r
			@focus="focus"\r
			@focusout="focusout"\r
			@input="input"\r
			@change="change"\r
			@before-reset="beforeReset"\r
			@reset="reset" />\r
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
const value = ref()\r
const state: Ref<string[]> = ref([])\r
\r
function focus() {\r
	state.value.push('focus')\r
}\r
function focusout() {\r
	state.value.push('focusout')\r
}\r
function input(value: string | undefined) {\r
	state.value.push(\`input \${value}\`)\r
}\r
function change(value: string | undefined) {\r
	state.value.push(\`change \${value}\`)\r
}\r
function beforeReset(value: string | undefined) {\r
	state.value.push(\`before-clear \${value}\`)\r
}\r
function reset() {\r
	state.value.push('clear')\r
}\r
<\/script>`;export{t as default};
