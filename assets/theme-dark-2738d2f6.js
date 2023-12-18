const e=`import { createApp, ref, readonly } from 'vue'\r
import ex from 'ex-ui'\r
import 'ex-ui/dist/style.css'\r
import App from './App.vue'\r
\r
const app = createApp(App)\r
\r
app.use(ex)\r
   .mount('#app')\r
\r
\r
\r
type TThemeState = 'dark' | 'light'\r
\r
const themeState = ref<TThemeState | null>(null)\r
\r
app.config.globalProperties.themeState = readonly(themeState)\r
\r
const toggleTheme = (isDark: boolean = document.documentElement.classList.contains('dark')) => {\r
	document.documentElement.classList.toggle('dark')\r
	themeState.value = isDark ? 'light' : 'dark'\r
	// 如果你有其他通过 <link> 导入的外部样式表，\r
	// 可以通过在上面的 data-theme="dark" 来指明它是亮色／暗色样式\r
	;(document.querySelector(\`link[data-theme=dark]\`) as HTMLLinkElement).disabled = isDark\r
\r
	localStorage.setItem('theme-color', themeState.value)\r
}\r
\r
app.config.globalProperties.toggleTheme = toggleTheme\r
\r
app.config.globalProperties.initTheme = () => {\r
	themeState.value = localStorage.getItem('theme-color') as TThemeState\r
	const isDark = document.documentElement.classList.contains('dark')\r
\r
	if(themeState.value === null) {\r
		// 当本地 localStorage 不存在 themeState 时，\r
		// 根据浏览器主题色进行初始化\r
		if(matchMedia('(prefers-color-scheme: light)').matches && isDark\r
		|| matchMedia('(prefers-color-scheme: dark)').matches && !isDark) {\r
			toggleTheme(isDark)\r
		} else {\r
			(document.querySelector(\`link[data-theme=dark]\`) as HTMLLinkElement).disabled = !isDark\r
		}\r
	} else {\r
		// 否则根据本地数据仅从初始化\r
		if(themeState.value === 'light' && isDark\r
		|| themeState.value === 'dark' && !isDark) {\r
			toggleTheme(isDark)\r
		} else {\r
			(document.querySelector(\`link[data-theme=dark]\`) as HTMLLinkElement).disabled = !isDark\r
		}\r
	}\r
}`;export{e as default};
