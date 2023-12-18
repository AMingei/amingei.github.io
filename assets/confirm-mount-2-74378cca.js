const n=`import { ConfirmType } from 'ex-ui'\r
\r
// 使用 options 指定渲染选项\r
let options = {\r
	/* 指定 Message 类型\r
	 * 参数类型：string | Ref<string>\r
	 * 默认参数：ConfirmType.default\r
	 * 可选参数：\r
	 *   ConfirmType.default\r
	 *   ConfirmType.primary\r
	 *   ConfirmType.success\r
	 *   ConfirmType.warning\r
	 *   ConfirmType.error\r
	 */\r
	type,\r
	/* 指定显示标题部分\r
	 * 参数类型：string | Ref<string>\r
	 */\r
	title,\r
	/* 指定显示内容部分\r
	 * 参数类型：string | Ref<string>\r
	 */\r
	text,\r
	/* 指定确认按钮显示的文本内容\r
	 * 参数类型：string | Ref<string>\r
	 * 默认参数：Confirm\r
	 */\r
	confirmButton,\r
	/* 启用取消按钮和关闭按钮，指定取消按钮显示的文本内容\r
	 * 参数类型：string | Ref<string>\r
	 */\r
	cancelButton,\r
	/* 是否显示图标\r
	 * 参数类型：boolean\r
	 * 默认参数：true\r
	 */\r
	hasIcon, \r
	/* 指定自定义图标\r
	 * 参数类型：VNode\r
	 */\r
	icon,\r
	/* 指定绑定 Transition.name \r
	 * 参数类型：string\r
	 * 默认参数：ex-message\r
	 */\r
	transitionName,\r
	/* 指定渲染时触发的回调函数\r
	 */\r
	onShow,\r
	/* 指定卸载时触发的回调函数\r
	 */\r
	onHide,\r
	/* 指定确认时触发的回调函数，发生在 onHide 前\r
	 */\r
	onConfirm,\r
	/* 指定取消时触发的回调函数，发生在 onHide 前\r
	 * 取消按钮蛤关闭按钮都会触发 onCancel\r
	 */\r
	onCancel,\r
	/* 指定点击遮罩时触发的回调函数\r
	 */\r
	onMaskClick,\r
	/* 指定按下 \`Esc\` 时触发的回调函数\r
	 * 注意：将被 \`keyup\` 事件触发，而非 \`keypress\` 事件\r
	 */\r
	onEscPress\r
}\r
\r
// 渲染\r
message(options)`;export{n as default};
