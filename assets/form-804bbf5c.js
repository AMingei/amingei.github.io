const t=`<template>\r
	<ex-flex width="500px">\r
		<ex-form>\r
			<ex-form-item label="文本录入">\r
				<ex-input v-model="formData.input" placeholder="input" />\r
			</ex-form-item>\r
			<ex-form-item label="文本录入">\r
				<ex-input v-model="formData.password" placeholder="password" type="password" resetable />\r
			</ex-form-item>\r
			<ex-form-item label="文本录入">\r
				<ex-input v-model="formData.textarea" placeholder="textarea" type="textarea" />\r
			</ex-form-item>\r
			<ex-form-item label="数字录入">\r
				<ex-number v-model="formData.number" placeholder="number" controller resetable />\r
			</ex-form-item>\r
			<ex-form-item label="开关">\r
				<ex-switch v-model="formData.switch" text-on="switch on" text-off="switch off" />\r
			</ex-form-item>\r
			<ex-form-item label="单选">\r
				<ex-radio-group v-model="formData.radio" name="radio">\r
					<ex-flex>\r
						<ex-radio :value="0">radio 1</ex-radio>\r
						<ex-radio :value="1">radio 2</ex-radio>\r
						<ex-radio :value="2">radio 3</ex-radio>\r
					</ex-flex>\r
				</ex-radio-group>\r
			</ex-form-item>\r
			<ex-form-item label="多选">\r
				<ex-checkbox-group v-model="formData.checkbox" name="checkbox">\r
					<ex-flex>\r
						<ex-checkbox value="0">checkbox 1</ex-checkbox>\r
						<ex-checkbox value="1">checkbox 2</ex-checkbox>\r
						<ex-checkbox value="2">checkbox 3</ex-checkbox>\r
					</ex-flex>\r
				</ex-checkbox-group>\r
			</ex-form-item>\r
			<ex-form-item input-align="end">\r
				<ex-flex>\r
					<ex-button type.attr="submit" type="primary">submit</ex-button>\r
				</ex-flex>\r
			</ex-form-item>\r
		</ex-form>\r
	</ex-flex>\r
	<ex-flex width="calc(100% - 500px)">\r
		<span style="flex: auto">表单数据 {{ formData }}</span>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive } from 'vue'\r
\r
interface TFormData {\r
	input?: string,\r
	password?: string,\r
	textarea?: string,\r
	number?: number,\r
	switch?: boolean,\r
	radio?: number,\r
	checkbox?: string[]\r
}\r
\r
const formData = reactive<TFormData>({})\r
<\/script>`;export{t as default};
