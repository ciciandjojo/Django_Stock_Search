(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('深圳市龙华区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"440309","properties":{"name":"龙华区","cp":[114.045422,22.696667],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@@@BB@@B@@@@@@@@@B@@@BA@@@@@@@@@@@@@A@@@@@@@@B@@A@@@@@@@@@@B@@@@B@@B@@@@@@@@@@@B@@@@@@@@@B@B@@@@A@@@@@@@@B@@@@@@@@@@A@@@@@@@@F@B@@@@@@@@@BB@@@@@@@@@@@@D@@@@@@@@@B@@@@@@B@@B@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@B@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@BBA@@@@@@@@@@BA@@@@@@@@@@@@@@B@@@@@@@@@@AB@@@@@@@@@@@@@B@@B@@@@@@@@@B@@@@@@@@@@B@BB@@@@D@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@A@@@@@@B@@@@@@@@@B@B@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@B@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@BBD@@@@@@@@@@BB@@@@@@@@B@@@@B@@@@@@B@@@@@@@BA@@@@@@@@BC@@@@A@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@AB@@@@@@@@A@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@DC@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@AA@@@@@@@@@@@@A@@A@@@A@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@@@@@F@BA@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@BA@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@BA@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@B@@@@@@@@FB@@@@@@B@@@@@B@@A@@@@@@@@@@@@@@@@@C@A@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@DA@A@@B@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@DCBCB@@A@@@AA@@@@ADAB@@@@@@@@@@@@@B@@@@@BBBB@@@@@BB@@@@@@@BBB@@@@@@@B@@B@@@@@@@@AD@@@@@@@@@@B@@BB@@@@@@B@@@@B@@@@@@@@@@B@@B@@@@@@@@@@@@@B@@A@@@@@@@@B@@@@@@A@@@@@@@@B@@@@@@@@@B@@@@B@@@@@@B@@@B@@@@@@@DABA@@@@@@A@@@@@@@@@AABADBD@B@BBBA@@@AAC@AB@BABE@@@A@ACA@ADC@@@@BA@AB@BB@@BA@@@@BC@@@@@@@@BKB@FA@@BAD@A@@ACCAA@@AA@A@ACE@A@ACAAA@CC@@B@AA@@@@@A@@AA@ABAA@AAAAA@@@@ABAC@A@@@A@@@@@@@@@@@A@@BAA@B@@@@A@A@@@A@@@@B@@@@@@A@@B@@AB@@@@A@@BAB@@@@@BAB@@@@@BB@@@A@@@@A@@@@A@@@@@@@@@@CA@@A@C@AC@A@AB@BC@AFG@A@@@C@ABGA@CA@@ECA@AA@@@@@@@@@@@AA@@CA@CE@@CBCB@@@B@B@BA@@BA@ABAF@BAB@@@B@@@@@@@@@@@@ABADCBA@@AA@@AA@A@A@CBAB@@@@@@@A@@@@@@@@@@@@@@@@AA@AAAEC@@CC@@@@@@EE@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@AAED@A@@@A@@@@@A@E@A@A@@@@@@@@@@@E@@@@BC@I@@@@@A@G@CAA@@@@@A@@@@BA@@@ADC@@AA@@@@@@AA@@@@A@@@A@@@@@AB@A@@@@@@@@@@@@@@@C@@@@B@@C@@@A@@A@@@A@@C@A@@@@@@@@@@@@@@B@@@@@@AB@@@B@@A@@A@@@@@@@@A@@@@BA@@B@@A@@B@@@@@@C@A@@@AD@@A@@@A@A@A@@@A@A@ABA@A@ABA@@@@@@@@AA@@@@@@@@@AAA@ABAB@DE@@B@B@@@@@@A@@@@DC@@BBB@BABADC@AAA@@AAAAAAA@@AAA@A@@CBC@EB@@A@@AA@A@@@@@CA@A@@AC@@AAIBABAB@@C@@AA@A@A@A@A@@AC@C@EAAAA@ABA@C@C@@@@BBJBD@@@@B@@B@@@@@@A@@@@D@@A@AB@@ADBD@BADADA@C@CB@@@@@@A@@@@@@@@B@@@@CDA@@@GJ@B@B@FEF@@A@@BAB@BA@AB@@@@@BAD@@@@A@A@A@@@ABA@C@@@AA@@@B@@@@@BAB@B@B@B@@A@@BABABABCBA@A@A@ABA@@@A@A@@@C@@@C@AA@@A@ABA@ABAD@BA@@AC@AB@B@@BBBB@D@D@BAD@B@@@B@@D@B@@B@B@B@@DB@B@B@B@@@@BB@@@B@B@@@@@B@@@B@@CDAD@BCB@@@DAB@BBBBBBBB@AB@B@@BBB@B@B@@D@BBBBBABA@@DBBADDBA@@BA@BBB@B@B@BBE@@BDD@CDB@B@B@@A@@@AB@@@@A@@@A@A@@@@BD@@@AB@@@BCA@DB@@@BFBB@@A@BB@B@@B@@B@@@B@@@BA@@@@B@@B@@@@@@@@@@@B@@@@@@@@@@B@@@@@@B@@@@@@B@@@@@@@@B@@@@B@@@@@@@@@@BB@@@@@@@@@A@@B@@@@@@BB@@@@@@@@@@@BB@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@BB@@@@@B@@@@@@@@BB@B@@@@@@@@BB@@@@B@@@@@@@B@@@@B@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@BB@@B@@B@@@@@@@@@@@@B@@@@B@@@@@@@@B@@@@@@@BB@@@@@@@@@BB@@@@@@@BB@@@@@@@@B@@B@@B@@@@@@B@@B@@@@@@@@@@@@@@BB@@B@@@@@@B@@@@@B@@@@@@@B@@@@@@AB@B@@@@B@DBB@D@@@@@B@@@@@@@@A@@@@B@@@@@@@@B@@@AB@@@@@@A@B@@B@@@@A@@@@@@@@@A@@B@@@@@@@@@@ABA@@B@@A@@@DBBB@@AB@@@@@@@@@@@@@@@@@@@@A@@B@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@CB@@A@@@@@@@A@@B@@@@AB@@@@@@A@@@AB@@AA@@@@@@A@@@A@@@A@@@A@@B@@@BB@@@@BA@@B@@@@@BB@@BBA@@B@@@B@@@@@BBBB@@@B@@B@@@@@BB@@B@BB@@@@"],"encodeOffsets":[[116739,23310]]}}],"UTF8Encoding":true});}));