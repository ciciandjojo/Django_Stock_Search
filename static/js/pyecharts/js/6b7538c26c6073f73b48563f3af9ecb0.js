(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('榕江县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"522632","properties":{"name":"榕江县","cp":[108.52188,25.931893],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AAGCAAEAGGEE@CCCQ@IBIAC@A@ABGBC@ABABABC@A@ABABAD@D@B@BBBBDDD@HDD@DCFDF@BCD@BABCDCAC@AFCDC@@@A@E@ABABAD@BBBBDBF@DABADFL@BADGP@JAB@D@D@BBDBDABA@CAAAA@AD@B@BCCCCEACAE@CDA@GAGAEEEEGAMCE@@@AAEEAEAAA@CAC@C@E@C@@BAD@B@B@DBBDHBFBDABABADABAD@BBD@B@D@DAD@BBD@B@BFAB@@@@NCNENAHDFHHJJ@JCJADMDKBIHGNAJDPFLDLBFBD@B@B@BDBJHHDJDBDBDJFDBBBJD@@BBD@CDEFCDCBEBC@C@@@@B@@BB@B@B@B@DB@BBBBBBDB@@DFFFDDPLFF@@DBBLFHFD@@@@DD@@DBHDDB@B@BCBAB@B@BBB@B@@A@AAA@ABABBB@DBBCBEBCL@FADA@@D@B@DD@DAD@@@BDB@@BD@@@JF@@LL@BFDLPBD@B@FCF@J@FBBBBB@F@NCF@PHB@D@D@DCDAB@BB@B@B@BBBDBDBHB@@BHBFBBDBF@B@FBB@BBABCF@BADAB@B@DBH@@@@@F@D@@A@BBBBDB@B@B@BABA@ABABBB@BD@@BBBBAB@B@@@BB@DABABCBC@A@AB@@BB@@BB@@BBBBBDDDLPTJDLAJEDKCGAE@ADCF@JHLHJ@HCHI@KBECAAA@@D@@B@BB@FDD@B@BB@@D@B@BB@BB@BDB@@B@BB@@BB@@B@B@B@@BB@BDDAD@D@B@DB@@AD@BADADCDBB@B@BHFBBADBB@FDD@B@@AA@@CAA@@BA@CD@DA@@@A@@B@@AB@BE@C@AD@D@B@@BB@@@DBBB@@B@BHF@@@BBBDF@@@DABAB@B@BBB@BBB@@DD@D@B@B@B@BCB@D@DAB@@A@@@@@@AA@ADCAAAA@AAA@@@@BBBCBABA@AFIF@@@BB@@BB@B@D@DDB@BDBFBDD@B@DAAAB@F@FAABABC@CB@BBADB@@AB@B@@@B@@DBD@@ABBB@@BBBBBB@B@@B@B@D@BDDD@BBBBDBBB@@H@FBD@B@@@FB@BFHB@DBDDHD@B@BBDBDBBFFDHA@@DCDBHAF@DCH@HAB@DA@C@A@A@A@A@A@A@@@ABCDABFDBDFDBBB@@BDBB@BB@@DDDDDBB@@@B@ADB@@BB@DDB@BD@B@BBB@B@BAD@B@@@D@BBBBB@B@BBD@FAD@FDFDABFB@@BA@AB@D@BAB@BABDLCBC@EBAFBD@BCBADA@ABCBC@IEA@A@HH@B@@FDLJD@H@@BBBA@A@@BBBDBBBB@B@BABA@@HDDD@BABAD@BCBA@@BA@EBABCAAAA@AB@@@B@BB@B@DBFBLD@@@@@A@A@@AAD@BAB@B@BABBBAAAB@D@@@B@BA@BBADABBDB@@B@B@B@@BB@B@@ABBBA@CBA@ADABAB@F@BBB@B@BBDBBB@@DABBB@DAFFBD@BDDBADAB@BBD@DAD@JBDDBBBBBBBD@HBBADBBBBBHB@BBD@B@@CB@BB@@DEAABABA@A@AHABCFA@CFABC@ADB@BDBB@DBBBD@D@BAB@@@BABAB@B@@ADC@@DD@@B@@@BBDBB@BDB@B@BABABAB@DBDABC@AD@@ABAB@B@@@HBD@BB@F@HDB@@BEDGBADBDDBD@BBBBF@BBD@BDDD@DD@BAD@@DD@@D@@@BBAFDB@@BBFBD@DBBBBBDBBAB@BABABBB@DBB@D@@D@@D@@BB@BBB@@@BBBAFABAB@B@BBBBBBB@@ADA@B@@DBB@BA@BBA@@B@B@@BB@@@@B@@@@BAB@BA@BBA@@A@BABA@CBBBAB@BA@@@@FBB@@@@AD@A@BA@@B@BDBB@AB@@BBBD@ABB@@BBD@BBB@@BAD@BB@BB@BBB@BDB@DABB@BJ@DBBB@@DBDFB@ABDBCB@B@BD@BBAD@BFBBBBBBB@A@ABCBDB@@@B@D@@BBABBBBB@DB@B@@DBD@@BB@@BJH@B@BA@@@@BAB@@BBDB@BBBHB@BD@BB@BB@@BA@BBDFB@BB@@@BABADA@@DB@H@B@BCBEBA@@A@@ADCBCBAAC@CDD@@BBB@@@@BC@@BB@BBHB@@B@DBDAF@BAB@@A@ADAB@B@FCBAF@HA@B@BB@@BBB@B@@BBDCDEFADABA@ABC@AAADC@A@C@CAECC@C@CFC@C@ABA@AAABEAI@A@EB@BAF@BAAABAAACA@A@A@A@AAABACACC@AB@DABAB@@@B@DADAA@C@AA@ABA@@AACAAACECCEEAE@ADAAA@AACAEAAAA@EDE@@ACA@@CAABEDABAB@AABCB@BA@CDA@AAA@A@CB@BAD@FBBAB@B@BCFCAA@ACA@AA@CAA@CG@A@A@@BADABCB@BB@@BAAA@@FC@ACEA@AAAGA@@@CA@ACMACAAAAA@C@A@AB@D@BABCAC@@@CAABA@@@GD@@A@EE@@AA@CC@A@C@AACBCAAAA@A@@AAAA@@@AC@CBABAAABABE@CB@B@BCB@DBFAAC@CA@@A@@BA@A@@@A@@BADGBC@ABCB@DAD@@CAC@CBABABAB@D@HCFEBAD@@A@@AA@A@@AC@@AA@AACCE@ADCFAFDACDA@AF@DABADE@@@B@BB@BADAFA@@@CFAB@@AB@BCBA@@BB@@BCACC@AA@AB@@A@CB@B@B@BBB@@ABCCAA@CBABAA@@@CA@AABABBH@@A@A@@C@AAC@@BEA@AACAE@CCC@AAA@@E@ABA@A@AAABAAA@@ACBA@ACA@C@A@A@A@@ACC@AGC@AAA@AAA@ACA@A@A@C@ACA@AA@AA@ADCAA@C@A@A@A@C@A@CEACCCAA@BAB@B@BBD@B@@@@ABEAA@A@A@ABAAA@A@AC@AC@AB@@AA@@@@AAA@AA@AABAAC@@BABAD@B@BABAJBF@BAB@DD@BB@@BD@B@B@DFDBB@BAD@@@FILABB@B@BB@DFFBBBBBD@@@B@BBB@H@BBB@BAB@@ADC@AACC@@C@A@@AA@@@@F@BCBADABA@ACGAA@AB@DAB@@ABA@AF@FB@BBBBAB@JF@@@C@A@CAC@AB@B@B@DE@C@@D@@@@C@A@C@@@ABA@ECAA@CAACAAB@@AF@BA@@ACACBAFE@@AC@AB@F@D@FC@@AAAABA@C@@BC@@@AC@A@@@@AD@BA@A@A@C@BC@A@A@A@A@CAA@ECCE@AB@@@ACBEACBABA@AEEA@ECEE@A@A@A@AAACAAC@C@ABA@A@ABCBABAB@B@@@@AII@@A@A@@AA@@ACA@@A@IEA@AAC@ABCACDC@A@@@@AA@AA@@AA@@@@AAEACAAAAC@@A@@@EBAB@@BB@BABABAAABAAC@A@CAAB@BABC@E@G@@AA@AGB@@C@C@AACA@ABC@@AAAAAAE@AAC@AA@EBA@A@@@E@A@ABC@@@A@AB@@ABCACBAAA@CEAC@AACCEA@CA@@A@A@AA@@ABA@@AAA@@@A@AA@AA@CAA@@AAAAAAAE@A@A@@AAAA@@@@@@AA@ABA@@@E@C@@AA@A@A@@BABA@A@AAAAA@A@C@AB@@@@AA@@A@AB@@A@A@A@@AA@AAA@C@@@AA@CAHEBB@ADABADC@A@@A@C@@ECCCAA@AC@@BA@ADCHC@ABA@@ACCCEC@A@A@@@CA@@A@@@C@@AA@@CEC@@@A@AAB@B@@C@ADE@AAA@@AC@@BA@@A@@AAA@@@@@AA@AB@@@C@@C@CBC@A@@BA@CD@@ECA@EDA@@AA@@AA@AAAEACA@EACCA@AABCB@BCB@@ABAA@BADCBA@@A@@AA@AABAA@BA@AD@@@ECBAA@@AB@@AC@A@@A@@A@@AA@BAC@@AAAGCC@AAAAA@A@DD@DBDABA@AD@@AB@BAB@B@BABADA@EAABA@@@A@@@@B@@DB@@BBA@@@AB@@A@A@@EAC@C@@CE@AA@AAAE@C@AA@CBA@A@AAAAAA@BABCB@DDD@B@@CB@BAACBA@B@B@@BC@@@CAAB@@B@@BBD@@@@A@CBABABA@@BEDCBA@A@CBAAC@A@E@@@AB@@@@A@@@E@AAABC@C@AA@@AAAA@AAA@AAGEA@CEEGE@BAAC@A@@ACBA@@@@AAA@C@@@A@@AAC@AA@CAACCACCC@@CABC@A@AACBAAACB@AA@@@A@A@@@AAA@CACAAA@CDABAB@D@BADAC@@@@AA@@BAA@@@A@@A@BA@@@A@A@E@C@@AAAA@AA@AAAE@AAAAEGA@AA@AC@A@EA@AAGAA@@AA@AA@@@ABC@@AC@CAA@@EC@@A@@AAABA@@A@A@C@C@C@A@A@@AABAAAAAAAC@A@AA@ABAAA@A@A@@BAD@AA@AACAACBC@AACACA@BAA@BAA@BAA@BA@@@@@A@@@A@A@E@@D@B@B@@AB@BABA@@@A@A@ABA@A@A@AB@@@BCB@@CB@@A@A@@@ADA@A@@B@BAD@B@@@@AFC@AAAJCAA@CDA@CB@@ADBDB@AACCAA@A@EBA@ABC@AA@@AAC@KCSEACACAAA@C@E@@BA@@BAA@@AAA@@@BD@@A@ADA@A@C@@D@B@@@@@@A@A@CAAB@BAB@B@@@@DD@B@@A@@@AAA@@@AA@@@@A@ABA@A@AB@BA@@A@@BABA@@@@AAA@AAA@CBABA@EB@@@C@A@AB@@ADAB@@A@@A@A@A@@@@AAAB@AA@@@AB@@BB@@AAC@AAAAAAAAA@ACA@BA@AB@@AA@@CA@@A@A@@@@ACAAA@@BA@@CA@AAAC@@ACA@CC@AAEAA@@B@BADABAB@BA@CAA@ABA@ADEBAB@BCD@A@ACAAAA@@A@AA@@AAAA@C@AA@@@CAAA@@@A@@@ABA@@BCAGBEC@@ABA@ADAB@@IAC@@AA@@@@AA@A@BAAAB@A@ABAB@@@ACCEAC@@AA@BAA@AAAAECE@@ACC@AA@AA@@CECC@BA@CBA@A@EC"],"encodeOffsets":[[110833,26242]]}}],"UTF8Encoding":true});}));