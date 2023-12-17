const t=`<template>\r
	<ex-space>\r
		<ex-button type="primary" @click="onClick">mount confirm</ex-button>\r
	</ex-space>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useConfirm, useMessage } from 'ex-ui'\r
import { ref } from 'vue'\r
\r
const confirm = useConfirm()\r
\r
const confirmRef = ref()\r
\r
const onClick = () => {\r
	let cfmCount = 5\r
	let cfmText = ref(\`\${cfmCount} 秒后将自动确认\`)\r
\r
	let timer = setInterval(() => {\r
		cfmText.value = \`\${--cfmCount} 秒后将自动确认\`\r
		if(cfmCount === 0) {\r
			confirmRef.value.confirm()\r
		}\r
	}, 1000)\r
\r
	confirmRef.value = confirm.primary({\r
		title: 'This is a AUTO-CLOSE confirm box',\r
		text: cfmText,\r
		cancelButton: '取消',\r
		confirmButton: '确认',\r
		onConfrim: () => useMessage()('确认'),\r
		onCancel: () => useMessage()('取消'),\r
		onHide: () => timer && clearInterval(timer)\r
	})\r
}\r
<\/script>`;export{t as default};
