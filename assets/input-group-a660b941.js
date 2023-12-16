const t=`<template>\r
	<ex-flex style="align-items: baseline;" width="50%">\r
		<label for="example-1">文本输入</label>\r
		<ex-flex style="flex: auto" vertical>\r
			<ex-input-group>\r
				<ex-input id="example-1" placeholder="input 1" v-model="val" />\r
				<ex-input id="example-2" placeholder="input 2" v-model="val" />\r
				<ex-input id="example-3" placeholder="input 3" v-model="val" />\r
			</ex-input-group>\r
			<span style="height: 1.5em; padding-left: .5em;">{{ val }}</span>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const val = ref()\r
<\/script>`;export{t as default};
