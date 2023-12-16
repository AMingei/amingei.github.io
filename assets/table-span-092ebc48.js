const t=`<template>\r
	<ex-table :data="data" border="both" />\r
</template>\r
\r
<script lang="ts" setup>\r
const Col = {\r
	ColHead_1: Symbol('ColHead_1'),\r
	ColHead_2: Symbol('ColHead_2'),\r
	ColHead_3: Symbol('ColHead_3'),\r
	Subject: Symbol('Subject'),\r
	Object: Symbol('Object')\r
}\r
\r
const data = {\r
	thead: [\r
		{ id: Col.ColHead_1, isRawHead: true },\r
		{ id: Col.ColHead_2, isRawHead: true },\r
		{ id: Col.ColHead_3, isRawHead: true },\r
		{ id: Col.Subject,   label: Col.Subject.description },\r
		{ id: Col.Object,    label: Col.Object.description }\r
	],\r
	tbody: [{\r
		key: 1,\r
		[Col.ColHead_1]: {\r
			label:   '单数',\r
			rowspan: 5\r
		},\r
		[Col.ColHead_2]: {\r
			label:   '第一人称',\r
			colspan: 2\r
		},\r
		[Col.Subject]:   'I',\r
		[Col.Object]:    'me'\r
	}, {\r
		key: 2,\r
		[Col.ColHead_2]: {\r
			label:   '第二人称',\r
			colspan: 2\r
		},\r
		[Col.Subject]: {\r
			label:   'you',\r
			colspan: 2\r
		}\r
	}, {\r
		key: 3,\r
		[Col.ColHead_2]: {\r
			label:   '第三人称',\r
			rowspan: 3\r
		},\r
		[Col.ColHead_3]: '♂',\r
		[Col.Subject]:   'he',\r
		[Col.Object]:    'him'\r
	}, {\r
		key: 4,\r
		[Col.ColHead_3]: '♀',\r
		[Col.Subject]:   'she',\r
		[Col.Object]:    'her'\r
	}, {\r
		key: 5,\r
		[Col.ColHead_3]: 'o',\r
		[Col.Subject]: {\r
			label:   'it',\r
			colspan: 2\r
		}\r
	}, {\r
		key: 6,\r
		[Col.ColHead_1]: {\r
			label:   '复数',\r
			rowspan: 3\r
		},\r
		[Col.ColHead_2]: {\r
			label:   '第一人称',\r
			colspan: 2\r
		},\r
		[Col.Subject]:   'we',\r
		[Col.Object]:    'us'\r
	}, {\r
		key: 7,\r
		[Col.ColHead_2]: {\r
			label:   '第二人称',\r
			colspan: 2\r
		},\r
		[Col.Subject]: {\r
			label:   'you',\r
			colspan: 2\r
		}\r
	}, {\r
		key: 8,\r
		[Col.ColHead_2]: {\r
			label:   '第三人称',\r
			colspan: 2\r
		},\r
		[Col.Subject]:   'they',\r
		[Col.Object]:    'them'\r
	}]\r
}\r
<\/script>`;export{t as default};
