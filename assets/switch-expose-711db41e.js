const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="() => input.focus()">focus</ex-button>\r
			<ex-button type="primary" tabindex="1" @click="() => input.focusout()" @mousedown.prevent @keydown.prevent>focusout</ex-button>\r
			<ex-button type="primary" @click="() => input.toggle()">toggle</ex-button>\r
			<ex-button type="primary" @click="() => input.toggle('on')">toggle to: on</ex-button>\r
		</ex-flex>\r
		<ex-flex>\r
			外部触发\r
			<ex-switch ref="input" v-model="value" value-off="off" value-on="on" />\r
			{{ value }}\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const input = ref()\r
const value = ref('off')\r
<\/script>`;export{t as default};
