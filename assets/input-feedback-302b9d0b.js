const t=`<template>\r
	<ex-flex style="padding-bottom: 1.75em;" gap="1.75em" width="50%" vertical>\r
		<ex-input placeholder="请输入用户名" :feedback="foo" />\r
		<ex-input placeholder="请输入用户名" :feedback="bar" />\r
		<ex-input placeholder="请输入用户名" :feedback="baz" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
const content = {\r
	pass: '当前用户名可用',\r
	fail: '用户名已被占用，请重新选择',\r
	judge: '正在检测用户名可用性，请稍候……'\r
}\r
const foo = {\r
	isShown: true,\r
	isPassed: true,\r
	isJudging: false,\r
	content\r
}\r
const bar = {\r
	isShown: true,\r
	isPassed: false,\r
	isJudging: false,\r
	content\r
}\r
const baz = {\r
	isShown: true,\r
	isPassed: true,\r
	isJudging: true,\r
	content\r
}\r
<\/script>`;export{t as default};
