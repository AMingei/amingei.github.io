const t=`<template>\r
	<ex-alert type="error"\r
	icon-class="eg-alert-icon"\r
	title-class="eg-alert-title"\r
	content-class="eg-alert-content">\r
		<template #icon>\r
			<svg width="1.4rem" height="1.4rem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
				<use xlink:href="#eg-alert-error"/>\r
			</svg>\r
		</template>\r
		<template #title>\r
			[WARNING] [unsupported-css-nesting]\r
		</template>\r
		CSS nesting syntax is not supported in the configured target environment ("chrome87", "edge88", "es2020", "firefox78", "safari14") [unsupported-css-nesting]\r
		<pre><code>parent {\r
	/* parent styles */\r
	& child {\r
		/* child of parent styles */\r
	}\r
}</code></pre>\r
	</ex-alert>\r
</template>\r
\r
<style>\r
/* !! global style !! */\r
\r
.eg-alert-icon,\r
.eg-alert-title {\r
	color: darkred;\r
	\r
	:root.dark & {\r
		color: color-mix(in hsl, darkred, currentColor);\r
	}\r
}\r
\r
.eg-alert-content pre {\r
	margin: .5rem 0 !important;\r
	padding: .25rem .5rem;\r
	tab-size: 2ch;\r
	font-size: .9rem;\r
	border-radius: 4px;\r
	background-color: var(--code-back-color);\r
\r
	& > code {\r
		font-family: 'consolas', 'Courier New', Courier, monospace;\r
	}\r
}\r
</style>`;export{t as default};
