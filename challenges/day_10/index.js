window.onload = function () {

    let canvas = window.document.getElementsByTagName('canvas')[0];
    let ctx = canvas.getContext('2d');

    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(5,5)

    let input = 'position=<-10810,  43870> velocity=< 1, -4>\n' +
        'position=<-21745, -10795> velocity=< 2,  1>\n' +
        'position=< 0    ,  0    > velocity=< 0,  0>\n' +
        'position=< 54771, -54515> velocity=<-5,  5>\n' +
        'position=< 54792, -32660> velocity=<-5,  3>\n' +
        'position=< 21972,  54799> velocity=<-2, -5>\n' +
        'position=<-43565, -43583> velocity=< 4,  4>\n' +
        'position=< 54775,  43864> velocity=<-5, -4>\n' +
        'position=< 54819, -54516> velocity=<-5,  5>\n' +
        'position=< 21981,  32941> velocity=<-2, -3>\n' +
        'position=<-32642,  43871> velocity=< 3, -4>\n' +
        'position=<-43614, -54516> velocity=< 4,  5>\n' +
        'position=<-21758, -43590> velocity=< 2,  4>\n' +
        'position=<-43589, -54520> velocity=< 4,  5>\n' +
        'position=<-10818,  43864> velocity=< 1, -4>\n' +
        'position=<-32646, -43584> velocity=< 3,  4>\n' +
        'position=< 54814, -54523> velocity=<-5,  5>\n' +
        'position=< 43877, -43592> velocity=<-4,  4>\n' +
        'position=< 54766,  32933> velocity=<-5, -3>\n' +
        'position=<-21749,  22006> velocity=< 2, -2>\n' +
        'position=<-32658, -43588> velocity=< 3,  4>\n' +
        'position=<-54544, -54524> velocity=< 5,  5>\n' +
        'position=<-43590, -21725> velocity=< 4,  2>\n' +
        'position=<-32638,  11076> velocity=< 3, -1>\n' +
        'position=< 43861,  32941> velocity=<-4, -3>\n' +
        'position=<-21699, -32656> velocity=< 2,  3>\n' +
        'position=< 11089,  11068> velocity=<-1, -1>\n' +
        'position=<-10805,  22000> velocity=< 1, -2>\n' +
        'position=<-43598,  54797> velocity=< 4, -5>\n' +
        'position=< 11065, -21728> velocity=<-1,  2>\n' +
        'position=< 54768,  54799> velocity=<-5, -5>\n' +
        'position=<-10810,  43871> velocity=< 1, -4>\n' +
        'position=< 54803,  22001> velocity=<-5, -2>\n' +
        'position=< 11081, -32651> velocity=<-1,  3>\n' +
        'position=<-10782, -10792> velocity=< 1,  1>\n' +
        'position=<-10824, -21722> velocity=< 1,  2>\n' +
        'position=<-54529, -21728> velocity=< 5,  2>\n' +
        'position=< 32918, -10796> velocity=<-3,  1>\n' +
        'position=<-10773,  32938> velocity=< 1, -3>\n' +
        'position=<-21706, -21723> velocity=< 2,  2>\n' +
        'position=<-32664,  43864> velocity=< 3, -4>\n' +
        'position=<-43578,  54802> velocity=< 4, -5>\n' +
        'position=< 11082,  22007> velocity=<-1, -2>\n' +
        'position=< 43838, -10795> velocity=<-4,  1>\n' +
        'position=< 54766,  43871> velocity=<-5, -4>\n' +
        'position=< 22007, -54522> velocity=<-2,  5>\n' +
        'position=<-43601, -21726> velocity=< 4,  2>\n' +
        'position=<-10825, -10791> velocity=< 1,  1>\n' +
        'position=< 32950, -43584> velocity=<-3,  4>\n' +
        'position=<-32669,  32939> velocity=< 3, -3>\n' +
        'position=<-43564, -54524> velocity=< 4,  5>\n' +
        'position=< 22014,  32934> velocity=<-2, -3>\n' +
        'position=<-10797, -43584> velocity=< 1,  4>\n' +
        'position=<-10826, -32655> velocity=< 1,  3>\n' +
        'position=<-32690, -10791> velocity=< 3,  1>\n' +
        'position=< 11059, -43588> velocity=<-1,  4>\n' +
        'position=<-43598,  43869> velocity=< 4, -4>\n' +
        'position=< 32931,  43871> velocity=<-3, -4>\n' +
        'position=< 32927,  32941> velocity=<-3, -3>\n' +
        'position=<-10798,  11068> velocity=< 1, -1>\n' +
        'position=< 32938, -54524> velocity=<-3,  5>\n' +
        'position=<-32686, -32659> velocity=< 3,  3>\n' +
        'position=<-43601, -54522> velocity=< 4,  5>\n' +
        'position=<-32633,  11074> velocity=< 3, -1>\n' +
        'position=< 54766,  11068> velocity=<-5, -1>\n' +
        'position=< 11054, -10794> velocity=<-1,  1>\n' +
        'position=<-10805, -10791> velocity=< 1,  1>\n' +
        'position=<-54533,  43872> velocity=< 5, -4>\n' +
        'position=<-43590,  11076> velocity=< 4, -1>\n' +
        'position=< 32954, -54524> velocity=<-3,  5>\n' +
        'position=< 43877, -54524> velocity=<-4,  5>\n' +
        'position=< 21982, -43589> velocity=<-2,  4>\n' +
        'position=<-10824, -54518> velocity=< 1,  5>\n' +
        'position=<-32666, -54521> velocity=< 3,  5>\n' +
        'position=<-10789, -54523> velocity=< 1,  5>\n' +
        'position=< 32936, -10796> velocity=<-3,  1>\n' +
        'position=< 43850,  22008> velocity=<-4, -2>\n' +
        'position=< 43870, -21722> velocity=<-4,  2>\n' +
        'position=< 11059, -10792> velocity=<-1,  1>\n' +
        'position=< 43875, -32651> velocity=<-4,  3>\n' +
        'position=< 54769, -32653> velocity=<-5,  3>\n' +
        'position=<-32633, -43586> velocity=< 3,  4>\n' +
        'position=< 11046,  22007> velocity=<-1, -2>\n' +
        'position=<-10794, -54515> velocity=< 1,  5>\n' +
        'position=<-43598, -21725> velocity=< 4,  2>\n' +
        'position=< 11083, -32660> velocity=<-1,  3>\n' +
        'position=<-54504, -21728> velocity=< 5,  2>\n' +
        'position=< 43842, -32651> velocity=<-4,  3>\n' +
        'position=<-54533, -10794> velocity=< 5,  1>\n' +
        'position=<-43566,  22008> velocity=< 4, -2>\n' +
        'position=< 54817,  43873> velocity=<-5, -4>\n' +
        'position=<-21742, -21725> velocity=< 2,  2>\n' +
        'position=< 43836, -10793> velocity=<-4,  1>\n' +
        'position=<-32634, -21719> velocity=< 3,  2>\n' +
        'position=< 32918,  54800> velocity=<-3, -5>\n' +
        'position=< 32923,  22000> velocity=<-3, -2>\n' +
        'position=< 54774, -32651> velocity=<-5,  3>\n' +
        'position=< 11091, -32651> velocity=<-1,  3>\n' +
        'position=< 32902, -32654> velocity=<-3,  3>\n' +
        'position=<-21714, -54521> velocity=< 2,  5>\n' +
        'position=<-21755, -21726> velocity=< 2,  2>\n' +
        'position=<-21707,  22009> velocity=< 2, -2>\n' +
        'position=< 11099, -54522> velocity=<-1,  5>\n' +
        'position=< 54766,  11071> velocity=<-5, -1>\n' +
        'position=< 54803, -54521> velocity=<-5,  5>\n' +
        'position=< 11086, -54523> velocity=<-1,  5>\n' +
        'position=<-32641,  11068> velocity=< 3, -1>\n' +
        'position=<-10816, -54519> velocity=< 1,  5>\n' +
        'position=< 21991, -54516> velocity=<-2,  5>\n' +
        'position=<-10810,  22009> velocity=< 1, -2>\n' +
        'position=<-21729,  32933> velocity=< 2, -3>\n' +
        'position=<-21734, -10793> velocity=< 2,  1>\n' +
        'position=<-32674, -10790> velocity=< 3,  1>\n' +
        'position=< 21970, -21722> velocity=<-2,  2>\n' +
        'position=< 54802, -10792> velocity=<-5,  1>\n' +
        'position=<-43564,  43864> velocity=< 4, -4>\n' +
        'position=< 43878, -21720> velocity=<-4,  2>\n' +
        'position=< 32912,  54801> velocity=<-3, -5>\n' +
        'position=<-32674, -10788> velocity=< 3,  1>\n' +
        'position=<-43611, -32656> velocity=< 4,  3>\n' +
        'position=<-43572,  43873> velocity=< 4, -4>\n' +
        'position=<-21726,  32932> velocity=< 2, -3>\n' +
        'position=< 32926, -43590> velocity=<-3,  4>\n' +
        'position=< 54814, -10789> velocity=<-5,  1>\n' +
        'position=< 43834,  54796> velocity=<-4, -5>\n' +
        'position=<-43578, -32652> velocity=< 4,  3>\n' +
        'position=<-43590, -54523> velocity=< 4,  5>\n' +
        'position=<-21721,  22009> velocity=< 2, -2>\n' +
        'position=< 11043,  22000> velocity=<-1, -2>\n' +
        'position=<-32678,  54796> velocity=< 3, -5>\n' +
        'position=<-54496,  22005> velocity=< 5, -2>\n' +
        'position=<-32669, -54516> velocity=< 3,  5>\n' +
        'position=<-54525,  32933> velocity=< 5, -3>\n' +
        'position=< 22023, -32659> velocity=<-2,  3>\n' +
        'position=< 43866,  43869> velocity=<-4, -4>\n' +
        'position=< 22031, -54523> velocity=<-2,  5>\n' +
        'position=< 11067,  22006> velocity=<-1, -2>\n' +
        'position=<-43606,  43865> velocity=< 4, -4>\n' +
        'position=<-21737,  11075> velocity=< 2, -1>\n' +
        'position=<-54510, -43590> velocity=< 5,  4>\n' +
        'position=< 32918,  54801> velocity=<-3, -5>\n' +
        'position=<-10823, -10789> velocity=< 1,  1>\n' +
        'position=< 22027,  54805> velocity=<-2, -5>\n' +
        'position=<-21721, -43589> velocity=< 2,  4>\n' +
        'position=< 11054,  11069> velocity=<-1, -1>\n' +
        'position=<-32656, -32656> velocity=< 3,  3>\n' +
        'position=< 54766,  11077> velocity=<-5, -1>\n' +
        'position=< 22029, -32660> velocity=<-2,  3>\n' +
        'position=< 32942, -10789> velocity=<-3,  1>\n' +
        'position=<-43570, -32655> velocity=< 4,  3>\n' +
        'position=< 32926,  43871> velocity=<-3, -4>\n' +
        'position=<-43590, -21722> velocity=< 4,  2>\n' +
        'position=< 32926, -54522> velocity=<-3,  5>\n' +
        'position=<-21714, -43587> velocity=< 2,  4>\n' +
        'position=<-21710, -54520> velocity=< 2,  5>\n' +
        'position=< 32952,  43864> velocity=<-3, -4>\n' +
        'position=<-54536,  22004> velocity=< 5, -2>\n' +
        'position=< 32913,  11068> velocity=<-3, -1>\n' +
        'position=< 11098,  22009> velocity=<-1, -2>\n' +
        'position=<-10817,  11068> velocity=< 1, -1>\n' +
        'position=<-54493,  43866> velocity=< 5, -4>\n' +
        'position=< 43876, -32651> velocity=<-4,  3>\n' +
        'position=<-43589,  32932> velocity=< 4, -3>\n' +
        'position=< 32955, -32652> velocity=<-3,  3>\n' +
        'position=< 21999, -10787> velocity=<-2,  1>\n' +
        'position=< 21982,  32941> velocity=<-2, -3>\n' +
        'position=< 43883, -54524> velocity=<-4,  5>\n' +
        'position=<-54533, -32651> velocity=< 5,  3>\n' +
        'position=< 32953,  43869> velocity=<-3, -4>\n' +
        'position=<-21750,  54804> velocity=< 2, -5>\n' +
        'position=<-54554, -54520> velocity=< 5,  5>\n' +
        'position=<-21723,  22000> velocity=< 2, -2>\n' +
        'position=< 32918, -10789> velocity=<-3,  1>\n' +
        'position=<-10801, -21728> velocity=< 1,  2>\n' +
        'position=<-43561,  54805> velocity=< 4, -5>\n' +
        'position=<-10802,  22004> velocity=< 1, -2>\n' +
        'position=< 22002,  32938> velocity=<-2, -3>\n' +
        'position=< 11097, -32651> velocity=<-1,  3>\n' +
        'position=<-21724,  22000> velocity=< 2, -2>\n' +
        'position=<-54543, -43592> velocity=< 5,  4>\n' +
        'position=< 54775,  54796> velocity=<-5, -5>\n' +
        'position=< 11066,  54796> velocity=<-1, -5>\n' +
        'position=< 54814,  54798> velocity=<-5, -5>\n' +
        'position=< 32927, -43592> velocity=<-3,  4>\n' +
        'position=< 54803,  43872> velocity=<-5, -4>\n' +
        'position=<-43569, -54516> velocity=< 4,  5>\n' +
        'position=<-54498,  54796> velocity=< 5, -5>\n' +
        'position=< 54786,  43868> velocity=<-5, -4>\n' +
        'position=< 43850,  43873> velocity=<-4, -4>\n' +
        'position=<-43569,  11074> velocity=< 4, -1>\n' +
        'position=<-21714,  22000> velocity=< 2, -2>\n' +
        'position=< 54809,  32941> velocity=<-5, -3>\n' +
        'position=<-43590, -32653> velocity=< 4,  3>\n' +
        'position=<-54535,  54800> velocity=< 5, -5>\n' +
        'position=< 43863,  22007> velocity=<-4, -2>\n' +
        'position=< 43871, -54516> velocity=<-4,  5>\n' +
        'position=<-10810, -10789> velocity=< 1,  1>\n' +
        'position=<-43605,  43868> velocity=< 4, -4>\n' +
        'position=< 32942,  22008> velocity=<-3, -2>\n' +
        'position=<-21701, -54524> velocity=< 2,  5>\n' +
        'position=<-21722, -21721> velocity=< 2,  2>\n' +
        'position=<-32666, -43590> velocity=< 3,  4>\n' +
        'position=< 32926, -10792> velocity=<-3,  1>\n' +
        'position=< 22011, -10787> velocity=<-2,  1>\n' +
        'position=< 43846,  32935> velocity=<-4, -3>\n' +
        'position=< 22026, -10788> velocity=<-2,  1>\n' +
        'position=<-32682, -54515> velocity=< 3,  5>\n' +
        'position=<-32666, -10792> velocity=< 3,  1>\n' +
        'position=< 11071,  22004> velocity=<-1, -2>\n' +
        'position=<-10790, -43585> velocity=< 1,  4>\n' +
        'position=< 32934, -43590> velocity=<-3,  4>\n' +
        'position=<-32662, -21723> velocity=< 3,  2>\n' +
        'position=< 54790, -10790> velocity=<-5,  1>\n' +
        'position=< 11082,  22002> velocity=<-1, -2>\n' +
        'position=< 54766,  54801> velocity=<-5, -5>\n' +
        'position=< 54794, -43584> velocity=<-5,  4>\n' +
        'position=<-10789,  54805> velocity=< 1, -5>\n' +
        'position=<-43622, -21719> velocity=< 4,  2>\n' +
        'position=<-32682,  54796> velocity=< 3, -5>\n' +
        'position=< 43847,  22009> velocity=<-4, -2>\n' +
        'position=< 43890,  22007> velocity=<-4, -2>\n' +
        'position=<-21742,  43867> velocity=< 2, -4>\n' +
        'position=< 22023,  43869> velocity=<-2, -4>\n' +
        'position=< 43858,  43872> velocity=<-4, -4>\n' +
        'position=<-21697, -43583> velocity=< 2,  4>\n' +
        'position=< 43871,  32933> velocity=<-4, -3>\n' +
        'position=< 21980,  11077> velocity=<-2, -1>\n' +
        'position=< 43871,  32935> velocity=<-4, -3>\n' +
        'position=<-32669, -21727> velocity=< 3,  2>\n' +
        'position=<-10774,  11073> velocity=< 1, -1>\n' +
        'position=<-43594, -32655> velocity=< 4,  3>\n' +
        'position=<-21742,  32940> velocity=< 2, -3>\n' +
        'position=<-43595,  11077> velocity=< 4, -1>\n' +
        'position=<-54510,  22005> velocity=< 5, -2>\n' +
        'position=< 32912,  32932> velocity=<-3, -3>\n' +
        'position=<-54493,  32932> velocity=< 5, -3>\n' +
        'position=<-54497, -10796> velocity=< 5,  1>\n' +
        'position=< 32923,  43868> velocity=<-3, -4>\n' +
        'position=<-10815, -43588> velocity=< 1,  4>\n' +
        'position=< 32915, -21728> velocity=<-3,  2>\n' +
        'position=< 32931,  54805> velocity=<-3, -5>\n' +
        'position=< 32906,  22001> velocity=<-3, -2>\n' +
        'position=< 21986, -10796> velocity=<-2,  1>\n' +
        'position=<-54526, -43592> velocity=< 5,  4>\n' +
        'position=< 54822,  22000> velocity=<-5, -2>\n' +
        'position=< 32926, -43585> velocity=<-3,  4>\n' +
        'position=< 32931, -10791> velocity=<-3,  1>\n' +
        'position=<-54496,  43869> velocity=< 5, -4>\n' +
        'position=< 22005,  11073> velocity=<-2, -1>\n' +
        'position=<-54525,  54805> velocity=< 5, -5>\n' +
        'position=<-21710,  43867> velocity=< 2, -4>\n' +
        'position=< 54814, -43586> velocity=<-5,  4>\n' +
        'position=< 22002,  11074> velocity=<-2, -1>\n' +
        'position=<-43606, -10787> velocity=< 4,  1>\n' +
        'position=< 32913, -54524> velocity=<-3,  5>\n' +
        'position=< 32928, -43583> velocity=<-3,  4>\n' +
        'position=<-10826,  32939> velocity=< 1, -3>\n' +
        'position=<-10769, -10787> velocity=< 1,  1>\n' +
        'position=<-43574,  43870> velocity=< 4, -4>\n' +
        'position=<-32632, -54515> velocity=< 3,  5>\n' +
        'position=<-43613,  32941> velocity=< 4, -3>\n' +
        'position=< 11086, -43590> velocity=<-1,  4>\n' +
        'position=<-10773, -54517> velocity=< 1,  5>\n' +
        'position=<-54527, -43587> velocity=< 5,  4>\n' +
        'position=< 22014, -21727> velocity=<-2,  2>\n' +
        'position=< 32923,  22005> velocity=<-3, -2>\n' +
        'position=<-54493,  43865> velocity=< 5, -4>\n' +
        'position=<-54541,  43866> velocity=< 5, -4>\n' +
        'position=< 22019,  32941> velocity=<-2, -3>\n' +
        'position=< 11067, -54516> velocity=<-1,  5>\n' +
        'position=< 32912, -21723> velocity=<-3,  2>\n' +
        'position=<-10826,  32939> velocity=< 1, -3>\n' +
        'position=<-32637, -32659> velocity=< 3,  3>\n' +
        'position=<-43574,  11075> velocity=< 4, -1>\n' +
        'position=< 43834, -54521> velocity=<-4,  5>\n' +
        'position=<-43563, -32660> velocity=< 4,  3>\n' +
        'position=<-43601, -21725> velocity=< 4,  2>\n' +
        'position=<-32647,  54796> velocity=< 3, -5>\n' +
        'position=<-21758, -43592> velocity=< 2,  4>\n' +
        'position=< 54766,  32938> velocity=<-5, -3>\n' +
        'position=< 32946, -54524> velocity=<-3,  5>\n' +
        'position=<-21734,  11074> velocity=< 2, -1>\n' +
        'position=< 43892, -10787> velocity=<-4,  1>\n' +
        'position=< 11047, -10790> velocity=<-1,  1>\n' +
        'position=<-10794, -43590> velocity=< 1,  4>\n' +
        'position=< 54793,  11077> velocity=<-5, -1>\n' +
        'position=<-32633,  22000> velocity=< 3, -2>\n' +
        'position=<-10770, -54516> velocity=< 1,  5>\n' +
        'position=<-21749,  54802> velocity=< 2, -5>\n' +
        'position=< 54782,  11073> velocity=<-5, -1>\n' +
        'position=<-43564, -32651> velocity=< 4,  3>\n' +
        'position=<-54530, -21721> velocity=< 5,  2>\n' +
        'position=< 11096, -32655> velocity=<-1,  3>\n' +
        'position=<-54525,  54803> velocity=< 5, -5>\n' +
        'position=< 43863, -21720> velocity=<-4,  2>\n' +
        'position=<-32673, -54520> velocity=< 3,  5>\n' +
        'position=<-43562,  11071> velocity=< 4, -1>\n' +
        'position=< 32923,  43870> velocity=<-3, -4>\n' +
        'position=< 54791,  43873> velocity=<-5, -4>\n' +
        'position=< 54815, -10787> velocity=<-5,  1>\n' +
        'position=<-32634, -32653> velocity=< 3,  3>\n' +
        'position=<-54506, -54521> velocity=< 5,  5>\n' +
        'position=<-10821,  54796> velocity=< 1, -5>\n' +
        'position=<-32653,  32941> velocity=< 3, -3>\n' +
        'position=< 32950,  43869> velocity=<-3, -4>\n' +
        'position=< 43895,  54805> velocity=<-4, -5>\n' +
        'position=<-54506,  54804> velocity=< 5, -5>\n' +
        'position=<-43618, -10788> velocity=< 4,  1>\n' +
        'position=< 22013,  11077> velocity=<-2, -1>\n' +
        'position=<-21746, -32651> velocity=< 2,  3>\n' +
        'position=<-43619, -54522> velocity=< 4,  5>\n' +
        'position=< 22021,  54801> velocity=<-2, -5>\n' +
        'position=< 43858,  54804> velocity=<-4, -5>\n' +
        'position=< 43887,  11074> velocity=<-4, -1>\n' +
        'position=<-43602, -43588> velocity=< 4,  4>\n' +
        'position=< 43835,  32936> velocity=<-4, -3>\n' +
        'position=<-10823, -54517> velocity=< 1,  5>\n' +
        'position=< 43834, -43584> velocity=<-4,  4>\n' +
        'position=< 43883,  11068> velocity=<-4, -1>\n' +
        'position=<-43561, -10794> velocity=< 4,  1>\n' +
        'position=< 11070, -10788> velocity=<-1,  1>\n' +
        'position=< 11098,  22000> velocity=<-1, -2>\n' +
        'position=<-10767,  22000> velocity=< 1, -2>\n' +
        'position=< 54787, -54517> velocity=<-5,  5>\n' +
        'position=< 22002,  54804> velocity=<-2, -5>\n' +
        'position=<-54543,  22009> velocity=< 5, -2>\n' +
        'position=< 43869, -10792> velocity=<-4,  1>\n' +
        'position=<-10797, -43591> velocity=< 1,  4>\n' +
        'position=< 54806,  11075> velocity=<-5, -1>\n' +
        'position=< 43834, -32652> velocity=<-4,  3>\n' +
        'position=< 54766,  54799> velocity=<-5, -5>\n' +
        'position=< 54790, -10790> velocity=<-5,  1>\n' +
        'position=< 32955,  43871> velocity=<-3, -4>';

    class Point {

        constructor(pointText, canvasElem) {
            this.xPos = parseInt(pointText.substring(10,16));
            this.yPos = parseInt(pointText.substring(18,24));
            this.xVel = parseInt(pointText.substring(36,38));
            this.yVel = parseInt(pointText.substring(40,42));
            this.canvas = canvasElem.getContext('2d');
        }

        move() {
            this.xPos += this.xVel;
            this.yPos += this.yVel;
        }

        draw() {
            this.canvas.fillRect(this.xPos, this.yPos, 1, 1);
        }

    }

    let points = input.split('\n').map(text => new Point(text, canvas));

    let go = true;

    for (var i = 0; i < 10932; i++) {
        points.forEach(p => p.move())
    }

    function batchDraw() {
        if(go) {
            console.log('gettem')
            ctx.fillStyle = 'white';
            ctx.fillRect(-5000, -5000, 99999999999999, 99999999999999999);
            ctx.fillStyle = 'black';

            points.forEach(point => {
                point.draw();
                point.move();
            });
            ctx.stroke();
            // requestAnimationFrame(batchDraw)
        }
    }

    batchDraw();

};
