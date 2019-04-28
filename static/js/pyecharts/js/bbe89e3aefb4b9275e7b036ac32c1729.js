(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('万秀区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450403","properties":{"name":"万秀区","cp":[111.320518,23.472991],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CA@CIAGBALE@CABEI@CAE@EAAAABCAAFEBC@@D@@@@@@@@A@A@@@@@EF@@@@FLDL@@BBBBDFDD@ARJ@DB@L@B@H@@H@D@DABA@@B@DA@@D@BAB@@AB@@B@@@DA@@BB@BDDABCB@@@B@D@@@@@B@BA@@B@@A@@BA@@BA@@@@@ABDD@@@B@@AB@@@B@@@@@B@@@B@@@B@@A@@@@B@@ABIC@@@@C@CD@@CCk\\yhAB@@ID@D@BALBF@@FFBF@@@@BB@@BBFARBB@@BB@@BB@B@@@B@BBB@A@@B@BAB@BAB@@@@BB@@@B@B@BBB@@B@@@@@BB@@@@@BB@@FDHB@@@H@@@BB@@BA@@@@@@@@B@@BB@@@A@@@@B@@@@A@@@@@BBA@@@@@@B@@AB@@@@@B@@@@B@@@@@@@@B@@@A@@CB@BAB@B@@A@@BA@@@@AA@@@@B@@@@A@@B@B@@@@@BB@@@@@@@@B@@@BA@@BB@@@AB@@@BB@@@@B@@BB@@CB@@@@AB@@@D@@A@@@@B@@@BA@@@AB@AE@@@@@@BB@@@@@B@@@@@@@A@@@@@@@@B@@AC@@@@@@@B@@@D@@@@@B@@@@BB@@A@@@@@ABA@@@@@A@AA@@A@@@@@@@@A@A@@AA@@A@@@ABB@@@@@@@A@AB@@@@@@@@@@@@@C@@@@A@@BA@AA@@@@A@@@@A@@AAA@AA@@A@@@A@@BA@BB@@@@@@@@B@@BB@B@B@B@@@AB@@A@C@@@A@A@@@A@A@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@@BA@@@AD@@@@@BA@@@A@@@A@@@@@AB@@@@@@@B@@A@@BABDD@@@BDB@@BB@@@@@@@BAHB@BBB@@@@BB@BB@@@@AB@@@BA@@@A@@@@BBB@@@B@@@B@@@BB@ABB@@B@@A@@@BB@@AB@BB@BBBB@@B@@@@BBDBBB@@B@@@@@@@BBB@@@B@BA@@@@B@@AB@D@DCBBB@@@@@@@B@@@@B@@@@@@B@BB@@BA@@@@B@@@B@B@@@@BB@@BBBBDBB@@@AD@@B@@BABAB@@@B@@@@A@BB@@@@BB@@@B@@@B@B@@A@@B@@@@B@@@ABA@A@@@ABABA@@@@BA@@@A@@B@@@D@B@B@BBBB@@@@B@B@@@B@@@BB@BB@@@@BBB@BB@@B@BB@@@@@B@@@B@@@@@@@B@B@B@@@BB@@BB@@B@@@B@BB@@BB@@B@@@@B@@@B@BBB@B@B@@@B@@BB@@@@@@@B@@@B@B@B@B@B@@@B@@@BB@@B@@@@@@@BB@B@@@@@B@@B@@@BB@@A@@B@@BB@@BB@@@B@@B@B@@@@@B@@@BB@A@BB@@@B@@@@B@BBB@@@B@@B@@@B@@@@@@@B@B@@A@@B@B@B@@@B@B@D@@@DB@@B@@@B@@BB@BB@@BB@@B@B@B@@@B@@@B@B@@ABA@A@@B@BA@@BA@@@@@A@@BA@@@@B@AABAB@BB@@B@@BB@@@DB@@@ABB@@F@@@@@B@@AB@BAB@BAB@B@@@BBDABB@@@A@@@ADBB@@BB@@B@@A@@B@BDD@BBB@@@BB@B@B@B@BA@B@@B@@@B@@B@@B@B@B@B@B@@@@@BA@@@A@@@@@A@A@@@ABA@A@@@AA@@@@AB@@AAA@@@@B@@AB@F@@@BA@@@@@@B@@@B@@@@@B@@AB@@A@@@AA@@A@A@@@A@@@@AAB@AA@@AB@@@AA@@@@@A@@@@@BABA@@@@BA@@B@@@@B@@BA@@B@B@BA@A@@BA@@@@@@B@@@@@BA@BB@@@BA@@B@@@BA@@B@@@B@AA@@BA@@BCDA@AACBABCAC@A@AA@BC@A@AB@@A@ABAAAA@@A@@@A@A@@@@@@CA@@A@A@AB@@CAA@A@A@A@@A@@@@A@@@A@@@A@A@@@CBAA@@C@A@@A@@C@@@BA@@@A@A@C@@@A@A@@@@@A@ABADC@A@ABA@@@A@@AA@@@ABA@@@A@@B@BA@@BC@AAC@A@AA@@A@@@@@A@@@@B@@ADE@@@A@C@@BC@A@A@AB@@A@A@@@@AAAABA@A@A@@@@@A@@@AB@@@@A@@BA@@@A@@@@BA@AB@@@@A@@A@AC@@AAA@@@AA@@@A@@@AAAA@@A@@AAB@@A@@AA@@@@@A@@BA@@@@AA@@@@@AB@@@BBB@@ABA@@B@@A@A@A@A@@BA@@@A@@@A@@BAB@@@@AAA@@BA@@@A@@A@AA@@BA@@B@@A@A@A@@A@@AA@A@@@@A@@@A@@CC@@@@ACB@@@@A@@@@AA@C@@B@@C@@B@DC@@@AA@@A@ABC@AB@A@A@@ABAEIA@CA@@AABCAA@A@@AA@C@A@@A@ACAA@A@@ABA@AB@@ECAA@@F@B@BA@@@BB@B@BA@AB@@@@B@B@@B@DA@@AADC@@B@B@B@@@B@AB@@@@@B@BA@@BB@@BB@B@@A@@@@AA@@@A@@B@@AB@@@@B@@@B@@B@@@B@@@@@@A@@A@AA@A@@@@DA@@B@@@B@BBBBF@B@FAB@@BABBB@@BB@@B@@A@@B@B@B@B@@@@@B@D@@@@@BB@@BAB@BA@@@@@@BBB@B@BABBB@@@B@@@B@@@BABB@AB@@C@@BABE@ABA@ABA@CB@B@@@BCDCB@@@@@@@B@B@D@@@B@@BDAB@BAB@@@B@BB@ABBB@B@@AB@@@@A@@@@@ABAB@@@B@B@@@@B@@D@@B@@B@@@B@B@@@B@B@@@@@@B@@BBBD@B@B@B@@BBB@@B@@@@BDBBD@BA@@BB@@BA@@BDB@B@BB@B@BB@@AD@@BB@@@@@B@@B@B@@BD@@B@@@@@B@@B@@BB@BB@@BB@@@B@@@B@B@@@BB@B@B@@B@BB@@@B@BD@@@B@@ADABB@ABBB@@@B@D@@BB@DC@AD@BBB@BBBABBB@DA@@D@B@B@@BDB@DBBB@B@B@DBBA@@B@@@BABA@@AC@GAE@ECGBKBICEGECI@CCEEEAACC@KCCC@AGE@IDIOCCBEGGEGIAGI@EAKM@ODG@UBAC@E@ACABCDGEAAEACCE@AFM@CEKC@AMBG@@CC@MGG@@A@A@@B@@AB@@ABA@AB@@C@A@AAA@A@@@AB@BC@@@AD@@ABCBA@@@@@@B@BABADA@@@@@CBAA@@A@AAA@@BA@AB@@CBA@A@AACDA@A@AACAABAA@@A@A@A@A@@@A@A@@CKBABA@ABA@AAA@AAA@A@A@A@EB@B@BC@AD@@C@AA@B@B@B@B@B@BA@@B@@A@@BA@@BCB@D@@A@"],"encodeOffsets":[[113976,24001]]}}],"UTF8Encoding":true});}));