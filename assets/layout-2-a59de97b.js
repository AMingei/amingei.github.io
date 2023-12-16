const t=`<template>\r
	<ex-content>\r
		<ex-left class="left"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			LEFT\r
		</ex-left>\r
		<ex-content class="content"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 5%)">\r
			CONTENT\r
		</ex-content>\r
		<ex-right class="right"\r
		bg-color="color-mix(in hsl, var(--back-color), var(--text-color) 15%)">\r
			RIGTH\r
		</ex-right>\r
	</ex-content>\r
</template>\r
\r
<style scoped>\r
.content {\r
	padding: 3rem .5rem;\r
}\r
.left, .right {\r
	padding: 3rem 6rem 3rem .5rem;\r
	font-weight: bold;\r
}\r
</style>`;export{t as default};
