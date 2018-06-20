var topic=[
	"尚未開學",
	"國定假日",
	"環境準備",
	"隨機性",
	"重複性",
	"拉拉拉拉拉拉",
	"呵呵呵呵呵呵",
	"sdfjsdlkjflksdjfl",
	"耶",
	"yeeeeeeeeee",
	"要",
	"放",
	"假",
	"了",
	"1",
	"2",
	"3",
	"4",
	"5"
];

var startDate = new Date();

function setmonthandday(startmonth, startday)
{
	startDate.setMonth(startmonth-1);
	startDate.setDate(startday);
	startDate.setHours(0);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
}

setmonthandday(2,21);
