const e=`<template>\r
	<ex-button type="primary" @click="onClick">Mount message</ex-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
\r
const message = useMessage()\r
\r
const onClick = () => message({\r
	text: '点击右侧 ✖ 主动关闭 Message',\r
	duration: 0,\r
	closable: true\r
})\r
<\/script>`;export{e as default};
