const t=`<template>\r
	<ex-flex>\r
		<ex-card width="320px" height="345px" :content-style="{ textIndent: '2em' }">\r
			<template #header>第一回<br />宴桃园豪杰三结义 斩黄巾英雄首立功</template>\r
			<template #option>\r
				<a href="javascript: void(0)" style="color: var(--x-text-color--link);">分享</a>\r
			</template>\r
			话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉。汉朝自高祖斩白蛇而起义，一统天下，后来光武中兴，传至献帝，遂分为三国。推其致乱之由，殆始于桓、灵二帝。桓帝禁锢善类，崇信宦官。及桓帝崩，灵帝即位，大将军窦武、太傅陈蕃，共相辅佐。时有宦官曹节等弄权，窦武、陈蕃谋诛之，机事不密，反为所害，中涓自此愈横。\r
			<template #footer>\r
				<a href="javascript: void(0)" style="color: var(--x-text-color--link);">查看更多……</a>\r
			</template>\r
		</ex-card>\r
		<ex-card width="320px" height="345px">\r
			<template #header>#header<br />&ensp;</template>\r
			<template #option>#option</template>\r
			#default\r
			<template #footer>#footer</template>\r
		</ex-card>\r
	</ex-flex>\r
</template>`;export{t as default};
