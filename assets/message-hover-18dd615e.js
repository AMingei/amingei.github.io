const e=`<template>\r
	<ex-button type="primary" @click="onClick">Hover</ex-button>\r
</template>\r
\r
<script lang="ts" setup>\r
import { useMessage } from 'ex-ui'\r
\r
const message = useMessage()\r
\r
const onClick = () => message({\r
	text: '当没有悬浮时 3 秒后消失',\r
	canBeHover: true\r
})\r
<\/script>`;export{e as default};
