const t=`<template>\r
	<ex-button type="primary" @click="show = !show">{{ show ? 'hide' : 'show' }}</ex-button>\r
\r
	<ex-modal ref="modalRef" v-model="show"\r
	:closable="false"\r
	@show="onShow"\r
	@before-hide="onBeforeHide">\r
		阅读 {{ count }} 秒钟后才能够关闭\r
		<template #footer>\r
			<ex-flex vertical>\r
				<ex-button :type="count === 0 ? 'success' : 'warning'" @click="modalRef.hide()">关闭</ex-button>\r
			</ex-flex>\r
		</template>\r
	</ex-modal>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
import { ref } from 'vue'\r
\r
const show = ref(false)\r
\r
const modalRef = ref()\r
\r
const count = ref(10)\r
\r
const onShow = () => {\r
	count.value = 10\r
	let timer = setInterval(() => {\r
		count.value--\r
		if(count.value === 0) {\r
			clearInterval(timer)\r
		}\r
	}, 1000)\r
}\r
\r
const onBeforeHide = (pass: (flag?: boolean) => void) => {\r
	if(count.value === 0) {\r
		pass()\r
	} else {\r
		useMessage().warning('阅读时间不足！')\r
		pass(false)\r
	}\r
}\r
<\/script>`;export{t as default};
