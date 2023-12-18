const p=`import { createApp } from 'vue'\r
import ex from 'ex-ui'\r
import 'ex-ui/dist/style.css'\r
import App from './App.vue'\r
\r
const app = createApp(App)\r
\r
app.use(ex, {\r
	   zIndex: 999,\r
	   fontFamily: "consolas, '宋体'"\r
	 })\r
   .mount('#app')`;export{p as default};
