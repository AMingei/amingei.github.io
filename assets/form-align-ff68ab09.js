const t=`<template>\r
	<ex-flex width="500px">\r
		<ex-form\r
		:label-width="labelWidth + 'px'"\r
		:label-align="labelAlign"\r
		:input-align="inputAlign">\r
			<ex-form-item label="文本录入">\r
				<ex-input v-model="formData.input" placeholder="input" />\r
			</ex-form-item>\r
			<ex-form-item label="文本录入">\r
				<ex-input v-model="formData.textarea" placeholder="textarea" type="textarea" />\r
			</ex-form-item>\r
			<ex-form-item label="开关">\r
				<ex-switch v-model="formData.switch" text-on="switch on" text-off="switch off" />\r
			</ex-form-item>\r
			<ex-form-item input-align="end">\r
				<ex-flex>\r
					<ex-button type.attr="submit" type="primary">submit</ex-button>\r
				</ex-flex>\r
			</ex-form-item>\r
		</ex-form>\r
	</ex-flex>\r
	<ex-flex width="500px" vertical>\r
		<ex-flex width="240px">\r
			<span>label-width</span>\r
			<ex-number v-model="labelWidth" size="smaller" suffix="px" content-style="width: 150px" auto-fit controller />\r
		</ex-flex>\r
		<ex-flex>\r
			label-align\r
			<ex-radio-group v-model="labelAlign" name="label-align">\r
				<ex-flex>\r
					<ex-radio value="start">start</ex-radio>\r
					<ex-radio value="center">center</ex-radio>\r
					<ex-radio value="end">end</ex-radio>\r
					<ex-radio value="">undefined</ex-radio>\r
				</ex-flex>\r
			</ex-radio-group>\r
		</ex-flex>\r
		<ex-flex>\r
			input-align\r
			<ex-radio-group v-model="inputAlign" name="input-align">\r
				<ex-flex>\r
					<ex-radio value="start">start</ex-radio>\r
					<ex-radio value="center">center</ex-radio>\r
					<ex-radio value="end">end</ex-radio>\r
					<ex-radio value="">undefined</ex-radio>\r
				</ex-flex>\r
			</ex-radio-group>\r
		</ex-flex>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive, ref } from 'vue'\r
\r
interface TFormData {\r
	input?: string,\r
	textarea?: string,\r
	switch?: boolean\r
}\r
\r
const formData = reactive<TFormData>({})\r
\r
const labelWidth = ref(80)\r
const labelAlign = ref('end')\r
const inputAlign = ref('')\r
<\/script>`;export{t as default};
