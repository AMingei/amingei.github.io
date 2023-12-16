const t=`<template>\r
	<ex-flex>\r
		<div v-badge\r
		style="width: 2.5rem; height: 2.5rem; background-color: lightgray; border-radius: 4px;"></div>\r
		<ex-button type="primary" v-badge.breathing="12">Button</ex-button>\r
		<ex-button type="warning" v-badge="{ value: 12, breathing: true }">Button</ex-button>\r
	</ex-flex>\r
</template>`;export{t as default};
