const t=`<template>\r
	<ex-flex>\r
		<ex-button type="primary" has-icon>\r
			<template #icon>\r
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">\r
					<use xlink:href="#eg-button-profile" />\r
				</svg>\r
			</template>\r
			Profile\r
		</ex-button>\r
\r
		<ex-button type="success" priority="secondary" round has-icon>\r
			<template #icon>\r
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">\r
					<use xlink:href="#eg-button-clock" />\r
				</svg>\r
			</template>\r
			Time Out!\r
		</ex-button>\r
\r
		<ex-button type="warning" priority="tertiary" disabled has-icon>\r
			<template #icon>\r
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">\r
					<use xlink:href="#eg-button-no-signal" />\r
				</svg>\r
			</template>\r
			Warning\r
		</ex-button>\r
\r
		<ex-button type="error" priority="quaternary" has-icon>\r
			<template #icon>\r
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">\r
					<use xlink:href="#eg-button-logs" />\r
				</svg>\r
			</template>\r
			Print Log\r
		</ex-button>\r
	</ex-flex>\r
</template>`;export{t as default};
