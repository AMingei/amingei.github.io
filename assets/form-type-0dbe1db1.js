const e=`type FormRules = Record<string, FormRule | FormItemRules>\r
\r
type FormRule = Record<string, FormItemRules>\r
\r
type FormItemRules = FormItemRule[]\r
\r
type FormItemRule =\r
	{ listener: string | string[] }\r
	&\r
	({ custom: (value: any) => boolean } | { pattern: RegExp, message?: string } | { required: boolean, message?: string })`;export{e as default};
