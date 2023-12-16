const t=`<template>\r
	<ex-flex gap=".5em">\r
		<ex-tooltip placement="top" title="阿巴阿巴" :is-shown="isShown">\r
			<div class="example-box">trigger me</div>\r
		</ex-tooltip>\r
		<div class="example-box"\r
		@mouseenter="isShown = true"\r
		@mouseleave="isShown = false">hover me</div>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const isShown = ref(false)\r
<\/script>`;export{t as default};
