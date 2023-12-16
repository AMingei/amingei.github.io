const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-checkbox-group name="example-disabled" v-model="currentValue_1">\r
				<ex-flex>\r
					<ex-checkbox v-for="force in threeKingdoms_1"\r
					:key="force.index"\r
					:value="force.index"\r
					:disabled="(force as any).isDisabled">\r
						{{ force.label }}\r
					</ex-checkbox>\r
				</ex-flex>\r
			</ex-checkbox-group>\r
			禁用选项 将无法被聚焦、更改、提交。\r
		</ex-flex>\r
\r
		<ex-flex style="align-items: baseline;">\r
			<ex-checkbox-group name="example-readonly" v-model="currentValue_2">\r
				<ex-flex>\r
					<ex-checkbox v-for="force in threeKingdoms_2"\r
					:key="force.index"\r
					:value="force.index"\r
					:readonly="(force as any).isReadonly">\r
						{{ force.label }}\r
					</ex-checkbox>\r
				</ex-flex>\r
			</ex-checkbox-group>\r
			<span>\r
				只读选项 将无法被用户直接更改，可以通过访问 Expose 或修改单选组的绑定值进行更改；\r
				<ex-button type="primary" style="font-size: calc(1rem - 2px)" @click="currentValue_2 = [...new Set(currentValue_2.concat([2]))]">click this</ex-button>\r
				<br/>\r
				当只读选项被选中时选项组内的其他选项同样无法被直接更改。\r
				<ex-button type="primary" style="font-size: calc(1rem - 2px)" @click="currentValue_2 = currentValue_2.filter(item => item !== 2)">click this</ex-button>\r
			</span>\r
		</ex-flex>\r
\r
		<ex-flex>\r
			<ex-checkbox-group disabled\r
			name="example-disabled-group" v-model="currentValue_3">\r
				<ex-flex>\r
					<ex-checkbox v-for="force in threeKingdoms_3 as typeof threeKingdoms"\r
					:key="force.index"\r
					:value="force.index">\r
						{{ force.label }}\r
					</ex-checkbox>\r
				</ex-flex>\r
			</ex-checkbox-group>\r
			在单选组上进行组禁用。\r
		</ex-flex>\r
		\r
		<ex-flex>\r
			<ex-checkbox-group readonly\r
			name="example-readonly-group" v-model="currentValue_4">\r
				<ex-flex>\r
					<ex-checkbox v-for="force in threeKingdoms_4 as typeof threeKingdoms"\r
					:key="force.index"\r
					:value="force.index">\r
						{{ force.label }}\r
					</ex-checkbox>\r
				</ex-flex>\r
			</ex-checkbox-group>\r
			在单选组上进行组只读。\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const threeKingdoms = [{ index: 0, label: '魏国' }, { index: 1, label: '蜀国' }, { index: 2, label: '吴国' }]\r
const threeKingdoms_1 = threeKingdoms.map(item => item.index == 2 ? { index: 2, label: '禁用', isDisabled: true } : item )\r
const threeKingdoms_2 = threeKingdoms.map(item => item.index == 2 ? { index: 2, label: '只读', isReadonly: true } : item )\r
const threeKingdoms_3 = threeKingdoms.map(item => new Object({ index: item.index, label: '禁用' }))\r
const threeKingdoms_4 = threeKingdoms.map(item => new Object({ index: item.index, label: '只读' }))\r
\r
const currentValue_1 = ref([0])\r
const currentValue_2 = ref([0])\r
const currentValue_3 = ref([0])\r
const currentValue_4 = ref([0])\r
<\/script>`;export{t as default};
