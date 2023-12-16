const t=`<template>\r
	<ex-button type="primary" @click="onClick">持续 10 秒</ex-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
\r
const message = useMessage()\r
\r
const onClick = () => message({\r
	text: '10 秒后消失',\r
	duration: 10000\r
})\r
<\/script>`;export{t as default};
