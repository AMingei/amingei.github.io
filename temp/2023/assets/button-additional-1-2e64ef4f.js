const t=`<script lang="ts" setup>\r
<\/script>\r
\r
<template>\r
	<wtf-space vertical>\r
		<wtf-space>\r
			<wtf-button autofocus>autofocus</wtf-button>\r
			<span>当进入当前页面后没有任何 focus 行为（例如点击、Tab），该 Button 将被自动聚焦\r
			<br>可以尝试刷新页面重置 focus 焦点</span>\r
		</wtf-space>\r
		<wtf-space>\r
			<wtf-button name="apply">name="apply"</wtf-button>\r
		</wtf-space>\r
		<wtf-space>\r
			<wtf-button value="{ 'flag': true }">value="{ 'flag': true }"</wtf-button>\r
		</wtf-space>\r
		<wtf-space>\r
			<wtf-button :type.attr="'submit'">:type.attr="'submit'"</wtf-button>\r
		</wtf-space>\r
	</wtf-space>\r
</template>\r
\r
<style scoped>\r
</style>`;export{t as default};
