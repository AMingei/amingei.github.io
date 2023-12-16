const t=`<template>\r
	<ex-flex>\r
		<ex-button type="primary" round has-icon has-option :color="isCooling ? 'steelblue' : 'orange'"\r
		@click="func" @option-click="funcOption">\r
			<template #icon>\r
				<svg v-if="isCooling"\r
				xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-button-toggle-1" />\r
				</svg>\r
				<svg v-else\r
				xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-button-toggle-2" />\r
				</svg>\r
			</template>\r
\r
			<template #option>\r
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-button-toggle-3" />\r
				</svg>\r
			</template>\r
\r
			Toogle\r
		</ex-button>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const isCooling = ref(true)\r
\r
function func() {\r
	alert(isCooling.value ? 'is cooling down...' : 'is warming up...')\r
}\r
function funcOption() {\r
	isCooling.value = !isCooling.value\r
}\r
<\/script>`;export{t as default};
