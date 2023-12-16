const t=`<template>\r
	<ex-content width="520px">\r
		<ex-header flex gap=".5em" justify="center">\r
			<ex-tooltip placement="top-start" title="阿巴阿巴">\r
				<div class="example-box">top-start</div>\r
			</ex-tooltip>\r
			<ex-tooltip placement="top" title="阿巴阿巴">\r
				<div class="example-box">top</div>\r
			</ex-tooltip>\r
			<ex-tooltip placement="top-end" title="阿巴阿巴">\r
				<div class="example-box">top-end</div>\r
			</ex-tooltip>\r
		</ex-header>\r
		<ex-content>\r
			<ex-left flex vertical gap=".5em" justify="center">\r
				<ex-tooltip placement="left-start" title="阿巴阿巴">\r
					<div class="example-box">left-start</div>\r
				</ex-tooltip>\r
				<ex-tooltip placement="left" title="阿巴阿巴">\r
					<div class="example-box">left</div>\r
				</ex-tooltip>\r
				<ex-tooltip placement="left-end" title="阿巴阿巴">\r
					<div class="example-box">left-end</div>\r
				</ex-tooltip>\r
			</ex-left>\r
			<ex-content></ex-content>\r
			<ex-right flex vertical gap=".5em" justify="center">\r
				<ex-tooltip placement="right-start" title="阿巴阿巴">\r
					<div class="example-box">right-start</div>\r
				</ex-tooltip>\r
				<ex-tooltip placement="right" title="阿巴阿巴">\r
					<div class="example-box">right</div>\r
				</ex-tooltip>\r
				<ex-tooltip placement="right-end" title="阿巴阿巴">\r
					<div class="example-box">right-end</div>\r
				</ex-tooltip>\r
			</ex-right>\r
		</ex-content>\r
		<ex-footer flex gap=".5em" justify="center">\r
			<ex-tooltip placement="bottom-start" title="阿巴阿巴">\r
				<div class="example-box">bottom-start</div>\r
			</ex-tooltip>\r
			<ex-tooltip placement="bottom" title="阿巴阿巴">\r
				<div class="example-box">bottom</div>\r
			</ex-tooltip>\r
			<ex-tooltip placement="bottom-end" title="top-阿巴阿巴">\r
				<div class="example-box">bottom-end</div>\r
			</ex-tooltip>\r
		</ex-footer>\r
	</ex-content>\r
</template>`;export{t as default};
