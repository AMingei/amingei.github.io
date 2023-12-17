const t=`<template>\r
	<ex-button type="primary" @click="show = !show">{{ show ? 'hide' : 'show' }}</ex-button>\r
	<ex-modal v-model="show"\r
	class="eg-modal"\r
	header-class="eg-modal-header"\r
	content-class="eg-modal-content"\r
	footer-class="eg-modal-footer">\r
		<template #header>\r
			第一回<br />宴桃园豪杰三结义 斩黄巾英雄首立功\r
		</template>\r
		话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉。汉朝自高祖斩白蛇而起义，一统天下，后来光武中兴，传至献帝，遂分为三国。推其致乱之由，殆始于桓、灵二帝。桓帝禁锢善类，崇信宦官。及桓帝崩，灵帝即位，大将军窦武、太傅陈蕃，共相辅佐。时有宦官曹节等弄权，窦武、陈蕃谋诛之，机事不密，反为所害，中涓自此愈横。\r
		<template #footer>\r
			<a href="javascript: void(0)" style="color: var(--x-text-color--link);">查看更多……</a>\r
		</template>\r
	</ex-modal>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const show = ref(false)\r
<\/script>\r
\r
<style>\r
.eg-modal {\r
	width: 320px;\r
	line-height: 1.6;\r
\r
	.eg-modal-header {\r
		padding: 1em 1.5em;\r
		font-weight: bold;\r
	}\r
	.eg-modal-content {\r
		border-block: 1px solid var(--border-color);\r
		padding: 1em 1.5em;\r
	}\r
	.eg-modal-footer {\r
		padding: 1em 1.5em;\r
	}\r
}\r
</style>`;export{t as default};
