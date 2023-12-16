const e=`<template>\r
	<ex-flex width="290px">\r
		<ex-color-selector v-model="value" alpha :pre-pallete="list" editable />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive, ref } from 'vue'\r
\r
const value = ref('FF00FFFF')\r
const list = reactive(['#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#00000066'])\r
<\/script>`;export{e as default};
