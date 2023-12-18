const t=`type TBRow = TRow & { dataset: any }\r
type TFRow = TRow & { dataset: any }\r
\r
type TRow = {\r
	key?:               symbol,\r
	[propName: symbol]: TLabel | TCell\r
}`;export{t as default};
