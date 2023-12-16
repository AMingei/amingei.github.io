const t=`<template>\r
	<ex-flex>\r
		<ex-card width="320px" height="330px" :innerStyle="{ textIndent: '2em' }">\r
			<template #banner>\r
				<img src="./card-example.png" alt="第一集：桃园三结义" />\r
			</template>\r
			<template #header>第一回&ensp;宴桃园豪杰三结义 斩黄巾英雄首立功</template>\r
			<template #option>\r
				<a href="javascript: void(0)" style="color: var(--x-text-color--link);">分享</a>\r
			</template>\r
			话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉……\r
		</ex-card>\r
		<ex-card width="320px" height="330px" :bannerStyle="{ height: '198.2px' }">\r
			<template #banner>#banner</template>\r
			<template #header>#header</template>\r
			<template #option>#option</template>\r
			#default\r
		</ex-card>\r
	</ex-flex>\r
</template>`;export{t as default};
