const t=`<template>\r
	<ex-flex>\r
		<ex-card width="320px" ratio="3" :bordered="false">\r
			bordered = false\r
			<br />shadow = "none" (default)\r
		</ex-card>\r
		<ex-card width="320px" ratio="3" :bordered="false" shadow="hover">\r
			bordered = false\r
			<br />shadow = "hover"\r
		</ex-card>\r
		<ex-card width="320px" ratio="3" :bordered="false" shadow="always">\r
			bordered = false\r
			<br />shadow = "always"\r
		</ex-card>\r
	</ex-flex>\r
</template>`;export{t as default};
