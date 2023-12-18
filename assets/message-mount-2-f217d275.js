const n=`import { MessageType } from 'ex-ui'\r
\r
// 使用 options 指定渲染选项\r
let options = {\r
	/* 指定 Message 类型\r
	 * 参数类型：string | Ref<string>\r
	 * 默认参数：MessageType.default\r
	 * 可选参数：\r
	 *   MessageType.default\r
	 *   MessageType.primary\r
	 *   MessageType.success\r
	 *   MessageType.warning\r
	 *   MessageType.error\r
	 */\r
	type,\r
	/* 指定显示内容\r
	 * 参数类型：string | Ref<string>\r
	 */\r
	text,\r
	/* 指定持续时间\r
	 * 参数类型：number\r
	 * 默认参数：3000\r
	 */\r
	duration,\r
	/* 是否显示图标\r
	 * 参数类型：boolean\r
	 * 默认参数：true\r
	 */\r
	hasIcon, \r
	/* 指定自定义图标\r
	 * 参数类型：VNode\r
	 */\r
	icon,\r
	/* 是否在鼠标光标悬浮时停止卸载计时\r
	 * 参数类型：boolean\r
	 */\r
	canBeHover,\r
	/* 是否使用 Message 内部的关闭按钮\r
	 * 参数类型：boolean\r
	 */\r
	closable,\r
	/* 指定绑定 Transition.name \r
	 * 参数类型：string\r
	 * 默认参数：ex-message\r
	 */\r
	transitionName,\r
	/* 指定最小创建间隔，需要搭配 Transition 使用，\r
	 * 不得小与 Transition 动画的时长\r
	 * 参数类型：number\r
	 * 默认参数：200\r
	 */\r
	timeslot,\r
	/* 指定渲染时触发的回调函数\r
	 */\r
	onShow,\r
	/* 指定卸载时触发的回调函数\r
	 */\r
	onHide\r
}\r
\r
// 渲染\r
message(options)`;export{n as default};
