const t=`<template>\r
	<ex-flex>\r
		<ex-switch text-off="关" text-on="开" />\r
		<ex-switch text-off="OFF" text-on="ON" />\r
		<ex-switch>\r
			<template #textoff>\r
				<svg width="1.2em" height="1.2em" style="color: gray" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-switch-power-off" />\r
				</svg>\r
			</template>\r
			<template #texton>\r
				<svg width="1.2em" height="1.2em" style="color: yellow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
					<use xlink:href="#eg-switch-power-on" />\r
				</svg>\r
			</template>\r
		</ex-switch>\r
	</ex-flex>\r
</template>`;export{t as default};
