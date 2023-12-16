const t=`<template>\r
	<ex-content width="400px" v-title="'parent <content>'"\r
	bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
\r
		<span v-title:left="'<span>'"\r
		style="background-color: color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			I'm a span node in &lt;content&gt;, seem like a normal inline content.\r
		</span>\r
\r
		<ex-content width="200px" height="200px" bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)" v-title:left="'sub <content>'">I'm a sub-content node in &lt;content&gt;.</ex-content>\r
\r
		<span v-title:left="'<span>'"\r
		style="background-color: color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			I'm another span node in &lt;content&gt;.\r
		</span>\r
\r
	</ex-content>\r
</template>\r
\r
<script lang="ts" setup>\r
import { vTitle } from 'ex-ui'\r
<\/script>`;export{t as default};
