const t=`<template>\r
	<ex-flex>\r
		<ex-button type="primary" @click="onClick">Mount message</ex-button>\r
		<ex-button @click="changeText">change text</ex-button>\r
		<ex-button @click="changeType">change type</ex-button>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage, MessageType } from 'ex-ui'\r
import { ref } from 'vue'\r
\r
const message = useMessage()\r
\r
let count_1 = 0, count_2 = 0\r
\r
const msgText = ref(\`count: \${count_1}\`)\r
const msgType = ref(MessageType.default)\r
\r
const onClick = () => message({\r
	text: msgText,\r
	type: msgType,\r
	duration: 10000\r
})\r
\r
const changeText = () => {\r
	count_1++\r
	msgText.value = \`count: \${count_1}\`\r
}\r
\r
const changeType = () => {\r
	let list = Object.values(MessageType)\r
	msgType.value = list[++count_2 % list.length]\r
}\r
<\/script>`;export{t as default};
