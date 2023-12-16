const t=`<template>\r
	<ex-table :data="data" ref="table" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { onMounted, reactive, ref, watch } from 'vue';\r
\r
const Col = {\r
	Odd: Symbol('Odd numbers'),\r
	Eve: Symbol('Even numbers'),\r
	Alt: Symbol('Alternate accumulate')\r
}\r
\r
const data = reactive({\r
	thead: [Col.Odd, Col.Eve, Col.Alt],\r
	tbody: [{\r
		key: 0,\r
		[Col.Odd]: 1,\r
		[Col.Eve]: 1,\r
		[Col.Alt]: 1\r
	}, {\r
		key: 1,\r
		[Col.Odd]: 2,\r
		[Col.Eve]: 2,\r
		[Col.Alt]: 2\r
	}, {\r
		key: 2,\r
		[Col.Odd]: 3,\r
		[Col.Eve]: 3,\r
		[Col.Alt]: 3\r
	}, {\r
		key: 3,\r
		[Col.Odd]: 4,\r
		[Col.Eve]: 4,\r
		[Col.Alt]: 4\r
	}, {\r
		key: 4,\r
		[Col.Odd]: 5,\r
		[Col.Eve]: 5,\r
		[Col.Alt]: 5\r
	}],\r
	tfoot: [{} as any]\r
})\r
\r
const table = ref()\r
\r
onMounted(() => {\r
	watch(() => table.value.currentData, (new_data) => {\r
		if(new_data) {\r
			data.tfoot[0][Col.Odd] = new_data.reduce((acc: string, cur: any) => {\r
				let current = cur.cells.find((value: any) => value.colId === Col.Odd).label\r
				if(current % 2 === 1) {\r
					return acc + \`\${current} \`\r
				} else {\r
					return acc\r
				}\r
			}, '')\r
			data.tfoot[0][Col.Eve] = new_data.reduce((acc: string, cur: any) => {\r
				let current = cur.cells.find((value: any) => value.colId === Col.Eve).label\r
				if(current % 2 === 0) {\r
					return acc + \`\${current} \`\r
				} else {\r
					return acc\r
				}\r
			}, '')\r
			let expression: string,\r
					res: number\r
			new_data.forEach((value: any, index: number) => {\r
				let current = value.cells.find((value: any) => value.colId === Col.Eve).label\r
				if(index === 0) {\r
					expression = \`\${current}\`\r
					res = current\r
				} else if(index % 2 === 0) {\r
					expression += \` + \${current}\`\r
					res += current\r
				} else {\r
					expression += \` - \${current}\`\r
					res -= current\r
				}\r
			})\r
			data.tfoot[0][Col.Alt] = \`\${expression!} = \${res!}\`\r
		}\r
	}, { immediate: true })\r
})\r
<\/script>`;export{t as default};
