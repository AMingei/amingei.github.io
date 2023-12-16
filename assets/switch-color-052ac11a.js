const t=`<template>\r
	<ex-flex>\r
\r
		<ex-switch color-off="lime" color-on="limegreen" />\r
\r
		<ex-switch\r
		color-off="skyblue" switch-off-style="color: white" \r
		color-on="orange" switch-on-style="color: white">\r
			<template #textoff>\r
				Cold down&ensp;\r
				<svg width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-button-toggle-1" />\r
				</svg>\r
			</template>\r
			<template #texton>\r
				<svg width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-button-toggle-2" />\r
				</svg>\r
				&ensp;Warm up\r
			</template>\r
		</ex-switch>\r
\r
	</ex-flex>\r
</template>`;export{t as default};
