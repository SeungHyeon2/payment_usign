/**
	readonly input box 일관 색 변환
	body.onload = setInputReadOnly;

*/

function setInputColor(form, required){

	var el = form.elements;

	if(el == null)
		return;

	for(var eln=0; eln < el.length; eln++){

		if(el[eln].getAttribute == undefined)
			continue;

		if(el[eln].getAttribute("DISABLED") != null && el[eln].disabled == true)
			el[eln].style.backgroundColor = "#F1F3F3";
		else if(el[eln].getAttribute("READONLY"))
			el[eln].style.backgroundColor = "#FFFFE6";


		if(required == true && el[eln].getAttribute("REQUIRED") != null){

			var in_TD = el[eln].parentNode;
			var in_TDS = in_TD.parentNode.childNodes;

			for(var n=0; n < in_TDS.length; n++){

				if(in_TDS[n] == in_TD && in_TDS[n-1].innerHTML.indexOf("<FONT color=red>*</FONT>") < 0){

					in_TDS[n-1].innerHTML = "<FONT color='red'>*</FONT> "+ in_TDS[n-1].innerHTML;
					break;
				}
			}
		}
	}
}

function bluring(){

	if(event.srcElement.tagName=="A" || event.srcElement.tagName=="IMG")
			document.body.focus();
}
//document.onfocusin=bluring;

//document 안에서 name이나 id중에서 object 를 찾는다
//찾으려는 object의 name이나 id를 인자로 넘긴다
function jsGetAll(name, doc)
{

	if(doc)
		return doc.getElementsByName(name);

	return document.getElementsByName(name);
}

//document 안에서 이름으로 Form을 찾는다
//찾으려는 Form 의 이름을 인자로 넘긴다
function jsFindFrm(name, rdoc)
{
	var docu = document;

	if(rdoc != null && rdoc != undefined)
		docu = rdoc;
	return docu.forms[name];
}

//매개 변수로 넘어온 폼 안에서 하위 객체를 이름으로 찾는다.
function jsFindItem(frm, aname)
{
	return frm.getAttribute(aname)
}

//document 안에서 id가 부여된 테그나 객체를 id로 찾는다
function jsFindId(id, rdoc)
{
	var docu = document;

	if(rdoc != null && rdoc != undefined)
		docu = rdoc

	return docu.getElementById(id);
}

//form 안에서 자신의 전후 object를 찾는다
//호출하는 object자신과 전후 이동할 값을 숫자로 입력 바로전 객체를 찾을때는 -1 바로다음 객체는 1 을 입력
function jsFindObj(obj,nop)
{
	var frm = obj.form

	if(obj.form == null || obj.form == undefined)
		return null;

	for(ct=0; ct < frm.elements.length; ct++)
	{
		if(frm.elements[ct] == obj && (ct + nop) < frm.elements.length)
			return frm.elements[ct+nop]
	}

	return null
}


//form 에서 자신의 index를 구할때 사용
function jsFindIndex(obj)
{
	var frm = obj.form

	for(var ct=0; ct < frm.elements.length; ct++)
	{
		if(frm.elements[ct] == obj)
			return ct;
	}

	return -1
}

//document 에서 자신의 index를 구할때 사용
function jsAllFindIndex(obj,pos)
{

	for(var ct=0; ct < document.all.length; ct++)
	{
		if(document.all[ct] == obj)
			return ct
	}

	return -1
}

var jsDateSelect = new Array();
var jsTimeSelect = new Array();

//실제로 select를 구현할때 쓰이는 함수이다

//처음에 년,월,일 select 를 생성  인자값은 년의 이름, 달의 이름, 일의 이름, 합쳐질 hidden 값의 이름을 받는다
//ndate는 년월일시간을 합쳐서 다음 페이지로 넘길때 사용할 폼이름이다
//nyear, nmonth는 반드시 인자값으로 넘겨주어야 한며, nday 는 선택이다
//size 에는 해당하는 font-size를 정의할 수 있다.
// ex) jsMakeDates("nyear","nmonht","nday","ndate","12px","2003","11","03")
//		jsMakeDates("nyear","nmonht","nday","ndate","12px","2003-11-03")

function jsMakeDates(nyear,nmonth,nday,ndate,size,dyear,dmonth,dday)
{

	if(jsIsNS(dyear) && jsIsNS(dmonth))
	{
		dyear = jsGetToday("year");
		dmonth = jsGetToday("month");
		dday = jsGetToday("day");
	}
	else{

		var pattern = /([0-9]{4})[\/-]?([0-9]{2})[\/-]?([0-9]{2})/;
		pattern.exec(dyear);

		dyear = RegExp.$1;
		dmonth = RegExp.$2;
		dday = RegExp.$3;
	}

	new jsMakeDateBase(nyear,nmonth,nday,ndate,size,dyear,dmonth,dday);
}

function jsMakeDateBase(nyear,nmonth,nday,ndate,size,dyear,dmonth,dday)
{
	var len = jsDateSelect.length;

	jsDateSelect[len] = this;

	if(jsIsNS(nyear) || jsIsNS(nmonth) )//|| jsIsNS(nday))
	{
		document.write("설정이 잘못되어 날짜 Select 그룹이 생성 되지 않았습니다.");
		return;
	}

	if(jsIsNS(size))
		size="12px";

	document.write("<font style='font-size:"+size+";'>");

	document.write("<select id='"+nyear+"' name='"+nyear+"' onchange='jsOnChangeDate("+len+");window.focus();' style='font:"+ size +";'></select>년 ");
	this.year = jsFindId(nyear);


	if(nmonth != null){

		document.write("<select id='"+nmonth+"' name='"+nmonth+"' onchange='jsOnChangeDate("+len+");window.focus();' style='font:"+ size +";'></select>월 ");
		this.month = jsFindId(nmonth);
	}

	if(nday != null){

		document.write("<select id='"+nday+"' name='"+nday+"' onchange='jsOnChangeDate("+len+");window.focus();' style='font:"+ size +";'></select>일");
		this.day = jsFindId(nday);
	}

	if(ndate != null){

		document.write("<input type=hidden id='"+ndate+"' index='" + len + "' name='"+ndate+"'>");
		this.date = jsFindId(ndate);
		this.date.form.onreset = Function("","jsMkDay(jsDateSelect["+ len +"].day,"+ dyear +","+ dmonth +","+ dday +",true)");
	}

	jsSetDatesDefault(len, dyear, dmonth, dday);

	document.write("</font>");
}

function jsSetDatesDefault(date_idx, sdyear, sdmonth, sdday)
{
	var dateAry = new Array();

	if(jsIsNS(sdyear))
	{
		sdyear = jsGetToday("year");
		sdmonth = jsGetToday("month");
		sdday = jsGetToday("day");
	}
	else if(!jsIsNS(sdyear) && jsIsNS(sdmonth)){

		var pattern = /([0-9]{4})[\/-]?([0-9]{2})[\/-]?([0-9]{2})/;
		pattern.exec(sdyear);

		sdyear = RegExp.$1;
		sdmonth = RegExp.$2;
		sdday = RegExp.$3;
	}
	if(jsDateSelect[date_idx].year != undefined)
		jsMakeOption(jsDateSelect[date_idx].year,1900,2100,sdyear, true);

	if(jsDateSelect[date_idx].month != undefined)
		jsMakeOption(jsDateSelect[date_idx].month,1,12,sdmonth, true);

	if(jsDateSelect[date_idx].day != undefined)
		jsMkDay(jsDateSelect[date_idx].day, sdyear, sdmonth, sdday, true);

	if(jsDateSelect[date_idx].date != undefined){

		jsDateSelect[date_idx].date.defaultValue = sdyear +""+ sdmonth +""+ sdday;
		jsDateSelect[date_idx].date.value = sdyear +""+ sdmonth +""+ sdday;
	}

}

//생성된 날짜들의 기본 값을 설정한다.
//ndate는 date를 설정한 hidden date의 이름, val은 2000-11-01 형식의 날짜 값을 입력
function jsSetDefDate(ndate, val)
{

	for(var idx=0; idx < jsDateSelect.length; idx++)
	{
		if(jsDateSelect[idx].date.name == ndate)
		{
			d_idx = idx;
			break;
		}
	}

	jsSetDatesDefault(d_idx, val);
}
/**
	jsMakeDates()를 사용하여 생성된 날짜 그룹을 disabled 설정한다.
	year : 생성된 hidden date의 이름
	flag : disabled의 값
 */
function jsDateDisabled(year, flag)
{
	for(var n=0; n < jsDateSelect.length; n++)
	{
		if(jsDateSelect[n].year.name != year)
			continue;

		jsDateSelect[n].year.disabled = flag;
		jsDateSelect[n].month.disabled = flag;

		if(jsDateSelect[n].day != undefined)
			jsDateSelect[n].day.disabled = flag;

		if(jsDateSelect[n].date != undefined)
			jsDateSelect[n].date.disabled = flag;
	}
}

//실제로 select를 구현할때 쓰이는 함수이다

//처음에 시, 분 select 를 생성  인자값은 시간의 이름, 분의 이름 합쳐질 hidden 값의 이름을 받는다
//nTimes는 시분을 합쳐진 내용이 있다.
//nTime, nMinute는 반드시 인자값으로 넘겨주어야 한다.
//size 에는 해당하는 font-size를 정의할 수 있다.
// ex) jsMakeTimes("nTime","nMinute","nTimes","12px", "01", "22")
//		jsMakeTimes("nTime","nMinute","nTimes","12px", "01:22")

function jsMakeTimes(nTime,nMinute,nTimes,size, dtime, dminute)
{
	new jsMakeTimeBase(nTime,nMinute,nTimes,size,dtime,dminute);
}

function jsMakeTimeBase(nclock,nminute,ntime,size,dclock,dminute)
{
	var len = jsTimeSelect.length;

	jsTimeSelect[len] = this;

	if(nclock == null || nminute == null || nclock == "" || nminute == "")
	{
		document.write("설정이 잘못되어 시간 Select 그룹이 생성 되지 않았습니다.");
		return;
	}

	if(size==null || size=="")
		size="12px"
	document.write("<font style='font-size:"+size+"'>");
	document.write("<select id='"+nclock+"' name='"+nclock+"' onchange='jsOnChangeTime("+len+");window.focus();' style='font:"+ size +";'></select>시 ");
	document.write("<select id='"+nminute+"' name='"+nminute+"' onchange='jsOnChangeTime("+len+");window.focus();' style='font:"+ size +";'></select>분 ");
	document.write("<input type=hidden id='"+ntime+"' name='"+ntime+"'>");
	document.write("</font>");

	this.clock = jsFindId(nclock);
	this.minute = jsFindId(nminute);
	this.time = jsFindId(ntime);

	jsSetTimesDefault(len, dclock, dminute);
}

function jsSetTimesDefault(time_idx, clock, minute)
{
	var timeAry = new Array();

	if(clock == undefined || clock == null || jsTrim(clock.toString()).length == 0)
	{
		clock = "00";
		minute = "00";
	}
	else if(clock.toString().indexOf(":") > 0)
	{
		timeAry = clock.toString().jsSplit(":");
		clock = timeAry[0];
		minute = timeAry[1];
	}

	jsMakeOption(jsTimeSelect[time_idx].clock,0,23,clock, true);
	jsMakeOption(jsTimeSelect[time_idx].minute,0,59,minute, true);

	jsTimeSelect[time_idx].time.defaultValue = clock +":"+ minute;
	jsTimeSelect[time_idx].time.value = clock +":"+ minute;
}

//시간변경  select의 값이 바뀌었을때 그달에 해당하는 날짜를 마추어준다
function jsOnChangeDate(idx)
{
	if( jsDateSelect[idx] == undefined || jsDateSelect[idx] == null)
		return;

	var oyear = jsDateSelect[idx].year;
	var omonth = jsDateSelect[idx].month;
	var oday = jsDateSelect[idx].day;

	if(jsDateSelect[idx].day != undefined)
		jsMkDay(oday,oyear.value,omonth.value,oday.value);

	if(jsDateSelect[idx].date != undefined)
		jsDateSelect[idx].date.value = oyear.value +""+ omonth.value +""+ oday.value;
}

//년과 월의  select의 값이 바뀌었을때 그달에 해당하는 날짜를 마추어준다
function jsOnChangeTime(idx)
{
	if(jsTimeSelect[idx] == null || jsTimeSelect[idx] == null)
		return;

	var oclock = jsTimeSelect[idx].clock;
	var ominute = jsTimeSelect[idx].minute;

	jsTimeSelect[idx].time.value = oclock.value +":"+ ominute.value;
}

//윤달과 매월 달라지는 날짜를 makeoption 을 호출해서 생성한다.
function jsMkDay(obj,year,month,day,def)
{
	jsClearSelect(obj)

	month = parseInt(month,10)
	year = parseInt(year,10)

	if(day == null || day == "")
		day = jsGetToday("day")

	jsMakeOption(obj,1,jsLastDay(year,month),day, def)
}


//오늘 날짜를 구한다 인자값은 구하는값이 '년'인지, '월'인지, '일'인지를 인자로 넘긴다
//"y"는 년도, "m"는 월,  "d"는 일,  "a"는 전체값을 리턴받는다
var weekShort = new Array("일", "월", "화", "수", "목", "금", "토");
var weekLong = new Array("일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일");

function jsGetToday(type){
	var today = new Date()
	var year = today.getFullYear()
	var month = today.getMonth()+1
	var day = today.getDate()

	month = jsAddZero(month,2)

	day = jsAddZero(day,2)

	switch(type)
	{
		case "year":
			return year
		case "month":
			return month
		case "day":
			return day
		case "all":
			return year+"-"+month+"-"+day
		case "ALL":
			return year+"년 "+month+"월 "+day+"일"
		case "w":
			return weekShort[today.getDay()];
		case "week":
			return weekLong[today.getDay()];
	}
}


function jsDateToadd(date, type, value){

	var date = jsAddDate(date, type, value);
	
	/(\d+)-(\d+)-(\d+)/.exec(date);
	return new Date(RegExp.$1, RegExp.$2, RegExp.$3);
}

//날짜에 대하여 연산을 한다.
//date는 원래값, type은 연산 하는 것이 년(y),달(m),일(d),전체(date)인지, value는 가감하는 값이다.
function jsAddDate(date, type, value)
{
	var year = parseInt(date.substring(0,4),10);
	var month = parseInt(date.substring(5,7),10);
	var day = parseInt(date.substring(8,10),10);

	var dt = new Array();
	dt[0] = 0;
	dt[1] = 0;
	dt[2] = 0;


	var cnt = 0;

	switch(type)
	{
		case "y":
			type = 0;
			dt[0] = value;
			cnt = 1;
		break;

		case "m":
			type = 1;
			dt[1] = value;
			cnt = 2;
		break;

		case "d":
			type = 2;
			dt[2] = value;
			cnt = 3;
		break;

		case "date":
			type = 3;
			dt[0] = parseInt(value.substring(0,4),10);
			dt[1] = parseInt(value.substring(5,7),10);
			dt[2] = parseInt(value.substring(8,10),10);
			cnt = 4;
		break;
	}

	var end = 0;
	var tmp = 0;

	for(var n=0; n < cnt; n++)
	{

		switch(n)
		{
			case 0:
				year += dt[0];
			break;

			case 1:
				tmp = month + dt[1];

				if(tmp == 0)
				{
					month = 12;
					year -= 1;
				}
				else if(tmp == 12)
				{
					month = tmp;
				}
				else
				{
					month = tmp % 12;

					year += tmp / 12;

					year = parseInt(year,10);

					if(month < 0)
						month = 12 + month;
				}

			break;

			case 2:
				tmp = (day + dt[2]);

				while(true)
				{
					end = jsLastDay(year,month);

					if(tmp > end)
					{
						if(month != 12)
						{
							month += 1;

							tmp -= end;
						}
						else
						{
							year += 1;
							month =  1;

							tmp -= end;
						}
					}
					else if(tmp <= 0)
					{
						if(month != 1)
						{
							month -= 1;
							end = jsLastDay(year,month);

							tmp += end;
						}
						else
						{
							year -= 1;
							month = 12;
							end = jsLastDay(year,month);

							tmp += end;
						}
					}
					else
					{
						break;
					}
				}
				day = tmp;
			break;
		}
	}
	month = jsAddZero(month,2);
	day = jsAddZero(day,2);

	return year + "-" + month + "-" + day;
}

//해당하는 년,달의 마지막 날을 구한다.
function jsLastDay(year,month)
{

	var mon = parseInt(month,10);
	switch(mon)
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
		break;

		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		break;

		case 2:
			if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
			{
				return 29;
			}
			else
			{
				return 28;
			}
		break;
	}
}


//select의 option을 생성한다. 단, 숫자들로 이루어진 리스트 여야 한다.
//인자로는 호출하는 select , 시작값, 끝나는값, 처음 선택될 값을 넘겨준다.
function jsMakeOption(obj,begin, end, def_val, def)
{
	var end = parseInt(end, 10);
	var begin = parseInt(begin, 10);
	var endct = end - begin;
	var option = obj.options;

	for(var ct=0; ct <= endct; ct++)
	{
		option[ct] = new Option(jsAddZero(ct+begin, 2), jsAddZero(ct+begin, 2));

		if(def_val != null && def_val != undefined && parseInt(def_val,10) == parseInt(ct+begin,10))
		{
			if(def != null && def == true)
				option[ct].defaultSelected = true;

			option[ct].selected = true;
		}
	}
}

//select의 option을 변경한다. option 타입의 array로 변경을 한다.
//obj 변경될 select object, option_array 변경될 option array, def 변경된후 기본으로 설정될 value
//def_idx 변경된 후 기본을 설정될 select의 index
function jsMakeOptions(obj, option_array, def, def_idx)
{

	if(obj != null)
	{

		jsClearSelect(obj);

		if(option_array == null || option_array.length == null){

			obj.add(new Option("",""), 0);
			return;
		}

		var new_len = option_array.length;

		for(var ct=0; ct < new_len; ct++)
		{
			obj.add(new Option(option_array[ct].text, option_array[ct].value), ct);
		}

		var option = obj.options;

		if(!jsIsNS(def))
		{
			def = jsTrim(def);

			for(var ct=0; ct < new_len; ct++)
			{
				if(option[ct].value == def)
				{
					option[ct].defaultSelected = true;
					option[ct].selected = true;
				}
			}
		}
		else if(!jsIsNS(def_idx) && def_idx < new_len && def_idx >= 0)
		{
			option[def_idx].defaultSelected = true;
			option[def_idx].selected = true;
		}
		else
		{
			option[0].defaultSelected = true;
			option[0].selected = true;
		}
	}
}

//select의 option을 직접 write 한다. 단, 숫자들로 이루어진 리스트 여야 한다.
//인자로는 시작값, 끝나는값, 처음 선택될 값을 넘겨준다.
function jsWriteOption(begin,end,def)
{
	var end = parseInt(end, 10);
	var begin = parseInt(begin, 10);
	var endct = end - begin;

	var tmp = "";

	for(var ct=0; ct <= endct; ct++)
	{
		tmp += "<option value=\""+ jsAddZero(ct+begin, 2) +"\"";

		if(def != null && def != undefined && parseInt(def,10) == parseInt(ct+begin,10))
			tmp += " selected defaultSelected";

		tmp += ">"+ jsAddZero(ct+begin, 2) + "</option>\n";
	}

	document.write(tmp);
}

//select object와 값을 받아 select object의 초기값을 셋팅한다.
//select의 값을 설정은 하고 form.reset()을 했을땐 다른 값으로
//설정이 되게 할때는 def 에 false를 입력하여야 한다.
//그렇지 않을 경우에는 입력받은 값이 default값으로 설정된다.
function jsSetSelect(obj, val, def, index)
{
	if(def == null)
		def = true;

	if(jsIsNull(obj))
		return;

	var option = obj.options;

	if(jsIsNull(option) || jsIsNull(option.length))
		return;

	if(index != null){

		if(def)
			option[index].defaultSelected = true;
		option[index].selected = true;

		return;
	}


	for(ct=0; ct < option.length;ct++)
	{
		option[ct].selected = false;

		if(option[ct].value == val )
		{
			if(def)
				option[ct].defaultSelected = true;
			option[ct].selected = true;
		}
		else if(!isNaN(option[ct].value) && parseInt(option[ct].value,10) == parseInt(val))
		{
			if(def)
				option[ct].defaultSelected = true;
			option[ct].selected = true;
		}
	}
}

//radio group 의 초기값을 받아 radio group의 초기값을 셋팅한다.
function jsSetRadio(obj, val, index, def)
{
	if(jsIsNull(obj))
		return;

	obj = jsToArray(obj);

	if(def == null)
		def = true;

	if(index != null){

		if(def)
			obj[index].defaultChecked = true;
		obj[index].checked = true;

		return;
	}

	var isChecked = false;
	for(ct=0; ct < obj.length;ct++)
	{
		obj[ct].checked = false;

		if(obj[ct].value == val)
		{
			if(def)
				obj[ct].defaultChecked = true;
			obj[ct].checked = true;

			isChecked = true;
		}
		else if(!isNaN(obj[ct].value) && parseInt(obj[ct].value,10) == parseInt(val))
		{
			if(def)
				obj[ct].defaultChecked = true;
			obj[ct].checked = true;

			isChecked = true;
		}
		else{
			if(def)
				obj[ct].defaultChecked = false;
			obj[ct].checked = false;
		}
	}

	if(!isChecked)
		obj[0].checked = true;
}

//select문의 내용을 초기화 한다
function jsClearSelect(obj)
{
	var sel_len = obj.options.length;

	if(sel_len == null)
		return;

	for(var i = 0 ; i < sel_len; i++)
 		obj.remove(0);

}

/**
 * Object 중에서 name이나 id가 같은 Object의 value를 구하여 반환
 */
function jsGetValue(oname){

	if(!oname)
		return "";

	var obj = jsGetAll(oname);

	if(obj.length == 1){
	
		return obj[0].value;
	}
	else{
		
		var retval = new Array();

		for(var n=0; n < obj.length; n++){

			if(obj[n].checked == true)
				retval[retval.length] = obj[n].value;
		}
		
		if(retval.length < 1)
			return "";
		else if(retval.length > 1)
			return retval;
		else
			return retval[0];
	}

	return "";
}

//한자리 숫자의 경우 앞에 '0'을 붙여야 할경우에 사용
//azval은 입력값,  azlen은 '0'을 붙인 문자열의 총길이
function jsAddZero(azval,azlen)
{

	var addzero = ""
	azval = azval.toString()

	if(azlen == null)
		azlen = 1

//	alert("azlen = "+ azlen +"\nazval.length = " + azval.length)
	for(var az=0; az < (azlen - azval.length); az++)
	{
		addzero += "0".toString()
	}

	azval = addzero.toString() + azval.toString()

	return azval.toString()
}

//뭉쳐서 들어온 날짜를 div로 들어온 문자열로 구분하여 준다.
//ex)jsMakeDate(20051122,"-") = 2005-11-22
function jsMakeDate(date,div)
{
	var len = date.length

	if(len == 6)
	{
		date = date.substring(0,2)+ div + date.substring(2,4)+ div + date.substring(4)
	}
	else if(len == 8)
	{
		date = date.substring(0,4)+ div + date.substring(4,6)+ div + date.substring(6)
	}
	return date
}

//넘어온 Object가 null 이거나 undefined 또는 공백, null 문자라면 true를 아니면 false를 리턴한다.
function jsIsNS(obj)
{
	if(jsIsNull(obj))
		return true;

	if(jsIsSpace(obj))
		return true;

	return false;
}

//넘어온 Object가 null 이거나 undefined 면 true를 아니면 false를 리턴한다.
function jsIsNull(obj)
{
	if(obj == null )
		return true;

	if(obj == undefined)
		return true;

	return false;
}

//공백 문자만 있는지 검사한다.
//val로 넘어온 값이 String object가 아니거나, 아무것도 없거나, 공백문자만 있으면 true 를 리턴
function jsIsSpace(val){
	/*
	var re = /^\s*$/g

	if(val.replace == undefined)
		return true;

	var reval = val.replace(re, "")

	if(reval.length == 0)
		return true*/

	return /^\s*$/.test(val);
}

//넘어온 문자열이 한글 인지 아닌지 검사
//한글이 아니면 문자가 있으면 false를 리턴
function jsIsKor(str)
{
//	str = str.replace(/[가-�R]/g, "");

	return /[가-�R]/g.test(str);
}
//넘어온 문자열이 한글이나 영문이 아니면 false를 리턴
function jsIsKorE(val)
{
	str = str.replace(/[가-�R,a-z,A-Z]/g, "");

	if(str.length > 0)
		return false;

	return true;
}

//문자열에 영문이 아닌 문자가 있는지 검사한다.
//val로 넘어온 값에 영문이 아닌 값이 있으면 false 를 리턴
function jsIsAlpha(val)
{
	var re = /[a-z]/gi
	var str = val.replace(re,"")

	if(str.length == 0)
		return true

	return false
}

//문자열에 영문과 숫자가 아닌 문자가 있는지 검사한다.
//val로 넘어온 값에 영문자나 숫자가 아니면 false 를 리턴
function jsIsNumAlpha(val)
{
	var re = /\w/gi
	var str = val.replace(re,"")

	if(str.length == 0)
		return true

	return false
}

//문자열에 숫자와 "-" 가 아닌 문자가 있는지 검사한다. (전화번호나 기타 일렬번호 검사에 사용)
//val로 넘어온 값에 숫자와 "-" 가 아닌 문자가 아니면 false 를 리턴
function jsIsBarNum(val)
{
	var re = /[0-9-]/g
	var str = val.replace(re,"")

	if(str.length == 0)
		return true

	return false
}

//주민번호를 검사한다.
//val1 은 주민번호 앞자리  val2는 주민번호 뒷자리 틀린 주민번호가 들어오면 false 리턴
//또는 val1 하나에 모두 넣고 val2는 null 상태로 두어도 된다.
function jsCheckRegNum(val1, val2)
{
	var tmp = ""

	var reg_num = val1

	if(val2 != null)
	{
		reg_num += val2.toString()
	}

	if(reg_num.length < 13)
		return false

	var digit = 0
	var digset = 2

	for(var n=0; n < (reg_num.length - 1); n++)
	{
		if(digset > 9)
			digset -= 8

		digit += reg_num.charAt(n) * digset

		digset++
	}

	digit = digit % 11
	digit = 11 - digit
	digit = digit % 10

	if(digit != reg_num.charAt(12))
		return false

	return true
}


//쿠키를 설정한다.
//이름, 값, expire는 기한 설정값으로 Date 타입으로 넘겨준다.

//ex) jsSetCookie("test", "13", new Date(2003,11,2), "/tset/test.html")
function jsSetCookie(name, value, expire, path, domain, secure)
{
	expire = expire == null ? "" : "EXPIRES=" + expire.toGMTString() + ";";
	path = path == null ? "" : "PATH=" + path + ";";
	domain = domain == null ? "" : "DOMAIN=" + domain + ";";
	secure = secure == null ? "" : "SECURE=" + secure + ";";

	document.cookie = name + "=" + escape (value) + ";" + expire + path + domain + secure;
}

//저정된 쿠키를 이름으로 찾는다.
//찾는 이름이 없으면 false가 리턴된다.
function jsGetCookie(name)
{
	var cookie = document.cookie
	name += "="
	var begin = cookie.indexOf(name)

	if(begin == -1)
		return false

	begin += name.length
	var end = cookie.indexOf(";",begin)

	if(end == -1)
		end = cookie.length

	return unescape(cookie.substring(begin, end))
}

//새창으로 열 주소와 새창의 크기 스크롤 여부를 파라미터로 넘긴다.
function jsPopUp(url, title, w, h, scl, t, l, menu, tool, stat){

	var ww =""
	var hh = ""
	var scr = ""
	var tt = ""
	var ll = ""
	var mb = ""
	var tb = ""
	var st = ""

	if(url == null || url == "")
		url = "about:blank";

	if(w != null && w != "")
		ww = ",width=" + w

	if(h != null && h != "")
		hh = ",height=" + h

	if(t != null && t != "" && t != "center" )
		tt = ",top=" + t

	if(l != null && l != "")
		ll = ",left=" + l

	if(t == "center"){

		tt = ",top=" + parseInt((screen.height - h) / 3 , 10);
		ll = ",left=" + parseInt((screen.width - w) / 2 , 10);
	}

	if(!jsIsNS(scl))
		scr = ",scrollbars=" + scl;

	if(!jsIsNS(menu))
		mb = ",menubar=" + menu;

	if(!jsIsNS(tool))
		tb = ",toolbar=" + tool;

	if(!jsIsNS(stat))
		st = ",status=" + stat;

	var prop = mb + tb + st + scr + ww + hh + tt + ll
	
	prop = prop.substring(1);

	return window.open(url,jsReplaceAll(title," ","_"),prop)

}

/*
	t_url:오픈 경로, title: window id

	var jsNewPop = new jsPopWin(t_url, title);

	jsNewPop.url = "";
	jsNewPop.title ="";

	jsNewPop.width ="";
	jsNewPop.height = "";
	jsNewPop.top = "";
	jsNewPop.left = "";
	
	jsNewPop.isCenter = false;

	jsNewPop.toolbar = false;
	jsNewPop.location = false;
	jsNewPop.status = false;
	jsNewPop.menubar = false;
	jsNewPop.scrollbars = false;
	jsNewPop.resizable = false;

	var nwin = jsNewPop.open();
*/

var POPUP_ARRAY = new Array();
jsPopWin = function (t_url, ttl){

	this.width ="";
	this.height = "";
	this.top = "";
	this.left = "";
	
	this.isCenter = false;

	this.toolbar = false;
	this.location = false;
	this.status = false;
	this.menubar = false;
	this.scrollbars = false;
	this.resizable = false;

	this.title = ttl;

	if(!ttl){

		var dt = new Date();
		this.title = self.name + dt.getMilliseconds();
	}


	if(jsIsNS(this.title))
		this.title = "_";

	if(jsIsNS(t_url))
		this.url = "about:blank";
	else		
		this.url = t_url;

	/* 생성한 PopUp window 를 open */
	this.open = function (){
		
		var prop = "";

		if(this.isCenter){

			jsSetCenter(this);
		}

		if(this.toolbar == true)
			prop += ",toolbar=yes";
		else
			prop += ",toolbar=no";

		if(this.location == true)
			prop += ",location=yes";
		else
			prop += ",location=no";

		if(this.status == true)
			prop += ",status=yes";
		else
			prop += ",status=no";

		if(this.menubar == true)
			prop += ",menubar=yes";
		else
			prop += ",menubar=no";

		if(this.scrollbars == true)
			prop += ",scrollbars=yes";
		else
			prop += ",scrollbars=no";

		if(this.resizable == true)
			prop += ",resizable=yes";
		else
			prop += ",resizable=no";

		if(!isNaN(this.width))
			prop += ",width=" + this.width;

		if(!isNaN(this.height))
			prop += ",height=" + this.height;

		if(!isNaN(this.top))
			prop += ",top=" + this.top;

		if(!isNaN(this.left))
			prop += ",left=" + this.left;
		
		prop = prop.substring(1);

		var nwin = window.open(this.url,jsReplaceAll(this.title," ","_"),prop)	;
		
		if(POPUP_ARRAY.length > 0){
		
			for(var n=0; n < POPUP_ARRAY.length; n++){

				if(POPUP_ARRAY[n] == nwin){
				
					nwin = window.open(this.url,jsReplaceAll(this.title+"_"+ POPUP_ARRAY.length," ","_"),prop)	;
					break;
				}
			}
		}
		
		POPUP_ARRAY[POPUP_ARRAY.length] = nwin;
		return nwin;
	}
}

/*
* t_url:오픈 경로
*/

jsModal = function (t_url){

	this.ww ="";
	this.hh = "";
	this.tt = "";
	this.ll = "";
	this.sc = "";

	this.url = t_url;

	this.param = window;
	this.properties = "";

	if(this.url == null || jsIsSpace(this.url))
		this.url = "about:blank";

 	/*	w:폭, h:높이, scr: 스크롤유무, l:left, t:top	*/
 	this.setProperties = function (w,h,scr,t,l) {

 		if(scr != null && scr != "")
			this.st = "scroll:"+ scr + ";";

		if(w != null && w != "")
			this.ww = "dialogWidth:" + w +"px;";

		if(h != null && h != "")
			this.hh = "dialogHeight:" + h +"px;";

		if(l != null && l != "")
			this.ll = "dialogLeft:" + l +"px;";

		if(t == "center"){

			this.tt = ",dialogTop=" + parseInt((screen.height - h) / 3 , 10) + "px";
			this.ll = ",dialogLeft=" + parseInt((screen.width - w) / 2 , 10) + "px";
		}
		else if(t != null && t != "")
			this.tt = "dialogTop:" + t +"px;";

 		this.properties = sc + ww + hh + ll + tt;
 	}

	/* ModalDialog 사용시 파라미터를 설정 사용하지 않으면 부모 window를 기본으로 한다. */
	this.setParameter = function (param){

		this.param = param;
	}

	/* 생성한 ModalDialog 을 open */
	this.open = function (){

		return window.showModalDialog(this.url, this.param, this.properties);
	}
}

/*
* url:파일, w:폭, h:높이, scr: 스크롤유무, l:left, t:top
*/
function jsModeless(url,w,h,scr,l,t){

	var ww ="";
	var hh = "";
	var tt = "";
	var ll = "";
	var sc = "";

	if(url == null && jsIsSpace(url))
		url = "about:blank";

	if(scr != null && scr != "")
		st = "scroll:"+ scr + ";";

	if(w != null && w != "")
		ww = "dialogWidth:" + w +"px;";

	if(h != null && h != "")
		hh = "dialogHeight:" + h +"px;";

	if(l != null && l != "")
		ll = "dialogLeft:" + l +"px;";

	if(t == "center"){

		tt = ",dialogTop=" + parseInt((screen.height - h) / 3 , 10) + "px";
		ll = ",dialogLeft=" + parseInt((screen.width - w) / 2 , 10) + "px";
	}
	else if(t != null && t != "")
		tt = "dialogTop:" + t +"px;";

	var prop = sc + ww + hh + ll + tt;

	return window.showModelessDialog(url,window, prop);
}

//입력된 Object의 위치를 화면의 중앙에 오게 한다.
function jsSetCenter(obj){

	var h = obj.height;
	var w = obj.width;

	if(!h && obj.style){

		h = obj.style.height;
		
		if(h.indexOf("px") > -1){

			h = h.substring(0, h.indexOf("px"));
		}
	}
	
	if(!w && obj.style){
		w = obj.style.width;
		
		if(w.indexOf("px") > -1){

			w = w.substring(0, w.indexOf("px"));
		}
	}

	if(!h || !w || isNaN(h) || isNaN(w))
		return;
	
	if(obj.style){
	
		obj.style.top = parseInt((screen.height - parseInt(h, 10)) / 3 , 10);
		obj.style.left = parseInt((screen.width - parseInt(w, 10)) / 2 , 10);
	}
	else{

		obj.top = parseInt((screen.height - parseInt(h, 10)) / 3 , 10);
		obj.left = parseInt((screen.width - parseInt(w, 10)) / 2 , 10);
	}
}

function move(url){
	window.location = url
}

//문자열의 전체 공백을 제거
function jsTrim(src)
{
	return src.replace(/\s/g, "")
}

//문자열의 외쪽에 있는 공백을 제거
function jsLTrim(src)
{
	return src.replace(/^\s+/, "");
}

//문자열의 오른쪽에 있는 공백을 제거
function jsRTrim(src)
{
	return src.replace(/\s+$/, "");
}

//들어온 값에 뒤에서 3번째 부터 3번째마다 "," 를 찍는다
function jsComma(val)
{

	if(val == null || val == undefined)
		return val

	var src = val.toString()
	var len = src.length

	if(len < 4)
		return src

	var start = len % 3

	var res = ""

	res += src.substring(0,start)

	for(var ct = start; ct < len-3; ct++)
	{
		res +=  ","+ src.substring(ct,ct+3)
		ct+=2
	}

	res += ","+ src.substring(len-3, len);

	if(res.charAt(0) == ',')
		res = res.substring(1);

	return res
}

//들어온 값의 , 를 제거하여 리턴
function jsRmComma(val)
{
	return jsReplaceAll(val,",","");

}

//src 원본의 target 로 들어온 값으로 잘라서 배열로 돌려준다.
//len으로 들어온 길이 보다 적다면 공백을 추가하여 길이 만큼의
//문자열 배열을 리턴.
function jsSplit(src, target, len)
{
	var ret = new Array();

	if(src == undefined || jsIsSpace(src)){

		if(len != undefined){

			for(var n = 0; n < len ; n++){
				ret[n] = "";
			}
			return ret;
		}
		else{
			return src;
		}
	}

	if(src.indexOf(target) < 0){

		ret[0] = src;

		for(var n = 1; n < len ; n++){
			ret[n] = "";
		}
		return ret;
	}

	ret = src.split(target);

	for(var n = ret.length; len != null &&  n < len ; n++){
		ret[n] = "";
	}

	return ret;
}


//src 원본의 target 로 들어온 값에 해당하는 문자들은 replace로 들어온 문자로 대체된다
function jsReplaceAll(src, target, replace)
{
	var pos = 0;
	var idx = 0;
	var t_len = target.length;
	var s_len = src.length;

	var ret = "";

	while(true)
	{
		idx = src.indexOf(target, pos);

		if(idx < 0)
			break;

		ret += src.substring(pos, idx);
		ret += replace;

		pos = idx + t_len;
	}

	if(pos < s_len)
		ret += src.substring(pos, s_len);

	return ret;
}

//src 원본의 target 로 들어온 값에 해당하는 문자중 첫번째것만 replace로 들어온 문자로 대체된다
function jsReplaceFirst(src, target, replace)
{
	var idx = 0;
	var warp = target.length;

	idx = src.indexOf(target);

	src = src.substring(0, idx) + replace + src.substring(idx+warp);

	return src;
}

/* 입력된 object를 Array형으로 변환 하여 반환 입력된 object가 Array일 때는 그냥 반환 */
function jsToArray(obj){

	if(!jsIsNull(obj) && obj.length == undefined){

		var ret = new Array();
		ret[0] = obj;
		return ret;
	}
	else
		return obj;
}

/*전체 checkbox의 checked 값을 받는다 , ones는 부속 checkbox */
function jsAllCheck(ones,val){

	ones = jsToArray(ones);

	for(var n=0; n < ones.length; n++)
		ones[n].checked = val;
}

/* all은 전체선택 checkbox, one은 부속 checkbox */
function jsOneCheck(all, one)
{
	var flag = true;
	one = jsToArray(one);

	for(var n=0; n < one.length; n++){

		flag = one[n].checked;

		if(!flag)
			break;
	}

	all.checked = flag
}

//여러 체크 박스나 라디오 버튼중에 선택된것이 있는지를 반환 
//null을 반환 하면 선택 된것이 없고, 선택된것이 있다면 선택된 값들의 배열을 반환
function jsIsChecked(name){

	var objs = jsGetAll(name);

	var rets = new Array();

	for(var n=0; n < objs.length; n++){
	
		if(objs[n].checked == true)
			rets[rets.length] = objs[n];
	}

	return rets.length == 0 ? null : rets;
}

/**
 * 입력된 p_node 의 하위 Object로 입력된 tag에 해당하는 element가 생성된다
 * ex) fs_CreateEL(document.body, '<input type="text" value="&quot;ddd&quot;ddd&quot;ddd&quot;">');
 */
function fs_CreateEL(p_node, tag, i_node){

	var el = document.createElement(tag);

	if(i_node != null)
		p_node.insertBefore(el, i_node);
	else
		p_node.insertBefore(el);

	return el;
}

/**
 * 입력한 object를 사용중지 시킨다.
 */
function jsObjOff(obj){

	if(obj == null || obj.style == null)
		return;

	obj.style.display = "none";
	obj.disabled = true;
}

/**
 * 입력한 object를 사용중지를 해제한다
 */
function jsObjOn(obj){

	if(obj == null || obj.style == null)
		return;

	obj.style.display = "";
	obj.disabled = false;
}

// 입력한 폼의 하위 elements를 삭제
function jsFormClear(form){

	form.innerHTML = "";
}

// 입력한 폼의 하위 elements를 추가 (select, textarea 등과 같이 INPUT tag가 아닌 것은 제외)
function jsFormAddAttribute(form, type, name, value){

	if(jsIsNS(type))
		type = "hidden";

	form.innerHTML += "<input type='"+ type +"' name='"+ name +"'>";

	var el = form.elements;
	el[(el.length - 1)].value = value;
}

//form 객체를 생성하고 hidden 객체의 생성 숫자를 넘겨준다
function jsInitForm(cnt,name)
{
	if(name == null)
	{
		name="gogogogogogogo"
	}

	if(cnt < 2)
		cnt = 2

	document.write("<form name='"+name+"'>")

	for(ct=0; ct< cnt;ct++)
	{
		document.write("<input type='hidden' disabled>")
	}

	document.write("</form>")
}

//이동할 url과 , 파라미터를 입력
//param은 "x=2,y=3,z=5" 같이 입력 하여야한다.
function jsFormSubmit(url,param,target,fname)
{
	var frm = null

	if(fname != null && fname != "")
		frm = jsFindFrm(fname)
	else
		frm = document.gogogogogogogo

	frm.method="post"
	frm.action = url

	if(target != null && target != "")
		frm.target = target

	for(var ct=0; ct < frm.length; ct++)
	{
		frm.elements[ct].disabled = true
	}

	if(!jsIsNS(param))
	{
		params = param.split(",")

		if(params.length > frm.length)
		{
			alert("가상 form 파라미터 수 설정이 잘못 되었습니다.");
			return;
		}

		for(ct=0; ct < params.length; ct++)
		{
			pm = params[ct].split("=")

			frm.elements[ct].disabled = false
			frm.elements[ct].name = pm[0]
			frm.elements[ct].value = pm[1]
		}
	}

	frm.submit()
}

/*
	지정한 form의 value를 모두 지운다.
*/
function jsFormReset(form){

	var el = form.elements;

	for(var n=0; n < el.length; n++){

		if(el[n].tagName == "INPUT" && (el[n].type.toLowerCase() == "hidden" ||
																		el[n].type.toLowerCase() == "text" ||
																		el[n].type.toLowerCase() == "password" ))
			el[n].value = "";

		if(el[n].tagName == "SELECT")
			jsSetSelect(el[n],"", null, 0);

		if(el[n].tagName == "INPUT" && (el[n].type.toLowerCase() == "checkbox"))
			el[n].checked = false;

		if(el[n].tagName == "INPUT" && (el[n].type.toLowerCase() == "radio"))
			jsSetRadio(el[el[n].name], "", 0);

		if(el[n].tagName == "TEXTAREA")
			el[n].value = "";

	}
}

/*
	지정한 form의 elements를 disabled 시킨다.
*/
function jsFormOff(form){

	var el = form.elements;

	for(var n=0; n < el.length; n++)
			el[n].disabled = true;

	form.disabled = true;
}

/*
	지정한 form의 elements를 enable 시킨다.
*/
function jsFormOn(form){

	var el = form.elements;

	for(var n=0; n < el.length; n++)
			el[n].disabled = false;

	form.disabled = false;
}

/** 특정 이벤트에 다음 form element로 이동 할때 사용
	c_obj는 이벤트 발생 element point는 이동할 count
**/
function jsFormNextFocus(c_obj,point)
{
	if(c_obj == null || c_obj == false)
		return;

	if(point == null)
		point = 1;

	var n_obj = jsFindObj(c_obj, point);

	if(n_obj != null)
	{
		if(!isFocus(n_obj))
		{
			var el = c_obj.form.elements;

			if(!jsFormNextFocus(n_obj)){

				for(var n=0; n < el.length; n++){

					if(isFocus(el[n])){
						el[n].focus();
						return true;
					}
				}
			}
		}
		else
		{
			n_obj.focus();
			return true;
		}
	}
	else{

		var el = c_obj.form.elements;

		if(!jsFormNextFocus(n_obj)){

			for(var n=0; n < el.length; n++){

				if(isFocus(el[n])){
					el[n].focus();
					return true;
				}
			}
		}
	}
	return false;
}

/** 연계된 텍스트 박스에 사용.
	text에 들어온 Object의 값의 길이가 len의 길이와 같다면 다음 텍스트 박스로 포커스 이동
	onkeyup='jsFocusRelay(this,1)
**/
function jsFocusRelay(text, len)
{
	if(text == null)
		return;
	if(len == null || len == "" || len < 1)
		return;

	if(text.value.length == len)
		jsFormNextFocus(text);

}

/** form 의 textbox에서 enter key에 따라 function을 실행하기
	ex) <FORM NAME="FormMain" METHOD="post" ACTION="/CommonServlet" onSubmit="return false;" onKeyDown="return jsOnEnter(event, fs_Search);">
*/
function jsOnEnter(event, func){

	if(event.keyCode == 13){

		if(event.srcElement.tagName.indexOf("TEXTAREA") > -1)
			return true;

		if(func != null)
			func();

		return false;
	}
	
	else if(event.keyCode == 9){

		var c_obj = event.srcElement;
		var el = c_obj.form.elements;
		
		var lst = el.length-1;
		
		var nxt = 0;
		
		if(event.shiftKey){
		
			var fst = 0;
			
			for(var n=lst; n >= 0; n--){
			
				if(isFocus(el[n]))
					fst = n;
			}
			
			if(el[fst] == c_obj)
				nxt = lst-1;
			else
				nxt = -1;
		}
		else{
			
			if(el[lst] == c_obj)
				nxt = -1 * (lst);
			else
				nxt = 1;
		}

		jsFormNextFocus(c_obj, nxt);

		return false;
	}
	return true;
}

/** 넘긴 object가 focus를 줄수 있는지 여부를 반환 **/
function isFocus(n_obj){

	if(n_obj == null
			|| (n_obj.disabled != null && n_obj.disabled == true)
			|| (n_obj.readonly != null && n_obj.readonly == true)
			|| n_obj.style.display.toLowerCase() == "none"
			|| n_obj.type == 'hidden')
		return false;
	else
		return true;
}

/**
 * Element를 복사하여 반환.
 **/
function jsCopyElement(src){

	if(!src.tagName)
		return null;

	var ret = document.createElement(src.tagName);
	
	var atts = src.attributs;
	
	for(var n=0; n < atts.length; n++){
		
		if(atts[n].name && /[\w]+/ig.test(atts[n].name) && !jsIsNS(atts[n].value) )
			ret.setAttribut(atts[n].name, atts[n].value);
	}
	
	return ret;
}

/**입력 가능한 Object인지 여부를 반환 **/
function isIObj(n_obj){

	if(n_obj == null || n_obj.tagName == null)
		return false;

	var tg = n_obj.tagName;

	switch(tg){

		case "INPUT":
		case "SELECT":
		case "TEXTAREA":
			return true;
	}

	return false;
}
/** 선언된 변수 인지 확인 **/
function isDefined(obj){

	if(typeof(obj) == "undefined")
		return false;
	else
		return true;
}
/** 특정 이벤트에 다음 element로 이동 할때 사용
	c_obj는 이벤트 발생 element, point는 이동할 count
**/
function jsAllNextFocus(c_obj,point)
{
	if(c_obj == null || c_obj == false)
		return;

	if(point == null)
		point = 1;
	else
		point = parseInt(point, 10);

	var c_idx = jsAllFindIndex(c_obj);
	var el = document.all;
	var pt = 1;

	for(var n=0; n < el.length; n++){
/*
		if(confirm("tagName:"+ el[n].tagName + ", " + "name:"+ el[n].name + ", " + "id:"+ el[n].id + ", " + isIObj(el[n]) + ", " + isFocus(el[n])))
			return;
*/
		if(c_idx < n && pt == point && isIObj(el[n]) && isFocus(el[n])){

			el[n].focus();
			return true;
		}
		else if(c_idx < n && isIObj(el[n]) && isFocus(el[n])){

			pt++;
			continue;
		}
		else
			continue;
	}

	return false;
}
/** 보고 있는 브라우저가 MSIE 인지 아닌지를 리턴 */
function jsIsMSIE(){

	if(navigator.appVersion.indexOf("MSIE") < -1)
		return false;
	else
		return true;
}

//깜빡이 text
/* 사용 예
<scrit>
	function blink()
	{
		cols = new Array();

		cols[0] = "red";
		cols[1] = "blue";

		blink_init('tbl', cols, 1000); (끝의 1000은 깜빡하는 간격을 설정 단위는 /ms)

	}
</script>
<BODY onload="blink();">
<font id="tbl"> xxxx</font>
*/

var b_property = new Array();

function blink_property()
{
	this.id="";
	this.color = new Array();
	this.c_idx = 0;

	this.object = null;
}

function startBlink(idx)
{
	var prt = b_property[idx];

	var objBlink = prt.object;


	if(objBlink.style.visibility == "hidden")
	{
		objBlink.style.visibility = "";

		if(prt.color.length > 0)
		{
			objBlink.style.color = prt.color[prt.c_idx];

			prt.c_idx++;

			if(prt.c_idx == prt.color.length)
				prt.c_idx = 0;
		}
	}
	else
	{
		objBlink.style.visibility = "hidden";
	}
}

function blink_init(id, cols, interval)
{
	var tmp = null;
	var idx = b_property.length;

	var obj = jsFindId(id);

	if(!obj)
		return;

	if(interval == null || isNaN(interval))
		interval = 500;

	b_property[idx] = new blink_property();
	b_property[idx].id = id;

	b_property[idx].object = obj;

	if(cols != null)
		b_property[idx].color = cols;

	setInterval("startBlink("+ idx +")", interval);
}

//마우스 포인터의 가로 위치
function jsGetMousePosionX()
{
	var x = document.body.scrollLeft

	return parseInt(event.clientX + x,10);
}

//마우스 포인터의 세로 위치
function jsGetMousePosionY()
{
	var y = document.body.scrollTop

	return parseInt(event.clientY + y,10);
}

//페이지가 열릴때 이미지를 미리 읽어 온다.
function jsImagePreLoad(){

	var doc = document;
	var args = jsImagePreLoad.arguments;
	
	var pimgs = new Array();
	var img = null;
	
	if(doc.images){
	
		for(var n=0; n < args.length; n++){
		
			img = new Image();
			img.src = args[n];
			
			pimgs[pimgs.length] = img;
		}
	}
}

//255 보다 적은 integer 숫자를 hex 코드로 돌려준다.

function jsGetHex(val)
{
	var num = new Array();

	if(val > 255)
	{
		alert("입력값이 255보다 큽니다.")
		return
	}

	num[0] = parseInt(val / 16,10);
	num[1] = parseInt(val % 16,10);


	var ret = "";
	var tmp = "";

	for(var n=0; n < 2; n++)
	{
		switch(num[n])
		{
			case 10:
				tmp = "A";
			break;

			case 11:
				tmp = "B";
			break;

			case 12:
				tmp = "C";
			break;

			case 13:
				tmp = "D";
			break;

			case 14:
				tmp = "E";
			break;

			case 15:
				tmp = "F";
			break;

			default:
				tmp = num[n];
		}

		ret += tmp.toString();
	}

	return ret;
}


/*/마우스 오버,아웃 메소드
function kbsOver(obj)
{
	var ch = this.children;

	for(var n=0; n < ch.length; n++)
	{
		if(ch[n].tagName == "TD")
			ch[n].style.filter = "wave(freq=1,lightstrength=40, phase=0, strength=1);";
	}
}

function kbsOut(obj)
{

	var ch = this.children;

	for(var n=0; n < ch.length; n++)
	{
		if(ch[n].tagName == 'TD')
			ch[n].style.filter = "";
	}
}
*/
//////////////////////////*         팝업 메뉴         */////////////////////////////////////



//팝업 메뉴의 선택된 부분
function jsPopMenuover(tr)
{
	tr.style.backgroundColor = "#000066";
	tr.style.color = "white";
	tr.style.cursor = "default";
}

//팝업 메뉴의 선택되지 않은 부분
function jsPopMenuout(tr)
{
	tr.style.backgroundColor = "#D4D0C8";
	tr.style.color = "black";
}


// 위의 주석 부분은 사용 예제


//팝업 메뉴를 클릭 했을때...
function jsPopupRun(value, target)
{
	location.target = target;

	location.href = "javascript:"+ value;

}

var jsppmenus = new Array();
var jssubmenu = new Array();

function makePopUpMenu(name,width,row,line)
{
	var jsppmenu_cnt = jsppmenus.length;

	line -= 1;

	document.write("<span style='z-index: 99;background-color: #8A2BE2;position: absolute; padding: 0px; margin: 0px;visibility: hidden;border: 1px outset;' id='"+name+"' row='"+row+"'>");
	document.write("<table width='"+ width +"' cellpadding='3' cellspacing='0' border='0' bgcolor='#D4D0C8' style='font:12px;border: 1px outset;' ondragstart='return false' onselectstart='return false'>");

	for(var n=0; n < row; n++)
	{
		document.write("<tr >");

		var lin = false;

		if(line != null)
		{
			if(line[0] == undefined)
			{
				if(line == n)
					lin = true;
			}
			else
			{
				for(var l=0; l < line.length; l++)
				{
					if(line[l] == n)
					{
						lin = true;
					}
				}
			}
		}

		if(!lin)
		{
			document.write("<td oncontextmenu='return false' valign='middle' onMouseOver='jspmover(this)' onMouseOut='jspmout(this)' id='"+name+n+"' ");
			document.write("style='padding-left: 10px;' onclick='jsPopupRun(this.value, this.target)' value='' target='_self'></td>");
			document.write("</tr>");
		}
		else
		{
			document.write("<td oncontextmenu='return false' valign='middle' onMouseOver='jspmover(this)' onMouseOut='jspmout(this)' id='"+name+n+"' ");
			document.write("style='padding-left: 10px; border-bottom: 2px groove;' onclick='jsPopupRun(this.value, this.target)' value='' target='_self'></td>");
			document.write("</tr><tr><td height='5'></td></tr>");
		}
	}
	document.write("</table>");
	document.write("</span>");

	jsppmenus[jsppmenu_cnt] = jsFindId(name);

	jssubmenu[jsppmenu_cnt] = new Array();

	for(var n=0; n < jsppmenus[jsppmenu_cnt].row; n++)
	{
		jssubmenu[jsppmenu_cnt][n] = jsFindId(name+n);
	}
}


//활성화된 팝업메뉴를 닫는다.
function jsClosePopUp(non)
{
	//alert(jsPopupmenus.length);
	for(var n=0; n < jsppmenus.length; n++)
	{
		if(n != non)
			jsppmenus[n].style.visibility = "hidden";
	}
}

function setJsPopupPosition(div)
{
/*	var body=document.body;

	var x=event.clientX+body.scrollLeft;
	var y=event.clientY+body.scrollTop;
alert(event.clientY + " + " + body.scrollTop + " = " + y);
	var m = div;

	var h = m.scrollHeight;
	var w = m.scrollWidth;

//	alert( (x+m.scrollWidth > body.clientWidth)&&(x-m.scrollWidth > 0) );

	if( (x + w > body.clientWidth)&&(x - w > 0) )
		m.style.pixelLeft=x-w;
	else
		m.style.pixelLeft=x;
		
	alert( "("+y+"+"+ h +">"+ body.clientHeight+")&&("+y+"-"+ h +">"+ 0+")" );
	
	if( (y + h > body.clientHeight)&&(y - h > 0) )
		m.style.pixelTop=y-h;
	else
		m.style.pixelTop=y;
		
	m.style.pixelLeft = m.style.pixelLeft - 5;*/

	var pos = div.offsetHeight;

	//alert((document.body.scrollTop+document.body.offsetHeight) +"---"+ (jsGetMousePosionY() + pos));

	if((document.body.scrollTop+document.body.offsetHeight) > jsGetMousePosionY() + pos)
		pos = 0;

	div.style.left = jsGetMousePosionX();
	div.style.top = jsGetMousePosionY() - pos;
}


//오른쪽 마우스를 눌렀을때 팝업 메뉴를 활성화 시킨다.
/* 예제
function jsOpenPopUp(reg_no, ccd)
{
	if(event.srcElement.tagName == "DIV")
		return false;

	jsClosePopUp();

	var popid = jsFindId("pop1");

	if(!popid)
		return true;

//페이지별로 다르게 할 부분
	var m0 = jsFindId("pop10");
	var m1 = jsFindId("pop11");

	m0.value = "goCustInfo('"+reg_no+"','"+ccd+"')";
	m1.value = "goPayInfo('"+reg_no+"')";

	m0.innerHTML = "고객 정보 바로가기";
	m1.innerHTML = "고객 납부정보 바로가기";


	popid.style.visibility = "visible";
	popid.style.left = getMousePosionX();
	popid.style.top = getMousePosionY();


	return false;
}

팝업 메뉴가 나와야 할 곳의 예제
<td oncontextmenu="return jsOpenPopUp('1,2')" style="cursor:default;">

-----------------   html에 팝업 메뉴 닫는 함수를 클릭 이벤트에 포함하여야 한다.-----------------
<html onclick='jsClosePopUp()'>
*/


//---------------  border style create ------------------------------

/********************************************************************************
border css 설정 postion은 top = t, bottom = b, lert = l, right = r,
	top_bottom = tb, left_top_bottom = ltb, right_top_bottom = rtb, side = lr,
	side_top = lrt, side_bottom = lrb, all 이것중 선택
********************************************************************************/
function setBoardStyle(name, position, type, width, color)
{
	if(type == null || type == "")
		type = "solid";

	if(width == null || width == "")
		width = "1px";

	if(color == null || color == "")
		color = "gray";



	document.write("<style>");
	document.write("." + name + "{");

	switch(position)
	{
		case "t":
			document.write("border-top: "+ width + " " + type + " " + color + ";");
		break;

		case "b":
			document.write("border-bottom: "+ width + " " + type + " " + color + ";");
		break;

		case "l":
			document.write("border-left: "+ width + " " + type + " " + color + ";");
		break;

		case "r":
			document.write("border-right: "+ width + " " + type + " " + color + ";");
		break;

		case "tb":
			document.write("border-top: "+ width + " " + type + " " + color + ";");
			document.write("border-bottom: "+ width + " " + type + " " + color + ";");
		break;

		case "ltb":
			document.write("border-top: "+ width + " " + type + " " + color + ";");
			document.write("border-bottom: "+ width + " " + type + " " + color + ";");
			document.write("border-left: "+ width + " " + type + " " + color + ";");
		break;

		case "rtb":
			document.write("border-top: "+ width + " " + type + " " + color + ";");
			document.write("border-bottom: "+ width + " " + type + " " + color + ";");
			document.write("border-right: "+ width + " " + type + " " + color + ";");
		break;

		case "lr":
			document.write("border-left: "+ width + " " + type + " " + color + ";");
			document.write("border-right: "+ width + " " + type + " " + color + ";");
		break;

		case "lrt":
			document.write("border-top: "+ width + " " + type + " " + color + ";");
			document.write("border-left: "+ width + " " + type + " " + color + ";");
			document.write("border-right: "+ width + " " + type + " " + color + ";");
		break;

		case "lrb":
			document.write("border-bottom: "+ width + " " + type + " " + color + ";");
			document.write("border-left: "+ width + " " + type + " " + color + ";");
			document.write("border-right: "+ width + " " + type + " " + color + ";");

		break;

		case "all":
			document.write("border-top: "+ width + " " + type + " " + color + ";");
			document.write("border-bottom: "+ width + " " + type + " " + color + ";");
			document.write("border-left: "+ width + " " + type + " " + color + ";");
			document.write("border-right: "+ width + " " + type + " " + color + ";");
		break;

	}


	document.write("}");
	document.write("</style>");

}

function  vcodetable(){

	for(var n=0; n < 10000; n++){
		document.write(String.fromCharCode(n) + " : " + n + "<br>");
	}
}
/* 레이어 테이블 내용에 따라 크기 변경 예제

function reSize(val)
{
	var size = getSize(val)

	var div = jsFindId("div_table");

	div.style.height = size;
}

function getSize(cnt)
{
	var infield = null;
	var size = 0;

	for(var n=0; n < cnt; n++)
	{
		infield = jsFindId("in_field"+n);

		if(infield == false)
			break;

		size += infield.offsetHeight + 4;

	}

	return size;
}





/*********************************************
* 파일명: lib.validate.js
* 기능: 유연한 자동 폼 검사기
* 만든이: 거친마루 <comfuture@maniacamp.com>
* 날짜: 2002-10-01
* == change log ==
* 2003-10-02 여러칸으로 나눠진 항목에 대한 검사기능 추가
* 2003-10-02 패스워드등 두개 항목에 대한 비교 기능 추가
**********************************************/
/*
<SCRIPT LANGUAGE="JAVASCRIPT" SRC="/inc/js/kfsbyjobutil.js"></SCRIPT>
<form name="test" action="script.php" method="post" onSubmit="return validate(this)">
................
................
</form>
<!-- 검사할 폼 태그의 onsubmit 이벤트에 return validate(this) 라고 기술합니다 -->

***************************************************

※검사 속성

required
hname
option
minbyte
maxbyte
span
glue
match
notspace



required 필수항목인지 여부를 나타내는 속성

hname 항목의 한글이름(에러메시지를 보여줄때 등)

option 특수한 검사를 수행할 옵션 (아래를 참고)

minbyte 영문은 1byte 한글은 2byte로 계산하여 설정값보다 작은지 검사

maxbyte 영문은 1byte 한글은 2byte로 계산하여 설정값보다 큰지 검사

span 전화 번호와 같이 여러개의 element로 나누어져 있는경우 몇개로 나누어져 있는지를 설정

glue 나누어져 있는 element를 붙여서 검사 할때 사이에 집어 넣을 문자를 설정

match password와 같이 비교 검사 할때 사용
			(검사할 element중 첫번째 element에 설정 값은 비교할 다른 element 이름)

notspace 공백문자가 있는지 검사(공백문자가 하나라도 있으면 안됨)




※속성 option 의 입력 값
email
phone
hphone
userid
passwd
koronly
kor_brace
number
money
engonly
eng_brace
!spchar
numalpha
jumin
bizno
domain
domain
imgfile



email = 이메일을 검사 (span="2" 또는 glue="@" 를 설정 할 수 있음)
	ex)
	<input type="text" name="email1"  hname="이메일" option="email" required span="2" glue="@"> @
	<input type="text" name="email2">

phone = 전화 번호를 검사
				(span 속성 없이 하나의 element에 값이 있거나 그렇지 않으면 span="2" 또는 span="3" 필수)
	ex)
	<input type="text" name="phone1" size="3" hname="전화번호" option="phone" required span="3"> -
	<input type="text" name="phone2" size="4"> -
	<input type="text" name="phone3" size="4">

hphone = 휴대 전화 번호를 검사 (span="3" 필수)
	ex)
	<input type="text" name="phone1" size="3" hname="휴대 전화번호" option="hphone" required span="3"> -
	<input type="text" name="phone2" size="4"> -
	<input type="text" name="phone3" size="4">

userid = ID를 검사
	ex)
	<input type="text" name="id" hname="사용자아이디" option="userid" required>

passwd = Password를 검사
	ex)
	<input type="text" name="password" hname="비밀번호" option="passwd" required>

koronly = 한글인지를 검사(공백포함 허용, 공백으로 시작하거나 공백만 있는경우는 비허용)
	ex)
	<input type="text" name="uname" hname="이름" option="koronly">

kor_brace = 한글과 <,>,[,],(,),{,} 기호문자 인지 검사(공백포함 허용, 공백으로 시작하거나 공백만 있는경우는 비허용)
	ex)
	<input type="text" name="cname" hname="회사이름" option="kor_brace">

number = 숫자인지를 검사
	ex)
	<input type="text" name="price" hname="가격" option="number">

money = 숫자와 "," 만 허용(금액을 검사 할때 사용)
	ex)
	<input type="text" name="price" hname="가격" option="money">
	**jsSetMoney, jsComma, jsRmComma  function 참조

engonly = 영문인지를 검사(공백포함 허용, 공백으로 시작하거나 공백만 있는경우는 비허용)
	ex)
	<input type="text" name="ename" hname="영문이름" option="engonly">

eng_brace = 영문과 <,>,[,],(,),{,} 기호문자 인지 검사(공백포함 허용, 공백으로 시작하거나 공백만 있는경우는 비허용)
	ex)
	<input type="text" name="ename" hname="화사이름" option="eng_brace">

!spchar = 특수문자가 있는지 검사
	ex)
	<input type="text" name="comp_info" hname="회사정보" option="!spchar">

numalpha = 숫자와 영문인지를 검사
	ex)
	<input type="text" name="c_code" hname="코드" option="numalpha">

jumin = 주민번호 검사
	ex)
	<input type="text" name="jumin" hname="주민버호" option="jumin">

bizno = 사업자 번호 검사
	ex)
	<input type="text" name="biz_no" hname="사업자번호" option="bizno">

domain = 도메인을 검사
	ex)
	<input type="text" name="home" hname="홈페이지" option="domain">

imgfile = 파일 확장자가  jpg, gif인지를 검사
	ex)
	<input type="file" name="imgfile" hname="이미지" option="imgfile">



----------- 에러메시지 템플릿 사용법 -----------
ex)
NO_BLANK = "{name+은는} 필수 항목입니다";

위 변수에서 중괄호로 묶인 부분은 검사되는 엘리먼트의 hname 또는 name 으로 자동으로 대치됩니다. 또한 내용의
마지막 글자 종성유무에 따라 '은' 또는 '는' 조사가 자동으로 붙게 됩니다. userid 항목에 사용되었다면
"유저 아이디는 필수 항목입니다" 라는 에러를 발생시킬 것입니다. 이것은 다음과 같이 바꿀 수 있습니다.

NO_BLANK = "{name+이가} 비어있어서 전송하지 못했습니다";
또는
NO_BLANK = "{name+을를} 입력해주세요";

{변수+조사} 에서 +조사 부분은 없어도 동작합니다.

단순하게 아래와 같이 바꿀 수도 있습니다.
NO_BLANK = "{name}항목은 필수 항목입니다.";


※참고

"SELECT" 에 required 옵션이 있을경우 첫번째가 선택 되어 있는 경우 오류문자를 보여줌
"RADIO" 나 "CHECKBOX" 에 required 옵션이 있는 경우 선택된것이 없는 경우 오류문자를 보여줌

***************************************************/

/// 에러메시지 포멧 정의 ///
var NO_BLANK = "{name+은는} 필수항목입니다";
var NOT_VALID = "{name+이가} 올바르지 않습니다";
var NOT_SELECT = "{name+을를} 선택하지 않았습니다.";
var NOT_SPACE = "{name+을를} 공백문자는 입력할 수 없습니다.";
// var TOO_LONG = "{name}의 길이가 초과되었습니다 (최대 {maxbyte}바이트)";

/// 스트링 객체에 메소드 추가 ///
//공백 제거
String.prototype.trim = function(str) {
	str = this != window ? this : str;
	return str.replace(/\s/g, "");
}
//왼쪽 공백 제거
String.prototype.ltrim = function(str) {
	str = this != window ? this : str;
	return str.replace(/^\s+/, "");
}
//오른쪽 공백 제거
String.prototype.rtrim = function(str) {
	str = this != window ? this : str;
	return str.replace(/\s+$/, "");
}
//한글 조사를 판별
String.prototype.hasFinalConsonant = function(str) {
	str = this != window ? this : str;
	var strTemp = str.substr(str.length-1);
	return ((strTemp.charCodeAt(0)-16)%28!=0);
}
//문자의 byte를 리턴
String.prototype.bytes = function(str) {
	str = this != window ? this : str;
	var len = 0;
	for(j=0; j<str.length; j++) {
		var chr = str.charAt(j);
		len += (chr.charCodeAt() > 128) ? 2 : 1;
	}
	return len;
}
//문자를 원하는 문자를 기준으로 나누어 준다
//len으로 들어온 길이 보다 적다면 공백을 추가하여 길이 만큼의
//문자열 배열을 리턴
String.prototype.capsplit = function(target, len){
	src = this != window ? this : src;

	var ret = src.split(target);

	if(len == undefined || len == null)
		return ret;

	for(var n = ret.length-1; n < len ; n++){
		ret[n] = "";
	}
	return ret;
}


function validate(form) {

	for (i = 0; i < form.elements.length; i++ ) {

		var el = form.elements[i];

//form element 중 readonly 인 경우와 disabled된 경우에는 지나침
		if (el.readonly == true || el.disabled == true || typeof(el.value) == "undefined")
			continue;

		el.value = el.value.rtrim();

		var minbyte = el.getAttribute("MINBYTE");
		var maxbyte = el.getAttribute("MAXBYTE");
		var option = el.getAttribute("OPTION");
		var match = el.getAttribute("MATCH");
		var glue = el.getAttribute("GLUE");
		var notspace = el.getAttribute("NOTSPACE");

		if (el.getAttribute("REQUIRED") != null) {

			if(el.tagName == "SELECT" && el.selectedIndex == 0)
				return doError(el, NOT_SELECT);

			if(el.type != null && el.type == "radio"){

				var checkflag = false;

				for(var rn=0; form.elements[el.name].length != null && rn < form.elements[el.name].length; rn++){

					if(form.elements[i+rn].checked == true){
						checkflag = true;
						break;
					}
				}

				if(!checkflag)
					return doError(el, NOT_SELECT);
			}

			if(el.type != null && el.type == "checkbox"){

				var checkflag = false;

				for(var rn=0; form.elements[el.name].length != null && rn < form.elements[el.name].length; rn++){

					if(form.elements[i+rn].checked == true){
						checkflag = true;
						break;
					}
				}

				if(!checkflag)
					return doError(el, NOT_SELECT);
			}

			if (el.value == null || /^\s*$/.test(el.value))
				return doError(el,NO_BLANK);
		}
		else{

			if(el.value != null && (option == "phone" || option == "hphone") && el.tagName == "SELECT"){

				if(el.selectedIndex > 0 && (jsIsNS(form.elements[i+1].value) || jsIsNS(form.elements[i+2].value)))
					return doError(el, NOT_VALID);
			}

			if(jsIsNS(el.value))
				continue;
		}

		if(notspace != null){

			var value = el.value;

			var re = /\s/g

			var reval = value.replace(re, "")

			if(reval.length != value.length)
				return doError(el,"{name+은는} 공백을 포함할 수 없습니다.");
		}

		if (minbyte != null) {

			var ermsg = "";

			if (el.value.bytes() < parseInt(minbyte)) {

				if(option != null && option == "number")
					ermsg = "{name+은는} 최소 "+ minbyte +"자 이상 입력해야 합니다.";
				else if(option != null && (option == "koronly" || option == "kor_brace"))
					ermsg = "{name+은는} 최소 한글"+ Math.round(minbyte/2) +"자 이상 입력해야 합니다.";
				else if(option != null && (option == "engonly" || option == "eng_brace"))
					ermsg = "{name+은는} 최소 영문"+ minbyte +"자 이상 입력해야 합니다.";
				else if(option != null && option == "numalpha")
					ermsg = "{name+은는} 최소 숫자나 영문 "+ minbyte +"자 이상 입력해야 합니다.";
				else
					ermsg = "{name+은는} 최소 한글"+ Math.round(minbyte/2) +"자, 영문"+ minbyte +"자 이상 입력해야 합니다.";

				return doError(el, ermsg);
			}
		}

		if (maxbyte != null && el.value != "") {

			var ermsg = "";

			var len = 0;

			if (el.value.bytes() > parseInt(maxbyte)) {

				if(option != null && option == "number")
					ermsg = "{name+은는} 최대 "+ maxbyte +"자 이하로 입력해야 합니다.";
				else if(option != null && (option == "koronly" || option == "kor_brace"))
					ermsg = "{name+은는} 최대 한글"+ Math.round(maxbyte/2) +"자 이하로 입력해야 합니다.";
				else if(option != null && (option == "engonly" || option == "eng_brace"))
					ermsg = "{name+은는} 최대 영문"+ maxbyte +"자 이하로 입력해야 합니다.";
				else if(option != null && option == "numalpha")
					ermsg = "{name+은는} 최대 숫자나 영문 "+ maxbyte +"자 이하로 입력해야 합니다.";
				else
					ermsg = "{name+은는} 최대 한글"+ Math.round(maxbyte/2) +"자, 영문"+ maxbyte +"자 이하로 입력해야 합니다.";

				return doError(el, ermsg);
			}
		}

		if (match && (el.value != form.elements[match].value)) return doError(el,"{name+이가} 일치하지 않습니다");

		if (option != null && el.getAttribute('SPAN') != null) {

			var _value = new Array();
			var span = 0;

			if(el.tagName == "SELECT" && el.selectedIndex == 0)
				continue;

			if (el.value == null || el.value == "")
				return doError(el,NO_BLANK);

			for (span=0; span<el.getAttribute('SPAN');span++ ) {

				_value[span] = form.elements[i+span].value;
			}

			if(option == "phone" || option == "hphone")
				glue = "-";

			var value = _value.join(glue == null ? "" : glue);

			if(jsIsSpace(value))
				continue;

			if (!funcs[option](el,value))
				return false;
		}
		else if(option != null && el.value != "") {

			if (!funcs[option](el)) return false;
		}
	}

	return true;
}

function josa(str,tail) {
	return (str.hasFinalConsonant()) ? tail.substring(0,1) : tail.substring(1,2);
}

function doError(el,type,action) {
	var pattern = /{([a-zA-Z0-9_]+)\+?([가-�R]{2})?}/;
	var name = (hname = el.getAttribute("HNAME")) ? hname : el.getAttribute("NAME");
	pattern.exec(type);
	var tail = (RegExp.$2) ? josa(eval(RegExp.$1),RegExp.$2) : "";
	alert(type.replace(pattern,eval(RegExp.$1) + tail));
	if (action == "sel") {
		el.select();
	} else if (action == "del")	{
		el.value = "";
	}
	//el.style.backgroundColor = "#FFFF66";
	el.focus();
	return false;
}

/// 특수 패턴 검사 함수 매핑 ///
var funcs = new Array();
funcs['email'] = isValidEmail;
funcs['phone'] = isValidPhone;
funcs['hphone'] = isValidHPhone;
funcs['userid'] = isValidUserid;
funcs['passwd'] = isValidUserpwd;
funcs['koronly'] = hangulOnly;
funcs['kor_brace'] = hangulNBrace;
funcs['number'] = isNumeric;
funcs['money'] = isMoney;
funcs['engonly'] = alphaOnly;
funcs['eng_brace'] = alphaNBrace;
funcs['!spchar'] = isNotSpChar;
funcs['numalpha'] = isNumAlpha;
funcs['jumin'] = isValidJumin;
funcs['zipcode'] = isValidZipcode;
funcs['bizno'] = isValidBizNo;
funcs['domain'] = isValidDomain;
funcs['imgfile'] = isValidImage;

/// 패턴 검사 함수들 ///


//이미지 파일 확장자 검사
function isValidImage(el) {

	var pattern = /[\w\W]+\.jpg|gif$/i;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} jpg와 gif 파일만 업로드 할 수 있습니다.");
}

//이메일 검사(공백 포함 비 허용)
function isValidEmail(el,value) {
	var value = value ? value : el.value;
	var pattern = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/;

	return (pattern.test(value)) ? true : doError(el,NOT_VALID);
}

//id 검사(공백 포함 비 허용)
function isValidUserid(el) {
	var pattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{3,9}$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 4자이상 10자 이하이어야 하고,\n첫글자는 영문 그뒤는 영문, 숫자만 사용할 수 있습니다");
}

//password 검사(공백 포함 비 허용)
function isValidUserpwd(el) {
	var pattern = /^[0-9]{4}$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 4자리 숫자만 사용할 수 있습니다");
}
/*password 검사(공백 포함 비 허용)
function isValidUserpwd(el) {
	var pattern = /^[a-zA-Z0-9]{4,8}$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 4자이상 8자 이하이어야 하고,\n영문, 숫자만 사용할 수 있습니다");
}*/

//한글과 인지 검사(공백포함 허용)
function hangulOnly(el) {
	var pattern = /^[가-�R\s]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 한글로 입력하십시오.");
}

//한글과 <,>,[,],(,),{,} 기호문자 인지 검사(공백포함 허용)
function hangulNBrace(el) {
	var pattern = /^[가-�R<>\[\]()\{\}\s]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 한글로 입력하십시오.");
}
//숫자와 영문인지 검사(공백포함 비 허용)
function isNumAlpha(el) {

	var pattern = /^[\w]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 영문과 숫자만 입력 하여야 합니다.");
}
//특수 문자가 있는지 검사
function isNotSpChar(el) {
	var pattern = /^[a-zA-ZR0-9\s]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 특수문자를 사용할 수 없습니다.");
}
//영문만 있는지 검사(공백포함 허용)
function alphaOnly(el) {
	var pattern = /^[a-zA-Z\s]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 영문만 입력 하여야 합니다.");
}
//영문과 <,>,[,],(,),{,} 기호문자 인지 검사(공백포함 허용)
function alphaNBrace(el) {
	var pattern = /^[a-zA-Z<>\[\]()\{\}\s]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 영문과 괄호기호만 입력 하여야 합니다.");
}
//숫자인지 검사(공백 포함 비 허용)
function isNumeric(el, value) {
	var pattern = /^[0-9]+$/;
	var num = value ? value : el.value;

//alert(el.name+","+num)
	return (pattern.test(num)) ? true : doError(el,"{name+은는} 반드시 숫자로만 입력해야 합니다");
}
//숫자와 "," 만 허용(공백 포함 비 허용 : 금액을 검사할 때 사용)
function isMoney(el) {
	var pattern = /^[0-9,]+$/;

	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 숫자로만 입력해야 합니다");
}
//주민번호 검사(공백 포함 비 허용)
function isValidJumin(el,value) {
  var pattern = /^([0-9]{6})-?([0-9]{7})$/;
	var num = value ? value : el.value;

	if (!pattern.test(num)) return doError(el,NOT_VALID);
	num = RegExp.$1 + RegExp.$2;
/*
	var sum = 0;
	var last = num.charCodeAt(12) - 0x30;
	var bases = "234567892345";
	for (var i=0; i<12; i++) {
		if (isNaN(num.substring(i,i+1))) return doError(el,NOT_VALID);
		sum += (num.charCodeAt(i) - 0x30) * (bases.charCodeAt(i) - 0x30);
	}
	var mod = sum % 11;
	return ((11 - mod) % 10 == last) ? true : doError(el,NOT_VALID);
	*/
	var digit = 0;
	var digset = "234567892345";

	for(var n=0; n < 12; n++)
		digit += parseInt(num.charAt(n),10) * parseInt(digset.charAt(n), 10);


	digit = digit % 11;
	digit = 11 - digit;
	digit = digit % 10;

	if(digit != parseInt(num.charAt(12),10))
		return doError(el, NOT_VALID);

	return true;
}
//사업자번호 검사(공백 포함 비 허용)
function isValidBizNo(el, value) {

	var pattern = /([0-9]{3})-?([0-9]{2})-?([0-9]{5})/;
	var num = value ? value : el.value;

	if (!pattern.test(num)) return doError(el,NOT_VALID);
	num = RegExp.$1 + RegExp.$2 + RegExp.$3;

	var chkRule = "137137135";

	var strCorpNum = num;
	var step1, step2, step3, step4, step5, step6, step7;

	step1 = 0;

	for (var x=0; x<7; x++)
	{
		step1 = step1 + (strCorpNum.substring(x, x+1) * chkRule.substring(x, x+1));
	}

	step2 = step1 % 10;
	step3 = (strCorpNum.substring(7, 8) * chkRule.substring(7, 8)) % 10;
	step4 = strCorpNum.substring(8, 9) * chkRule.substring(8, 9);
	step5 = Math.round(step4 / 10 - 0.5);
	step6 = step4 - (step5 * 10);
	step7 = (10 - ((step2 + step3 + step5 + step6) % 10)) % 10;

	if (strCorpNum.substring(9, 10) != step7)	// 결과 비교 판단
	{
		return doError(el,NOT_VALID);
	}
	return true;
}

//우편번호 검사(공백 포함 비 허용)
function isValidZipcode(el, value) {

	var pattern = /^([1-9]{1}[0-9]{2})-?([0-9]{3})$/;
	var num = value ? value : el.value;

	return (pattern.test(num)) ? true : doError(el,NOT_VALID);
}

//휴대전화 검사(공백 포함 비 허용)
function isValidHPhone(el, value) {

	var pattern = /^([0]{1}[1]{1}[016789]{1})-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;
	var num = value ? value : el.value;

	return (pattern.test(num)) ? true : doError(el,NOT_VALID);
}

//전화 검사(공백 포함 비 허용)
function isValidPhone(el, value, span) {

	var pattern = null;

	if(span == 2)
		pattern = /^([0-9]{2,4})-?([0-9]{3,4})/;
	else
		pattern = /^([0-9]{2,3})-?([0-9]{3,4})-?([0-9]{4})/;

	var num = value ? value : el.value;

	return (pattern.test(num)) ? true : doError(el,NOT_VALID);
}

/*
function isValidDomain(el) {
	var pattern = /^.+(\.[a-zA-Z]{2,3})$/;
	return (pattern.test(el.value)) ? true : doError(el,NOT_VALID);
}
*/
//홈페이지 주소 검사(공백 포함 비 허용)
function isValidDomain(el,value) {
	var value = value ? value : el.value;

	if(value.indexOf("http://") > -1)
		return doError(el,"{name+은는} 'http://' 부분은 빼고 입력하십시오.");

	var pattern = new RegExp("^(http://)?([가-�Ra-zA-Z0-9-\.]+\.[a-zA-Z]{2,3}$)","i");
	if (pattern.test(value)) {
		el.value = RegExp.$2;
		return true;
	} else {
		return doError(el,NOT_VALID);
	}
}


/**전화번호 input tag를 생성
 * t1_nm ~ t3_nm은 전화번호 3자리의 tag이름,
 * hname은 유효성 체크에서 사용할 한글 이름
 * sclass는 생성되는 tag의 style class
 * required는 필수 항목여부
 * def 기본 설정 값
 */
function jsMkPhone(t1_nm, t2_nm, t3_nm, hname, sclass, required, def){

	if(jsIsNS(hname))
		hname = "";
	else
		hname = "hname=\""+ hname + "\"";

	if(jsIsNull(sclass))
		sclass = "";
	else
		sclass = "class=\""+ sclass + "\"";

	if(jsIsNull(required) || required == false)
		required = "";
	else
		required = "required";

	var adef = new Array();

	adef = def.split(/-/);

	if(jsIsNS(def) || adef == null || adef.length < 3){

		adef[0] = "";
		adef[1] = "";
		adef[2] = "";
	}
	else{

		adef = def.split(/-/);
	}

	document.write("<select");
	document.write("	name=\""+ t1_nm +"\"");
	document.write("	option=\"phone\"");
	document.write("	span=\"3\"");
	document.write(hname);
	document.write(required);
	document.write(sclass);
	document.write(">");
	document.write("	<option value=\"\">선택</option>");
	document.write("	<option value=\"02\" "+ (adef[0] == "02" ? "selected" :"") +">02</option>");
	document.write("	<option value=\"031\" "+ (adef[0] == "031" ? "selected" :"") +">031</option>");
	document.write("	<option value=\"032\" "+ (adef[0] == "032" ? "selected" :"") +">032</option>");
	document.write("	<option value=\"033\" "+ (adef[0] == "033" ? "selected" :"") +">033</option>");
	document.write("	<option value=\"041\" "+ (adef[0] == "041" ? "selected" :"") +">041</option>");
	document.write("	<option value=\"042\" "+ (adef[0] == "042" ? "selected" :"") +">042</option>");
	document.write("	<option value=\"043\" "+ (adef[0] == "043" ? "selected" :"") +">043</option>");
	document.write("	<option value=\"051\" "+ (adef[0] == "051" ? "selected" :"") +">051</option>");
	document.write("	<option value=\"052\" "+ (adef[0] == "052" ? "selected" :"") +">052</option>");
	document.write("	<option value=\"053\" "+ (adef[0] == "053" ? "selected" :"") +">053</option>");
	document.write("	<option value=\"054\" "+ (adef[0] == "054" ? "selected" :"") +">054</option>");
	document.write("	<option value=\"055\" "+ (adef[0] == "055" ? "selected" :"") +">055</option>");
	document.write("	<option value=\"061\" "+ (adef[0] == "061" ? "selected" :"") +">061</option>");
	document.write("	<option value=\"062\" "+ (adef[0] == "062" ? "selected" :"") +">062</option>");
	document.write("	<option value=\"063\" "+ (adef[0] == "063" ? "selected" :"") +">063</option>");
	document.write("	<option value=\"064\" "+ (adef[0] == "064" ? "selected" :"") +">064</option>");
	document.write("</select>-<input");
	document.write("	name=\""+ t2_nm +"\"");
	document.write("	type=\"text\"");
	document.write("	size=\"4\"");
	document.write("	maxlength=\"4\"");
	document.write("	value=\"" + adef[1] + "\"");
	document.write(sclass);
	document.write(">-<input");
	document.write("	name=\""+ t3_nm +"\"");
	document.write("	type=\"text\"");
	document.write("	size=\"4\"");
	document.write("	maxlength=\"4\"");
	document.write("	value=\"" + adef[2] + "\"");
	document.write(sclass);
	document.write(">");
}

/** 휴대전화번호 input tag를 생성
 * t1_nm ~ t3_nm은 전화번호 3자리의 tag이름,
 * hname은 유효성 체크에서 사용할 한글 이름
 * sclass는 생성되는 tag의 style class
 * required는 필수 항목여부
 * def 기본 설정 값
 */
function jsMkHPhone(t1_nm, t2_nm, t3_nm, hname, sclass, required, def){

	if(jsIsNS(hname))
		hname = "";
	else
		hname = "hname=\""+ hname + "\"";

	if(jsIsNull(sclass))
		sclass = "";
	else
		sclass = "class=\""+ sclass + "\"";

	if(jsIsNull(required) || required == false)
		required = "";
	else
		required = "required";

	var adef = null;//

	if(def)
		adef = def.split(/-/);

	if(adef == null || adef.length < 3){

		adef = new Array();
		adef[0] = "";
		adef[1] = "";
		adef[2] = "";
	}

	document.write("<select");
	document.write("	name=\""+ t1_nm +"\"");
	document.write("	option=\"hphone\"");
	document.write("	span=\"3\"");
	document.write(hname);
	document.write(required);
	document.write(sclass);
	document.write(">");
	document.write("	<option value=\"\">선택</option>");
	document.write("	<option value=\"010\" "+ (adef[0] == "010" ? "selected" :"") +">010</option>");
	document.write("	<option value=\"011\" "+ (adef[0] == "011" ? "selected" :"") +">011</option>");
	document.write("	<option value=\"016\" "+ (adef[0] == "016" ? "selected" :"") +">016</option>");
	document.write("	<option value=\"017\" "+ (adef[0] == "017" ? "selected" :"") +">017</option>");
	document.write("	<option value=\"018\" "+ (adef[0] == "018" ? "selected" :"") +">018</option>");
	document.write("	<option value=\"019\" "+ (adef[0] == "019" ? "selected" :"") +">019</option>");
	document.write("</select>-<input");
	document.write("	name=\""+ t2_nm +"\"");
	document.write("	type=\"text\"");
	document.write("	size=\"4\"");
	document.write("	maxlength=\"4\"");
	document.write("	value=\"" + adef[1] + "\"");
	document.write(sclass);
	document.write(">-<input");
	document.write("	name=\""+ t3_nm +"\"");
	document.write("	type=\"text\"");
	document.write("	size=\"4\"");
	document.write("	maxlength=\"4\"");
	document.write("	value=\"" + adef[2] + "\"");
	document.write(sclass);
	document.write(">");
}

function jsSet3Phone(obj1, obj2, obj3, val){

	var nums = jsSplit(val, "-", 3);

	obj1.value = nums[0];
	obj2.value = nums[1];
	obj3.value = nums[2];
}

//obj 전화번호 처음 object를 val은 011-111-11과 같은 전화번호를 입력하면 해당 object에
//자동으로 입력
function jsSetPhone(obj, val){

	var obj2 = jsFindObj(obj, 1);
	var obj3 = jsFindObj(obj, 2);

	jsSet3Phone(obj, obj2, obj3, val);
}


function jsGet3Phone(obj1, obj2, obj3){

	if(jsIsSpace(obj1.value) || jsIsSpace(obj2.value))
		return "";

	if(jsIsSpace(obj3.value))
		return obj1.value + "-" + obj2.value;
	else
		return obj1.value + "-" + obj2.value + "-" + obj3.value;
}
//obj 전화번호 처음 object를 입력하면 해당 전화번호 object들의 값을 합쳐 200-1111-1111과
//같은 값을 리턴
function jsGetPhone(obj){

	var obj2 = jsFindObj(obj, 1);
	var obj3 = jsFindObj(obj, 2);

	return jsGet3Phone(obj, obj2, obj3);
}

function jsSet3BizNo(obj1, obj2, obj3, val){

	if(val.length < 10){
		alert("사업자 번호 길이가 너무 짧습니다.");
		return
	}

	obj1.value = val.substring(0,3);
	obj2.value = val.substring(3,5);
	obj3.value = val.substring(5);
}

function jsGet3BizNo(obj1, obj2, obj3){

	if(jsIsSpace(obj1.value) || jsIsSpace(obj2.value) || jsIsSpace(obj3.value))
		return "";

	return obj1.value + "" + obj2.value + "" + obj3.value;
}
//obj 사업자번호 처음 object를 입력하면 해당 사업자번호 object들의 값을 합쳐 200-11-11111과
//같은 값을 리턴
function jsGetBizNo(obj){

	var obj2 = jsFindObj(obj, 1);
	var obj3 = jsFindObj(obj, 2);

	return jsGet3BizNo(obj, obj2, obj3);
}

//obj 사업자번호 처음 object를 val은 287-99-82829 같은 사업자번호를 입력하면 해당 object에
//자동으로 입력
function jsSetBizNo(obj, val){

	var obj2 = jsFindObj(obj, 1);
	var obj3 = jsFindObj(obj, 2);

	jsSet3BizNo(obj, obj2, obj3, val);
}

function jsSet2RegNo(obj1, obj2, val){

	if(val.length < 13){
		alert("주민번호 길이가 너무 짧습니다.");
		return;
	}

	obj1.value = val.substring(0,6);
	obj2.value = val.substring(6);

}
//obj 주민번호 처음 object를 val은 800101-1887888 같은 주민번호를 입력하면 해당 object에
//자동으로 입력
function jsSetRegNo(obj, val){

	var obj2 = jsFindObj(obj, 1);


	jsSet2RegNo(obj, obj2, val);
}


/**
자동으로 , 를 붙일때의 예제
<input name="sell_price"
				type="text"
				size="17"
				style="text-align:right;"
				onKeyDown="return jsSetMoney(this);"
				onContextMenu="return false";
				hname="판매가격"
				option="money">

	var re = /\s/g

	if(val.replace == undefined)
		return true;

	var reval = val.replace(re, "")

	if(reval.length == 0)
		return true

	return false
**/

//콤마 넣기

function jsSetMoney(obj){

	var len = obj.value.length;
	obj.p_value = obj.value;
	obj.v_len = len;

	var pattern = /^[0-9+,]+$/;
	var rep = /[^0-9]/;
	var key = String.fromCharCode(event.keyCode);

	if(event.keyCode < 47){

		if(len > 1 && key == "\b")
			obj.onkeyup = prvSetMoney;
		else
			obj.onkeyup = null;

		return true;
	}
//!(event.ctrlKey || event.altKey) && 
	if (!pattern.test(key) && (event.keyCode > 105 || event.keyCode < 96)){

		doError(obj,"{name+은는} 반드시 숫자로만 입력해야 합니다");

		obj.onkeyup = null;
		return false;
	}

	obj.onkeyup = prvSetMoney;
}

function prvSetMoney() {

	var obj = event.srcElement;

	var len = obj.v_len;

	if(len == 0)
		return false;

	var pattern = /^[0-9+,]+$/;
	var rep = /[^0-9]/;

	var value = obj.value;

	if (!pattern.test(value)){

		if(len <= 0)
			return;

		doError(obj,"{name+은는} 반드시 숫자로만 입력해야 합니다");
		obj.value = obj.p_value == undefined ? "" : obj.p_value;
	}
		
	obj.value = jsComma(jsRmComma(obj.value));
}


//콤마 빼기
function jsGetMoney(obj) {
	return jsRmComma(obj.value);
}


/* 마우스 이벤트
var message = "오른쪽 마우스는 사용할 수 없습니다.";
function click(mouse) {
	if (document.all) {
		if (event.button==2||event.button==3) {
			alert(message);
			return false;
		}
	}
	if (document.layers) {
		if (mouse.which == 3) {
			alert(message);
			return false;
		}
	}
}

if (document.layers) {

	document.captureEvents(Event.MouseDown);//protect from keyboard keypress

	function keypressed() {
		//alert(message);
	}
}

if(!jsIsMSIE()){
	document.onmousedown=click;
	document.onkeydown=keypressed;
}
*/

/*** 마우스 이벤트 위치 확인 **/

function jsGetCPosition(){

	if(event.button == 2)
		return true;

	alert(event.clientY + ", " + event.clientX);
}
// 위치를 알아오는 함수
function jsGetOnEventPos(){
	document.onmousedown = jsGetCPosition
}
//jsGetOnEventPos();

//이미지 로딩시 사이즈 조절 호출 function
function jsImgResize(img, w, h){

	if(w != null){
		img.removeAttribute("WIDTH");
		img.removeAttribute("width");
	}
	if(h != null){
		img.removeAttribute("HEIGHT");
		img.removeAttribute("height");
	}

	if(w != null && (img.width == 0 || img.width > w))
		img.width = w;

	if(h != null && (img.height == 0 || img.height > h))
		img.height = h;

	var interval = null;


	if((w != null && (img.width == 0 || img.width > (w + 10))) || (h != null && (img.height == 0 || img.height > (h + 10)))){

	//	img.margin = img.style.margin;
	//	img.style.margin = "-5000px";

		interval = setInterval(new jsHImgResize(img, w, h, interval), 100);
	}
//alert(img.width + ", " + w + ", " + img.height + ", " + h);
}

//이미지 로딩시 사이즈 조절 호출 실행 function
function jsHImgResize(img, w, h, interval){


//alert(img+","+ w+","+h+","+interval);
	if(w != null && (img.width == 0 || img.width > w))
		img.width = w;

	if(h != null && (img.height == 0 || img.height > h))
		img.height = h;

	if((w != null && (img.width == 0 || img.width > (w + 10))) || (h != null && (img.height == 0 || img.height > (h + 10)))){

		clearInterval(interval);
	}

	if(img.margin)
		img.style.margin = img.margin;
	img.style.display='';
}

/*iframe 로딩시 사이즈 조절 호출 function
	<iframe 
		src=""
		name="contentIFM"
		id="contentIFM"
		width="100%"
		height="100%"
		marginheight="2"
		marginwidth="0"
		onload="jsIFMResize(this, null, (this.Document.body.scrollHeight < 200 ? 200 : this.Document.body.scrollHeight));"
		scrolling="no" frameborder="0"></iframe>
 */
function jsIFMResize(ifm, w, h){

	if(w != null){
		ifm.removeAttribute("WIDTH");
		ifm.removeAttribute("width");
	}
	if(h != null){
		ifm.removeAttribute("HEIGHT");
		ifm.removeAttribute("height");
	}

	var interval = null;

	if(w != null && (ifm.width == 0  || ifm.width > w))
		ifm.width = w;

	if(h != null && (ifm.height == 0 || ifm.height > h))
		ifm.height = h + 2;

	if((w != null && (ifm.width == 0 || ifm.width > w)) || (h != null && (ifm.height == 0 || ifm.height > h))) {

		interval = setInterval(new jsHIFMResize(ifm, w, h, interval), 100);
	}
}

//iframe 로딩시 사이즈 조절 호출 실행 function
function jsHIFMResize(ifm, w, h, interval){

	if(w != null && (ifm.width == 0  || ifm.width > w))
		ifm.width = w;

	if(h != null && (ifm.height == 0 || ifm.height > h))
		ifm.height = h + 2;

	if((w != null && (ifm.width == 0 || ifm.width > w)) || (h != null && (ifm.height == 0 || ifm.height > h))) {

		clearInterval(interval);
	}
}

//레이어를 중앙에 정렬
function jsCenterLayer(lay){

	var wwt = parseInt(document.body.offsetWidth, 10);
	var wht = parseInt(document.body.offsetHeight, 10);

	var dwt = parseInt(lay.clientWidth, 10);
	var dht = parseInt(lay.clientHeight, 10);

	var swt = parseInt(document.body.scrollLeft, 10);
	var sht = parseInt(document.body.scrollTop, 10);

//	alert(sht + ", " + swt);

	var top = parseInt((wht - dht) / 2 , 10) + sht;
	var left = parseInt((wwt - dwt) / 2 , 10) + swt;

	lay.style.top = top;
	lay.style.left = left;
}

/**
 * 감추어진 레이어를 보여준다.
 * id 레이어 id
 * idx 여러개의 레이어인경우 그 index
 * center 레이 위치를 화면 가운데로 정렬
 */
function jsViewLayer(id, idx, center){

	var lay = jsToArray(document.all[id]);

	if(idx == null)
		idx = 0;


	lay[idx].style.visibility = "visible";
	lay[idx].style.display = "";

	if(center == true)
		jsCenterLayer(lay[idx]);
	else if(center == false)
		setJsPopupPosition(lay[idx]);
}

/**
 * 레이어를 감춘다.
 * id 레이어 id
 */
function jsHideLayer(id){

	var lay = jsToArray(document.all[id]);

	for(var n=0; n < lay.length; n++){

		if(lay[n].style.visibility)

		lay[n].style.visibility = "hidden";
		lay[n].style.display = "none";
	}
}


//text 길이 체크
function jsTextLength(sObj, limit){

	var key = String.fromCharCode(event.keyCode);

	if(event.keyCode != 32 && event.keyCode < 47)
		return true;

	var src = sObj.value;
	var len = src.length;

	if(len > limit){

		alert(limit + "자를 초과 입력 할 수 없습니다.");

		sObj.value = src.substring(0, limit);
		return limit;
	}
	return len;
}


/**
 * 문자열 입력 모니터
 * len 입력값을 초과하여 입력하면 오류 메세지 출력(한글은 길이 2로 계산)
 * <textarea OnKeyUp="jsLenMonitor(10);" maxbyte="30" hname="테스트"></textarea>
 */
function jsLenMonitor(len){

	var obj = event.srcElement;

	if(len == null)
		len = parseInt(obj.getAttribute('MAXBYTE'), 10);

	if(isNaN(len)){

		doError(obj,"{name+에에} 대한 최대 문자 수가 설정 되지 않았습니다.");
		return false;
	}

	var slen = obj.value.bytes();

	if(event.keyCode != 32 && event.keyCode < 47)
		return true;

	if(slen > len){

		doError(obj,"{name+은는} 2최대 한글"+ Math.round(len/2) +"자, 영문"+ len +"자 이하로 입력해야 합니다.");
		//obj.value = obj.p_value == null ? "" : obj.p_value;

		var tmp = "";
		var tmp_len = 0;
		for(var n=0; n < slen; n++){

			tmp_len += (obj.value.charCodeAt(n) > 128) ? 2 : 1;

			if(tmp_len > len){
				obj.value = obj.value.substring(0, n);
				break;
			}
		}
		return false;
	}
}

function loadFlash(nm, width, height){

	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+ width +'" height="'+height+'">');
	document.write('<param name="movie" value="'+ nm +'">');
	document.write('<param name="quality" value="high">');
	document.write('<embed src="'+ nm +'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+ width +'" height="'+height+'"></embed></object>');
}

//이미지 버튼 롤오버 설정
/* 예제
<img src="../image/button/BtnJoin_ot.gif" width="79" height="18"
	onmouseOver="jsSetImgBtn(this,'../image/button/BtnJoin_ov.gif');">
*/
function jsSetImgBtn(obj, ovImg){

	if(!obj)
		return;

	obj.style.cursor = "pointer";
	obj.onfocus = "blur();"
	obj.otImg = obj.src;
	obj.src = ovImg;
	
	obj.onmouseout = function(){
	
		obj.src = this.otImg;
	}
}



/*이미지 유효성 체크
 *
 *ex) <img onError="js_ImageTest(this);" onload="this.removeAttribute('iserror')" style="width:0px; height:0px; visibility:hidden;">
 */

function js_ImageTest(img){

	if(/^\s*$/.test(img.src))
		return;

	if(img.count && img.count > 5){

		img.iserror = true;
		alert("이미지가 아닙니다.");
		return;
	}

	if(!img.count)
		img.count = 1;
	else
		img.count++;

	document.imgLoadTest = img;

	document.imgTestReload = function(){

		document.imgLoadTest.src = document.imgLoadTest.src;
	}

	setTimeout("document.imgTestReload()", 100);
}

function jsSetDate(value) {

	var pattern = /^((?:19|20)[0-9]{2})-?((?:(?:10)|(?:11)|(?:12)|(?:[0][1-9])))-?([0-9]{2})$/;
	
	if(!pattern.test(value))
		return null;
	
	var y = RegExp.$1;
	var m = RegExp.$2;
	var d = parseInt(RegExp.$3,10);
	
	var cd = parseInt(jsLastDay(y,m), 10);
	
	if(d < 1 || d > cd)
		return null;
	
	var ret = RegExp.$1+"-"+RegExp.$2+"-"+RegExp.$3;

	return ret;
}