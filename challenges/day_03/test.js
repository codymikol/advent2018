import Day3 from './index'

describe('Day #3', function () {

    let input;

    beforeEach(function () {
        input = '#1 @ 287,428: 27x20\n#2 @ 282,539: 20x10\n#3 @ 550,118: 20x23\n#4 @ 454,774: 20x19\n#5 @ 542,157: 11x24\n#6 @ 249,134: 15x20\n#7 @ 825,137: 12x22\n#8 @ 444,393: 12x10\n#9 @ 810,143: 27x20\n#10 @ 674,274: 25x13\n#11 @ 974,802: 13x15\n#12 @ 607,514: 22x24\n#13 @ 640,627: 24x25\n#14 @ 188,652: 5x17\n#15 @ 268,962: 16x12\n#16 @ 868,950: 26x22\n#17 @ 309,698: 27x29\n#18 @ 51,514: 26x17\n#19 @ 939,416: 25x25\n#20 @ 262,284: 12x17\n#21 @ 46,269: 13x29\n#22 @ 340,492: 26x26\n#23 @ 311,885: 13x21\n#24 @ 564,656: 21x16\n#25 @ 805,434: 17x16\n#26 @ 355,616: 5x18\n#27 @ 485,434: 29x18\n#28 @ 685,751: 18x26\n#29 @ 321,768: 14x12\n#30 @ 287,551: 8x10\n#31 @ 327,181: 28x25\n#32 @ 74,698: 10x28\n#33 @ 47,758: 21x17\n#34 @ 86,359: 27x25\n#35 @ 944,163: 17x18\n#36 @ 338,306: 28x17\n#37 @ 415,344: 22x22\n#38 @ 702,845: 22x19\n#39 @ 320,718: 24x22\n#40 @ 955,914: 19x29\n#41 @ 551,434: 20x19\n#42 @ 275,198: 24x16\n#43 @ 219,290: 13x20\n#44 @ 712,749: 18x23\n#45 @ 759,839: 14x10\n#46 @ 792,885: 14x12\n#47 @ 109,75: 20x26\n#48 @ 957,801: 28x15\n#49 @ 433,538: 18x11\n#50 @ 245,365: 25x18\n#51 @ 520,978: 10x10\n#52 @ 355,59: 15x28\n#53 @ 422,420: 26x14\n#54 @ 890,543: 12x18\n#55 @ 41,813: 11x22\n#56 @ 941,452: 25x19\n#57 @ 155,485: 13x19\n#58 @ 652,260: 18x28\n#59 @ 527,935: 29x21\n#60 @ 402,292: 29x25\n#61 @ 175,586: 28x22\n#62 @ 239,403: 16x20\n#63 @ 609,209: 22x14\n#64 @ 464,798: 13x25\n#65 @ 275,972: 13x23\n#66 @ 260,940: 25x11\n#67 @ 43,358: 12x23\n#68 @ 359,278: 18x11\n#69 @ 184,634: 25x14\n#70 @ 57,763: 13x13\n#71 @ 838,384: 25x25\n#72 @ 22,256: 22x19\n#73 @ 707,921: 19x29\n#74 @ 504,229: 16x27\n#75 @ 658,555: 22x16\n#76 @ 825,642: 29x26\n#77 @ 622,572: 29x13\n#78 @ 187,174: 12x11\n#79 @ 236,469: 24x27\n#80 @ 977,77: 18x8\n#81 @ 734,779: 15x12\n#82 @ 859,826: 16x25\n#83 @ 386,215: 18x12\n#84 @ 840,671: 29x13\n#85 @ 862,119: 15x18\n#86 @ 603,203: 19x12\n#87 @ 559,435: 16x23\n#88 @ 657,470: 19x20\n#89 @ 704,184: 22x28\n#90 @ 597,490: 20x29\n#91 @ 936,217: 23x18\n#92 @ 513,231: 29x29\n#93 @ 83,504: 19x11\n#94 @ 868,66: 28x25\n#95 @ 834,840: 28x24\n#96 @ 39,768: 22x28\n#97 @ 937,35: 20x28\n#98 @ 371,896: 22x17\n#99 @ 469,969: 15x15\n#100 @ 476,845: 18x15\n#101 @ 526,632: 25x11\n#102 @ 588,911: 25x19\n#103 @ 419,609: 15x19\n#104 @ 908,900: 25x26\n#105 @ 445,881: 21x16\n#106 @ 283,821: 18x29\n#107 @ 231,213: 20x10\n#108 @ 699,974: 13x22\n#109 @ 314,969: 24x15\n#110 @ 393,594: 20x20\n#111 @ 708,859: 21x15\n#112 @ 540,557: 10x24\n#113 @ 104,977: 26x22\n#114 @ 213,212: 19x16\n#115 @ 935,628: 16x29\n#116 @ 21,353: 21x14\n#117 @ 904,303: 18x23\n#118 @ 83,295: 18x23\n#119 @ 192,183: 22x11\n#120 @ 672,500: 10x11\n#121 @ 253,58: 23x27\n#122 @ 554,664: 16x29\n#123 @ 365,668: 17x25\n#124 @ 294,870: 20x20\n#125 @ 352,534: 28x29\n#126 @ 104,712: 15x13\n#127 @ 486,221: 14x27\n#128 @ 148,772: 21x27\n#129 @ 376,67: 24x19\n#130 @ 396,581: 25x14\n#131 @ 576,939: 10x17\n#132 @ 856,544: 26x16\n#133 @ 232,75: 20x22\n#134 @ 949,287: 20x27\n#135 @ 52,512: 10x13\n#136 @ 51,604: 16x17\n#137 @ 953,552: 26x17\n#138 @ 185,645: 13x28\n#139 @ 541,202: 27x26\n#140 @ 594,509: 19x28\n#141 @ 214,104: 23x18\n#142 @ 540,294: 15x13\n#143 @ 7,286: 21x24\n#144 @ 404,202: 26x26\n#145 @ 775,677: 21x23\n#146 @ 349,282: 13x18\n#147 @ 214,913: 28x18\n#148 @ 722,931: 12x19\n#149 @ 582,688: 14x17\n#150 @ 90,952: 15x18\n#151 @ 888,653: 22x28\n#152 @ 224,195: 17x28\n#153 @ 664,300: 28x14\n#154 @ 271,564: 13x22\n#155 @ 696,943: 18x29\n#156 @ 445,278: 16x19\n#157 @ 748,783: 15x25\n#158 @ 460,722: 16x19\n#159 @ 207,107: 24x19\n#160 @ 900,964: 21x12\n#161 @ 471,791: 21x15\n#162 @ 555,258: 20x10\n#163 @ 341,36: 17x26\n#164 @ 458,222: 29x14\n#165 @ 900,15: 16x17\n#166 @ 305,964: 11x10\n#167 @ 213,798: 26x10\n#168 @ 188,887: 20x23\n#169 @ 162,31: 13x29\n#170 @ 609,627: 22x29\n#171 @ 506,739: 25x16\n#172 @ 735,413: 16x18\n#173 @ 140,232: 14x10\n#174 @ 365,624: 22x25\n#175 @ 127,190: 12x21\n#176 @ 389,453: 28x12\n#177 @ 224,205: 16x21\n#178 @ 518,108: 20x21\n#179 @ 570,927: 22x13\n#180 @ 891,313: 20x29\n#181 @ 893,599: 18x11\n#182 @ 749,814: 25x19\n#183 @ 847,377: 11x11\n#184 @ 155,22: 15x22\n#185 @ 508,534: 13x10\n#186 @ 626,247: 13x27\n#187 @ 374,388: 18x11\n#188 @ 907,475: 29x14\n#189 @ 871,813: 27x25\n#190 @ 540,324: 12x12\n#191 @ 259,546: 22x24\n#192 @ 249,751: 18x25\n#193 @ 247,497: 11x10\n#194 @ 41,326: 22x19\n#195 @ 157,481: 26x25\n#196 @ 291,211: 13x13\n#197 @ 265,78: 27x12\n#198 @ 273,77: 12x19\n#199 @ 756,94: 10x19\n#200 @ 462,973: 14x15\n#201 @ 821,303: 13x21\n#202 @ 454,948: 20x26\n#203 @ 902,275: 24x24\n#204 @ 444,158: 28x16\n#205 @ 675,524: 21x10\n#206 @ 780,941: 23x27\n#207 @ 459,149: 16x25\n#208 @ 943,826: 23x15\n#209 @ 694,424: 16x18\n#210 @ 204,592: 18x4\n#211 @ 972,415: 19x18\n#212 @ 679,190: 12x22\n#213 @ 906,834: 10x25\n#214 @ 480,783: 12x27\n#215 @ 633,699: 18x25\n#216 @ 1,170: 26x29\n#217 @ 886,781: 18x12\n#218 @ 738,937: 25x24\n#219 @ 109,728: 28x26\n#220 @ 723,860: 21x11\n#221 @ 81,230: 17x28\n#222 @ 164,93: 17x22\n#223 @ 439,940: 24x23\n#224 @ 341,614: 13x25\n#225 @ 282,680: 12x28\n#226 @ 551,470: 27x19\n#227 @ 897,547: 11x17\n#228 @ 866,130: 26x18\n#229 @ 555,592: 18x21\n#230 @ 889,672: 20x19\n#231 @ 565,596: 21x18\n#232 @ 789,146: 15x13\n#233 @ 536,60: 10x23\n#234 @ 673,481: 13x20\n#235 @ 947,240: 18x27\n#236 @ 325,737: 21x12\n#237 @ 773,608: 16x17\n#238 @ 444,577: 13x27\n#239 @ 295,751: 14x12\n#240 @ 651,181: 29x16\n#241 @ 218,653: 18x12\n#242 @ 607,651: 14x13\n#243 @ 538,916: 29x13\n#244 @ 266,540: 20x28\n#245 @ 139,507: 29x20\n#246 @ 873,700: 28x28\n#247 @ 691,182: 23x26\n#248 @ 399,438: 20x13\n#249 @ 497,865: 29x19\n#250 @ 977,932: 16x26\n#251 @ 181,689: 12x27\n#252 @ 234,397: 12x14\n#253 @ 461,560: 20x11\n#254 @ 650,868: 15x24\n#255 @ 861,293: 17x19\n#256 @ 731,49: 17x13\n#257 @ 885,594: 11x13\n#258 @ 937,542: 10x16\n#259 @ 841,292: 26x28\n#260 @ 298,642: 24x18\n#261 @ 842,667: 13x14\n#262 @ 281,548: 18x19\n#263 @ 562,218: 18x19\n#264 @ 319,674: 29x16\n#265 @ 403,60: 21x21\n#266 @ 847,62: 28x17\n#267 @ 557,202: 15x29\n#268 @ 155,768: 11x22\n#269 @ 67,294: 24x24\n#270 @ 731,391: 28x26\n#271 @ 542,562: 3x14\n#272 @ 691,661: 20x17\n#273 @ 447,91: 23x15\n#274 @ 914,753: 20x26\n#275 @ 266,770: 20x16\n#276 @ 657,878: 14x26\n#277 @ 362,642: 13x21\n#278 @ 535,609: 29x28\n#279 @ 307,435: 29x29\n#280 @ 779,729: 13x22\n#281 @ 906,938: 23x27\n#282 @ 688,683: 19x19\n#283 @ 297,748: 12x10\n#284 @ 801,875: 21x10\n#285 @ 858,142: 17x11\n#286 @ 810,821: 23x18\n#287 @ 792,105: 21x11\n#288 @ 549,148: 17x10\n#289 @ 491,562: 18x11\n#290 @ 706,862: 14x13\n#291 @ 812,290: 29x21\n#292 @ 367,597: 23x19\n#293 @ 971,555: 24x18\n#294 @ 661,474: 19x12\n#295 @ 167,345: 10x24\n#296 @ 825,886: 20x17\n#297 @ 782,396: 27x20\n#298 @ 53,181: 23x29\n#299 @ 95,219: 17x25\n#300 @ 933,53: 26x22\n#301 @ 511,156: 17x13\n#302 @ 926,618: 20x21\n#303 @ 449,605: 12x19\n#304 @ 192,755: 25x13\n#305 @ 950,310: 13x29\n#306 @ 282,40: 23x27\n#307 @ 253,123: 28x23\n#308 @ 739,495: 19x14\n#309 @ 857,954: 15x13\n#310 @ 566,380: 26x20\n#311 @ 121,709: 15x10\n#312 @ 209,802: 19x29\n#313 @ 245,307: 10x26\n#314 @ 870,57: 10x13\n#315 @ 402,883: 13x12\n#316 @ 741,222: 16x15\n#317 @ 882,13: 21x24\n#318 @ 775,654: 15x16\n#319 @ 308,199: 27x28\n#320 @ 153,381: 24x16\n#321 @ 636,43: 26x17\n#322 @ 100,334: 12x27\n#323 @ 970,649: 23x11\n#324 @ 332,953: 23x28\n#325 @ 460,39: 19x29\n#326 @ 826,152: 24x21\n#327 @ 488,880: 29x12\n#328 @ 907,15: 18x14\n#329 @ 640,701: 14x21\n#330 @ 251,290: 12x24\n#331 @ 213,772: 10x24\n#332 @ 20,813: 8x3\n#333 @ 265,963: 12x27\n#334 @ 390,444: 16x13\n#335 @ 610,287: 25x12\n#336 @ 739,722: 26x15\n#337 @ 510,52: 18x13\n#338 @ 250,253: 23x11\n#339 @ 600,605: 11x28\n#340 @ 566,230: 25x27\n#341 @ 322,723: 16x21\n#342 @ 306,372: 20x10\n#343 @ 188,631: 28x10\n#344 @ 772,302: 12x13\n#345 @ 686,390: 18x21\n#346 @ 927,628: 10x24\n#347 @ 691,22: 23x21\n#348 @ 159,961: 19x22\n#349 @ 35,125: 4x7\n#350 @ 346,80: 11x18\n#351 @ 221,241: 22x26\n#352 @ 699,678: 18x24\n#353 @ 421,592: 14x20\n#354 @ 752,101: 11x14\n#355 @ 202,157: 28x23\n#356 @ 202,466: 28x25\n#357 @ 381,75: 28x12\n#358 @ 933,666: 26x24\n#359 @ 315,787: 18x19\n#360 @ 312,377: 20x21\n#361 @ 555,612: 24x18\n#362 @ 245,357: 27x25\n#363 @ 39,562: 13x11\n#364 @ 500,619: 26x13\n#365 @ 645,513: 3x4\n#366 @ 789,652: 11x27\n#367 @ 632,534: 11x26\n#368 @ 220,820: 27x15\n#369 @ 952,732: 23x22\n#370 @ 581,541: 20x17\n#371 @ 214,531: 13x16\n#372 @ 183,189: 27x14\n#373 @ 420,938: 25x19\n#374 @ 237,674: 22x20\n#375 @ 253,655: 16x28\n#376 @ 720,966: 10x18\n#377 @ 203,487: 18x12\n#378 @ 4,437: 12x10\n#379 @ 58,859: 15x20\n#380 @ 140,705: 28x18\n#381 @ 196,656: 25x20\n#382 @ 604,959: 28x28\n#383 @ 703,671: 27x18\n#384 @ 60,379: 16x11\n#385 @ 126,201: 25x11\n#386 @ 255,850: 23x21\n#387 @ 608,524: 14x22\n#388 @ 490,880: 24x19\n#389 @ 817,545: 23x13\n#390 @ 471,979: 20x12\n#391 @ 576,910: 27x19\n#392 @ 190,263: 17x15\n#393 @ 240,480: 19x28\n#394 @ 54,271: 10x13\n#395 @ 286,559: 14x20\n#396 @ 359,280: 12x29\n#397 @ 798,822: 10x20\n#398 @ 898,452: 27x20\n#399 @ 960,608: 12x14\n#400 @ 980,326: 19x17\n#401 @ 43,58: 28x23\n#402 @ 219,225: 10x20\n#403 @ 73,699: 14x28\n#404 @ 773,865: 17x21\n#405 @ 341,507: 25x20\n#406 @ 212,949: 15x23\n#407 @ 377,520: 20x25\n#408 @ 808,374: 28x22\n#409 @ 280,923: 28x18\n#410 @ 527,67: 27x25\n#411 @ 971,379: 20x10\n#412 @ 838,617: 14x23\n#413 @ 468,87: 14x12\n#414 @ 264,133: 23x25\n#415 @ 824,913: 22x14\n#416 @ 845,139: 23x20\n#417 @ 95,846: 14x17\n#418 @ 0,437: 19x28\n#419 @ 45,368: 12x17\n#420 @ 167,604: 24x27\n#421 @ 485,925: 24x29\n#422 @ 340,589: 17x12\n#423 @ 276,66: 21x15\n#424 @ 483,441: 24x23\n#425 @ 252,461: 15x14\n#426 @ 454,60: 16x29\n#427 @ 406,885: 11x23\n#428 @ 760,743: 13x20\n#429 @ 346,573: 21x11\n#430 @ 60,299: 28x10\n#431 @ 709,303: 12x12\n#432 @ 731,930: 7x3\n#433 @ 204,410: 13x21\n#434 @ 588,850: 23x19\n#435 @ 419,599: 16x18\n#436 @ 648,705: 12x14\n#437 @ 232,909: 26x20\n#438 @ 931,175: 17x16\n#439 @ 959,742: 27x22\n#440 @ 423,624: 26x17\n#441 @ 107,715: 25x12\n#442 @ 655,651: 11x21\n#443 @ 840,610: 20x23\n#444 @ 205,191: 11x13\n#445 @ 74,26: 24x28\n#446 @ 879,460: 29x21\n#447 @ 355,740: 11x15\n#448 @ 341,913: 20x10\n#449 @ 310,245: 18x10\n#450 @ 194,180: 11x22\n#451 @ 129,786: 26x25\n#452 @ 438,895: 25x19\n#453 @ 12,454: 25x25\n#454 @ 62,683: 25x23\n#455 @ 44,178: 10x14\n#456 @ 571,651: 16x25\n#457 @ 320,262: 13x13\n#458 @ 360,155: 25x16\n#459 @ 98,188: 20x20\n#460 @ 319,753: 10x10\n#461 @ 709,874: 29x10\n#462 @ 321,681: 12x12\n#463 @ 136,794: 20x15\n#464 @ 878,871: 12x19\n#465 @ 286,107: 24x11\n#466 @ 585,37: 22x21\n#467 @ 450,164: 24x17\n#468 @ 312,23: 12x24\n#469 @ 543,113: 29x18\n#470 @ 782,12: 14x16\n#471 @ 854,145: 27x18\n#472 @ 650,517: 24x22\n#473 @ 176,567: 18x17\n#474 @ 699,427: 15x16\n#475 @ 634,448: 11x24\n#476 @ 662,899: 24x18\n#477 @ 49,342: 10x19\n#478 @ 768,27: 21x20\n#479 @ 191,740: 19x10\n#480 @ 82,282: 22x17\n#481 @ 736,935: 14x21\n#482 @ 856,359: 26x11\n#483 @ 109,329: 23x19\n#484 @ 344,749: 27x17\n#485 @ 109,799: 26x11\n#486 @ 631,506: 11x23\n#487 @ 847,117: 29x22\n#488 @ 518,82: 20x13\n#489 @ 372,606: 22x15\n#490 @ 159,392: 20x16\n#491 @ 577,842: 17x26\n#492 @ 199,304: 23x16\n#493 @ 857,947: 18x20\n#494 @ 566,384: 29x22\n#495 @ 460,557: 12x12\n#496 @ 39,98: 20x26\n#497 @ 780,20: 24x11\n#498 @ 19,217: 14x18\n#499 @ 360,771: 29x15\n#500 @ 343,718: 17x23\n#501 @ 703,741: 28x11\n#502 @ 703,749: 25x13\n#503 @ 104,280: 29x21\n#504 @ 302,832: 24x29\n#505 @ 656,906: 28x21\n#506 @ 833,35: 13x17\n#507 @ 70,155: 18x26\n#508 @ 483,434: 13x26\n#509 @ 676,766: 16x17\n#510 @ 380,970: 10x11\n#511 @ 212,12: 25x16\n#512 @ 927,613: 22x24\n#513 @ 579,70: 10x18\n#514 @ 907,265: 19x22\n#515 @ 212,942: 26x16\n#516 @ 451,561: 28x20\n#517 @ 689,958: 23x28\n#518 @ 534,938: 28x10\n#519 @ 382,145: 18x21\n#520 @ 623,342: 23x24\n#521 @ 361,678: 18x18\n#522 @ 541,385: 25x26\n#523 @ 102,836: 26x22\n#524 @ 800,532: 22x11\n#525 @ 763,292: 21x16\n#526 @ 370,269: 17x18\n#527 @ 271,229: 21x18\n#528 @ 723,804: 19x22\n#529 @ 348,360: 18x22\n#530 @ 98,853: 25x11\n#531 @ 489,21: 13x19\n#532 @ 93,968: 15x11\n#533 @ 418,719: 26x27\n#534 @ 204,490: 23x16\n#535 @ 289,969: 29x10\n#536 @ 564,350: 28x21\n#537 @ 426,404: 22x23\n#538 @ 856,132: 13x15\n#539 @ 795,630: 22x29\n#540 @ 219,868: 22x11\n#541 @ 152,566: 23x14\n#542 @ 689,891: 21x12\n#543 @ 776,853: 10x22\n#544 @ 908,764: 15x17\n#545 @ 946,938: 18x18\n#546 @ 658,786: 25x19\n#547 @ 307,781: 26x22\n#548 @ 200,961: 19x29\n#549 @ 975,851: 17x28\n#550 @ 229,24: 18x25\n#551 @ 67,367: 18x16\n#552 @ 370,965: 15x25\n#553 @ 616,283: 23x13\n#554 @ 67,894: 24x29\n#555 @ 681,743: 12x18\n#556 @ 241,550: 23x27\n#557 @ 729,54: 25x26\n#558 @ 546,320: 21x16\n#559 @ 388,755: 20x19\n#560 @ 217,797: 16x11\n#561 @ 154,921: 13x16\n#562 @ 900,671: 27x20\n#563 @ 692,678: 27x12\n#564 @ 391,372: 11x14\n#565 @ 63,899: 13x15\n#566 @ 872,50: 24x26\n#567 @ 652,802: 11x27\n#568 @ 763,570: 11x22\n#569 @ 314,258: 20x11\n#570 @ 909,607: 23x26\n#571 @ 238,414: 23x19\n#572 @ 184,15: 12x29\n#573 @ 178,433: 16x11\n#574 @ 397,847: 21x24\n#575 @ 448,168: 21x26\n#576 @ 443,410: 14x22\n#577 @ 863,408: 12x25\n#578 @ 332,421: 23x17\n#579 @ 55,363: 21x28\n#580 @ 587,680: 13x29\n#581 @ 366,781: 27x22\n#582 @ 483,642: 26x15\n#583 @ 732,617: 27x15\n#584 @ 386,578: 29x17\n#585 @ 584,636: 18x22\n#586 @ 738,361: 21x24\n#587 @ 404,280: 25x20\n#588 @ 204,949: 24x19\n#589 @ 308,973: 13x27\n#590 @ 976,947: 23x14\n#591 @ 959,184: 14x18\n#592 @ 935,409: 23x14\n#593 @ 402,903: 16x19\n#594 @ 493,699: 10x16\n#595 @ 943,199: 23x10\n#596 @ 20,198: 26x19\n#597 @ 968,609: 11x17\n#598 @ 75,916: 24x14\n#599 @ 91,486: 14x24\n#600 @ 720,761: 11x24\n#601 @ 424,125: 21x26\n#602 @ 496,885: 20x22\n#603 @ 48,168: 29x12\n#604 @ 49,633: 15x18\n#605 @ 335,588: 12x21\n#606 @ 863,960: 24x25\n#607 @ 542,607: 25x22\n#608 @ 592,239: 22x20\n#609 @ 246,671: 28x10\n#610 @ 101,506: 21x27\n#611 @ 516,488: 16x16\n#612 @ 193,205: 15x16\n#613 @ 488,645: 24x24\n#614 @ 694,704: 22x26\n#615 @ 529,842: 27x25\n#616 @ 798,655: 27x12\n#617 @ 225,871: 16x24\n#618 @ 875,873: 27x20\n#619 @ 210,464: 17x28\n#620 @ 558,612: 12x16\n#621 @ 467,789: 14x28\n#622 @ 79,950: 17x16\n#623 @ 35,749: 10x28\n#624 @ 403,301: 16x13\n#625 @ 401,222: 26x27\n#626 @ 291,830: 28x22\n#627 @ 64,945: 25x24\n#628 @ 908,812: 11x26\n#629 @ 42,810: 29x20\n#630 @ 645,273: 24x16\n#631 @ 786,124: 15x25\n#632 @ 21,840: 19x17\n#633 @ 296,684: 24x11\n#634 @ 731,188: 20x12\n#635 @ 544,615: 28x20\n#636 @ 17,410: 19x10\n#637 @ 881,853: 23x26\n#638 @ 730,918: 16x24\n#639 @ 768,691: 16x11\n#640 @ 381,397: 24x12\n#641 @ 160,97: 18x28\n#642 @ 164,660: 26x17\n#643 @ 100,267: 19x19\n#644 @ 713,725: 21x24\n#645 @ 270,944: 23x18\n#646 @ 88,806: 22x22\n#647 @ 453,556: 21x18\n#648 @ 914,671: 11x20\n#649 @ 494,884: 19x4\n#650 @ 959,394: 19x13\n#651 @ 628,608: 20x15\n#652 @ 353,375: 28x26\n#653 @ 10,174: 20x13\n#654 @ 465,855: 22x17\n#655 @ 176,878: 17x27\n#656 @ 701,868: 12x11\n#657 @ 100,7: 15x19\n#658 @ 29,784: 27x14\n#659 @ 96,138: 10x13\n#660 @ 707,43: 15x26\n#661 @ 945,523: 29x23\n#662 @ 336,917: 12x10\n#663 @ 512,795: 14x27\n#664 @ 11,359: 3x11\n#665 @ 106,844: 18x13\n#666 @ 970,246: 11x23\n#667 @ 479,957: 23x15\n#668 @ 808,502: 12x14\n#669 @ 375,743: 20x18\n#670 @ 881,271: 27x11\n#671 @ 329,373: 28x25\n#672 @ 103,730: 26x14\n#673 @ 432,510: 18x29\n#674 @ 798,487: 17x20\n#675 @ 539,873: 22x17\n#676 @ 297,540: 21x27\n#677 @ 50,242: 20x13\n#678 @ 362,647: 27x13\n#679 @ 405,597: 23x28\n#680 @ 639,447: 20x10\n#681 @ 198,430: 19x20\n#682 @ 414,460: 22x13\n#683 @ 164,608: 18x14\n#684 @ 898,259: 19x14\n#685 @ 152,934: 13x11\n#686 @ 598,285: 24x28\n#687 @ 858,905: 20x25\n#688 @ 14,613: 14x29\n#689 @ 238,769: 18x26\n#690 @ 715,862: 5x8\n#691 @ 617,47: 29x28\n#692 @ 669,824: 11x27\n#693 @ 948,649: 18x13\n#694 @ 128,901: 29x18\n#695 @ 256,72: 14x25\n#696 @ 361,712: 18x23\n#697 @ 75,482: 22x23\n#698 @ 914,654: 15x25\n#699 @ 482,119: 19x28\n#700 @ 58,842: 18x15\n#701 @ 563,970: 10x17\n#702 @ 417,555: 19x12\n#703 @ 427,142: 26x24\n#704 @ 715,541: 13x27\n#705 @ 356,284: 12x11\n#706 @ 335,633: 15x23\n#707 @ 313,980: 14x16\n#708 @ 427,418: 19x17\n#709 @ 53,892: 12x28\n#710 @ 772,27: 17x20\n#711 @ 546,947: 28x19\n#712 @ 889,492: 18x29\n#713 @ 320,943: 20x27\n#714 @ 192,613: 11x19\n#715 @ 413,600: 22x25\n#716 @ 923,413: 18x27\n#717 @ 216,961: 14x13\n#718 @ 89,972: 18x10\n#719 @ 893,606: 29x21\n#720 @ 360,467: 18x24\n#721 @ 949,617: 24x10\n#722 @ 490,702: 18x12\n#723 @ 285,955: 25x19\n#724 @ 217,928: 13x23\n#725 @ 906,488: 15x25\n#726 @ 846,782: 20x10\n#727 @ 475,473: 16x15\n#728 @ 328,613: 13x9\n#729 @ 410,563: 27x17\n#730 @ 221,890: 15x17\n#731 @ 77,465: 28x19\n#732 @ 500,764: 27x27\n#733 @ 391,900: 18x15\n#734 @ 65,718: 13x13\n#735 @ 745,170: 23x23\n#736 @ 10,416: 14x19\n#737 @ 201,608: 23x14\n#738 @ 798,824: 15x24\n#739 @ 475,103: 20x17\n#740 @ 863,781: 13x21\n#741 @ 778,643: 24x19\n#742 @ 946,967: 26x23\n#743 @ 515,974: 24x20\n#744 @ 339,422: 12x19\n#745 @ 882,304: 29x18\n#746 @ 981,124: 15x13\n#747 @ 913,744: 10x28\n#748 @ 885,482: 25x22\n#749 @ 64,176: 12x15\n#750 @ 303,639: 22x24\n#751 @ 648,689: 11x29\n#752 @ 13,762: 27x23\n#753 @ 838,585: 17x28\n#754 @ 224,69: 14x20\n#755 @ 111,666: 29x29\n#756 @ 911,139: 10x24\n#757 @ 169,640: 11x11\n#758 @ 535,834: 15x14\n#759 @ 98,425: 26x21\n#760 @ 32,119: 28x28\n#761 @ 56,481: 17x10\n#762 @ 281,117: 16x26\n#763 @ 533,599: 22x16\n#764 @ 443,808: 19x13\n#765 @ 381,277: 20x14\n#766 @ 491,481: 14x17\n#767 @ 517,808: 13x29\n#768 @ 620,558: 24x17\n#769 @ 347,364: 25x29\n#770 @ 933,91: 6x22\n#771 @ 813,612: 28x21\n#772 @ 491,254: 14x11\n#773 @ 504,773: 13x28\n#774 @ 347,93: 10x17\n#775 @ 138,30: 25x14\n#776 @ 529,459: 11x20\n#777 @ 518,73: 21x19\n#778 @ 721,630: 20x18\n#779 @ 265,141: 9x7\n#780 @ 958,659: 10x22\n#781 @ 912,147: 25x15\n#782 @ 709,765: 26x20\n#783 @ 18,210: 26x14\n#784 @ 96,968: 14x13\n#785 @ 891,465: 14x26\n#786 @ 247,261: 28x12\n#787 @ 237,122: 19x26\n#788 @ 430,945: 17x13\n#789 @ 756,202: 12x29\n#790 @ 78,702: 15x19\n#791 @ 955,834: 26x22\n#792 @ 716,694: 18x13\n#793 @ 306,303: 24x25\n#794 @ 317,227: 14x20\n#795 @ 415,2: 16x13\n#796 @ 116,851: 26x21\n#797 @ 844,670: 28x19\n#798 @ 220,888: 23x26\n#799 @ 265,882: 29x25\n#800 @ 535,635: 25x21\n#801 @ 582,630: 25x25\n#802 @ 252,382: 11x26\n#803 @ 184,739: 14x10\n#804 @ 408,622: 12x17\n#805 @ 754,620: 14x13\n#806 @ 448,161: 13x16\n#807 @ 741,51: 29x27\n#808 @ 759,446: 14x24\n#809 @ 877,58: 16x23\n#810 @ 550,387: 10x18\n#811 @ 960,129: 22x26\n#812 @ 784,890: 11x21\n#813 @ 1,328: 28x10\n#814 @ 166,427: 17x11\n#815 @ 105,5: 17x11\n#816 @ 779,662: 27x17\n#817 @ 537,473: 21x20\n#818 @ 860,665: 17x15\n#819 @ 434,131: 21x26\n#820 @ 754,350: 20x13\n#821 @ 746,275: 11x26\n#822 @ 653,556: 20x13\n#823 @ 386,757: 14x13\n#824 @ 259,832: 5x5\n#825 @ 345,635: 29x26\n#826 @ 61,368: 10x18\n#827 @ 418,316: 27x24\n#828 @ 192,183: 20x10\n#829 @ 550,785: 16x10\n#830 @ 966,104: 15x18\n#831 @ 892,3: 19x16\n#832 @ 87,733: 25x12\n#833 @ 525,616: 25x27\n#834 @ 248,282: 27x21\n#835 @ 281,664: 23x17\n#836 @ 313,563: 15x20\n#837 @ 554,587: 21x14\n#838 @ 858,956: 22x17\n#839 @ 342,762: 22x16\n#840 @ 974,395: 17x13\n#841 @ 855,765: 15x25\n#842 @ 5,551: 14x14\n#843 @ 548,389: 12x16\n#844 @ 976,806: 8x7\n#845 @ 943,130: 28x27\n#846 @ 563,368: 15x17\n#847 @ 594,252: 19x26\n#848 @ 858,927: 26x18\n#849 @ 678,900: 27x21\n#850 @ 554,373: 18x15\n#851 @ 625,656: 10x23\n#852 @ 500,310: 26x12\n#853 @ 96,969: 27x27\n#854 @ 211,737: 18x21\n#855 @ 329,150: 18x10\n#856 @ 595,39: 20x16\n#857 @ 259,208: 23x29\n#858 @ 196,477: 4x22\n#859 @ 109,622: 29x17\n#860 @ 29,539: 11x25\n#861 @ 454,193: 16x16\n#862 @ 381,221: 11x22\n#863 @ 342,435: 13x18\n#864 @ 40,544: 24x24\n#865 @ 366,702: 27x13\n#866 @ 299,531: 15x13\n#867 @ 440,30: 11x18\n#868 @ 675,281: 18x10\n#869 @ 7,310: 22x29\n#870 @ 880,467: 25x20\n#871 @ 172,4: 19x29\n#872 @ 816,193: 19x29\n#873 @ 466,10: 15x21\n#874 @ 564,411: 19x28\n#875 @ 902,313: 16x17\n#876 @ 410,448: 11x13\n#877 @ 351,153: 20x25\n#878 @ 446,41: 23x14\n#879 @ 535,786: 27x26\n#880 @ 512,849: 28x12\n#881 @ 933,447: 24x21\n#882 @ 241,555: 29x18\n#883 @ 489,539: 26x29\n#884 @ 449,843: 21x24\n#885 @ 90,663: 27x12\n#886 @ 533,627: 13x18\n#887 @ 405,189: 24x24\n#888 @ 245,114: 24x17\n#889 @ 487,863: 20x25\n#890 @ 223,595: 16x16\n#891 @ 697,100: 11x12\n#892 @ 107,282: 22x9\n#893 @ 963,904: 20x25\n#894 @ 851,622: 13x26\n#895 @ 841,221: 29x12\n#896 @ 405,459: 18x13\n#897 @ 56,59: 23x10\n#898 @ 9,445: 27x12\n#899 @ 440,319: 14x11\n#900 @ 756,823: 12x25\n#901 @ 940,681: 27x26\n#902 @ 906,306: 13x13\n#903 @ 290,655: 17x15\n#904 @ 276,968: 14x22\n#905 @ 23,792: 27x13\n#906 @ 7,847: 17x12\n#907 @ 315,199: 14x29\n#908 @ 280,103: 27x13\n#909 @ 744,636: 16x20\n#910 @ 202,729: 15x21\n#911 @ 663,404: 15x27\n#912 @ 89,125: 13x16\n#913 @ 829,851: 18x25\n#914 @ 713,964: 24x22\n#915 @ 645,597: 23x22\n#916 @ 681,887: 17x12\n#917 @ 83,317: 25x23\n#918 @ 22,452: 27x26\n#919 @ 21,303: 11x27\n#920 @ 899,950: 18x14\n#921 @ 446,380: 22x16\n#922 @ 499,57: 22x19\n#923 @ 21,208: 15x18\n#924 @ 522,591: 23x16\n#925 @ 671,834: 4x4\n#926 @ 487,6: 17x18\n#927 @ 784,742: 15x20\n#928 @ 355,753: 29x24\n#929 @ 743,204: 10x23\n#930 @ 529,920: 20x25\n#931 @ 237,215: 10x5\n#932 @ 92,19: 28x29\n#933 @ 739,57: 27x25\n#934 @ 93,448: 23x25\n#935 @ 838,202: 21x23\n#936 @ 440,59: 26x24\n#937 @ 171,854: 11x10\n#938 @ 322,229: 5x6\n#939 @ 284,24: 19x24\n#940 @ 172,615: 22x19\n#941 @ 156,665: 24x29\n#942 @ 907,468: 24x22\n#943 @ 423,294: 15x14\n#944 @ 388,693: 29x13\n#945 @ 688,149: 25x18\n#946 @ 384,381: 11x11\n#947 @ 1,137: 19x17\n#948 @ 217,888: 11x12\n#949 @ 518,273: 18x15\n#950 @ 528,284: 27x29\n#951 @ 663,547: 16x18\n#952 @ 937,719: 11x23\n#953 @ 806,98: 13x18\n#954 @ 237,328: 26x10\n#955 @ 543,601: 14x14\n#956 @ 314,29: 3x8\n#957 @ 266,491: 12x19\n#958 @ 625,500: 25x21\n#959 @ 892,766: 20x10\n#960 @ 12,263: 14x27\n#961 @ 731,183: 26x23\n#962 @ 469,950: 25x10\n#963 @ 14,134: 25x23\n#964 @ 673,479: 12x29\n#965 @ 160,574: 29x13\n#966 @ 920,765: 21x22\n#967 @ 970,616: 23x16\n#968 @ 963,605: 13x28\n#969 @ 322,611: 23x15\n#970 @ 954,547: 14x16\n#971 @ 959,221: 20x27\n#972 @ 612,47: 13x11\n#973 @ 606,26: 13x24\n#974 @ 751,918: 14x29\n#975 @ 30,450: 18x27\n#976 @ 386,76: 21x22\n#977 @ 519,840: 17x12\n#978 @ 486,541: 18x24\n#979 @ 156,29: 26x23\n#980 @ 671,319: 24x15\n#981 @ 70,272: 14x26\n#982 @ 517,259: 16x29\n#983 @ 949,444: 19x26\n#984 @ 666,299: 10x12\n#985 @ 559,660: 14x18\n#986 @ 740,181: 12x23\n#987 @ 442,793: 22x22\n#988 @ 728,82: 29x27\n#989 @ 717,529: 12x25\n#990 @ 79,352: 21x12\n#991 @ 197,966: 20x22\n#992 @ 761,518: 28x15\n#993 @ 694,93: 24x28\n#994 @ 134,699: 19x11\n#995 @ 897,958: 24x28\n#996 @ 931,89: 16x27\n#997 @ 939,739: 11x27\n#998 @ 235,912: 14x21\n#999 @ 48,616: 14x17\n#1000 @ 558,689: 27x15\n#1001 @ 425,942: 26x28\n#1002 @ 451,543: 13x20\n#1003 @ 711,72: 25x11\n#1004 @ 515,837: 16x24\n#1005 @ 491,868: 29x22\n#1006 @ 150,404: 24x24\n#1007 @ 544,670: 22x14\n#1008 @ 758,822: 16x22\n#1009 @ 245,914: 20x18\n#1010 @ 216,802: 16x21\n#1011 @ 581,829: 14x19\n#1012 @ 704,42: 17x20\n#1013 @ 223,892: 11x26\n#1014 @ 777,622: 26x10\n#1015 @ 869,633: 29x23\n#1016 @ 28,612: 27x13\n#1017 @ 761,455: 4x6\n#1018 @ 217,775: 24x17\n#1019 @ 415,87: 29x21\n#1020 @ 122,630: 11x14\n#1021 @ 296,567: 12x11\n#1022 @ 832,893: 11x27\n#1023 @ 989,649: 10x29\n#1024 @ 719,629: 21x15\n#1025 @ 865,548: 29x26\n#1026 @ 967,245: 14x29\n#1027 @ 642,549: 26x11\n#1028 @ 542,304: 17x21\n#1029 @ 182,684: 21x20\n#1030 @ 691,405: 19x28\n#1031 @ 822,299: 21x14\n#1032 @ 258,507: 21x28\n#1033 @ 869,751: 25x23\n#1034 @ 326,662: 10x27\n#1035 @ 967,595: 18x19\n#1036 @ 613,236: 24x28\n#1037 @ 859,963: 10x21\n#1038 @ 892,965: 16x19\n#1039 @ 890,53: 25x27\n#1040 @ 472,817: 20x21\n#1041 @ 94,778: 23x13\n#1042 @ 364,67: 21x28\n#1043 @ 652,412: 28x11\n#1044 @ 892,463: 14x27\n#1045 @ 650,321: 20x19\n#1046 @ 333,950: 14x16\n#1047 @ 175,581: 26x25\n#1048 @ 331,213: 12x14\n#1049 @ 8,593: 19x12\n#1050 @ 356,57: 11x12\n#1051 @ 498,451: 25x22\n#1052 @ 368,705: 14x15\n#1053 @ 680,126: 28x24\n#1054 @ 728,173: 27x14\n#1055 @ 417,449: 27x23\n#1056 @ 364,396: 24x27\n#1057 @ 889,751: 26x25\n#1058 @ 360,47: 19x24\n#1059 @ 353,612: 14x26\n#1060 @ 697,382: 21x17\n#1061 @ 209,175: 29x19\n#1062 @ 159,916: 18x23\n#1063 @ 108,713: 23x20\n#1064 @ 678,410: 17x16\n#1065 @ 604,871: 24x23\n#1066 @ 584,926: 26x13\n#1067 @ 760,747: 23x26\n#1068 @ 210,929: 26x22\n#1069 @ 891,508: 27x19\n#1070 @ 441,94: 27x29\n#1071 @ 319,679: 25x18\n#1072 @ 589,516: 11x15\n#1073 @ 238,355: 23x10\n#1074 @ 376,368: 15x21\n#1075 @ 972,893: 13x17\n#1076 @ 944,538: 11x20\n#1077 @ 675,897: 11x13\n#1078 @ 867,88: 16x23\n#1079 @ 861,116: 16x14\n#1080 @ 433,578: 29x17\n#1081 @ 729,926: 12x15\n#1082 @ 104,196: 15x14\n#1083 @ 129,258: 14x11\n#1084 @ 573,46: 24x29\n#1085 @ 761,22: 24x10\n#1086 @ 278,949: 29x26\n#1087 @ 866,337: 13x29\n#1088 @ 28,312: 28x17\n#1089 @ 467,821: 19x23\n#1090 @ 323,896: 28x26\n#1091 @ 414,908: 26x11\n#1092 @ 328,171: 19x20\n#1093 @ 604,297: 28x10\n#1094 @ 842,667: 17x23\n#1095 @ 508,300: 21x19\n#1096 @ 866,397: 19x16\n#1097 @ 625,496: 12x23\n#1098 @ 450,763: 12x12\n#1099 @ 1,546: 22x29\n#1100 @ 912,730: 25x15\n#1101 @ 960,520: 13x19\n#1102 @ 369,367: 17x24\n#1103 @ 657,333: 27x15\n#1104 @ 193,475: 15x28\n#1105 @ 266,735: 11x21\n#1106 @ 39,156: 20x21\n#1107 @ 878,38: 15x20\n#1108 @ 720,759: 13x13\n#1109 @ 314,829: 15x10\n#1110 @ 145,521: 16x19\n#1111 @ 44,919: 26x27\n#1112 @ 504,890: 25x10\n#1113 @ 457,23: 27x20\n#1114 @ 364,342: 21x24\n#1115 @ 64,475: 21x24\n#1116 @ 315,250: 18x14\n#1117 @ 113,772: 28x28\n#1118 @ 513,734: 23x15\n#1119 @ 155,355: 15x16\n#1120 @ 499,914: 22x24\n#1121 @ 739,525: 23x19\n#1122 @ 171,645: 12x23\n#1123 @ 506,366: 29x29\n#1124 @ 226,258: 21x19\n#1125 @ 259,139: 21x12\n#1126 @ 172,955: 20x15\n#1127 @ 562,420: 17x21\n#1128 @ 15,856: 29x22\n#1129 @ 674,321: 17x7\n#1130 @ 445,563: 29x21\n#1131 @ 414,713: 10x24\n#1132 @ 304,303: 19x16\n#1133 @ 692,423: 27x15\n#1134 @ 943,840: 19x10\n#1135 @ 296,811: 12x20\n#1136 @ 477,810: 18x10\n#1137 @ 785,877: 27x27\n#1138 @ 946,424: 23x29\n#1139 @ 99,9: 26x23\n#1140 @ 551,607: 22x10\n#1141 @ 47,249: 26x13\n#1142 @ 807,394: 24x22\n#1143 @ 702,422: 29x16\n#1144 @ 549,270: 21x21\n#1145 @ 753,731: 10x29\n#1146 @ 457,54: 17x23\n#1147 @ 582,874: 27x18\n#1148 @ 693,518: 12x20\n#1149 @ 286,837: 16x24\n#1150 @ 384,757: 10x29\n#1151 @ 748,792: 16x10\n#1152 @ 332,521: 13x14\n#1153 @ 497,233: 21x24\n#1154 @ 769,589: 18x26\n#1155 @ 710,947: 18x23\n#1156 @ 359,350: 27x21\n#1157 @ 964,249: 10x12\n#1158 @ 423,344: 21x24\n#1159 @ 404,209: 22x14\n#1160 @ 716,718: 25x21\n#1161 @ 669,763: 13x22\n#1162 @ 106,417: 25x23\n#1163 @ 320,771: 28x12\n#1164 @ 217,17: 24x12\n#1165 @ 503,489: 27x14\n#1166 @ 51,52: 27x16\n#1167 @ 785,648: 20x14\n#1168 @ 501,606: 25x24\n#1169 @ 343,938: 14x22\n#1170 @ 186,630: 14x12\n#1171 @ 493,958: 20x22\n#1172 @ 315,350: 18x24\n#1173 @ 839,541: 26x26\n#1174 @ 343,155: 16x18\n#1175 @ 548,343: 13x20\n#1176 @ 50,876: 21x13\n#1177 @ 340,693: 18x16\n#1178 @ 283,633: 23x28\n#1179 @ 946,208: 13x15\n#1180 @ 246,560: 21x21\n#1181 @ 914,601: 16x23\n#1182 @ 983,126: 10x7\n#1183 @ 778,741: 19x12\n#1184 @ 650,474: 26x27\n#1185 @ 350,739: 27x26\n#1186 @ 13,853: 10x12\n#1187 @ 306,635: 25x26\n#1188 @ 583,720: 23x17\n#1189 @ 972,791: 21x21\n#1190 @ 361,229: 24x20\n#1191 @ 699,865: 17x12\n#1192 @ 856,863: 22x20\n#1193 @ 498,116: 27x26\n#1194 @ 670,511: 17x28\n#1195 @ 128,80: 21x15\n#1196 @ 393,75: 19x15\n#1197 @ 958,43: 20x20\n#1198 @ 318,742: 29x27\n#1199 @ 586,920: 14x14\n#1200 @ 615,333: 12x18\n#1201 @ 559,168: 23x21\n#1202 @ 384,728: 19x21\n#1203 @ 486,321: 18x18\n#1204 @ 963,412: 17x15\n#1205 @ 269,655: 26x25\n#1206 @ 103,333: 21x25\n#1207 @ 746,504: 19x20\n#1208 @ 603,847: 19x18\n#1209 @ 914,279: 7x16\n#1210 @ 319,251: 13x20\n#1211 @ 419,583: 29x12\n#1212 @ 542,354: 13x22\n#1213 @ 120,241: 14x24\n#1214 @ 864,64: 12x12\n#1215 @ 92,843: 28x26\n#1216 @ 271,778: 9x4\n#1217 @ 690,287: 20x20\n#1218 @ 114,901: 15x12\n#1219 @ 905,90: 15x28\n#1220 @ 823,49: 18x12\n#1221 @ 685,667: 18x25\n#1222 @ 221,597: 26x13\n#1223 @ 251,824: 22x19\n#1224 @ 353,473: 12x20\n#1225 @ 952,110: 16x25\n#1226 @ 523,92: 17x25\n#1227 @ 518,482: 23x12\n#1228 @ 609,40: 11x12\n#1229 @ 393,435: 13x25\n#1230 @ 292,629: 13x18\n#1231 @ 414,892: 20x20\n#1232 @ 29,776: 14x18\n#1233 @ 609,951: 17x18\n#1234 @ 478,444: 22x28\n#1235 @ 562,712: 22x16\n#1236 @ 225,36: 23x14\n#1237 @ 700,704: 21x22\n#1238 @ 540,253: 22x12\n#1239 @ 893,307: 15x25\n#1240 @ 610,238: 26x13\n#1241 @ 436,197: 22x28\n#1242 @ 808,382: 13x21\n#1243 @ 85,716: 26x20\n#1244 @ 983,313: 13x24\n#1245 @ 131,797: 29x13\n#1246 @ 16,554: 18x21\n#1247 @ 918,115: 22x13\n#1248 @ 425,113: 28x18\n#1249 @ 144,226: 27x24\n#1250 @ 8,623: 18x16\n#1251 @ 373,483: 10x12\n#1252 @ 223,761: 16x12\n#1253 @ 178,554: 26x17\n#1254 @ 181,270: 21x26\n#1255 @ 411,902: 11x16\n#1256 @ 365,845: 22x10\n#1257 @ 827,292: 10x23\n#1258 @ 642,509: 16x24\n#1259 @ 166,220: 29x27\n#1260 @ 653,35: 16x14\n#1261 @ 333,559: 16x20\n#1262 @ 488,937: 15x29\n#1263 @ 111,803: 21x11\n#1264 @ 486,164: 28x14\n#1265 @ 738,288: 13x26\n#1266 @ 796,813: 12x16\n#1267 @ 325,222: 29x24\n#1268 @ 503,433: 10x17\n#1269 @ 384,390: 13x14\n#1270 @ 388,800: 16x11\n#1271 @ 799,443: 17x28\n#1272 @ 28,353: 16x10\n#1273 @ 168,368: 10x25\n#1274 @ 60,636: 29x18\n#1275 @ 176,846: 25x21\n#1276 @ 396,31: 24x28\n#1277 @ 839,926: 10x26\n#1278 @ 517,823: 18x10\n#1279 @ 533,164: 27x11\n#1280 @ 740,651: 11x22\n#1281 @ 620,647: 10x26\n#1282 @ 425,613: 13x21\n#1283 @ 262,285: 27x18\n#1284 @ 925,390: 23x29\n#1285 @ 825,596: 11x20\n#1286 @ 975,379: 11x25\n#1287 @ 18,802: 13x18\n#1288 @ 827,822: 20x12\n#1289 @ 57,596: 27x24\n#1290 @ 619,556: 29x26\n#1291 @ 781,508: 27x29\n#1292 @ 892,44: 12x10\n#1293 @ 334,889: 10x17\n#1294 @ 418,1: 27x23\n#1295 @ 376,147: 26x27\n#1296 @ 936,737: 29x12\n#1297 @ 213,937: 17x12\n#1298 @ 931,608: 27x10\n#1299 @ 307,712: 18x18\n#1300 @ 350,311: 19x25\n#1301 @ 57,703: 26x12\n#1302 @ 574,486: 10x11\n#1303 @ 447,292: 29x26\n#1304 @ 479,803: 25x22\n#1305 @ 318,835: 3x22\n#1306 @ 831,375: 15x27\n#1307 @ 817,388: 10x10\n#1308 @ 413,624: 3x11\n#1309 @ 9,356: 13x22\n#1310 @ 445,100: 27x17\n#1311 @ 782,464: 24x24\n#1312 @ 279,883: 19x29\n#1313 @ 963,562: 28x14\n#1314 @ 490,351: 28x20\n#1315 @ 75,935: 16x24\n#1316 @ 395,710: 18x21\n#1317 @ 166,498: 25x10\n#1318 @ 899,886: 13x17\n#1319 @ 926,595: 12x27\n#1320 @ 699,695: 21x23\n#1321 @ 446,892: 13x15\n#1322 @ 384,898: 10x10\n#1323 @ 137,526: 12x16\n#1324 @ 564,912: 16x28\n#1325 @ 577,522: 14x27\n#1326 @ 37,853: 25x27\n#1327 @ 373,49: 27x21\n#1328 @ 546,847: 26x20\n#1329 @ 753,13: 23x16\n#1330 @ 454,787: 27x23\n#1331 @ 588,938: 17x10\n#1332 @ 201,590: 28x10\n#1333 @ 689,8: 11x15\n#1334 @ 14,447: 28x22\n#1335 @ 893,268: 20x26\n#1336 @ 631,243: 23x16\n#1337 @ 950,56: 11x11\n#1338 @ 861,157: 22x27\n#1339 @ 229,404: 19x11\n#1340 @ 20,470: 26x22\n#1341 @ 262,67: 23x13\n#1342 @ 529,879: 23x14\n#1343 @ 186,763: 21x14\n#1344 @ 408,590: 26x20\n#1345 @ 781,950: 11x23\n#1346 @ 831,195: 11x23\n#1347 @ 592,649: 13x27\n#1348 @ 321,264: 28x27\n#1349 @ 913,961: 20x16\n#1350 @ 975,74: 23x16\n#1351 @ 852,722: 25x29\n#1352 @ 972,257: 24x15\n#1353 @ 339,418: 11x17\n#1354 @ 534,125: 25x28\n#1355 @ 13,216: 15x12\n#1356 @ 216,536: 8x3\n#1357 @ 10,856: 10x13\n#1358 @ 455,838: 19x10\n#1359 @ 963,940: 21x10\n#1360 @ 461,801: 22x19\n#1361 @ 903,615: 23x21\n#1362 @ 16,577: 20x29\n#1363 @ 30,211: 10x10\n#1364 @ 304,819: 20x11\n#1365 @ 475,733: 12x20\n#1366 @ 413,191: 24x23\n#1367 @ 436,586: 15x27\n#1368 @ 561,949: 15x23\n#1369 @ 738,810: 13x12\n#1370 @ 546,276: 24x17\n#1371 @ 959,968: 22x28\n#1372 @ 542,919: 12x5\n#1373 @ 800,803: 27x28\n#1374 @ 157,621: 13x13\n#1375 @ 968,190: 16x23\n#1376 @ 793,653: 19x23\n#1377 @ 275,709: 27x28\n#1378 @ 29,122: 14x22\n#1379 @ 930,208: 28x11\n#1380 @ 290,693: 25x25\n#1381 @ 252,661: 20x17\n#1382 @ 891,468: 22x27\n#1383 @ 260,649: 17x21\n#1384 @ 789,450: 10x21\n#1385 @ 153,561: 15x11\n#1386 @ 5,333: 15x15\n#1387 @ 17,839: 12x27\n#1388 @ 962,907: 17x16\n#1389 @ 210,792: 14x24\n#1390 @ 380,851: 14x15\n#1391 @ 270,831: 17x25\n#1392 @ 476,766: 25x12\n#1393 @ 212,973: 21x23\n#1394 @ 155,918: 23x12\n#1395 @ 478,475: 9x9\n#1396 @ 305,333: 18x27\n#1397 @ 888,761: 25x24';
    });

    describe('getValues', () => {
       it('should return a cleaned up version of the data', function () {
           expect(Day3.getValues('#1 @ 287,428: 27x20\n#2 @ 282,539: 20x10\n#3 @ 550,118: 20x23'))
               .toEqual([
                   {id: 1, x: 287, y: 428, width: 27, height: 20},
                   {id: 2, x: 282, y: 539, width: 20, height: 10},
                   {id: 3, x: 550, y: 118, width: 20, height: 23},
               ])
       });
    });

    describe('Part #1', function () {
        it('should return the proper number of overlapping squares', function () {
            expect(Day3.getOverlapping('#1 @ 1,1: 3x2\n#2 @ 3,0: 1x4'))
                .toEqual(2)
        });
        it('should ignore double overlaps', function () {
            expect(Day3.getOverlapping('#1 @ 1,1: 3x2\n#2 @ 3,0: 1x4\n#3 @ 3,1: 1x2'))
                .toEqual(2)
        });
        it('should return the proper number of overlapping squares', function () {
            expect(Day3.getOverlapping('#1 @ 5,5: 10x10\n#1 @ 5,5: 10x10'))
                .toEqual(100)
        });
        it('should return the correct answer', function () {
            expect(Day3.getOverlapping(input))
                .toEqual(116140)
        });
    });

    describe('Part #2', function () {
        it('should return the non overlapping input', function () {
            expect(Day3.getNonOverlapping(input))
                .toEqual('hi')
        });
    });

});
