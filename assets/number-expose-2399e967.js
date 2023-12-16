const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex wrap>\r
			<ex-button type="primary" @click="() => input.focus()">focus</ex-button>\r
			<ex-button type="primary" @click="() => input.focusout()" tabindex="-1" @mousedown.prevent @keydown.prevent>focusout</ex-button>\r
			<ex-button type="primary" @click="() => input.reset()">reset</ex-button>\r
			<ex-button type="primary" @click="() => input.select()">select</ex-button>\r
			<ex-button type="primary" @click="() => input.select(0, 10)">select: 0 ~ 10</ex-button>\r
			<ex-button type="primary" @click="() => input.scrollTo(100)">scrollTo: 100</ex-button>\r
			<ex-button type="primary" @click="() => input.scrollBy(100)">scrollBy: 100</ex-button>\r
		</ex-flex>\r
		<ex-flex width="50%">\r
			<ex-number ref="input" v-model="currentValue" :value="defaultValue" />\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const input = ref()\r
const defaultValue = 1250\r
const currentValue = ref(defaultValue)\r
<\/script>`;export{t as default};
