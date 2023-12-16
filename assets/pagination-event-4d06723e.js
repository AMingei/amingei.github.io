const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
		</ex-flex>\r
\r
		<ex-pagination v-model="value" :page-count="20" ends-controller goto-controller\r
		@before-change="(to: number) => state.push(\`before-change to \${to}\`)"\r
		@change="(to: number) => state.push(\`change to \${to}\`)" />\r
\r
		<ex-flex wrap>\r
			<code v-for="item in state" class="log">{{ item }}</code>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const value = ref(1)\r
const state = ref<string[]>([])\r
<\/script>`;export{t as default};
