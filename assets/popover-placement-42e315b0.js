const t=`<template>\r
	<ex-content width="520px">\r
		<ex-header flex gap=".5em" justify="center">\r
			<ex-popover placement="top-start">\r
				<template #content>阿巴阿巴</template>\r
				<div class="example-box">top-start</div>\r
			</ex-popover>\r
			<ex-popover placement="top">\r
				<template #content>阿巴阿巴</template>\r
				<div class="example-box">top</div>\r
			</ex-popover>\r
			<ex-popover placement="top-end">\r
				<template #content>阿巴阿巴</template>\r
				<div class="example-box">top-end</div>\r
			</ex-popover>\r
		</ex-header>\r
		<ex-content>\r
			<ex-left flex vertical gap=".5em" justify="center">\r
				<ex-popover placement="left-start">\r
					<template #content>阿巴阿巴</template>\r
					<div class="example-box">left-start</div>\r
				</ex-popover>\r
				<ex-popover placement="left">\r
					<template #content>阿巴阿巴</template>\r
					<div class="example-box">left</div>\r
				</ex-popover>\r
				<ex-popover placement="left-end">\r
					<template #content>阿巴阿巴</template>\r
					<div class="example-box">left-end</div>\r
				</ex-popover>\r
			</ex-left>\r
			<ex-content></ex-content>\r
			<ex-right flex vertical gap=".5em" justify="center">\r
				<ex-popover placement="right-start">\r
					<template #content>阿巴阿巴</template>\r
					<div class="example-box">right-start</div>\r
				</ex-popover>\r
				<ex-popover placement="right">\r
					<template #content>阿巴阿巴</template>\r
					<div class="example-box">right</div>\r
				</ex-popover>\r
				<ex-popover placement="right-end">\r
					<template #content>阿巴阿巴</template>\r
					<div class="example-box">right-end</div>\r
				</ex-popover>\r
			</ex-right>\r
		</ex-content>\r
		<ex-footer flex gap=".5em" justify="center">\r
			<ex-popover placement="bottom-start">\r
				<template #content>阿巴阿巴</template>\r
				<div class="example-box">bottom-start</div>\r
			</ex-popover>\r
			<ex-popover placement="bottom">\r
				<template #content>阿巴阿巴</template>\r
				<div class="example-box">bottom</div>\r
			</ex-popover>\r
			<ex-popover placement="bottom-end">\r
				<template #content>阿巴阿巴</template>\r
				<div class="example-box">bottom-end</div>\r
			</ex-popover>\r
		</ex-footer>\r
	</ex-content>\r
</template>`;export{t as default};
