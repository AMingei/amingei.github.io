const t=`<script lang="ts" setup>\r
<\/script>\r
\r
<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button autofocus>autofocus</ex-button>\r
			<span>当进入当前页面后没有任何 focus 行为（例如点击、Tab），该 Button 将被自动聚焦\r
			<br>可以尝试刷新页面重置 focus 焦点</span>\r
		</ex-flex>\r
		<ex-flex>\r
			<ex-button name="apply">name="apply"</ex-button>\r
		</ex-flex>\r
		<ex-flex>\r
			<ex-button value="{ 'flag': true }">value="{ 'flag': true }"</ex-button>\r
		</ex-flex>\r
		<ex-flex>\r
			<ex-button .type="'submit'">.type="'submit'"</ex-button>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<style scoped>\r
</style>`;export{t as default};
