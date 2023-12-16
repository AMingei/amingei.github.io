const t=`<template>\r
	<ex-flex vertical>\r
		<ex-flex>\r
			<ex-button type="primary" @click="() => input.focus()">focus</ex-button>\r
			<ex-button type="primary" @click="() => input.focusout()" tabindex="-1" @mousedown.prevent @keydown.prevent>focusout</ex-button>\r
			<ex-button type="primary" @click="() => input.reset()">reset</ex-button>\r
			<ex-button type="primary" @click="() => input.select()">select</ex-button>\r
			<ex-button type="primary" @click="() => input.select(0, 10)">select: 0 ~ 10</ex-button>\r
			<ex-button type="primary" @click="() => input.scrollTo(100)">scrollTo: 100</ex-button>\r
			<ex-button type="primary" @click="() => input.scrollBy(100)">scrollBy: 100</ex-button>\r
		</ex-flex>\r
		<ex-input ref="input" :value="text" />\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
\r
const input = ref()\r
const text = '赵钱孙李 周吴郑王 冯陈褚卫 蒋沈韩杨 朱秦尤许 何吕施张 孔曹严华 金魏陶姜 戚谢邹喻 柏水窦章 云苏潘葛 奚范彭郎 鲁韦昌马 苗凤花方 俞任袁柳 酆鲍史唐'\r
<\/script>`;export{t as default};
