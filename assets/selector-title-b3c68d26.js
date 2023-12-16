const t=`<template>\r
	<ex-flex width="290px">\r
		<ex-selector v-model="value" auto-title>\r
			<ex-option :value="1" label="第一回：宴桃园豪杰三结义 斩黄巾英雄首立功" />\r
			<ex-option :value="2" label="第二回：张翼德怒鞭督邮 何国舅谋诛宦竖" />\r
			<ex-option :value="3" label="第三回：议温明董卓叱丁原 馈金珠李肃说吕布" />\r
		</ex-selector>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
import { ref } from 'vue'\r
\r
const value = ref(1)\r
\r
<\/script>`;export{t as default};
