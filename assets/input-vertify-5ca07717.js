const t=`<template>\r
	<form ref="obj" @submit="sub" novalidate>\r
		<ex-flex width="50%" vertical>\r
			<ex-flex>\r
				<label for="example-2" style="width: 15%">必填选项</label>\r
				<ex-input id="example-2" style="flex: auto" placeholder="Please input something..." required />\r
			</ex-flex>\r
			<ex-flex>\r
				<label for="example-3" style="width: 15%">电话号码</label>\r
				<ex-input id="example-3" style="flex: auto" placeholder="Please input a valid phonenumber" pattern="tel" required />\r
			</ex-flex>\r
			<ex-flex>\r
				<label for="example-4" style="width: 15%">电子邮件</label>\r
				<ex-input id="example-4" style="flex: auto" placeholder="Please input a valid e-mail address" pattern="email" required />\r
			</ex-flex>\r
			<ex-flex>\r
				<label for="example-5" style="width: 15%">自定义内容</label>\r
				<ex-input id="example-5" style="flex: auto" placeholder='pattern = "^[0-9]*$"' pattern="^[0-9]*$" vertify-text="只能填入数字" required />\r
			</ex-flex>\r
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
