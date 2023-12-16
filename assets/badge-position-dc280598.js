const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-badge :value="12">\r
				<div class="example-avatar"></div>\r
			</ex-badge>\r
			default\r
		</ex-flex>\r
		<ex-flex>\r
			<ex-badge :value="12" :position="['0', '0', '0', '0']">\r
				<div class="example-avatar"></div>\r
			</ex-badge>\r
			['0', '0', '0', '0']\r
		</ex-flex>\r
		<ex-flex>\r
			<ex-badge :value="12" :position="['50%', '50%', '50%', '-50%']">\r
				<div class="example-avatar"></div>\r
			</ex-badge>\r
			['50%', '50%', '50%', '-50%']\r
		</ex-flex>\r
	</ex-flex>\r
</template>`;export{t as default};
