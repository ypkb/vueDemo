
var expres=require("express");
let app=expres();

//轮播图数据
let slides=['//img10.360buyimg.com/tuangou/s720x576_jfs/t23821/358/42892275/140065/4fded109/5b236d59N0077dd1c.jpg!q75.webp',
    '//img14.360buyimg.com/tuangou/s720x576_jfs/t21424/64/1400223260/190485/194f5c86/5b28c816N92768b96.jpg!q75.webp',
    '//img14.360buyimg.com/tuangou/s720x576_jfs/t24262/208/200465785/188734/7a1b33ec/5b28c821Naba444ae.jpg!q75.webp',
    '//img13.360buyimg.com/tuangou/s720x576_jfs/t24058/189/258030851/171816/5432778c/5b2a03c9N22338863.jpg!q75.webp'];
let daySlides=['//img13.360buyimg.com/tuangou/s720x576_jfs/t20992/32/1458367149/741867/ddc3d1e7/5b2a2eadN287055f4.jpg!q75.webp',
    '//img10.360buyimg.com/tuangou/s720x576_jfs/t20200/271/1432201685/333819/95e98c46/5b2a2e8eNc3baa338.jpg!q75.webp',
    '//img13.360buyimg.com/tuangou/s720x576_jfs/t24487/101/244265646/603221/c59b088/5b2a322cN0786a06a.jpg!q75.webp',
];
//展示info
let baseImg= {
    newPerson:'//img13.360buyimg.com/tuangou/jfs/t21916/138/1282077862/75133/6759e1d6/5b235735Na18f106b.jpg!q75.webp',
    YearDazhe01:'//img11.360buyimg.com/tuangou/s750x170_jfs/t21904/171/1461016871/9640/f421a0b4/5b2a79a7N4de51b2b.png!q75.webp',
    YearDazhe:'//img13.360buyimg.com/tuangou/s720x480_jfs/t23014/312/256664567/161770/db0154d3/5b2a31b7Ne10418bc.jpg!q75.webp',
    newStore:'//img14.360buyimg.com/tuangou/s750x170_jfs/t23290/335/256928451/8030/71099545/5b2a7800N9a7732b1.png!q75.webp',
    styleList:'//img14.360buyimg.com/tuangou/s750x170_jfs/t20626/112/695475977/9791/8403c7ac/5b152f6bNbbd8cc5c.png!q75.webp',
    goodProduct:'//img14.360buyimg.com/tuangou/s750x170_jfs/t21925/206/1529226772/10058/3c1d50b6/5b2b03c1N3b3f2c46.png!q75.webp',
    };

//商品style info
let styleImg=[
    {img:'//img10.360buyimg.com/tuangou/jfs/t21421/263/1248097302/79099/6ed3002/5b23650bN17751dab.jpg!q75.webp',
        title:'献给世界上最爱你的男人【父亲节甄选】',content:'心上物'
    },
    {img:'//img13.360buyimg.com/tuangou/jfs/t23632/74/256895763/54679/9a1870c7/5b2a5305N47a0f0e7.jpg!q75.webp',
        title:'职场轻熟男的时尚升级课【精英范儿】',content:'风格清单'
    },
    {img:'//img12.360buyimg.com/tuangou/jfs/t20875/168/1502238814/80931/ee9de0bc/5b2a7d6eN779ec3ac.jpg!q75.webp',
        title:'清爽粉色系打造活力少女【粉嫩夏日】',content:'风格清单'
    },
];
//商品new info
let newStore=[
    {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
    content:[
        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
            brand:'SAINT LAURENT',price:1222,},
        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
            brand:'VILEBREQUIN',price:1222,},
        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
            brand:'TOD\'S',price:4222,},
        ]},
    {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
        content:[
            {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                brand:'SAINT LAURENT',price:1222,},
            {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                brand:'VILEBREQUIN',price:1222,},
            {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                brand:'TOD\'S',price:4222,},
        ]},
    {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
        content:[
            {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                brand:'SAINT LAURENT',price:1222,},
            {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                brand:'VILEBREQUIN',price:1222,},
            {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                brand:'TOD\'S',price:4222,},]}
     ];
//所有info
let storeInfo=[
    {
     imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t10075/154/2587971775/231852/f84df6cc/59f99860Na68a1d1b.jpg!q75.webp',
     imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
     imgInfoSrc:[
     '//m.360buyimg.com/n1/s650x0_jfs/t10594/229/2572934367/197310/860b15ca/59f99867N9dd23b5c.jpg!q75.webp',
    '//m.360buyimg.com/n1/s621x0_jfs/t10975/312/2594782943/189114/ae9eff8a/59f99867N547ae907.jpg!q75.webp',
    '//m.360buyimg.com/n1/s621x0_jfs/t9946/253/2558102258/182808/9f1a96a7/59f99868N89cd89ac.jpg!q75.webp',
    '//m.360buyimg.com/n1/s621x0_jfs/t11995/175/823349121/359089/a779ff74/59f99868N8bb9098f.jpg!q75.webp',
    '//m.360buyimg.com/n1/s621x0_jfs/t10411/210/2560626499/499805/46b377eb/59f99869Nb7309aa1.jpg!q75.webp',
     ],
    imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t9916/241/1709990017/69924/e5cd8f53/59e587b5Ne5b8cd36.jpg',
    imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t9658/169/1744003239/161237/f82ecefe/59e587b9N2f5b926d.jpg',
    imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t11353/123/5545217/63841/c7382fb0/59e587c4N6dfb6260.jpg',
    imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
    imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
    imgAlertSrc:[
    '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
    '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
    '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
    ],
    imgAlertSrc1:[
     '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
     '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
     '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
     ],
     price:1200,title:'男士黑色T恤 国际通用码',goodTitle:'EA7',isOrNot:false,storeId:'1',isFalse:false,count:1,
        content:'SAINT LAURENT CABAS鳄鱼压花真皮包，带可拆卸和可调节肩带及金属联结YSL标志搭扣',
},
    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:true,storeId:'2',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img13.360buyimg.com/n1/s254x254_jfs/t15751/186/2127342205/88909/48db2c82/5a7af077N031ad597.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14989/231/2223877733/75878/cc5fed60/5a7fcadcNe3e6c533.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17812/316/450037011/128330/ddefb7a6/5a7af0a4N9bf323e3.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t15319/353/2195229734/74456/3ac96724/5a7af0a7N5f6ba21a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12799/36/1494562992/96644/cffec5d0/5a819b8cNea3f6d76.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t16360/224/2119822331/189949/3c5b5495/5a819b90N8ff49374.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14395/283/2206782563/35432/6f9d0b02/5a7a6befN8910c01f.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t13849/329/1967285843/162609/6d5afc1b/5a7a6c06N68bec1f6.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19615/25/460066049/130568/6e2357bd/5a7a6c12N858e04b7.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16804/101/2497357957/9216/ce526cb5/5afbe977N477d347a.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:4200,title:'女士小羊皮凉鞋 黑色/白色',goodTitle:'sheme',isOrNot:false,storeId:'3',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t20749/274/808122213/260567/a861992d/5b18aa8dNac1f0efa.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t22000/127/814179947/260470/8f5c08c6/5b18aa8fNb9a57362.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t21934/209/865783974/107304/da26167b/5b1a2c83Nbda94720.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t20134/66/905389849/174859/27c24ce0/5b1a2c8cNb9ca7ded.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19969/229/1317073660/44961/ea5e9e70/5b1a2c94N2593bcb1.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16402/334/924034023/18902/b21e2126/5a4611eeNad118086.jpg!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'SAINT LAURENT',isOrNot:false,storeId:'4',
        content:'',isFalse:true,count:1,
    },
    {
        imgSrc:'//img12.360buyimg.com/n1/s254x254_jfs/t7372/294/3752343657/149232/f62edad1/59fc3f6fN250bac76.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t7645/245/3552832723/183726/3db00e9e/59fc3f7dN454e7156.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11533/200/932179555/115213/42026bff/59fc3f7bN3c85dfa2.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t9820/250/2720213796/129385/e2d0223d/59fc3f7eN83e9d80f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11587/217/942887717/125189/2095ccc2/59fc3f7fN21433e95.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t10051/74/2684063211/116892/cfae8709/59fc3f7fN46bce04f.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t9625/5/1086797421/84518/ba8ec658/59dc888aN557ed955.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t10021/113/1085929576/117568/abee3795/59dc8891N3c79173c.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t9859/136/1143848313/46585/1f0a6ab2/59dc8893N7a7c5c47.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t14599/173/762330450/5264/1515bf18/5a379b21Ne051646a.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'男士白色长袖带帽款T恤 国际通用码',goodTitle:'PORTS1961',isOrNot:false,storeId:'5',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img11.360buyimg.com/n8/s310x390_jfs/t18538/356/1510659485/149524/d6734771/5accc25bN1818c2c2.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t19222/81/1509200553/328741/66a23b6/5accc26aN4350023b.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17146/30/1489347002/374696/2d420317/5accc26fNf458e871.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17149/266/1530652563/378631/8a931056/5accc26eN05fd27c3.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t16759/157/1485789900/176212/e9dab7d6/5accc26dNd1af55ac.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t18223/234/1488299775/362753/4ae2def7/5accc26cNcf1629cc.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t17443/314/2430458190/26511/bc706b56/5af53bafNa07f7335.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19726/310/1484441351/154828/4a960912/5acc59b9Nfdf312e2.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t18604/157/1427791846/191895/81d3b672/5acc3150N64fe03a3.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16309/218/599357644/5689/b5f032f0/5a379b78N22433306.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:20000,title:'男士女士同款休闲鞋 白色 美国码',goodTitle:'EA7',isOrNot:false,storeId:'6',isFalse:true,count:1,
        content:'',
    },

    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'7',isFalse:true,count:1,
        content:'',
    },

    {
        imgSrc:'//img14.360buyimg.com/n8/s310x390_jfs/t21097/43/556578680/226355/1f6c3a3f/5b112990Ndf81663d.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t21097/43/556578680/226355/1f6c3a3f/5b112990Ndf81663d.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t21592/293/542887142/194268/7ca98d6b/5b112993Na593ae65.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t22069/136/546449010/328074/7543e3eb/5b11299aN720e6c06.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t20338/273/193132031/20552/7c07b029/5b0262c5N701349e8.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t17815/47/2663659541/64659/7617d5eb/5b0262d6N45524539.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t17350/25/2614668727/14566/85b232bb/5b026302Nb6a98859.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t20575/197/463733248/4624/9a8af53b/5b0e76efN754ad351.jpg!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'男式人字拖 罂粟红',goodTitle:'VILEBREQUIN',isOrNot:false,storeId:'8',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img13.360buyimg.com/n8/s310x390_jfs/t8638/223/904558479/187723/f5ce77f9/59b0e8e2N88a7d7f4.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t7456/352/2476106675/183070/324dac16/59b0e900N09d1d691.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t8686/258/900920531/139178/2532b0e7/59b0e900N97f475d1.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t8155/191/881284486/145117/761e7585/59b0e900N9e38adf8.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t8191/201/886486334/95651/3718eba/59b0e900N14cee0f2.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t8314/196/930614754/75976/472b4422/59b0e900Nf1ce4c77.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t7261/201/2856317767/128058/b3c28104/59b5f54cN3fb2ba29.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t8860/244/1212735118/145786/b6d7ff31/59b5f56eNc2ebc9dd.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t7621/353/2869628160/93938/4bf706d7/59b5f582N25c63a5d.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t15652/342/629070366/4303/3207ccc9/5a3799ffN98c3b32f.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:44400,title:'H9 无线蓝牙降噪头戴式包耳耳机 黑色',goodTitle:'B&O PLAY',isOrNot:false,storeId:'9',isFalse:true,count:1,
        content:'',
    },

    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'10',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img12.360buyimg.com/n1/s254x254_jfs/t7372/294/3752343657/149232/f62edad1/59fc3f6fN250bac76.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t7645/245/3552832723/183726/3db00e9e/59fc3f7dN454e7156.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11533/200/932179555/115213/42026bff/59fc3f7bN3c85dfa2.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t9820/250/2720213796/129385/e2d0223d/59fc3f7eN83e9d80f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11587/217/942887717/125189/2095ccc2/59fc3f7fN21433e95.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t10051/74/2684063211/116892/cfae8709/59fc3f7fN46bce04f.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t9625/5/1086797421/84518/ba8ec658/59dc888aN557ed955.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t10021/113/1085929576/117568/abee3795/59dc8891N3c79173c.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t9859/136/1143848313/46585/1f0a6ab2/59dc8893N7a7c5c47.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t14599/173/762330450/5264/1515bf18/5a379b21Ne051646a.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'男士白色长袖带帽款T恤 国际通用码',goodTitle:'PORTS1961',isOrNot:false,storeId:'11',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img13.360buyimg.com/n1/s254x254_jfs/t15751/186/2127342205/88909/48db2c82/5a7af077N031ad597.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14989/231/2223877733/75878/cc5fed60/5a7fcadcNe3e6c533.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17812/316/450037011/128330/ddefb7a6/5a7af0a4N9bf323e3.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t15319/353/2195229734/74456/3ac96724/5a7af0a7N5f6ba21a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12799/36/1494562992/96644/cffec5d0/5a819b8cNea3f6d76.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t16360/224/2119822331/189949/3c5b5495/5a819b90N8ff49374.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14395/283/2206782563/35432/6f9d0b02/5a7a6befN8910c01f.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t13849/329/1967285843/162609/6d5afc1b/5a7a6c06N68bec1f6.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19615/25/460066049/130568/6e2357bd/5a7a6c12N858e04b7.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16804/101/2497357957/9216/ce526cb5/5afbe977N477d347a.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:4200,title:'女士小羊皮凉鞋 黑色/白色',goodTitle:'sheme',isOrNot:false,storeId:'12',isFalse:true,count:1,
        content:'',
    },

    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'13',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'14',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img13.360buyimg.com/n1/s254x254_jfs/t15751/186/2127342205/88909/48db2c82/5a7af077N031ad597.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14989/231/2223877733/75878/cc5fed60/5a7fcadcNe3e6c533.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17812/316/450037011/128330/ddefb7a6/5a7af0a4N9bf323e3.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t15319/353/2195229734/74456/3ac96724/5a7af0a7N5f6ba21a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12799/36/1494562992/96644/cffec5d0/5a819b8cNea3f6d76.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t16360/224/2119822331/189949/3c5b5495/5a819b90N8ff49374.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14395/283/2206782563/35432/6f9d0b02/5a7a6befN8910c01f.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t13849/329/1967285843/162609/6d5afc1b/5a7a6c06N68bec1f6.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19615/25/460066049/130568/6e2357bd/5a7a6c12N858e04b7.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16804/101/2497357957/9216/ce526cb5/5afbe977N477d347a.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:4200,title:'女士小羊皮凉鞋 黑色/白色',goodTitle:'sheme',isOrNot:false,storeId:'15',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t20749/274/808122213/260567/a861992d/5b18aa8dNac1f0efa.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t22000/127/814179947/260470/8f5c08c6/5b18aa8fNb9a57362.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t21934/209/865783974/107304/da26167b/5b1a2c83Nbda94720.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t20134/66/905389849/174859/27c24ce0/5b1a2c8cNb9ca7ded.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19969/229/1317073660/44961/ea5e9e70/5b1a2c94N2593bcb1.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16402/334/924034023/18902/b21e2126/5a4611eeNad118086.jpg!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'SAINT LAURENT',isOrNot:false,storeId:'16',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img12.360buyimg.com/n1/s254x254_jfs/t7372/294/3752343657/149232/f62edad1/59fc3f6fN250bac76.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t7645/245/3552832723/183726/3db00e9e/59fc3f7dN454e7156.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11533/200/932179555/115213/42026bff/59fc3f7bN3c85dfa2.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t9820/250/2720213796/129385/e2d0223d/59fc3f7eN83e9d80f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11587/217/942887717/125189/2095ccc2/59fc3f7fN21433e95.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t10051/74/2684063211/116892/cfae8709/59fc3f7fN46bce04f.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t9625/5/1086797421/84518/ba8ec658/59dc888aN557ed955.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t10021/113/1085929576/117568/abee3795/59dc8891N3c79173c.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t9859/136/1143848313/46585/1f0a6ab2/59dc8893N7a7c5c47.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t14599/173/762330450/5264/1515bf18/5a379b21Ne051646a.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'男士白色长袖带帽款T恤 国际通用码',goodTitle:'PORTS1961',isOrNot:false,storeId:'17',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img11.360buyimg.com/n8/s310x390_jfs/t18538/356/1510659485/149524/d6734771/5accc25bN1818c2c2.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t19222/81/1509200553/328741/66a23b6/5accc26aN4350023b.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17146/30/1489347002/374696/2d420317/5accc26fNf458e871.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17149/266/1530652563/378631/8a931056/5accc26eN05fd27c3.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t16759/157/1485789900/176212/e9dab7d6/5accc26dNd1af55ac.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t18223/234/1488299775/362753/4ae2def7/5accc26cNcf1629cc.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t17443/314/2430458190/26511/bc706b56/5af53bafNa07f7335.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19726/310/1484441351/154828/4a960912/5acc59b9Nfdf312e2.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t18604/157/1427791846/191895/81d3b672/5acc3150N64fe03a3.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16309/218/599357644/5689/b5f032f0/5a379b78N22433306.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:20000,title:'男士女士同款休闲鞋 白色 美国码',goodTitle:'EA7',isOrNot:false,storeId:'18',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img13.360buyimg.com/n1/s254x254_jfs/t15751/186/2127342205/88909/48db2c82/5a7af077N031ad597.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14989/231/2223877733/75878/cc5fed60/5a7fcadcNe3e6c533.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17812/316/450037011/128330/ddefb7a6/5a7af0a4N9bf323e3.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t15319/353/2195229734/74456/3ac96724/5a7af0a7N5f6ba21a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12799/36/1494562992/96644/cffec5d0/5a819b8cNea3f6d76.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t16360/224/2119822331/189949/3c5b5495/5a819b90N8ff49374.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14395/283/2206782563/35432/6f9d0b02/5a7a6befN8910c01f.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t13849/329/1967285843/162609/6d5afc1b/5a7a6c06N68bec1f6.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19615/25/460066049/130568/6e2357bd/5a7a6c12N858e04b7.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16804/101/2497357957/9216/ce526cb5/5afbe977N477d347a.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:4200,title:'女士小羊皮凉鞋 黑色/白色',goodTitle:'sheme',isOrNot:false,storeId:'19',
        content:'',isFalse:true,count:1,
    },

    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'20',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'21',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'22',
        content:'',isFalse:true,count:1,
    },
    {
        imgSrc:'//img13.360buyimg.com/n1/s254x254_jfs/t15751/186/2127342205/88909/48db2c82/5a7af077N031ad597.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14989/231/2223877733/75878/cc5fed60/5a7fcadcNe3e6c533.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t17812/316/450037011/128330/ddefb7a6/5a7af0a4N9bf323e3.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t15319/353/2195229734/74456/3ac96724/5a7af0a7N5f6ba21a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12799/36/1494562992/96644/cffec5d0/5a819b8cNea3f6d76.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t16360/224/2119822331/189949/3c5b5495/5a819b90N8ff49374.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14395/283/2206782563/35432/6f9d0b02/5a7a6befN8910c01f.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t13849/329/1967285843/162609/6d5afc1b/5a7a6c06N68bec1f6.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t19615/25/460066049/130568/6e2357bd/5a7a6c12N858e04b7.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t16804/101/2497357957/9216/ce526cb5/5afbe977N477d347a.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:4200,title:'女士小羊皮凉鞋 黑色/白色',goodTitle:'sheme',isOrNot:false,storeId:'23',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'24',isFalse:true,count:1,
        content:'',
    },
    {
        imgSrc:'//img14.360buyimg.com/n1/s254x254_jfs/t11368/103/2413591180/290211/d9a47d8d/5a178a13N6d5afadc.jpg!q75.webp',
        imgInfoSrc:[
            '//m.360buyimg.com/n1/s650x0_jfs/t14410/23/522696766/189871/50d0814c/5a2f701eN1ba8ba83.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t12253/263/962541030/196478/663d634d/5a178a1dN5e01361f.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t13639/98/965257252/204496/faf58e67/5a178a15N0d87845a.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11386/188/2398634900/257285/ba87afce/5a178a1dN44883249.jpg!q75.webp',
            '//m.360buyimg.com/n1/s621x0_jfs/t11518/157/2464833475/101257/f028a11a/5a178a1bN31e6994e.jpg!q75.webp',
        ],
        imgDetailSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t12556/88/1759303535/32747/8d631dab/5a28ec30N56270957.jpg',
        imgPenSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14752/214/4967438/118354/b0c17e8e/5a213b63N2358107d.jpg',
        imgSizeSrc:'//img30.360buyimg.com/jgsq-productsoa/jfs/t14464/202/5802131/153927/3e9094f4/5a213b66Nf6c201ae.jpg',
        imgServerSrc:'//img30.360buyimg.com/mobilecms/jfs/t5734/326/2818317363/20350/1ce30667/5934cf39Na2208fad.png',
        imgTuiSrc:'//img30.360buyimg.com/mobilecms/jfs/t6013/251/1621739140/21035/bdecf100/5934cf92Nea70fde6.png',
        imgBrandSrc:'//m.360buyimg.com/n1/s270x120_jfs/t13354/167/2209889421/11062/d5efb834/5a3799a3N401664be.png!q75.webp',
        imgAlertSrc:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t9712/170/2562521092/258600/c667dbff/59f997f2N537ed825.jpg!q75.webp',
        ],
        imgAlertSrc1:[
            '//img10.360buyimg.com/n1/s250x250_jfs/t8527/162/1014486908/151400/85750358/59b35239Ne2b9556a.jpg!q75.webp',
            '//img10.360buyimg.com/n1/s250x250_jfs/t8221/182/1025470289/192989/f182be53/59b3526aN4b8e71de.jpg!q75.webp',
            '//img11.360buyimg.com/n1/s250x250_jfs/t13030/35/1679070207/137257/22ecd189/5a263cb6Nb76ec53f.jpg!q75.webp',
        ],
        price:9200,title:'LE CABRIOLET 搭扣手柄手拿包',goodTitle:'PERRIN PARIS',isOrNot:false,storeId:'25',isFalse:true,count:1,
        content:'',
    },
];
//品牌接口信息
let brandImg=[
    {brandId:1,
        img:'//img11.360buyimg.com/tuangou/s250x250_jfs/t14938/282/2227590300/15275/dcee14ff/5a827953N6d53c60a.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
                ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                content:[
                    {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                        brand:'SAINT LAURENT',price:1222,},
                    {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                        brand:'VILEBREQUIN',price:1222,},
                    {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                        brand:'TOD\'S',price:4222,},
                ]},
    {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
        content:[
            {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                brand:'SAINT LAURENT',price:1222,},
            {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                brand:'VILEBREQUIN',price:1222,},
            {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                brand:'TOD\'S',price:4222,},
        ]},
    {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
        content:[
            {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                brand:'SAINT LAURENT',price:1222,},
            {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                brand:'VILEBREQUIN',price:1222,},
            {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                brand:'TOD\'S',price:4222,},]}
        ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:2,
        img:'//img13.360buyimg.com/tuangou/s250x250_jfs/t16276/21/1486560180/17067/307a3135/5a574444Nf9f00416.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:3,
        img: '//img12.360buyimg.com/tuangou/s250x250_jfs/t22342/239/1076898176/24804/46f1adac/5b1f9aaeN2bf87b63.jpg!q75.webp',
    title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },},
    {brandId:4,
        img: '//img10.360buyimg.com/tuangou/s250x250_jfs/t14584/251/1411792134/19532/37568da9/5a4e2352N19048be2.jpg!q75.webp',
    title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },},
    {brandId:5,
        img:'//img14.360buyimg.com/tuangou/s250x250_jfs/t16237/361/2253823420/21261/26d55bd4/5a9d3515N9cf11265.jpg!q75.webp',
    title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },},
    {brandId:6,
        img:'//img12.360buyimg.com/tuangou/s250x250_jfs/t15601/11/2544841783/19570/73cbf96e/5ab313a5Nf655a2ce.jpg!q75.webp',
    title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },},
    {brandId:7,
        img:'//img13.360buyimg.com/tuangou/s250x250_jfs/t16399/280/1184460954/18001/1aec37ef/5a4e2372Nc7dc6abc.jpg!q75.webp',
    title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },},
    {brandId:8,
        img: '//img13.360buyimg.com/tuangou/s250x250_jfs/t17866/25/1524830680/17462/5eaa5e40/5acd70f6Nb8102843.jpg!q75.webp',
    title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },},
    {brandId:9,
        img:'//img14.360buyimg.com/tuangou/s250x250_jfs/t16141/127/1227356579/11499/97b24001/5a4e2389Nf68baedb.jpg!q75.webp',
    title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },},

    {brandId:10,
        img: '//img12.360buyimg.com/tuangou/s250x250_jfs/t17257/214/2403140896/32463/98af3195/5af2e582N394e4fa1.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:11,
        img: '//img12.360buyimg.com/tuangou/s250x250_jfs/t18904/74/1556128654/23944/edc6cabc/5acf49a1Nbeed9531.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:12,
        img:'//img10.360buyimg.com/tuangou/s250x250_jfs/t13036/136/2049050189/12786/23fa1e81/5a4e237cN92aa7871.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:13,
        img:'//img10.360buyimg.com/tuangou/s250x250_jfs/t12970/202/2016625695/19312/411873b1/5a4e23a4N96a4f83c.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:14,
        img:'//img13.360buyimg.com/tuangou/s250x250_jfs/t16855/240/1159648039/33069/7dab30c/5abc6c6dN94036705.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:15,
        img:'//img14.360buyimg.com/tuangou/s250x250_jfs/t16870/39/2528119252/29791/fdbb209f/5af94b1aNd712e598.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:16,
        img:'//img14.360buyimg.com/tuangou/s250x250_jfs/t12799/42/1576590346/12411/2c97bd84/5a977f7cNb8aa707d.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:17,
        img: '//img14.360buyimg.com/tuangou/s250x250_jfs/t18538/187/567644923/31771/d8456611/5a9771f8N4210d281.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
    {brandId:18,
        img: '//img13.360buyimg.com/tuangou/s250x250_jfs/t12781/343/2064957759/11578/35be24a9/5a4e25bbNa64e7738.jpg!q75.webp',
        title:'店家',
        seasonImg:'//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp',
        womenImg:'//img10.360buyimg.com/tuangou/s720x578_jfs/t22708/83/220432749/288943/313ed05d/5b29b92bN703be32c.jpg!q75.webp',
        manImg:'//img14.360buyimg.com/tuangou/s720x578_jfs/t24340/177/234306468/273037/72ddf01e/5b29ba70N50763ab0.jpg!q75.webp',
        man: {navImg:[
                '//img13.360buyimg.com/tuangou/s720x1069_jfs/t20242/8/1460703626/166652/f6c723a8/5b2a0110N72712745.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t19765/143/1771712099/9113/44b8498/5ad8834bNb1947901.png!q75.webp',
                '//img10.360buyimg.com/tuangou/s720x480_jfs/t22948/5/247560915/184075/4ffa578b/5b2a5911N280ddd7f.jpg!q75.webp',
                '//img14.360buyimg.com/tuangou/s750x170_jfs/t18094/255/1811295146/30117/c99c35e0/5ad883deN15e11c37.jpg!q75.webp',
                '//img12.360buyimg.com/tuangou/s750x170_jfs/t17761/264/1799072979/34118/16708c70/5ad885c5Nff182e12.jpg!q75.webp'
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
        women: {navImg:[
                '//img12.360buyimg.com/tuangou/s720x1069_jfs/t20011/262/1860919409/189321/6e8801c9/5b29c96fN9dabe8fa.jpg!q75.webp',
                '//img13.360buyimg.com/tuangou/s750x170_jfs/t17254/169/1811046254/9113/44b8498/5ad86a9cNe41b22c8.png!q75.webp',
                '//img14.360buyimg.com/tuangou/s720x480_jfs/t22441/77/260948590/284683/b07778ed/5b2a61dcN42d2fab4.jpg!q75.webp',
            ],
            newString:[
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t19948/187/1936475436/193466/ea74017b/5b2a7460N1d6cb410.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20287/121/803256707/242352/60c1ea41/5b18aa72N6fade3e3.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21232/283/553099398/79522/a2d5d77d/5b10b933Ne2d75b56.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t17530/44/2055688027/143925/80cbb55b/5ae3122bN1bf03d35.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img11.360buyimg.com/tuangou/s720x409_jfs/t20221/84/1475028815/118640/615bfc21/5b2a750fN6f643994.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img14.360buyimg.com/n1/s150x150_jfs/t21268/73/995397265/258038/27336b94/5b1df9faNd52dbae1.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t22240/138/820372289/214523/ae8c6b49/5b18aa21N35608669.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img12.360buyimg.com/n1/s150x150_jfs/t20167/365/556793284/280316/ffb36a23/5b1101b2N3dc245df.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},
                    ]},
                {titleImg:'//img12.360buyimg.com/tuangou/s720x409_jfs/t24061/61/276656539/188447/fbc3fe68/5b2a76cfNc9338819.jpg!q75.webp',
                    content:[
                        {imgSrc:'//img10.360buyimg.com/n1/s150x150_jfs/t22105/156/1140315504/272398/b4c1899c/5b20c454Nf2f452d4.jpg!q75.webp',
                            brand:'SAINT LAURENT',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t21109/60/396575199/107379/17ae816a/5b0bd5cfN3fc9e808.jpg!q75.webp',
                            brand:'VILEBREQUIN',price:1222,},
                        {imgSrc:'//img13.360buyimg.com/n1/s150x150_jfs/t20770/18/1269302102/359807/2e3bc13b/5b23b428N20e15deb.jpg!q75.webp',
                            brand:'TOD\'S',price:4222,},]}
            ],
        },
    },
];

//分类接口
let classify=[
    {img:'//img13.360buyimg.com/cms/s750x500_jfs/t16033/287/2077263064/191292/4715cf85/5a782006N9d9451f9.jpg!q75.webp',
        img01:'//static.360buyimg.com/tp-statics/2018-6-16/m/img/title_women@2x.png',
        contents:['女士服饰','女士鞋靴','女士包袋','女士配饰']
    },

    {img:'//img11.360buyimg.com/cms/s750x500_jfs/t18709/329/436012280/186496/fabc2e3e/5a782001Nd6c0fc26.jpg!q75.webp',
        img01:'//static.360buyimg.com/tp-statics/2018-6-16/m/img/title_men@2x.png',
        contents:['男士服饰','男士鞋靴','男士包袋','男士配饰']
    },
    {img:'//img11.360buyimg.com/cms/s750x500_jfs/t17323/343/458123000/125178/b5347098/5a782006N8eb9b9e5.jpg!q75.webp',
        img01:'//static.360buyimg.com/tp-statics/2018-6-16/m/img/title_lifestyle@2x.png',
        contents:['功能箱包','时尚生活','名酒','保健品','玩具']
    },
    {img:'//img14.360buyimg.com/cms/s750x500_jfs/t15142/35/2179078856/158815/7071602e/5a782006Ndd8549a2.jpg!q75.webp',
        img01:'//static.360buyimg.com/tp-statics/2018-6-16/m/img/title_watch_jewels@2x.png',
        contents:['腕表','珠宝']
    },
    {img:'//img14.360buyimg.com/cms/s750x500_jfs/t14377/72/2267458880/146289/a93e1f77/5a7ac896N33072b7a.jpg!q75.webp',
        img01:'//static.360buyimg.com/tp-statics/2018-6-16/m/img/title_beauty_care@2x.png',
        contents:['美容护肤',' 香水彩妆','洗护沐浴']
    },
    {img:'//img13.360buyimg.com/cms/s750x500_jfs/t17692/167/430105043/161222/9d53d5ee/5a782002N12149d65.jpg!q75.webp',
        img01:'//static.360buyimg.com/tp-statics/2018-6-16/m/img/title_gift@2x.png',
        contents:['男士礼品','女士礼品']
    },
    {img:'//img10.360buyimg.com/cms/s750x500_jfs/t15754/233/2050464675/238502/bb74158a/5a782002Nf14e4fc9.jpg!q75.webp',
        img01:'//static.360buyimg.com/tp-statics/2018-6-16/m/img/title_kids@2x.png',
        contents:['婴儿服饰','男童服饰','女童服饰']
    },
];


//home  子夜

let homeChildImg=[
    '//img12.360buyimg.com/tuangou/s822x548_jfs/t23722/72/25713730/190004/ecf4a112/5b232bb9N5b5a56a7.jpg!q75.webp',
    '//img10.360buyimg.com/tuangou/s822x296_jfs/t24205/126/26705823/83540/9bb08a55/5b232bd9N122af33f.jpg!q75.webp',
    '//img14.360buyimg.com/tuangou/jfs/t21940/284/1132869551/35638/5ad6982d/5b208a51N2159a35c.jpg',
    '//img14.360buyimg.com/tuangou/s822x438_jfs/t20446/211/1066337243/91273/d0a7b7a3/5b1f76dfN4fd084b8.jpg!q75.webp',
    '//img10.360buyimg.com/tuangou/s822x438_jfs/t20872/239/1057582934/90276/d55d3f3f/5b1f76f7N2e52ac93.jpg!q75.webp',
    '//img14.360buyimg.com/tuangou/s822x438_jfs/t20518/212/1064120347/91424/b11cc67d/5b1f770aNd31eef7c.jpg!q75.webp'
];

//设置头信息
/*
 @parm  res   response
 */
function setMyHeader(res){
    //设置头信息
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    res.setHeader("Content-Type", "application/json;charset=utf-8");
}


//1.接口：提供轮播图
app.get('/getslides',function (req, res) {
    setMyHeader(res);
    res.send(JSON.stringify(slides));
});
//.接口：提供每日轮播图
app.get('/getdayslides',function (req, res) {
    setMyHeader(res);
    res.send(JSON.stringify(daySlides));
});
//接口 ：提供新品上市数据
app.get('/getnewstore',function (req, res) {
    setMyHeader(res);
    res.send(JSON.stringify(newStore));
});
//接口 ：提供风格清单数据数据
app.get('/getstylelist',function (req, res) {
    setMyHeader(res);
    res.send(JSON.stringify(styleImg));
});

//.获取baseImg
app.get('/baseimg',(req,res)=>{
    console.log('接收到客户端 hot 请求');
    setMyHeader(res);
    res.send(JSON.stringify(baseImg));
});
//获取所有信息
app.get('/storeinfo',(req,res)=>{
    console.log('接收到客户端 hot 请求');
    setMyHeader(res);
    res.send(JSON.stringify(storeInfo));
});

//.获取brand info
app.get('/brand',(req,res)=>{
    console.log('接收到客户端 hot 请求');
    setMyHeader(res);
    res.send(JSON.stringify(brandImg));
});

//.获取classify
app.get('/classify',(req,res)=>{
    console.log('接收到客户端 hot 请求');
    setMyHeader(res);
    res.send(JSON.stringify(classify));
});
//.获取homeChildImg
app.get('/homeimg',(req,res)=>{
    console.log('接收到客户端 hot 请求');
    setMyHeader(res);
    res.send(JSON.stringify(homeChildImg));
});


//4.根据ID删除收藏  http://localhost:9005?id=5    并返回删除后的收藏
app.get('/delStore',(req,res)=>{
    console.log('delBook请求');
    setMyHeader(res);
    // console.log(req.query);
    //获取请求携带的参数   收藏的ID
    let id=req.query.storeId;
    storeInfo.forEach((info,index,arr)=>{
        if(info.storeId==id){
            //删除该收藏
            info.isOrNot=false
            // arr.splice(index,1);
        }
    });
    res.send(JSON.stringify(storeInfo));//将删除之后的新数据返回
});

//5.根据ID查找书籍   http://localhost:9005/getBookById?bookId=5
// app.get('/getStoreById',(req,res)=>{
//     setMyHeader(res);
//     //获取请求携带的参数   书籍的ID
//     let id=req.query.storeId;
//     let oneBook={msg:'未找到该书籍'};
//     brandImg.forEach((brand,index,arr)=>{
//         if(brand.storeId==id){
//             oneBook=brand;
//             return;//结束遍历
//         }
//     });
//     res.send(JSON.stringify(oneBook));//返回书籍对象
// });

app.get('/getStoreById',(req,res)=>{
    setMyHeader(res);
    //获取请求携带的参数   书籍的ID
    let id=req.query.storeId;
    let oneBook={msg:'未找到该书籍'};
    storeInfo.forEach((book,index,arr)=>{
        if(book.storeId==id){
            oneBook=book;
            return;//结束遍历
        }
    });
    res.send(JSON.stringify(oneBook));//返回书籍对象
});

let collectStore=[];//添加收藏的商品

//6.添加收藏   http://localhost:9999/collect?infoId=5&isCollected=false
app.get('/collect',(req,res)=>{
    setMyHeader(res);
    let id=req.query.infoId;//书籍ID
    let isColl=req.query.isCollected;// 'true'  'false'
    let data='';//保存要修改的书籍对象的收藏状态
    storeInfo.forEach((info)=>{
        if(info.storeId==id){
            if (isColl === 'true'){
                info.isOrNot=true;//收藏
                info.isFalse=true;
            } else{
                info.isOrNot=false;//取消收藏
            }
            data=info.isOrNot;
            return;
        }
    });
    // res.send(JSON.stringify(data));
    res.send(JSON.stringify({msg:'ok',isC:data,}));
});

//7. 获取收藏的商品
app.get('/getCollections',(req,res)=>{
    getCollection();//获取收藏的商品
    setMyHeader(res);
    res.send(JSON.stringify(collectStore));//将添加收藏的商品返回
});

app.get('/collectcount',(req,res)=>{
    getCollection();//获取收藏的商品

    let pay=0;
    let payCount=0;
    setMyHeader(res);
    collectStore.forEach((i)=>{
        if(i.isFalse==true){
            pay=pay+i.price*i.count;
            payCount=payCount+i.count;
        }
    });
    res.send(JSON.stringify({pay:pay,payCount:payCount}));//将添加收藏的商品返回
});



//检索收藏商品,存入数据源中
let getCollection=()=>{
    collectStore=[];//清空数据
    storeInfo.forEach(store=>{
        if(store.isOrNot){
            collectStore.push(store);//将已收藏的书籍添加到数组中
        }
    });
};
//http://localhost:9999/collectpay?infoId=5&isCollected=false
app.get('/collectpay',(req,res)=>{
    setMyHeader(res);
    let id=req.query.infoId;//书籍ID
    let isColl=req.query.isCollected;// 'true'  'false'
    let data='';//保存要修改的书籍对象的收藏状态
    let data1='';//保存要修改的书籍对象的收藏状态
    storeInfo.forEach((info)=>{
        if(info.storeId==id){

            if (isColl === 'true'){
                info.isFalse=true;
            } else{
                info.isFalse=false;//取消收藏
            }
            data=info.isFalse;
            // data1=info.isFalse;
            return;
        }
    });
    // res.send(JSON.stringify(data));
    res.send(JSON.stringify({msg:'ok',isC:data}));
});


//计算价格
//http://localhost:9999/collectpaycount?infoId=5&count=2
app.get('/collectpaycount',(req,res)=>{
    setMyHeader(res);
    let id=req.query.infoId;//书籍ID
    let isColl=req.query.isCollected;// 'true'  'false'
    let data='';//保存要修改的书籍对象的收藏状态
    storeInfo.forEach((info)=>{
        if(info.storeId==id){
            console.log(isColl+1);
            isColl=parseInt(isColl);
            data= isColl;
            info.count=data;
            return;
        }
    });
    // res.send(JSON.stringify(data));
    res.send(JSON.stringify({msg:'ok',isC:data}));
});












let users=[];//注册的用户
//10  用户注册
app.get('/register',(req,res)=>{
    let name=req.query.username;
    let pwd=req.query.pwd;
    //用户对象
    let obj=new Object();
    obj.name=name;
    obj.pwd=pwd;
    users.push(obj);
    res.send('{statue:"OK",msg:"注册成功"}');
})

//11.登录
app.get('/login',(req,res)=>{
    let name=req.query.username;
    let pwd=req.query.pwd;
    let data='';
    let isLogin=false;//不存在此用户
    users.forEach((person)=>{
        if(person.username==name&&person.pwd==pwd){
            data='{statue:"OK",msg:"注册成功"}';
            isLogin=true;
        }
    });
    if(!isLogin){
        data='{status:"error",msg:"不存在此用户"}';
    }
    res.send(data);
});


app.listen('9999',function () {
    console.log('server run on 9999............');
});