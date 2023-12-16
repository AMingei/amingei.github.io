const t=`<template>\r
	<ex-tooltip title="阿巴阿巴" transition="bounce">\r
		<div class="example-box">HTML</div>\r
	</ex-tooltip>\r
</template>\r
\r
<style>\r
.bounce-enter-active { animation: bounce-in .5s }\r
.bounce-leave-active { transition: opacity .4s }\r
.bounce-leave-to { opacity: 0 }\r
@keyframes bounce-in {\r
	0%, 100% { opacity: 1 }\r
	50% { opacity: .25 }\r
}\r
</style>`;export{t as default};
