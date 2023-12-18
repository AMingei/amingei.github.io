const n=`type TData = {\r
	thead?: symbol[] | THCell[] | THRow[],\r
	tbody?: TBRow[],\r
	tfoot?: TFRow[]\r
}\r
\r
type TKey = number | string | symbol\r
type TCid = symbol\r
type TLabel = number | string | VNode\r
\r
type THCell = {\r
	id: TCid,\r
	key?: TKey,\r
	label?: TLabel,\r
	isRawHead?: boolean,\r
	isSortable?: boolean,\r
	isSticky?: boolean,\r
	width?: string,\r
	tooltip?: boolean | string,\r
	summary?: 'max' | 'min' | 'sum' | 'ave' | 'cnt'\r
}\r
\r
type THCellEx = Omit<THCell, 'id'> & {\r
	id?: TCid,\r
	order?: number,\r
	rowspan?: number,\r
	colspan?: number\r
}\r
\r
type TCell = {\r
	key?: TKey,\r
	label?: TLabel,\r
	rowspan?: number,\r
	colspan?: number,\r
	tooltip?: boolean | string\r
}\r
\r
type TRow = {\r
	key?: TKey,\r
	[propName: TCid]: TLabel | TCell\r
}\r
\r
type THRow = Omit<TRow, TCid> & { [propName: TCid]: TLabel | THCellEx }\r
type TBRow = TRow & { dataset: any }\r
type TFRow = TRow & { dataset: any }\r
\r
type TFilterItem = {\r
	[propName: TCid]: TLabel | undefined,\r
	dataset?: any\r
}\r
\r
type TFilterFunc = (a: TFilterItem) => boolean\r
\r
type TSortItem = {\r
	[propName: TCid]: TLabel | undefined,\r
	dataset?: any\r
}\r
\r
type TSortFunc = (a: TSortItem, b: TSortItem) => boolean`;export{n as default};
