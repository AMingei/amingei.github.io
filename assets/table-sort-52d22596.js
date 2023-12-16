const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex wrap>\r
			<ex-button type="primary"\r
			@click="table.sortBy(Col.Strength)">\r
				Sort by Strength\r
			</ex-button>\r
			<ex-button type="primary"\r
			@click="table.sortToggle(Col.Strength)">\r
				Toggle by Strength\r
			</ex-button>\r
			<ex-button type="primary"\r
			@click="table.sortBy([Col.Agility, Col.Strength])">\r
				Sort by Agility, then Strength\r
			</ex-button>\r
			<ex-button type="primary"\r
			@click="table.sortBy((row_a: any, row_b: any) => row_a[Col.Unit].length > row_b[Col.Unit].length)">\r
				Sort by Unit.leangth\r
			</ex-button>\r
			<ex-button type="primary"\r
			@click="table.resort()">\r
				reset\r
			</ex-button>\r
		</ex-flex>\r
		<ex-table :data="data" border="both" ref="table" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const table = ref()\r
\r
const Col = {\r
	Unit:         Symbol('Unit'),\r
	Strength:     Symbol('Strength'),\r
	Agility:      Symbol('Agility'),\r
	Intelligence: Symbol('Intelligence'),\r
	HitPoints:    Symbol('Hit Points'),\r
	Mana:         Symbol('Mana')\r
}\r
\r
const data = {\r
	thead: [{\r
		key: 1,\r
		[Col.Unit]: {\r
			id:      Col.Unit,\r
			label:   Col.Unit.description,\r
			rowspan: 3,\r
			order:   1\r
		},\r
		[Col.Strength]: {\r
			label:   'Attributes',\r
			colspan: 5\r
		}\r
	}, {\r
		key: 2,\r
		[Col.Strength]: {\r
			label:   'Base',\r
			colspan: 3\r
		},\r
		[Col.HitPoints]: {\r
			id:      Col.HitPoints,\r
			label:   Col.HitPoints.description,\r
			rowspan: 2,\r
			order:   5\r
		},\r
		[Col.Mana]: {\r
			id:      Col.Mana,\r
			label:   Col.Mana.description,\r
			rowspan: 2,\r
			order:   6\r
		}\r
	}, {\r
		key: 3,\r
		[Col.Strength]: {\r
			id:      Col.Strength,\r
			label:   Col.Strength.description,\r
			order:   2\r
		},\r
		[Col.Agility]: {\r
			id:      Col.Agility,\r
			label:   Col.Agility.description,\r
			order:   3\r
		},\r
		[Col.Intelligence]: {\r
			id:      Col.Intelligence,\r
			label:   Col.Intelligence.description,\r
			order:   4\r
		}\r
	}],\r
	tbody: [{\r
		key: 0,\r
		[Col.Unit]:         'Paladin',\r
		[Col.Strength]:     46,\r
		[Col.Agility]:      26,\r
		[Col.Intelligence]: 33,\r
		[Col.HitPoints]:    1250,\r
		[Col.Mana]:         495\r
	}, {\r
		key: 1,\r
		[Col.Unit]:         'Archmage',\r
		[Col.Strength]:     30,\r
		[Col.Agility]:      26,\r
		[Col.Intelligence]: 47,\r
		[Col.HitPoints]:    850,\r
		[Col.Mana]:         705\r
	}, {\r
		key: 2,\r
		[Col.Unit]:         'Mountain King',\r
		[Col.Strength]:     51,\r
		[Col.Agility]:      24,\r
		[Col.Intelligence]: 28,\r
		[Col.HitPoints]:    1375,\r
		[Col.Mana]:         420\r
	}, {\r
		key: 3,\r
		[Col.Unit]:         'Blood Mage',\r
		[Col.Strength]:     36,\r
		[Col.Agility]:      23,\r
		[Col.Intelligence]: 46,\r
		[Col.HitPoints]:    1000,\r
		[Col.Mana]:         690\r
	}]\r
}\r
<\/script>`;export{t as default};
