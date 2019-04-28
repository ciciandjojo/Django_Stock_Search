(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('兴隆台区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"211103","properties":{"name":"兴隆台区","cp":[122.070769,41.119898],"childNum":32},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@A@AB@B@@B@@AB@@A"],["@@@B@BDB@C@AC@"],["@@@@CBA@@@@BA@BDHEAA"],["@@@@EB@B@BBB@AF@BA@@A@@A@@@@AA"],["@@AA@@@@A@@@@@@@A@@BA@@@@DA@@DDABAB@BC"],["@@HAD@AE@@KD@@BB@B@@"],["@@@B@BFJFA@@@A@@ACD@CCAAAB@CABC@@@"],["@@JAEKID@@FJ"],["@@AA@AGB@AMDDFBB@@LC@AFA"],["@@PC@C@@@AOA@HCDD@"],["@@HBBEA@DIB@BEGADIMA@@@@@BE@@FPDGV"],["@@AC@@AA@@AA@@@AD@@ACCCB@C@@@@AAA@@@@@@B@@B@BDA@HNBBDH@@BD@@BB@@BD@@@@@@F@@@BBA@@B@@@@@@@BAB@@@@BBBBB@@@B@@@@DB@BAD@B@ACAA@@@@ABACB@@@BAAA@@@A@A@@@AA@@@CBACCBAC@@AAB@@CCB@A@@ACABAC@@@@"],["@@BB@@B@DDDBHC@@BA@@B@@AB@@@@@@@B@@A@@@@@@B@A@@A@@@@A@@@@@A@@@@@@@AA@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@A@@AA@@@@@AA@@B@@@@@A@@A@@A@@@A@EB@BA@@@A@@B@@@@@@@@AB@@@@A@@@@@@@@@@B@@@@@@B@@@@@@B@@@@@@@@@@A@B@@@@B@@@@B@@@@@@@@@@@@@@B@@@@@@B@"],["@@AB@BA@BBEBBBD@@@@BFF@@DD@B@BABJEBABADABADCBACAAAADCAA@CEA@@@IBAA"],["@@@AA@@CA@@@@AA@@CYFFLFA@DB@@@BFHAHC@@@AB@@@@@@@B@@A@@@@A@@ABA@@@@@BD@AA@@@@@AA@CB"],["@@@QED@DUAADCDCHN@X@@@@C@@"],["@@DAB@B@@@fDB@CEAC@@@C@AIM@@@D@@BBGBGBACC@@AAAEB@BFHGBAF@@@F@@"],["@@@EKB@@IB@BE@A@OHCJADN@PCD@D@DF@@D@CGNCCC@ACCBAB@@@"],["@@DD@@HADA@@JC\\GA@ACAEBAAAA@CEaL@B@BBD@@@@@BA@@DB@ID@B"],["@@D@EEKK@@OL@BCDBJFAB@B@B@DAD@B@B@DAD@@@@@@A@@A@BA"],["@@FCHAAEHACEB@@@LA@DNCAA@AABAC_HA@KB@@IB@@AA@@GB@@BD@B@@@@DF@@@@@@IB@D@@BB@@BAD@B@BA@@DHHLDF@@@@DHP@ISCKAA@@"],["@@B@TAHAB@B@BA@@D@AEEBACEB@BEB@CIB@BGB@F"],["@@@@A@A@@ACBACC@K@DNC@WB@@BNL^LFFNH^NPPHTNRHF@L@D@L@r@CID@ACACCCAE@EI@KBCBA@COACACIB]D[DIWCSE]@EAA@AEW"],["@@QGSMOGMOG]EMKEK]AM@@XAD@CML@D@BDDA@BB@B@@@@EB@@EHA@AJA@DFA@AACCSLAD@BF@@AB@DDD@@GB@D@BBDFABFF@FAD@@@BBBBDHDBBD@@BJBF@DE@]F@@@@A@@@@@BH@B@@@@ACAAA@EAA@C@G@@@A@CBF^DTJX\\C^CJABDHAF@FAH@D@D@B@AMCKAG@AAC@@FABBBB@@B@DA@CNAAKAKEEBKPBBB@N@@BDLBH@JBL@HBH@J@HBDBD@DB@@B@B@HEDAB@D@BBB@DFBB@BADCDGDCDFDFJBDB@@A@@@@@A@@B@@AF@DADA@C@@H@FBVFLBBK@E@Eh@F@H@H@B@PF@@@B@@@B@BA@@@BD@@A@AB@BABA@ABABAB@@A@AJ@@B@BB@@BAHGHFHFABH@FBH@FAF@H@H@HBFBFB@KC@BKA@@G@@@AL@@KF@@E@A@AFABAA@@AA@@@A@A@@B@D@@A@A@@@@A@AA@@CA@@I\\CD@D@AC@CdNBBLDJAFALANADALAF@FC@@FAEIBOMABGG@_@K@@WMFBKPCDAL@BSN@@E{ECCUAeCSAA@I@@A]AW@@AK@EAC@E@EBOCBFC@EIABC@BFBD]FC@IDQHBIE@CC@@M@BCAAAAE@A@AVAVGBI@HICAOBABAHABAFEHEBA@AAA@@@A@C@AB@BA@A@A@CCC@C@EAAACB@@CBGHEBE@ABAB@BBB@F@B@DA@ABE@G@A@C@E@C@C@GDGBCB@@@CEGACACAC@C@AACAIAGAK@M@CAACCAA@AC@A@C@GJDDB@@B@@@@BB@@@@@B@B@@A@CH@A@B@@AD@BA@@B@B@B@@DH@B@@EDCKKKCEEEACBACCCAACCCCEEECCEACAE@E@GHADABADEDGAC@CBEBCBCBAB@D@BABCDCDEBGBCBAFCDABCBABABADCH@BA@ABAD@DABCBEBA@A@A@@B@BDFBBDBDBB@F@D@BB@DABCDC@EAEAA@ABBBBH@B@BBBB@VIDCB@BAB@BBHF@@BB@@BAB@FEBBDB@DDDF@HBF@BBNVBDBBDBFB@BCFBBHB@BABC@EDAB@DALDDJDF@BBLFDDA@AB@B@@BBD@B@@BC@ABE@C@@B@@DB@B@BBBDBFBFDBBNXDH@@BA@CBA@AB@BAAA@ADBNBL@B@KO@@@@BA@@@A"],["@@CBDBBDGBBD@@A@BDA@@AA@BBCBNVBA@@BA@@D@DADAB@BA@@AAA@@@AA@@EG@AAAAAACACCE"],["@@UH@BB@BDFABA@@@@NCBAB@@@FAB@@@JCCC@AC@ABBB@@A@@BA@@@A@@BC@@AA@CBA@"],["@@BB@BDA@@@D@@@@@B@B@@F@CKCBA@A@"],["@@@@BBBA@@D@@@DAB@DABAB@@@@@EBIBCB@@A@"],["@@@@@@HCDAHCFAJ@NC@EG@@Ck@BP@J"],["@@@CBA@CAAC@@ADBD@@CCBAA@CAA@B@B@@@BG@@BBBBHG@BDBB@BDB@DD@@@@F@D@@EDB@BBBABCH@DAAACB@ADA@CE@@IA@"],["@@BAA@BAB@A@LEBBBABBBAB@@@@A@@@AA@@@A@C@CBOHDD"],["@@@@AECBA@A@AB@@@@BB@BBBDHB@@@B@@@DH@@@@BBDA@A@@B@EMAC@@C@"]],"encodeOffsets":[[[125180,42338]],[[124914,42213]],[[124945,42241]],[[125206,41999]],[[124936,42231]],[[124662,42021]],[[125204,41986]],[[125165,42334]],[[125187,42015]],[[124731,42342]],[[124510,41950]],[[125227,42025]],[[125852,42520]],[[124944,42228]],[[125188,42329]],[[124421,41990]],[[125195,42014]],[[124594,42037]],[[125139,42030]],[[126019,42941]],[[124615,42037]],[[124792,42126]],[[124791,42129]],[[124820,42205]],[[125225,42026]],[[125227,42048]],[[125213,41993]],[[125211,41992]],[[124997,41804]],[[124916,42230]],[[125192,42329]],[[125216,41998]]]}}],"UTF8Encoding":true});}));