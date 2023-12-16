const t=`<template>\r
	<ex-flex>\r
		<div class="container">\r
			<ex-tooltip title="阿巴阿巴"\r
			placement="top"\r
			trigger-mode="always"\r
			:skidding="skidding"\r
			:distance="distance">\r
				<div class="example-box">offset</div>\r
			</ex-tooltip>\r
			<div class="skidding-box">skidding {{ skidding }}px</div>\r
			<div class="skidding-box-2" :style="{ top: \`calc(50% - \${distance + 57.8}px)\`, bottom: \`calc(50% + \${distance + 20 - 10}px)\`, left: \`calc(50% + \${skidding - 1}px\` }"></div>\r
			<div class="distance-box" :style="{ top: \`calc(50% - 42px)\` }">distance {{ distance }}px</div>\r
			<div class="distance-box-2" :style="{ top: \`calc(50% - \${distance + 22}px)\` }"></div>\r
		</div>\r
		<ex-flex vertical>\r
			<ex-flex>\r
				skidding\r
				<ex-number v-model="skidding" suffix="px" controller />\r
			</ex-flex>\r
			<ex-flex>\r
				distance\r
				<ex-number v-model="distance" suffix="px" controller />\r
			</ex-flex>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const skidding = ref(10)\r
const distance = ref(20)\r
<\/script>\r
\r
<style scoped>\r
.container {\r
	width: 280px;\r
	height: 200px;\r
	position: relative;\r
	.example-box {\r
		position: absolute;\r
		inset: calc(50% - 20px) auto auto calc(50% - 50px);\r
		z-index: 1;\r
	}\r
	.skidding-box {\r
		box-sizing: border-box;\r
		position: absolute;\r
		inset: 5% 5% 5% calc(50% - 1px);\r
		display: flex;\r
		justify-content: center;\r
		align-items: start;\r
		border-left: 2px dotted SandyBrown;\r
		color: brown;\r
		font-size: .8em;\r
		z-index: 0;\r
	}\r
	.skidding-box-2 {\r
		box-sizing: border-box;\r
		position: absolute;\r
		inset: 5% 5% 50% calc(50% - 1px);\r
		border-left: 2px solid brown;\r
		z-index: 0;\r
	}\r
	.distance-box {\r
		box-sizing: border-box;\r
		position: absolute;\r
		inset: auto 5% calc(50% + 18px) 5%;\r
		display: flex;\r
		justify-content: end;\r
		align-items: center;\r
		border-bottom: 2px dotted lightgray;\r
		color: gray;\r
		font-size: .8em;\r
	}\r
	.distance-box-2 {\r
		box-sizing: border-box;\r
		position: absolute;\r
		inset: auto 5% calc(50% + 18px) 5%;\r
		border-top: 2px dotted lightgray;\r
		color: gray;\r
	}\r
}\r
</style>`;export{t as default};
