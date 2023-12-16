const r=`<template>\r
	<ex-alert foldable title="Alert"\r
	@before-fold="onBeforeFold"\r
	@before-unfold="onBeforeUnfold">\r
		<span :class="{ a: foldFlag }" @click="foldFlag = true">async true</span>\r
		<span :class="{ a: !foldFlag }" @click="foldFlag = false">async false</span>\r
	</ex-alert>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const foldFlag = ref(true)\r
\r
async function onBeforeFold(pass: (flag: boolean) => void) {\r
	pass(await Promise.resolve(foldFlag.value))\r
}\r
\r
function onBeforeUnfold(pass: (flag: boolean) => void) {\r
	pass(confirm('before-unfold: 是否继续展开？'))\r
}\r
<\/script>\r
\r
<style scoped>\r
span {\r
	display: inline-block;\r
	margin-right: .5rem;\r
	padding: .2rem .5rem;\r
	border-radius: 4px;\r
\r
	user-select: none;\r
	cursor: pointer;\r
	transition: all .2s ease-in;\r
	\r
	&.a,\r
	&:hover {\r
		background-color: color-mix(in hsl, var(--text-color), transparent 80%);\r
	}\r
}\r
</style>`;export{r as default};
