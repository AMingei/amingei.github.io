const n=`type THRow = {\r
	key?:             symbol,\r
	[propName: TCid]: TLabel | THCellEx\r
}\r
\r
type THCellEx = Omit<THCell, 'id'> & {\r
	id?:      symbol,\r
	order?:   number,\r
	rowspan?: number,\r
	colspan?: number\r
}\r
\r
type THCell = {\r
	id: TCid,\r
	key?: TKey,\r
	label?: TLabel,\r
	isRawHead?: boolean,\r
	isSticky?: boolean,\r
	width?: string,\r
	...\r
}`;export{n as default};
