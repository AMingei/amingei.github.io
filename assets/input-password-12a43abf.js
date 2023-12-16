const t=`<template>\r
	<ex-flex width="50%" vertical>\r
		<ex-input type="password" placeholder="PASSWORD" v-model="val" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const val = ref()\r
<\/script>`;export{t as default};
