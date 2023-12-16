const t=`<template>\r
	<form ref="obj" @submit="sub" novalidate>\r
		<ex-flex width="50%">\r
			<label for="example-vertify-1" style="width: 15%">必填选项</label>\r
			<ex-number id="example-vertify-1" style="flex: auto" placeholder="Please input a number..." required />\r
		</ex-flex>\r
		<button type="submit">提交</button>\r
	</form>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const obj = ref('obj')\r
function sub(event: Event) {\r
	const objdom = obj.value as unknown as HTMLElement\r
	const inputs = objdom.querySelectorAll('input')\r
	for(let input of Array.from(inputs)) {\r
		input.focus()\r
		input.blur()\r
		const validity = input.validity\r
		if(validity.valueMissing || validity.patternMismatch) {\r
			input.focus()\r
			break\r
		}\r
	}\r
	event.preventDefault()\r
}\r
<\/script>`;export{t as default};
