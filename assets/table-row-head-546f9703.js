const t=`<template>\r
	<ex-table :data="data" border="both" />\r
</template>\r
\r
<script lang="ts" setup>\r
const Col = {\r
	ColHead: Symbol('时间\\\\星期'),\r
	Mon: Symbol('Mon.'),\r
	Tue: Symbol('Tue.'),\r
	Wed: Symbol('Wed.'),\r
	Thu: Symbol('Thu.'),\r
	Fri: Symbol('Fri.')\r
}\r
\r
const data = {\r
	thead: [\r
		{ id: Col.ColHead, label: Col.ColHead.description, isRawHead: true },\r
		{ id: Col.Mon,     label: Col.Mon.description },\r
		{ id: Col.Tue,     label: Col.Tue.description },\r
		{ id: Col.Wed,     label: Col.Wed.description },\r
		{ id: Col.Thu,     label: Col.Thu.description },\r
		{ id: Col.Fri,     label: Col.Fri.description }\r
	],\r
	tbody: [{\r
		key: 1,\r
		[Col.ColHead]: '08:00 ~ 09:40',\r
		[Col.Mon]: 'AAA',\r
		[Col.Tue]: 'BBB',\r
		[Col.Thu]: 'CCC'\r
	}, {\r
		key: 2,\r
		[Col.ColHead]: '10:00 ~ 11:40',\r
		[Col.Mon]: 'DDD',\r
		[Col.Tue]: 'EEE',\r
		[Col.Wed]: 'FFF',\r
		[Col.Fri]: 'GGG'\r
	}, {\r
		key: 3,\r
		[Col.ColHead]: '14:30 ~ 16:20',\r
		[Col.Tue]: 'HHH',\r
		[Col.Thu]: 'III',\r
		[Col.Fri]: 'JJJ'\r
	}, {\r
		key: 4,\r
		[Col.ColHead]: '16:30 ~ 18:20',\r
		[Col.Mon]: 'KKK',\r
		[Col.Wed]: 'LLL',\r
		[Col.Thu]: 'MMM'\r
	}]\r
}\r
<\/script>`;export{t as default};
