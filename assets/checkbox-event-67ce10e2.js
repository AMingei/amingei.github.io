const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="state.length = 0">clear logs</ex-button>\r
		</ex-flex>\r
		<ex-checkbox-group name="example-event-1" v-model="currentValue">\r
			<ex-flex>\r
				<ex-checkbox v-for="force in threeKingdoms"\r
				:key="force.index"\r
				:value="force.label"\r
				@focus="(event: FocusEvent) => focus(event, force.label)"\r
				@focusout="(event: FocusEvent) => focusout(event, force.label)"\r
				@change="(value: boolean) => change(value, force.label)">\r
					{{ force.label }}\r
				</ex-checkbox>\r
			</ex-flex>\r
		</ex-checkbox-group>\r
		<ex-flex wrap>\r
			<code v-for="item in state" class="log">{{ item }}</code>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const state = ref<string[]>([])\r
\r
const threeKingdoms = [{ index: 0, label: '魏国' }, { index: 1, label: '蜀国' }, { index: 2, label: '吴国' }]\r
\r
const defaultValue = ['魏国']\r
const currentValue = ref(defaultValue)\r
\r
function focus(_event: FocusEvent, target: string) {\r
	state.value.push(\`\${target} focus\`)\r
}\r
function focusout(_event: FocusEvent, target: string) {\r
	state.value.push(\`\${target} focusout\`)\r
}\r
function change(value: boolean, target: string) {\r
	state.value.push(\`\${target} change \${value}\`)\r
}\r
<\/script>`;export{t as default};
