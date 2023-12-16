const t=`<template>\r
	<ex-content width="400px" v-title:bottom="'inplicit-flex <content>'">\r
\r
		<ex-content width="25%" left\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
			I'm an inplicit-flex-item &lt;aside&gt;\r
		</ex-content>\r
\r
		<ex-content v-title="'inplicit-flex-item <content>'"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			I'm an inplicit-flex-item &lt;content&gt;\r
		</ex-content>\r
\r
		<ex-content width="25%" right\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
			I'm an inplicit-flex-item &lt;aside&gt;\r
		</ex-content>\r
\r
	</ex-content>\r
</template>\r
\r
<script lang="ts" setup>\r
import { vTitle } from 'ex-ui'\r
<\/script>`;export{t as default};
