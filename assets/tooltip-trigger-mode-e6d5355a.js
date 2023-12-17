const t=`<template>\r
	<ex-flex gap=".5em">\r
		<ex-tooltip placement="top" title="阿巴阿巴">\r
			<div class="example-box" tabindex="1">hover</div>\r
		</ex-tooltip>\r
		<ex-tooltip placement="top" title="阿巴阿巴" trigger-mode="focus">\r
			<div class="example-box" tabindex="1">focus</div>\r
		</ex-tooltip>\r
		<ex-tooltip placement="top" title="阿巴阿巴" trigger-mode="click">\r
			<div class="example-box" tabindex="1">click</div>\r
		</ex-tooltip>\r
		<ex-tooltip placement="top" title="阿巴阿巴" trigger-mode="contextmenu">\r
			<div class="example-box" tabindex="1">contextmenu</div>\r
		</ex-tooltip>\r
		<!-- <ex-tooltip placement="top" title="阿巴阿巴" trigger-mode="always">\r
			<div class="example-box" tabindex="1">always</div>\r
		</ex-tooltip> -->\r
	</ex-flex>\r
</template>`;export{t as default};
