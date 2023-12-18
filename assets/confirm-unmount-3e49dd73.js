const n=`// 获得操作函数的引用（并非该组件实例的引用）\r
const messageRef = message(string)\r
\r
// 将触发 \`onConfirm\` 事件，并继续卸载\r
messageRef.confirm()\r
// 将触发 \`onCancel\` 事件，并继续卸载\r
messageRef.cancel()\r
// 使用 unmount 方法直接卸载，将直接触发 \`onHide\` 事件\r
messageRef.unmount()`;export{n as default};
