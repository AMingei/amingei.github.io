const t=`<template>\r
	<ex-alert>\r
		<template #icon>\r
			<svg width="1.4rem" height="1.4rem" viewBox="0 0 16 16"><use xlink:href="#eg-alert-error"/></svg>\r
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
<style scoped>\r
pre {\r
	margin: .5rem 0 !important;\r
	padding: .25rem .5rem;\r
	tab-size: 2ch;\r
	font-size: .9rem;\r
	border-radius: 4px;\r
	background-color: var(--code-back-color);\r
	& > code {\r
		font-family: 'consolas', 'Courier New', Courier, monospace;\r
	}\r
}\r
</style>`;export{t as default};
