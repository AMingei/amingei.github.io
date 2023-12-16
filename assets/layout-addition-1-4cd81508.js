const t=`<template>\r
	<ex-content width="400px" border-style="lightgray">\r
		\r
		<ex-header bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
			#header\r
		</ex-header>\r
		\r
		<ex-content border-style="lightgray">\r
			<ex-left bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
				#left\r
			</ex-left>\r
			<ex-content bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
				#content\r
			</ex-content>\r
			<ex-right bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
				#right\r
			</ex-right>\r
		</ex-content>\r
		\r
		<ex-footer bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
			#footer\r
		</ex-footer>\r
	</ex-content>\r
</template>\r
\r
<style scoped>\r
.ex-content {\r
	padding: 1.5rem 6rem 1.5rem .5rem;\r
	font-weight: bold;\r
}\r
</style>`;export{t as default};
