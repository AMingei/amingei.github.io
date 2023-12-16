const t=`<template>\r
	<ex-flex width="50%" vertical>\r
		\r
		<ex-input>\r
			<template #prefix>\r
				<svg width="16px" height="16px" style="color: green" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M21.29 5.89l-10 10a.996.996 0 0 1-1.41 0l-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12l9.29-9.29a.996.996 0 0 1 1.41 0c.4.39.4 1.02.01 1.41zM12 20c-4.71 0-8.48-4.09-7.95-8.9c.39-3.52 3.12-6.41 6.61-6.99c1.81-.3 3.53.02 4.99.78a1.003 1.003 0 0 0 .93-1.78c-1.47-.75-3.13-1.16-4.9-1.11c-5.14.16-9.41 4.34-9.67 9.47C1.72 17.24 6.3 22 12 22c1.2 0 2.34-.21 3.41-.6c.68-.25.87-1.13.35-1.65a.98.98 0 0 0-1.04-.23c-.85.31-1.77.48-2.72.48zm7-5h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2z" fill="currentColor"></path></svg>\r
			</template>\r
		</ex-input>\r
		\r
		<ex-input placeholder="通过编写样式实现" :suffix-style="customStyle[0]">\r
			<template #suffix>\r
				search&ensp;\r
				<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64zm80 294.63l-54.15-54.15a88.08 88.08 0 1 1 22.63-22.63L358.63 336z" fill="currentColor"></path><circle cx="232" cy="232" r="56" fill="currentColor"></circle></svg>\r
			</template>\r
		</ex-input>\r
\r
		<ex-input placeholder="嵌入 Button 组件实现" :suffix-style="customStyle[1]">\r
			<template #suffix>\r
				<ex-button type="primary">search&ensp;<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64zm80 294.63l-54.15-54.15a88.08 88.08 0 1 1 22.63-22.63L358.63 336z" fill="currentColor"></path><circle cx="232" cy="232" r="56" fill="currentColor"></circle></svg></ex-button>\r
			</template>\r
		</ex-input>\r
\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
const customStyle = [{\r
	outline: '1px solid blueviolet',\r
	padding: '.15em .75em .15em 1em',\r
	borderTopRightRadius: 'inherit',\r
	borderBottomRightRadius: 'inherit',\r
	color: 'white',\r
	backgroundColor: 'darkviolet',\r
	fontFamily: 'consolas',\r
	cursor: 'pointer'\r
}, {\r
	padding: '0'\r
}]\r
<\/script>\r
\r
<style scoped>\r
.ex-button {\r
	outline: 1px solid #a556c7;\r
	border-top-left-radius: 0;\r
	border-bottom-left-radius: 0;\r
	& :deep(.ex-button-container) {\r
		padding: .15em .75em .15em 1em;\r
	}\r
	& :deep(.ex-button-text) {\r
		display: flex;\r
		align-items: center;\r
	}\r
}\r
</style>`;export{t as default};
