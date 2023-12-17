const t=`<template>\r
	<ex-flex>\r
		<ex-button type="primary" round has-option breathing>\r
			<template #option>\r
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-button-optional" />\r
				</svg>\r
			</template>\r
			Optional\r
		</ex-button>\r
\r
		<ex-button has-icon has-option>\r
			<template #icon>\r
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-button-layers" />\r
				</svg>\r
			</template>\r
			<template #option>\r
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-button-add-layer" />\r
				</svg>\r
			</template>\r
			Too many characters in this button's default slot\r
		</ex-button>\r
	</ex-flex>\r
</template>`;export{t as default};
