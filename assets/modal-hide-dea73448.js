const t=`<template>\r
	<ex-button type="primary" @click="show = !show">{{ show ? 'hide' : 'show' }}</ex-button>\r
	<ex-modal ref="modalRef" v-model="show" :closable="false">\r
		不喜欢默认的关闭按钮的话\r
		<br>\r
		完全可以自己写一个\r
		<template #footer>\r
			<ex-flex vertical>\r
				<ex-button type="warning" @click="modalRef.hide()">关闭</ex-button>\r
			</ex-flex>\r
		</template>\r
	</ex-modal>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const show = ref(false)\r
\r
const modalRef = ref()\r
<\/script>`;export{t as default};
