'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "affbe333f0c6993d0c175e498674df3b",
".git/config": "1c70d89906e43ff73b7eead8941571e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5443bc15132dee71b61144c9683fbdb8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a05afd06a9a4b3892d7a0464a8d73008",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "829560a3bec3cb346fdac85f239edee0",
".git/logs/refs/heads/main": "cbbf0d7692a6019eec338e6d4830e9fb",
".git/logs/refs/remotes/origin/main": "c68a2c2617c871141a42d559c38ca0db",
".git/logs/refs/remotes/origin/master": "9d394d8303aed8cc4ab1272c45fdb2d6",
".git/logs/refs/remotes/origin1/main": "2b656e5a301066844b2b473adc0fb88e",
".git/objects/02/03d9a72235002770ea5b39e88351a64b0e4611": "21646e7429602c652fffb65acfad8150",
".git/objects/05/db7b9018c7e871c9efbb920432df62b8a46566": "e5b0391b3ab1fa891063d9dd383a5d52",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/59b2a1afbcda666aaff446296496155af0f99d": "e69c7b061f877284aee83a05491b443a",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/10/5e20ee20489b1c46e2acb70f87c90e637288d9": "e1aac5a1ae48548bfdcf706533ba2514",
".git/objects/13/2dd92a41ca89da9acd4bd0e60165e5ce657a72": "dae992a3265e1f15a5e9b9c2122d621c",
".git/objects/13/476cd6b3a7cfbd1a8a684d153c439896ebbf06": "28e1dad42aa96a06c78ca14680151230",
".git/objects/13/e54796033079d957d3de83476df86075954748": "ad8cecd1185eb741a9e83db6ac48ff42",
".git/objects/14/6a573f0dd5701564fcc9af5f6acbefaace9598": "c5e4a778b025e168c636072070b12cee",
".git/objects/16/a9e7d6b3cfaefd82732f69615a4a4063492bfd": "d2061f0fb67b1ba6ea6a9933ff55dc8a",
".git/objects/1c/21685cc0fb245c8fbc497fc7b08ca8f2436538": "9b41a234d01458ec5da375934248481a",
".git/objects/20/7f0c5bc040e1e55110dc35666cb9ff81d011dc": "a0b3edb0ca79ef4bee011118a0c0f10f",
".git/objects/22/0a0c54686c0c12d068e5d0da8c45aef60a484d": "abe17dc505711ff2ecfd042b274958ea",
".git/objects/24/5e9b6d379ccd89a07955ff103a1ac320e8041d": "68d7a91d15e70d9d9558c601669ec415",
".git/objects/24/77063740820a54ccb00ebcf66f31c4fbb5f9e8": "5bcfc155bb638f9558fabfd6fe756899",
".git/objects/29/27d79b83cc763d5fd116c53259801cd0f25554": "e80effdb2f59c4b3cbda0de3abbab8bc",
".git/objects/2a/61caffe862b429fc8132dfaf839837e77e9dfe": "15bfffbad6088b06774fb397173a239c",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/30/019a0dae2c8803de80ddaee7c47934d22791dd": "fd449cb2690327f05196914e1084b501",
".git/objects/32/8ced92ab7bf3351de6a308abc6f64509906a80": "31382b6f7f40a25e3228369850182915",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/38/b68a7eaccda8acdc5bf9c9e60d95c2eeb1f268": "8865a3c6ecd4332db725f7341d75f3a1",
".git/objects/39/a1bbc0b4f73036a329da7dbf1ab7107f0c394a": "a95d5671894c1d19b850d07a2ada37fb",
".git/objects/3a/4efb6b5abd23bd4025aae70ba8640bec94ff2f": "83237a93e48122705e309114ea52ab3c",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/f96f8945a04143f93ee03a07685e01196e800e": "5b509c53ffefdf2ce2b87b45bd503126",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/81a80559030780dad2738f647673e27f3ebb9d": "d3697fcb7de45cd9a38006dd72a748cb",
".git/objects/47/c8187ac396ad4f4807aed9df23649af8526d17": "db026d6cc23d9064f57a46572f2d1b47",
".git/objects/49/0df6f03783f8471af82aa6fcbf84539058f396": "8a3e63ecfb9b38d1506d6aef31e7d518",
".git/objects/4c/7eab4b54d24ee322a7e39a4b1385e25a2c3988": "c84fb6d6a090600b011bc1e03582ff4f",
".git/objects/57/b23da0879dab941c7af752d80afd978fd6caa7": "04253472f082c4f3e76c450a2d2b0642",
".git/objects/57/dba29b440ce1164263e04b1bf2b0e1bd882e76": "868288313a3b6d39e785ee3bad8d2216",
".git/objects/59/3567e1dc58e4d63a61cc7d76b79e2671344cbf": "3cc783413416d6d9fe5279e456e9abe6",
".git/objects/5c/f18f287884f17c3e4fc79747690695b4e4a47c": "c52d0350d852fc738550e7271f42c45b",
".git/objects/5d/9d7eb597704df65223e59afb5019bd9cc9adb7": "3b76166a86733901878438c12258a488",
".git/objects/5f/e06ca9684c6ba437ac4f97433cc1e2baa2e3c2": "4110dbb616fb2be4bdd317590c078311",
".git/objects/63/d1db17566daeb9bff9b15c04300b7791f62e9c": "87ba032b7efb8db3fbdd49ceda9c09d9",
".git/objects/65/8798c87b0e4d71a698851a9f6c961acb7252fc": "3ac1a3b190fcb724119bf222236db25a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/3281c31ee690d797c81f6c31197f75129059ca": "5d3f013a197e8b75002c030aa3525c51",
".git/objects/6c/e3e4955a4790d6febaab7cdf9efe95ced87877": "d5f15a2fdee47d4d4124d2656647bf78",
".git/objects/71/8ff041c185c86b1564f7cb58c922a9d5c3f382": "59e43e1c63a2f4eb7467315bbfa125f1",
".git/objects/72/2f39525f932b634de8d03f5351cf193feb1ecf": "6929a90f7c85609d335ed2fbdd207571",
".git/objects/72/4cdfee9802568c6ffe8b969a59bf0f37798365": "3b832737bec5346385b018edca215cdf",
".git/objects/73/6f5753f04544ada1fe477897be50fea20f5e32": "158d9e4cac6c2ed38799a50bb1246c56",
".git/objects/73/74be757cea778e53407480baee0c1008009f8b": "4895cb7d11e7545ff1d686d50478951b",
".git/objects/76/fa26bfa10d06699744bddd9ba3e35f78c1e2de": "629430ab8635d64ec1d4420cb5737d4f",
".git/objects/77/04e820feedc8b64c4ded9bb46b5acb3b98cad8": "ee9509b6162bf09866e5f1b4fab5e0d6",
".git/objects/78/0c71dc1bef5532e77ada529d6f39e8e051bca1": "552b22f2bc6e573250ed64761d5030d5",
".git/objects/7b/6aa9ebf716f680f9c54f2ba5b3630b23bf7168": "379bd255068f0b1e771e86a7b1225e74",
".git/objects/7b/a4dd7ac496a4b63757e24be1cdd1e1780a07c4": "3f2c5e5e8eeba6ae34a85a0b4a867f7f",
".git/objects/82/1e16cfa0c4c27c8d6adb820a4adbc3f46e9cdb": "283fad9fa1c457c5eab9ba3c224967cb",
".git/objects/82/5777af93d194df8b901007a71cfa7a89206685": "08152bff210a5006a9ce0a64967fefb1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/dde7d0b039eaf9bca6ca634526f11ed0621c25": "3f95dda52f709b3e504eff1ddb1d9a9a",
".git/objects/8f/1bbb834b3dfc47534b588154368aef09909787": "04294d9b7b3c8877165b74a9ef0f933c",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/236bc842f3b85569d11bd752ff058909f2ec99": "1c61ff73d175999b35daa3f341f4301a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/8eb83238cd99eaf57cb07f81270777bf1a6649": "dc1b08c79e62bf43c6b53e8596154af7",
".git/objects/99/980d621b17597935fca4f97cf85772ef01d037": "0db932fd1394dae4303411c6523f857f",
".git/objects/99/cce792a21faaa97d648e53173e2cac498a8f38": "43a85ffc25a1db51f31a133233199e5d",
".git/objects/9b/8fdb34338be1dfed4e679836253d4042fed892": "b583e83ab27d87197131853892f7a0a4",
".git/objects/a1/7832c56f335f353e2962ab76e4325a4ecb76a1": "bea88d0f70e5884f39864dc096dad45c",
".git/objects/a1/fb5f03437141491fe743bed7afd0fb338cca80": "d5d13b76fcd9c414f80448868b4a40bc",
".git/objects/a2/4cba97d91da84d2eb336bf081347c865cf4434": "6b73561917dcbd0f864dce4bbc34fbfe",
".git/objects/a8/d17beae92a92261a592f5fe48a95a38d461bb3": "8a01f7652efd6e0c200f7ce94067229f",
".git/objects/a9/38e36787ef8e495a86edd6df78b512ea6f4fcf": "f92629c10958f7e9c4ec4c0316e84a69",
".git/objects/aa/16ff976e119eac9cc8349057ed8098fdb0e646": "8229a9b070cc53dc8251477ac5726df3",
".git/objects/b0/28c36724c94b661d4712766bbed628f89057e2": "83c8bb6585be0bab829d18a24361b8d4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/719dae47ad3b92034e7bb6dd2efe687e5fb44e": "cc0bb16f31580c46aedb7d947f694a4b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/2cbe600658c4aa42b857a05ced21a0957e3b50": "399932c91f9cf8e00513a906e8f50f01",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/be/a6ae1cc5aff5ef3111238782d513fa5b2d28b5": "0016b4bbcebd3221424d9648dbf495e5",
".git/objects/c3/74c281175498030f1eed24d090195488058a31": "541b08cc590a05f8f3740b57763a4e06",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/255948c33f158ddf870e058553581869e94c3c": "e68eb2eccab66cd4dfce886092df8ac0",
".git/objects/cb/51ce76c96fe15ce91231e3a9b558f7f99e77b2": "58c071f3bbb89093f9223c2daf9696f4",
".git/objects/cb/739ec9c9628700c77e5256ebba0002e7322ed6": "4e9fe2b91fcb650b0cbae01efacde36d",
".git/objects/cf/422b3b7c1b52389e7f757acc9be5b522e1b7aa": "90ab2ed90cdb8cf9b75d473752c9580d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/88b8deac163753a59ccfce49b2817acea453e7": "3c0b2ff9630dba34d90588d114371d26",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/dc/76d6dcf55ef3de0d491336cef333c5583b2f59": "216c7e21551456f9e62a8322704d5dd9",
".git/objects/e1/cacd800ad36e3c15060982ac7b3a5c34f735c6": "c88c6a4242b732da9fdeea8e7626aa65",
".git/objects/e3/9c0fc1d46eb5362c83df348da54812074e2360": "004b969790737848d2b45e026cef1bf5",
".git/objects/e4/24f4420d98bb114c1e5cbde6fffa11e4e95857": "a99cc1d0c844cc1ef436011e100a5a13",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/c585f66afe3d604fd315b7a68df4d346bd846f": "156ad9bb7c66f08413dc0b2f758c444d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/f959c298816ca9228b2f48112b1cc99143cd31": "18922aab779fc395441d248a7c862cbf",
".git/objects/fe/e45dd83418cc7b3ba1a8ecfcbb8934e14bb925": "40f6361b8d94b7c9b5fe5894d7b15fab",
".git/objects/pack/pack-6176078436da5104ec4994658b3875e5a799da42.idx": "91e746e699ade8e2b1775a6cb529d6e0",
".git/objects/pack/pack-6176078436da5104ec4994658b3875e5a799da42.pack": "0733f9067e3b6316db7e3a501701715c",
".git/objects/pack/pack-6176078436da5104ec4994658b3875e5a799da42.rev": "0574fe2c1e69480929b2366a193ff6ba",
".git/objects/pack/tmp_pack_oGIbJT": "baeb9d15846e1666d75b0be617a98ace",
".git/ORIG_HEAD": "db00a73d10eeefe39937ae96a1fd7582",
".git/refs/heads/main": "4cd4098084846dfdf4dcafa77f5e6d74",
".git/refs/remotes/origin/main": "53004f1cba63f8875a1a3e1e4ab87d4b",
".git/refs/remotes/origin/master": "4cd4098084846dfdf4dcafa77f5e6d74",
".git/refs/remotes/origin1/main": "4cd4098084846dfdf4dcafa77f5e6d74",
"assets/AssetManifest.bin": "2da82290048613d813d11cdf01d566f5",
"assets/AssetManifest.bin.json": "62034575f413e7f934a893cb046cb0ed",
"assets/AssetManifest.json": "1a37e18ca68e67be329730885dac9f5d",
"assets/assets/icons/moon.png": "7dcd7cd8150660b2138e92c19f6e72fc",
"assets/assets/icons/sun.png": "4c95b9d600c250138d9a261bc821e546",
"assets/assets/images/login_image.jpg": "c8df53fea0fb9afa9c5b2a57f1b51fa6",
"assets/assets/images/logo-bg.png": "6ff239303e058682caa2f5364d366fc8",
"assets/assets/images/logo.jpeg": "eb46615b5615ef3f3be62b8ab5aa860d",
"assets/assets/images/register_image.jpg": "0c948b7e37afbf54d907c86fb42e3a5e",
"assets/FontManifest.json": "773645784d48c5a1fb6747893f087114",
"assets/fonts/MaterialIcons-Regular.otf": "570477398ed74961ec8957cda6a44aab",
"assets/NOTICES": "c39de82f8d58fb98071f6f54af7209e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5c27a9bc8b17909e05b0f68dc816d340",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5120b79d24a4371da31e3cbf556d98e9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a42f0e08557451cd595f10e18306edda",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "68cc0e3d9134b09649c9e5618e307f36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f3135db9ec349c4c93445b8ad3078ca",
"/": "8f3135db9ec349c4c93445b8ad3078ca",
"main.dart.js": "75e3e72c3e376f796f8a67c95c3e5116",
"manifest.json": "13d6c688daf7b8a6d31ccb583ac8ef90",
"version.json": "dd682eacdfd11357ae3d8f084447b57d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
