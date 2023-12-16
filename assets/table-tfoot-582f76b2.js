const t=`<template>\r
	<ex-table :data="data" />\r
</template>\r
\r
<script lang="ts" setup>\r
const Col = {\r
	Max: Symbol('Maximum value'),\r
	Min: Symbol('Minimum value'),\r
	Ave: Symbol('Average value'),\r
	Sum: Symbol('Accumulated value'),\r
	Cnt: Symbol('Count')\r
}\r
\r
const data = {\r
	thead: [\r
		{ id: Col.Max, summary: 'max' },\r
		{ id: Col.Min, summary: 'min' },\r
		{ id: Col.Ave, summary: 'ave' },\r
		{ id: Col.Sum, summary: 'sum' },\r
		{ id: Col.Cnt, summary: 'cnt' }\r
	],\r
	tbody: [{\r
		key: 0,\r
		[Col.Max]: 1,\r
		[Col.Min]: 1,\r
		[Col.Ave]: 1,\r
		[Col.Sum]: 1,\r
		[Col.Cnt]: 1\r
	}, {\r
		key: 1,\r
		[Col.Max]: 2,\r
		[Col.Min]: 2,\r
		[Col.Ave]: 2,\r
		[Col.Sum]: 2,\r
		[Col.Cnt]: 2\r
	}, {\r
		key: 2,\r
		[Col.Max]: 3,\r
		[Col.Min]: 3,\r
		[Col.Ave]: 3,\r
		[Col.Sum]: 3,\r
		[Col.Cnt]: 3\r
	}, {\r
		key: 3,\r
		[Col.Max]: 4,\r
		[Col.Min]: 4,\r
		[Col.Ave]: 4,\r
		[Col.Sum]: 4,\r
		[Col.Cnt]: 4\r
	}, {\r
		key: 4,\r
		[Col.Max]: 5,\r
		[Col.Min]: 5,\r
		[Col.Ave]: 5,\r
		[Col.Sum]: 5,\r
		[Col.Cnt]: 5\r
	}]\r
}\r
<\/script>`;export{t as default};
