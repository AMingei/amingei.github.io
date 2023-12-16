const t=`<template>\r
	<ex-content>\r
		<ex-header class="header"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			HEADER\r
		</ex-header>\r
		<ex-content class="content"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
			CONTENT\r
		</ex-content>\r
		<ex-footer class="footer"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			FOOTER\r
		</ex-footer>\r
	</ex-content>\r
</template>\r
\r
<style scoped>\r
.content {\r
	padding: 1rem .5rem;\r
}\r
.header, .footer {\r
	padding: 1rem .5rem;\r
	font-weight: bold;\r
}\r
</style>`;export{t as default};
