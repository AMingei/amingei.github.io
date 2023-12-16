const t=`<template>\r
	<ex-flex>\r
		<ex-tag editable\r
		@insert="onInsert"></ex-tag>\r
	</ex-flex>\r
</template>\r
\r
<script lang="ts" setup>\r
function onInsert(val: string) {\r
	alert(val)\r
}\r
<\/script>`;export{t as default};
