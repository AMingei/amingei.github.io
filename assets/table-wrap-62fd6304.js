const t=`<template>\r
	<ex-flex>\r
		<ex-table :data="data" nowrap />\r
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
	thead: [\r
		{ id: Col.Method,      label: Col.Method.description },\r
		{ id: Col.Parameters,  label: Col.Parameters.description,  width: '200px' },\r
		{ id: Col.ReturnValue, label: Col.ReturnValue.description, width: '200px' },\r
		{ id: Col.Description, label: Col.Description.description, width: '200px' },\r
	],\r
	tbody: [{\r
		key: 1,\r
		[Col.Method]:      'Array.prototype.at()',\r
		[Col.Parameters]:  'index: 返回数组元素的索引',\r
		[Col.ReturnValue]: '数组中与给定索引匹配的元素',\r
		[Col.Description]: 'at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。'\r
	}, {\r
		key: 2,\r
		[Col.Method]:      'Array.prototype.find()',\r
		[Col.Parameters]:  'callbackFn: 为数组中的每个元素执行的函数 thisArg?: 执行 callbackFn 时用作 this 的值',\r
		[Col.ReturnValue]: '数组中第一个满足所提供测试函数的元素的值',\r
		[Col.Description]: 'find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。'\r
	}]\r
}\r
<\/script>`;export{t as default};
