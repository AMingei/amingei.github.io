const t=`<template>\r
	<ex-flex width="500px">\r
		<ex-form label-width="11rem" :vertify="formRule" @submit="submit">\r
			<ex-form-item label="不得写入 'root'" path="input">\r
				<ex-input v-model="formData.input" placeholder="input" />\r
			</ex-form-item>\r
			<ex-form-item label="输入密码" path="password">\r
				<ex-input v-model="formData.password" placeholder="password" type="password" resetable />\r
			</ex-form-item>\r
			<ex-form-item label="重复确认密码" path="repeat">\r
				<ex-input v-model="formData.repeat" placeholder="password" type="password" resetable />\r
			</ex-form-item>\r
			<ex-form-item label="限定 'Hi, xxx!' 格式" path="textarea">\r
				<ex-input v-model="formData.textarea" placeholder="textarea" type="textarea" />\r
			</ex-form-item>\r
			<ex-form-item input-align="end">\r
				<ex-flex>\r
					<ex-button .type="'submit'">submit</ex-button>\r
				</ex-flex>\r
			</ex-form-item>\r
		</ex-form>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { reactive } from 'vue'\r
\r
interface FormData {\r
	input?: string,\r
	password?: string,\r
	textarea?: string,\r
	repeat?: string\r
}\r
\r
const formData = reactive<FormData>({\r
	input: undefined,\r
	password: undefined,\r
	repeat: undefined,\r
	textarea: undefined\r
})\r
\r
const formRule = reactive({\r
	input: [{\r
		custom: (value: any) => {\r
			if(!value) {\r
				throw new Error('it\\'s empty!')\r
			} else if(value === 'root') {\r
				throw new Error('\\'root\\' is disabled!')\r
			}\r
			return true\r
		}, listener: ['input', 'focusout']\r
	}],\r
	password: [{ required: true, message: 'it\\'s required!', listener: 'focusout' }],\r
	repeat: [{\r
		custom: (value: any) => {\r
			if(!value || value.trim() === '' || value !== formData.password) {\r
				throw new Error('Different from the last time what you input!')\r
			}\r
			return true\r
		}, listener: 'focusout' }],\r
	textarea: [{ pattern: /^Hi,\\s[\\w]+!$/g, message: 'it must be format with \\'Hi, XXX!\\'!', listener: 'focusout' }]\r
})\r
\r
function submit(passed: boolean) {\r
	if(passed) {\r
		console.log('submit')\r
	} else {\r
		console.log('fail')\r
	}\r
}\r
<\/script>`;export{t as default};
