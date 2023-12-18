const t=`import { defineConfig } from 'vite'\r
import AutoImport from 'unplugin-auto-import/vite'\r
import Components from 'unplugin-vue-components/vite'\r
\r
export default defineConfig({\r
	plugins: [\r
		AutoImport({\r
			imports: [\r
				'vue',\r
				{\r
					'ex-ui': [ 'useMessage', 'useConfirm' ]\r
				}\r
			]\r
		}),\r
  	Components({\r
			resolvers: [\r
				(componentName) => {\r
					if (componentName.startsWith('Ex')) {\r
						return { name: componentName, from: 'ex-ui' }\r
					}\r
				}\r
			]\r
		})\r
  ]\r
})`;export{t as default};
