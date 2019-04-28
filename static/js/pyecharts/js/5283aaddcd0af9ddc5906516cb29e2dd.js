(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('五常市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230184","properties":{"name":"五常市","cp":[127.167618,44.931991],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@@@@@ABABA@ABA@C@@@CBAB@@ABA@A@A@A@ABCBABA@@@@@AB@@B@@B@BA@@@ABA@A@@@A@@B@@A@ABA@@@@@@BB@@BB@@BBB@@BB@B@B@@BB@@@B@B@@BB@@AB@B@B@@BBB@@@@B@@@BAB@@@B@@BBAB@@@BAB@DAB@@@B@@@BBB@B@BB@@B@@AB@BA@A@@BA@BB@B@B@@@BAB@BA@CB@B@@AB@B@@BB@BBB@@@B@@@@@@AB@@A@ABA@@B@BA@@@@BA@@@AB@B@@@BAB@B@B@B@B@@@BAD@@BB@BB@@B@@@@AB@D@@@@BB@@@@@B@@@@@B@@@@@B@B@@@B@@@B@@@B@@@@@B@B@@@B@@BB@@@@@B@@@B@@@B@@@BB@@@@B@@@B@@@@@B@B@B@@@@@B@@@@@B@@@@BB@@@B@@@@@B@@AB@@@B@@@B@@@@ABAB@@A@@B@@AB@B@@@BA@@@@@@@@AA@AA@@A@@@A@@@A@@AA@@@@@AA@@AA@@AAAA@@@@@A@@@@AA@@@@A@@AA@@@@A@@A@@A@@@@@A@@@@@AA@@@@@A@@A@@@A@@@@@A@@@AA@BA@A@@@@@A@@@@AA@@@A@@A@@A@@A@@AA@@A@@@@@AA@@AA@@@@@A@@@AA@@AAA@A@@@A@AAA@AAC@AAAA@@A@@@@AA@@AA@@@AA@@@@@@CBA@A@ABA@A@@@@B@@A@@@ABA@ABA@AB@@@@@@@B@@@B@B@@@BA@@B@@AB@@A@A@A@ABA@@@A@AB@BA@ABABABA@@BA@@BA@AB@@A@@@AB@@@@A@CBA@@B@@@@AB@@ABA@@@AB@@@BA@@@@@@AAA@A@@AC@@@AA@@AA@A@AAA@@@@BA@A@A@A@@@A@@@@BC@A@@@AB@@ADCB@BAB@BAB@BA@@BA@@@@B@@A@A@ABABC@@BABAB@BAB@@@BA@@@A@@BABAB@BA@@BB@@@@B@@ABCB@BA@@BAB@BAB@B@@@B@@@BA@@BA@@B@@ABA@A@AB@@ABA@ABA@@@@@@@B@@B@@B@B@@@@BB@BB@@@@BD@@BB@B@@B@@@@B@@BB@@BB@@@@B@B@@@@@@BB@@BBB@B@@@B@@@@BB@@@@AB@@@BB@@@BB@@DDB@@BB@@BB@DB@B@@B@@B@@@B@@@@BBB@B@@@B@B@BA@@B@B@@@B@BB@@@@@B@@@B@BAB@@AB@@@@@BA@@B@BA@@@A@@@@D@@@BA@@BABAB@BA@@@@B@@B@@B@@B@BBB@@BB@@@BB@@B@@B@@@@BB@@BB@@@@@@@@AB@B@@AB@@@BB@AB@@@@A@AB@@AB@@@@ABA@A@AB@@AB@@AB@@@B@B@BA@@BA@@@A@@B@BA@ABA@A@A@ABA@@@ABA@@@A@@@A@@@ABA@ABA@ABAB@@@@@@@BB@@@AB@BAB@@AB@@@@A@A@@@A@ABA@@AA@@@@@ABA@@BA@@B@@A@AB@@A@@B@@@B@B@@@@@BA@@@A@AB@@@B@BAB@@@B@BA@@@ABA@AB@B@@@@BB@@@B@@@BAB@B@BA@@@ABA@A@A@A@A@AB@BA@@BABA@ABAB@@AB@BAB@B@@@BA@AB@@ABA@A@@@AB@@@@ABA@AB@@AB@@A@@@A@@B@@AB@@@@@@BBA@@@@@@@A@A@@@A@@@AB@@ABABA@AD@@@@AB@B@@@BAB@B@@@BA@ABA@ABA@AB@@@@CAA@A@CA@@@@A@@@@@@@@@@@@@@B@@@B@D@@BB@B@BAB@B@BB@@BBBA@@B@B@@@BA@@BAB@@@B@B@BA@@B@@A@CDABAB@@CB@@AB@@AB@BA@A@A@@B@BA@@B@@@B@@A@A@A@AB@@@@ABA@AB@@A@A@@@@@@@@@@@@@@@AB@@A@A@@@A@@@@@A@@@A@@BC@C@@@A@@@@@@@@@A@@@ABA@@BAB@@@B@@@@@@@@BB@@@@@B@@@@@@@B@DBB@B@@@@@@@BB@BB@BB@@BBBB@@BB@B@B@@B@@B@@B@@@B@@B@@@BB@@BBB@@BB@BB@@BB@@BB@@BB@@@BAB@D@B@B@@@@@BB@@BBB@@BB@B@@B@@@@B@@B@@@@@@@@@BB@@@B@@@B@@A@@B@BABABAB@@AB@BABAD@BA@@B@@A@ABC@AB@@A@ABA@A@ABA@C@AB@@A@@BA@C@A@A@ABA@@B@@@B@@@B@BBB@@@BA@@@A@A@A@@B@@ABABABAB@@@B@BA@ADA@@B@@@B@@BBA@@B@@@BB@@B@@@@A@@@A@A@@@A@@BA@@BA@@B@B@@AB@B@BB@@B@BBBB@@BDB@BBB@@BBBBBB@@BBBBBB@B@@@BAB@BAB@@AB@@@B@@A@@@@BA@@@A@@@AB@@@B@@@B@BA@@@@B@B@BA@@@@B@@@B@@@B@@@@AB@@@@B@@BB@@@B@@@B@@@B@@@B@B@@@B@@@B@@@BB@@@@B@@BB@@@@@@@@B@@B@@B@@@@@BA@@B@@@@@@@@BB@@@@@BB@@@@BB@@@B@@@@@B@@@BB@@@@@BB@@@BBB@@@B@B@@@B@B@@@@@B@@AB@BA@@B@B@@@@@B@BB@@B@@@B@@@B@@BB@@@@@BAB@@@B@B@@@BB@@B@BB@@B@@@@@@@@@@@@B@@B@@A@@@@@A@@@ABABA@@@@BAB@@ABA@@B@@@B@B@D@D@B@@@B@@@B@B@B@B@B@DAB@B@B@B@B@B@B@@BB@@B@BB@@B@@B@B@@@@@B@@@@@B@@@@@B@@B@@AB@@B@@B@@@BBB@@@B@@B@@B@@@@@@B@B@@@@B@@@@@B@@@B@B@BA@@B@@B@B@@@B@@BB@@@BB@@B@BB@@B@@BB@B@@@BB@@@@@BB@@BB@B@@@B@@@B@@@@BB@@BB@@BB@@@BBB@B@@BB@B@@@@@@@@@@D@BAB@B@@@@A@@B@@A@@@@B@BB@@B@B@@@@A@@@@B@B@BC@CBAB@BADABCH@@AD@BA@A@@@AA@@A@CBA@AB@@@B@@@B@@@@C@@@@@@A@@@AA@@BA@A@A@AAE@A@ABA@@BA@CB@@@@@B@BABA@A@AAA@@AA@@AA@C@ABABA@CACBA@A@CBA@ABCBCDAD@B@B@BB@@B@@CDABA@CBCBE@AB@@@BBBA@A@A@A@ABCBA@A@@@ABAAAAA@C@C@A@@B@DABA@ABA@@BADA@A@CAA@A@C@A@@@E@ABABA@A@A@@B@BA@ABEDA@A@A@A@@@ABC@A@AA@@AAA@A@C@C@A@C@ABABB@@BABA@CBA@@@ABC@ABC@C@C@A@ABABC@A@A@A@ABA@ABA@@BABABA@ABBBB@@BABADA@ABA@@@C@A@A@@@A@@A@@A@@@A@@AA@@@A@C@A@C@E@E@CBG@A@G@C@C@E@EBC@E@C@E@C@I@CBC@A@G@C@A@A@A@A@A@A@@@A@A@@@@@A@C@A@AB@BAB@@A@A@A@@@C@@@A@ABA@@@A@A@A@A@A@A@E@A@A@CBC@C@A@A@A@C@C@E@A@EBC@C@CA@@A@@A@@@A@@@@@AA@@@AA@@AA@@@@@A@@@@@@@A@@@@@A@AAA@@@A@A@@BA@@@@@@AA@@@AAA@AAC@@AA@AACA@@A@@@@@A@@A@@@@A@@A@AA@@@A@@@@A@@@CBA@CB@@A@ABA@@@@@@@AB@@A@@@@@@@@@@B@@A@@@@AA@@A@B@@A@@B@@A@@@A@A@@@@@AB@@@BA@A@A@A@@@A@CAA@A@@@@@CBABCBAB@B@@A@A@@AA@@@A@A@A@AAA@@@A@ABC@A@ABA@ABA@@B@@@@@B@@BB@@@@@B@B@B@@B@@BB@B@B@@@@B@B@@@B@@@B@@@@@@B@@@B@@@B@B@B@@@B@BBB@@B@@BBBBB@BB@@@B@@AB@@A@@BA@C@@BA@AAC@A@@@AAA@@@@BA@ABA@@BA@ABAB@@AB@@A@A@A@A@@@A@A@A@@@CA@@AAA@@A@@A@A@A@C@C@A@A@A@@@CAA@C@@@@@@@AB@@@@@@GA@@@@@@AA@@@@@@@@@@GEA@GFC@@@A@@@A@CA@@@A@ABAD@BAD@@A@A@AACGGA@A@A@ABA@A@AA@A@A@C@A@@@AA@@@A@CCAA@BAEEAA@@AD@AAA@ABAAA@C@CA@@A@@AB@BAA@@AA@C@CA@@@AB@B@B@ACA@A@A@A@@@A@@BA@@@@@A@@@@AA@@@AB@@A@A@A@ABA@A@@@ABA@ABA@ABA@ABA@@B@@AB@@A@A@@@A@A@A@A@@@@@AB@@A@@@A@AA@@A@@@A@A@@@A@@@A@@@A@A@A@@@C@A@A@A@@@A@@@@@@AA@@A@AAA@AAA@@AA@AA@@AAA@@@ABC@@BA@@@@AA@@@A@@@A@A@A@@@@@A@@@A@A@@@AA@@@AAA@C@AA@@AAAAA@CAAA@@@@AAAACC@@AA@@CAAA@@@@AA@@@@AAA@AA@@AAAC@@AA@AA@AAAA@@CACACA@AA@@@E@@@A@@@@BABABADA@@@BBAD@B@D@@AB@BAB@B@B@@@B@@@D@B@@@@AB@@AB@@@@@B@B@B@@@@A@A@@@A@@@IF@@@@@B@@@B@@@@@@@@@@@BA@CAA@@@@BA@AB@B@D@BB@D@D@B@@B@@@B@@@@@B@BA@@B@@BB@BHDB@@@B@@@BB@@@@B@@@BB@@@@@BA@@@@D@F@D@B@D@BB@@@@BB@@D@@@@AB@@@@@B@@AB@B@@@B@B@@@BABBB@B@@@@AB@@@B@B@@BB@@BB@@BB@B@@@B@BBB@B@B@@@@@B@@@B@@@@@B@B@@AB@B@@A@@BCDA@@BCBA@@@@B@@@BBB@B@@A@@@A@A@@@AB@B@@@B@BBB@@@@@B@@@@@@@@@@@BA@A@@BA@AB@B@B@@@@@DFFBD@D@D@BBB@DBBADB@@B@DAB@B@B@BBB@B@@@B@@@B@@@@@BB@DLBBBD@@@@AD@@@@@B@@@BAB@B@@AB@@AD@@ABABCBABA@@BC@@B@@@B@@AB@BABCDCDCD@@@BA@@@@B@@A@@@A@@B@@@B@@@@@BB@AB@@@@AB@@ABCBCDADAB@BA@@B@@ABAB@@AB@@@@A@@BA@@@@B@@AB@B@B@@A@@B@@@@@@ABAB@@A@@@A@ABA@@B@@AD@B@B@D@DBB@@@BA@@B@@AB@@@B@@@BA@@B@@A@@BBB@B@@@B@@@BAD@@@B@@@BAB@D@@A@BBA@@@@B@@AB@@@@@B@@@@@B@@AB@B@@@@@B@B@B@@@BAB@B@@AB@B@DA@@B@B@B@B@B@B@F@B@@AB@@@B@B@B@BA@@B@@AB@@BB@@BB@@@BBB@DBB@@BDB@B@BBBB@@B@@B@@@@@B@@@@@B@@@B@B@@@B@B@B@@@BBB@@@B@DBBB@@BBB@@BB@@B@BBB@B@@BBB@@@@A@@B@B@@@D@B@@@D@@@D@@@B@B@@@B@@A@@B@@@B@@@B@@@@AB@@@BA@@@@B@@@@@@@B@@@@BB@@@@DD@@@@@@@@B@@@BD@BBB@BBD@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@BBDDBB@BB@DBBBB@@@BB@@DBB@@@@@B@@@@@@B@D@@@@BB@@@@B@B@B@@@D@B@B@B@BBB@@@BBB@BBB@@BB@@B@@DBFBB@BBB@B@@@B@DBB@@@DAB@B@F@N@@A@@D@@B@@B@@@@@D@J@@@@@BBAD@B@BBB@B@DBB@BAB@BB@D@BABABCD@BABBB@BD@FBB@BBBBB@BBF@DAFEN@DABBBBBF@DABBB@@B@BGH@@AB@BAB@D@B@BABA@@@@@C@CAAAC@C@AB@B@BFFBB@@@BABABCBE@CB@@AB@B@BBD@@@BB@ABABADABCB@BADCDGBCB@BBB@DABCBA@CACBCBCDA@AAAEC@C@C@ADBD@BDBDDFDDBHD@BABAB@@A@IBCAA@C@AD@F@D@BABEFWHEBGF@D@DBD@DABGDAB@B@B@D@BCBC@CBCBADAD@FADABEDCBAFCBADABEDCBA@EACBC@GDEHDBADAD@@AF@DFF@@@DBDABBBDHADAHCDADADBFDF@BABABC@C@C@A@@BEBCB@B@BBDBD@BDBBBDD@@BB@BABEFCBC@O@@@A@GBECAAACAAEAAACAC@CB@B@BAFAFAB@BCBABE@I@QCEAE@C@ODC@A@C@C@IECACACBA@GDA@A@GBEBADCD@@CAA@AACEAEEAGECAAAE@CBCF@L@FABCBGBCACAAAEKAAEAAAA@CBCBEBE@ECECC@C@ADAB@DADADAB@BBJAF@D@DABADGBSHCFINGDE@CBE@IAIAGAGBEBAB@B@BBD@D@DABCBCBKAA@C@A@E@ABCAEAGAE@EBA@ABEAA@A@A@ABA@CAABA@ABCDABAD@@ABABA@ABC@GAC@ABCBCBABADAFCDCBE@ABCBA@ADC@A@ABGBA@@@AB@B@DDBHDBBBBADCBC@IAE@CBCBA@@BADAB@@CBA@AB@D@BABA@A@C@ABE@C@A@CBA@C@A@CBEJCBA@EBA@GBCBEBABA@A@A@C@CBCBCBC@E@C@C@CAC@C@E@@AAA@@A@AB@@@BA@@B@@@BB@BB@@@@@@BB@@@@BB@@B@B@B@B@@@B@@@@B@BA@@BA@A@AB@@@BB@B@B@@BH@HBB@B@@@BBFDBB@B@B@B@BB@@@@B@B@@@BD@@@BB@B@@A@@@@B@@@@D@@@ABA@@B@@@@ABA@A@@BABBB@@DD@BBB@@B@@@@@D@B@DC@@D@BB@@B@BBAB@@CAAB@@BB@@BBB@@@BBBBF@@@@@DD@@BDBB@DABC@@B@@@B@@ABBB@@DBD@@@BBBD@AB@BA@A@@@@BB@@B@B@@@B@@@@A@@BAB@B@BBB@@@B@B@B@@@@A@@B@D@B@@B@D@DBAB@@@BD@FF@B@@@@A@CH@@BAFAB@DF@FBB@B@@@@B@B@@@@DBD@F@FBD@BFB@B@D@B@B@@@@@@@@BB@@B@@B@BB@@@@@@B@CB@@@@@B@@@@@@A@@B@@@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@B@@@@@@@@B@@@@@@B@@@@@@A@@@@B@@@@@@@@A@@@@@A@@B@@@@@@@@A@@@A@@@@B@@A@@@@@@@@@B@@BB@@@@B@@@B@@@B@B@@@@@@ABA@@@ABA@@@@@@B@@KC@@@B@@AB@@@B@@B@@BB@@@@B@@@@A@@@A@@@AB@@@@@BB@@@B@@@@@@B@B@B@B@@AB@D@@@B@@AB@@@B@@@@@B@@@@@@A@@@@@@@AB@BA@@@BB@BBD@BBB@@@BB@@D@BBB@BAD@B@BAB@B@BAB@@ADADADBBCF@BA@AACACACFAD@D@D@B@B@B@@@B@B@D@@AD@BCD@BCD@@@@@B@BAD@@@BA@@B@B@@AB@@@B@@@@AB@B@@@BADB@BB@@@@DB@@B@BB@@@@@@@B@@@B@@@B@@@BAB@B@@@@HDHBHB@@B@B@B@BBB@D@D@DIB@@@DBD@@@BA@ABEB@BEBAB@BBD@@@B@BG@AJDD@DBB@B@BBD@@@@ABC@ALBLBFBADAB@BD@@B@B@DB@AF@F@B@F@DJ@@KF@D@BAF@B@B@@@@@@@B@@A@A@@@ADELBB@B@B@AFBB@B@B@@@B@B@@B@DEBBB@@@B@@BB@B@DAB@D@BAD@D@FAB@@@@@B@DDDBB@@@@@@@B@@ABB@ABC@@@AB@@@B@FBFB@@@@@@@B@@B@B@D@D@D@B@B@B@B@@@BBFAB@D@@@@A@@@AB@@@@AB@@@FBDDB@@BB@@@@@BA@@B@@@@ADAB@DA@@BA@@@@@@BA@@@@@@B@@@@@@AB@B@B@@@B@DBB@B@@@@@B@@@@@@A@@AC@A@@@@@@BAB@B@B@BAD@B@@@BBDDB@@BB@@@@BB@BAD@@@@@@@@A@@@A@@B@@@BBB@@@@@@@B@@AB@B@DA@@B@@@@@@@B@B@@@B@BB@@B@B@@@BBB@@@B@@@B@B@@@@@@@B@@@B@@@BADAB@@AB@@AD@FAB@@@@@@@@A@@B@B@@@B@@@B@B@@@B@@@B@@A@@@A@A@@@A@@B@B@BBBAB@BAB@BAB@@@@A@@@@BA@@B@@@D@@@AA@A@@A@@A@A@@@AB@@A@AB@@@@@BA@AB@@@@@@A@@@A@@@@B@BAB@@@FAD@BAB@BAB@@A@@BA@A@A@@BA@@@@B@@@@@@@BAB@DADABAB@@ABABCDCDCB@BA@@@@BB@@@@BABABA@@@@@A@@AA@A@@@A@AB@BAB@@@BAB@BBB@B@@AB@D@BABA@AB@BABCBABCBA@@BA@@B@@@B@FABAB@D@@@B@B@D@BBDBD@HDBBFBB@B@FBDBB@B@B@BAB@B@B@B@BABBB@@@BBB@BBB@B@@@BBB@B@B@@@B@B@D@@@B@B@BAB@B@@BB@B@B@BB@@BBB@BBB@B@@@BBBAB@B@B@@@B@B@B@@@B@B@BB@@DB@@B@B@@B@@DB@@D@@ABABBB@B@@CAE@ABABCDADADBD@DAHAD@D@D@B@DCFCDC@AAC@AAA@ABC@E@AB@BABCDAHCB@B@@BDBBDB@D@DADCF@BBDBD@FA@@DEBCB@D@F@DA@ABAAC@C@CDADAFCDABAD@D@DBF@DADAB@D@B@BBD@H@B@DBBAB@@E@K@C@@BA@AAA@AAAAEB@@@BA@C@AAAC@@@CBAAA@AA@ABCBC@C@ABABABCBE@CAA@ABEBABABC@EB@DABADBB@@BDBDBD@BABAF@D@HBFBFBJDPFDBB@B@FANEB@D@@A@A@AE@EACAGECEAAAE@CAA@@ACBAB@D@B@JJBBBDBBF@D@D@F@DAH@D@B@BBDCBC@CBCD@BADEDEBG@AB@@A@A@@@A@AB@B@DADAB@D@B@HADAB@DBF@@@B@B@@@B@B@BAB@@@B@B@B@B@B@@@B@BB@@BBB@@@B@B@B@@@BABA@@BABE@A@AA@AABAHGB@BA@@B@BA@@B@B@DAD@@ABACACC@@BAB@@A@@@AB@A@@A@@AA@@AAA@@@@@@@@A@@@A@A@@BA@A@ABA@@AACAAAAA@@A@@@AA@@@@@@@@@A@@@@@@@AA@A@@@A@A@AA@A@AAAB@@A@@B@@@@AA@@@@A@A@A@@A@@@AA@@@@@@@A@@@@@@@A@@B@BC@@BAB@BAB@BABAB@@@@ADCB@@A@@BA@@@@@@@@BA@@B@B@B@B@@@B@DB@@@@B@B@@BBBBBBB@@BBB@B@B@@@BA@@BAB@@@@@DBDBBBBB@@B@@@@@@@BA@@@AB@@@B@D@B@B@B@@@BBBB@@BB@@@@@@B@DC@@B@@@B@B@B@D@BAB@B@BA@@@AB@B@@@B@BBB@BABBB@B@@@B@BAD@@@@@BAD@@@@@B@@AB@@@@@@@B@@@B@@@B@BA@@@@B@@@@@B@@A@BB@B@B@@@B@@@@BB@@@@@@@@B@@@@B@@BB@@@@@B@@@B@BB@@@@B@@BB@@@@B@@@@BB@@@@@@@BB@@@@@B@@BB@B@B@@@B@BB@@B@@@@@DAB@B@D@B@DAB@B@BA@@@@@A@@@@@A@@BA@A@@B@@AB@@@@A@@B@@A@@@@@@BA@@@A@@@@BA@@BABA@@@A@@@@B@@@B@D@B@B@B@B@B@B@@@B@@@@@BA@AB@@@H@F@D@B@BAD@B@F@@@@A@@D@@AB@B@B@B@DABAB@DC@@B@D@DAD@B@BA@@DADCFCFCDCDEFEFCBABCBAB@BCDABAHCB@AC@@B@@@DCBABABA@@B@@@D@B@@A@@@@B@D@@@BA@@B@B@@@BA@@@C@A@@@@@@B@B@DA@@@@DBFBDBB@B@@@@@@@B@@A@@@AB@B@@@D@B@@@DAB@@@B@D@BAB@@A@@BA@A@CBCBCBAB@BAB@BA@@B@@@BA@@BAB@BABABA@@B@@A@@B@@@B@BA@@B@@A@@@AB@@A@@B@@@@@BA@@BA@@@@BADB@@@@B@@AD@B@B@@@B@@@@ABA@@@@@AB@B@D@@@B@B@B@B@B@BA@@B@BA@@B@B@B@B@B@@AB@B@BA@@B@B@B@BBBA@@B@@@@AB@@@BA@@B@BA@@@@B@B@BAB@B@@A@@@A@@@@@@@A@@@A@@@A@@@A@@@@B@@A@A@@@C@@@A@@@@@ABAB@BAB@@A@@@A@@@@AA@@@@@@@@BAB@B@BAB@D@D@B@B@BA@@@@@A@@@@B@@A@@@@B@@AB@B@B@B@@@B@B@@@B@@A@@B@BA@@B@B@B@BCBAB@@@@A@@@A@@@A@@@@@@@@BAB@@@B@@@@AB@@@B@D@@@B@BA@@@AB@@A@AB@@@@@@BB@B@BB@@B@@AB@BA@@@@BA@BB@B@BB@BB@@B@BB@BBB@@@BB@@B@B@@BB@B@B@@@@@B@@@B@@@@BDB@BB@@@D@B@B@@ABAB@BAB@@AB@@@@@@ABA@@@A@@@AA@@A@@@A@@@@@@B@@AB@@@@@AA@A@@@@@AA@@A@@@A@@@@@A@@@A@@@A@@@@BA@@@A@A@@@A@A@@BA@@@@@@@@@@B@@AB@@AB@@@B@@B@@B@@@@@@@B@@@B@@@B@@AB@@@@B@@@B@@@@@@@@B@@AB@@@B@@BA@@B@@B@@@B@@BAB@@B@@B@@@@B@@@B@@@@A@@B@@@B@@@@@@AB@@@@@@@B@@@@@@@B@@@@B@@B@@AB@@@B@@@B@@A@@@@@@B@@@@@@A@@@@@@B@@@@@@@B@B@@A@@@@@A@@@@@A@@B@@@@@@BB@@@@A@@@@B@@@B@@@@@@@@AA@@@B@@@@A@@@@@@B@@A@@@@B@B@@@@@B@@@@AB@@@B@@A@@@@@@B@@@@@B@@A@@B@@B@@BA@@B@@B@@@@@@@@BB@@BB@@@@@A@@B@@@@@D@@@@@@@@A@@@@@@@A@@@@B@@B@@BB@@B@@@@A@@A@@A@@B@@@@@@@@@@B@@@@B@@@@@B@@@@@@A@@@A@@@@B@@@B@@@B@@@@@B@@@@@@@B@@BBB@@@@@@@@B@@@B@@@@@@AB@@@@@@@@A@@@@@@@@B@@@B@@@@@@@@@B@@@@BBA@@B@@B@@@B@@@B@@@@@@@@B@@@B@@@B@@@@A@@B@@@@@@A@@B@@B@@@@@@B@@@B@@@@@B@B@@@B@@@@@@@@A@@@@B@@A@@@AB@@B@@B@@@@@B@@@@A@@@@A@@@B@@@BA@@@@@AB@B@@A@@@@@AAA@@@A@@BAB@BA@@@A@@@AA@@A@AA@@AB@@AB@@AB@BAA@AAA@@AA@@A@@@A@@@A@A@@@A@A@@B@@@@AB@@A@@@@BA@@@AB@@A@@@A@A@@@A@@@@BA@A@AAC@@BAB@B@@A@A@@B@D@BAD@FABABA@@DAB@@CBA@@@@@A@@CCA@@AA@AC@A@A@@@ACAA@@@CCAAEA@@@@AA@@@CAA@@@A@@@@D@@@@ADABABAB@BC@@BADC@AB@@A@@B@DBBBDDB@DBB@BBBBBB@B@@@@B@@@B@BAB@B@B@B@@@B@B@B@@BB@D@@@BBB@B@DBDBB@B@@@B@@@B@B@@@@@B@B@@@BA@@B@@@BAB@@@B@BA@@B@B@B@B@B@BB@@@@@@DBBBB@@@DBBB@BB@BA@@B@@ABA@@BA@AB@@@D@@@B@B@DCB@@@BC@@B@B@@@B@@@@@@@B@@AB@BA@@@@@@BAB@BAB@@AB@@@BAB@BA@@B@@AB@BA@@B@@@@AB@@@@@@@@@BA@@B@@@@@@@B@@B@@@@BA@@BB@@@@B@@@@B@@@@BA@@@@B@@AB@@@B@@@B@B@@@B@B@@@@@BA@@BAB@@@BADA@@BA@@BA@@BA@@B@@A@@@@@@BA@A@@@ABA@@@@@AB@@@B@@A@@@@@@@A@@@AA@@AA@@@AA@@@A@@@A@@BA@@B@DADAB@@ABAB@@A@@@@BAD@BAB@BAB@B@B@B@F@BBB@B@B@@@BB@@@AB@@@@@B@BA@@@AB@BABA@@@AB@@AB@@A@ABA@@@@@A@A@@@@@A@@@@@@@A@@BA@@@@A@@A@@@A@@A@A@@A@@@A@@@@@ABA@@@@@A@@@@@A@@@A@@@@BA@A@AB@@A@A@@@AAA@@@A@@AA@@B@@A@A@A@@@A@A@@@AB@@A@@@@AA@@AAA@A@AA@@@AA@@@@A@@@@@A@@@@B@@@B@BA@@@@B@@@@AD@@@BAB@@A@@B@@@@A@@@A@@@A@@@AA@@A@@@A@@@@BA@@@@@A@@BAA@@A@@@@@A@@@@@@AA@@@@AA@@@@@@@A@@@@@@AA@@@@@A@@A@@A@@A@AACA@@@@A@A@@@AAC@A@AAA@@@CA@@A@A@@AAA@AAAAA@A@@@@AA@@@A@@A@B@@A@@@@B@@@B@@AB@@@@@B@@A@@B@@@@@@AA@@@B@@@@AB@BB@@@@B@BBB@D@B@BA@@B@@A@@B@@@DB@@@@B@@@B@BAB@B@B@B@BBB@@@BBB@B@@@DA@@B@@@B@@@@@@@@@@BB@@@@@B@@@@@B@B@B@@BB@@@B@B@@@@@@AB@@@@@B@@@B@@ABB@@B@@@B@@@@A@@@@B@@@B@B@B@@@@@@@@@@A@@@AA@@@@@@AB@@AB@@A@@@A@@@@B@@@BA@@A@@@@A@@@AB@@@@AA@@@@@@A@@@@@A@@A@@@@@@@AA@@@@@AB@@AB@@AB@A@@A@@@@A@@@@A@@@@BA@@B@@A@@@@BA@@@A@@B@BA@@@@@@@@@ABA@@@A@@@@BAB@@@@AB@@A@@B@@A@AB@@A@@@@@A@A@@CA@AAA@@@A@@AA@@@CB@@A@@@@@@AA@@@@@@A@AA@A@@@@@AB@BAB@B@BA@@BA@@B@@AA@@@@@BABA@AB@BA@@B@@@B@@ADAB@@AB@@AB@@ABAB@@@BABABCB@@AB@BAB@BAB@B@BAF@D@BBB@DB@@B@B@DAD@@@B@B@@A@@B@@@@@@@@A@@@@@A@A@A@AA@@A@AA@AAAA@@A@@AA@AA@@@AAA@@@AAA@@@A@A@AA@AA@A@A@@@A@@@@@CB@@A@@BA@@@A@A@A@AA@@AA@@@A@@A@@@A@A@@AA@@A@@AA@@@B@@A@@B@BABA@@@@B@B@BABADA@@@AB@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@D@@AB@@@@AA@@A@@BA@AB@@@@AAA@@@A@@@A@@@AB@@@B@@@BA@@B@B@@@B@@@B@BBB@BBB@BAB@B@@@@@@@B@@@B@@@@BB@@B@@@B@BB@B@DBD@D@B@@BBA@@@@@AB@@A@@@@@@B@@@B@@@B@@@D@@@B@D@B@B@@@B@B@BBB@B@@@D@B@B@@@B@B@@@B@B@B@B@@@BA@@BBBAB@B@D@B@@@B@BAB@@AB@BAD@@@BA@@B@B@@@BB@@B@BB@@B@B@@@B@B@@@@@B@@@@BB@B@@@B@B@B@DB@@B@@@@@@@DC@@BA@@BA@@@@@ABA@@@@@A@AB@@@@@@A@@@@@A@@@A@@B@@A@A@@@A@AA@@A@A@@@A@@@C@A@AAA@A@AA@@ACAA@CAAAAA@@@A@@@A@@A@@AAACAAAAAAAAAAAAA@C@@AA@A@ABA@@@@@A@AB@@A@@BC@A@@@@@@@A@@@A@@@@@@@C@@@A@@@@@AA@@AAA@AAAA@@AA@@AA@@@@A@@A@@@AA@@A@CACAA@CAAA@@AA@@@@@AA@@@A@@@A@@@A@@AA@@@AAA@A@AA@@C@AA@@A@@@@A@@@@@A@@AA@@@@@A@@AA@@@A@@BA@@@@@A@@@@@A@@@A@@AA@AAA@@@A@@A@@@AA@@@AA@@AA@@A@@@@@@@AAA@@@@@A@@BA@@@ABA@@@A@@@AA@@@@AA@@A@@AA@@@@@A@A@A@@@@@AAA@@@A@@@A@@@AB@@A@@@A@@B@@AB@@@@AB@@@BAB@B@BA@@B@@@B@@A@@B@@@@A@@@@@@@@AA@@@@@A@@B@AA@@@@@@@@@A@@B@@A@@@@@@@A@@@@@A@@@A@A@@@A@AAC@A@A@@@AA@AA@A@AAA@@@A@A@@@A@@BA@@BA@A@@@@@@@A@@@AAAAAAAAAA@@@A@A@@@A@@@@@A@@@@A@@@AA@@@@AA@@@A@AA@@@@A@@@@@@@@@@@@@@A@@AA@@@A@@@@@A@@BA@@B@@@@@@@B@B@B@BA@@BA@A@A@@@A@@@A@@@A@@@@@@@A@@@@@@@A@@A@@A@@BA@@@@@AB@BA@@B@@@@@@A@@@@@@AA@@A@@@@@@A@@@A@@AA@@@@@A@@A@@@AA@@@A@@@@@@@A@AA@@@@@@AA@@@A@@@@@@@A@@@@@@@@@AA@@A@A@A@AA@@A@@@@A@@@A@@@@A@@A@@A@@AAA@@@@@@A@@A@@A@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@A@@AA@@@AAA@@@@@A@@@AAA@@@A@@A@@A@@@A@A@A@@@@BA@@BA@@B@@A@@@A@@@A@@@ABA@@@@BAB@@A@@@@@@@@@A@@A@@A@@@A@@B@@A@@@A@A@A@C@@@@BAB@@@BA@@@@DABABAB@@@BA@@B@B@@@B@@@@@BA@@@AB@B@B@B@BB@@B@B@D@B@@@B@@BBB@B@@@@B@@BB@@@B@B@B@BAB@B@D@B@B@@BDBBBB@@B@@@@B@@B@@@@D@D@B@B@@@B@B@BA@AD@BAB@BCDADAD@BA@@D@@@D@D@F@@@B@BBB@BB@@B@@@B@D@D@B@D@D@F@B@B@D@DBF@D@B@B@@@@@BBBBD@BBBBB@BBD@@BBBB@@B@@BB@@@@A@@B@@@@@B@@@@B@@B@@@@@B@@@@B@@@@@B@@B@@@@@@@@@B@@@B@@B@@@B@@@B@@BB@@@B@B@@@B@BBB@@BB@@@B@B@@@B@@@B@B@@ABB@@@@B@@@B@@@@@@@B@BA@@@@B@B@B@@@@@B@BA@@B@@A@@@@BB@@B@@@B@@@@@B@B@@@B@@@@@B@BB@@B@@@@@B@@@B@DA@@B@B@B@@@@@BA@@B@@@B@@@B@@B@@B@@@@@@@B@@A@@@@@A@AB@@AB@BA@@@@@A@@B@@@BA@@B@@@B@@@@@B@@@BA@@B@@@@@BA@@BAB@@AB@B@@@BAB@@@DAB@DAB@@@B@B@B@B@D@B@B@BBBBDBBBB@B@D@@@BBB@@@B@@@B@BBDBD@BB@@DBFD@@@BB@B@@B@@BBB@@BB@@BB@@BB@BBDB@@B@BBBB@@B@@B@@BB@@BB@@@@@@BDB@BDBBB@@BB@@B@@BB@@@@@@BB@@@@@B@@@@@@BB@@@@B@@BB@@@@@@@B@@B@@@@B@@@@@@@@B@BABABA@AB@@@@@@A@@B@@@@@@@B@@A@@@@BA@@@AB@@@@AB@@@BA@@@@@@@@B@@B@DBBBB@@B@@AD@@@@@B@@@@@B@@B@B@B@B@BAB@B@B@BBBBBB@@@@@@BA@CBABAB@@AB@B@@A@@@@BA@@@@BAB@@AD@BAB@@@B@@@@A@AA@BA@A@@@@@AB@@@D@B@DAB@BAB@@@@@@ABA@A@A@C@@@@AA@AAA@@AAA@@AA@@AAAAAAA@@AA@@CAA@@@@AA@@AAA@@@@AA@@AA@@AA@@@@@@@ABA@@@@B@@A@A@@@A@@@A@AA@@AAC@@@@AA@A@@AA@AAA@A@@AA@A@AAAA@AAAAAA@@CA@@AA@A@@@AB@@ADA@ABA@A@@@@AA@@C@C@A@@@C@CAC@AA@@AA@@@A@AAAAA@A@@A@@A@A@@@ABA@A@A@@@AB@@AB@DA@@BA@@@@B@@AB@@A@AB@DAB@FAFABAB@BABABAB@@A@A@A@A@@AC@A@A@@A@@@A@C@C@A@@@A@A@@AA@C@A@@AA@@@A@@@A@A@@@A@A@A@CBC@@@A@A@@@AA@@A@AAA@A@@A@@A@@AA@AA@AA@@A@@@A@AA@@A@@AAEA@AA@@@A@@@@A@@A@@@@A@@@@@C@@@@@@@@A@@A@@@A@A@@@A@A@@@AA@@A@A@@AA@@@@@@@@@AA@@@@AA@@A@@A@@@@A@AA@@AAA@CA@@A@@@A@A@@@AA@@@@@@A@@@@@A@@@AA@@A@@AA@@@CA@@CAA@A@@@A@@@A@@@@@@BA@@@@@A@@@A@@@@AA@@@@@@@AA@@A@@@@@AA@@@@A@@@@@AA@@A@AAC@@@A@@A@@A@@@A@A@@AA@@@A@@AA@@@@A@@A@@AAB@@A@@@A@@@@@A@@@AB@@A@@@AA@@@@A@@@A@@A@@A@@AA@@@AA@ACAAA@@AA@@@AAAA@@AA@@@AA@@@@@@A@@A@@A@@@@AA@@@AA@AA@@@AA@@@AA@@AAAA@@A@AAAA@@A@@@A@@AA@@@A@@BA@AB@@ABAB@BAB@@@BABABAB@@@B@@A@@B@@A@@BA@@@A@A@A@@@@@A@ABA@A@ABE@A@C@A@A@A@@AA@AA@AA@AAA@@AA@@@AAA@AA@@A@@AA@@AA@A@@@A@@@A@@@@@@B@B@BA@@@ABA@A@@BA@@BA@ABA@@@@BA@@@A@A@A@A@C@CAA@@@A@A@@@A@@@A@@AA@@@@@A@AA@@A@@@ABA@A@@@@@AB@@AB@@A@@BABA@ABABA@@BCB@@AB@BAB@B@@@@AB@@@@@@A@@@A@A@ABA@@@@@A@@@@@AB@@@@@B@@@@@D@B@@@@@BA@@@@@@@@@A@A@@@@@@@@@A@@@AAAAAA@@A@@A@@@@@A@A@@@@@A@@@@B@@@@@@A@@@@@A@@@@@@AAACAAA@@A@@@A@@AC@A@@@A@@A@@@@@@@A@@AA@A@A@@@A@@@@@@@A@@A@@EC@@A@AA@@A@@@@A@@@@@A@A@@BA@@DCBABAB@@@BAB@@@B@@@B@B@@@B@BAB@@@@@@@@@AA@AA@@A@@AA@@@AA@AC@@AA@AA@@AAA@@@A@@@AB@@@BA@@BABA@@B@BA@@BA@@@@@A@AB@@A@@@@@A@@@A@@@A@@@ABC@@@AB@@A@@BA@@@A@@@A@@AA@@AA@@@@@A@@@@B@B@D@D@D@B@F@D@B@B@@@@@@@@A@@@A@A@@@@@A@AB@BCBABA@A@ABAB@BA@AB@B@BAB@@@B@@@@BB@@BB@BBB@B@B@@@@@B@B@BA@@@@BA@A@A@@AA@A@AA@@AAAAA@AA@@@@@AA@@A@@AA@@@CC@@AC@A@@@AA@@@AA@AA@AAA@A@AA@@A@AAC@AAC@A@@AA@A@A@AAAACAAAAAAAAAA@@AA@@A@@@A@A@A@@@A@C@@@A@A@CB@@A@@BABAD@BAB@@@D@BAD@D@B@@AB@BBD@DBD@DBB@B@B@B@@A@@@@@A@@@@@A@@@ABA@ABA@@@@@A@@@@@@A@@BA@@@A@A@AAA@A@@@@@@A@@@@BA@@DABCB@@@BA@@B@@AB@@@B@@@B@@@B@@AB@@@@ABA@@B@@@BA@@B@B@@@@@@@@A@A@E@@@A@A@A@AB@@A@A@A@A@@@A@A@AAA@@@@@@A@@@@@@@A@A@A@A@A@@@@@ABA@ABA@A@A@@@A@@@A@@A@@@@@ABA@A@@BA@AAA@@@A@A@A@A@@@A@@@A@A@A@@@A@@@AB@BABA@@B@A@@@@@@@AA@@AAA@@A@A@ABE@A@C@A@A@A@A@@@A@@A@A@@@A@AAA@A@A@C@A@ABA@A@A@A@A@@@A@@@A@A@@@A@@@A@AB@@@A@@@@@A@A@@@@@AA@@AA@AAA@@@AAA@A@@AA@A@@@@AAA@AAA@A@@@@@@@A@@B@BAB@BAD@DA@@BA@@B@@@@CBAB@@ABAB@BA@@@@B@@@B@@BB@BBB@B@B@B@D@B@@@B@@@BA@@@A@@@@@CAC@A@A@A@@@@A@@A@@@A@C@@@A@@BCBC@@BA@@BABAB@@AB@BAFAD@DAB@B@@@@@@@@@A@@AEAE@CAC@AACACCAAA@AAA@AAEAAA@@A@@A@@AA@@AAAAA@@AA@A@@@AA@@A@AACAAAAA@@AA@@@@AA@AAA@@@A@@A@C@A@@@A@@@@AA@AAAAA@@@A@A@A@A@@@@@@AAA@@A@@@AAA@@@A@@@@@A@@@A@CB@@ABA@CBCBA@@@A@C@ABAA@@A@A@@@A@AAA@AAA@AA@@AAAAAAAAAA@AA@@A@@EC@@AAA@CA@@@@A@A@A@@@@@AA@@A@@@@BA@@@A@@@@@AA@@A@A@A@A@@@A@A@@@@@A@@@@@@@A@@@@AA@@@AA@@A@A@@@A@A@@@A@@@AAA@A@@@@@A@C@A@A@A@A@@@A@A@A@A@A@@@A@CB@@A@@@@AA@@@@AA@@AA@AA@@A@A@@@A@A@@@A@@@A@A@A@C@CBA@@@@@AACA@AA@A@@AA@@@A@AA@@@@AA@@AAA@@AA@@@AA@@@@AA@@A@@@AA@@AA@@@A@@@@@A@@@@AB@@A@@@A@@@AAA@A@@AA@AA@@A@@@AAA@A@A@AAA@@AA@@@@A@@AA@A@@A@@AA@AAA@@@A@A@@@A@@@@@A@A@@@A@A@@@A@ABA@CBA@A@A@@@A@@BA@@@A@@@A@@BA@A@@@AB@@A@A@@@@@A@@AA@AAA@AA@@AAC@C@@AA@@@A@A@A@A@@@A@@@CA@@CAA@EAA@@@@@@@ABA@A@@BA@@@ABAB@@@@A@@B@@@@AB@@@@ABA@@@@BA@@@@@@BAB@@@B@@@@A@@@A@AB@@@@A@@@A@@B@@@@AB@BAB@B@@@@@B@B@B@@@BA@@@A@@@A@@@A@@B@@A@@@@@@@A@@@A@@AA@A@AAA@@@@@A@A@A@@@A@@@@@A@@@@@A@A@A@@@A@AB@@A@@@AA@@@@A@@@@@@AA@@@@B@@A@@@@@ABA@@@A@@@A@@@@@AB@@A@@@@BA@@@A@@@AB@@@@@B@@A@@@A@A@@@A@@@@@@A@@@A@@A@@@AA@@A@@A@@@AA@@AEAAAA@@@@@AA@AA@@@CAAAA@CAA@CAEAA@A@@@@@A@@BA@ABAB@@A@@B@@A@@@A@AB@@A@ABA@@@ABA@@BA@A@@BA@@B@@A@@B@@C@@@A@@BA@@@@@A@A@@@A@@@A@@@A@A@@@@@A@@@@B"],"encodeOffsets":[[130823,45143]]}}],"UTF8Encoding":true});}));