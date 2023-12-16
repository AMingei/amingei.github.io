const t=`<template>\r
	<ex-flex vertical>\r
		<ex-table :data="data" />\r
		<ex-table :data="data" non-data-description="请刷新页面以更新数据" />\r
		<ex-table :data="data">\r
			<template #non_data>\r
				<div class="eg-table-loading">\r
					<div></div>\r
				</div>\r
				<span style="margin-top: .5rem;">loading...</span>\r
			</template>\r
		</ex-table>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
const Col = {\r
	Method:      Symbol('Method'),\r
	Parameters:  Symbol('Parameters'),\r
	ReturnValue: Symbol('Return value'),\r
	Description: Symbol('Description')\r
}\r
\r
const data = {\r
	thead: [Col.Method, Col.Parameters, Col.ReturnValue, Col.Description],\r
	tbody: []\r
}\r
<\/script>\r
\r
<style scoped>\r
.eg-table-loading {\r
	width: 2rem;\r
	height: 2rem;\r
\r
	& > div {\r
		display: inline-block;\r
		float: none;\r
		background-color: currentColor;\r
		\r
		width: 100%;\r
		height: 100%;\r
		border-radius: 0;\r
		animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;\r
	}\r
}\r
\r
@keyframes square-spin {\r
	0%   { transform: perspective(100px) rotateX(0) rotateY(0); }\r
	25%  { transform: perspective(100px) rotateX(180deg) rotateY(0); }\r
	50%  { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }\r
	75%  { transform: perspective(100px) rotateX(0) rotateY(180deg); }\r
	100% { transform: perspective(100px) rotateX(0) rotateY(360deg); }\r
}\r
</style>`;export{t as default};
