const t=`<template>\r
	<ex-content flex gap="1em" width="400px" v-title:bottom="'flex <content>'"\r
	bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
		<ex-content height="100px" width="200px" v-title="'flex-item <content>'"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			I'm a flex-item content.\r
		</ex-content>\r
		<ex-content height="100px" width="200px" v-title="'flex-item <content>'"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			I'm a flex-item content.\r
		</ex-content>\r
		<ex-content height="100px" v-title="'flex-item <content>'"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			I'm a flex-item content.\r
		</ex-content>\r
	</ex-content>\r
</template>\r
\r
<script lang="ts" setup>\r
import { vTitle } from 'ex-ui'\r
<\/script>`;export{t as default};
