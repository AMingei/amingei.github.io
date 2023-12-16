const t=`<template>\r
	<ex-flex gap=".5em">\r
		<ex-popover placement="top" trigger-mode="hover">\r
			<template #content>阿巴阿巴</template>\r
			<div class="example-box" tabindex="1">hover</div>\r
		</ex-popover>\r
		<ex-popover placement="top" trigger-mode="focus">\r
			<template #content>阿巴阿巴</template>\r
			<div class="example-box" tabindex="1">focus</div>\r
		</ex-popover>\r
		<ex-popover placement="top">\r
			<template #content>阿巴阿巴</template>\r
			<div class="example-box" tabindex="1">click</div>\r
		</ex-popover>\r
		<ex-popover placement="top" trigger-mode="contextmenu">\r
			<template #content>阿巴阿巴</template>\r
			<div class="example-box" tabindex="1">contextmenu</div>\r
		</ex-popover>\r
		<ex-popover placement="top" trigger-mode="always">\r
			<template #content>阿巴阿巴</template>\r
			<div class="example-box" tabindex="1">always</div>\r
		</ex-popover>\r
	</ex-flex>\r
</template>`;export{t as default};
