/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "1cbfabd40edc25c903a60f045af32e0a"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f4d4efe3.css",
    "revision": "d2d083fd937ecc6ee7a46eb9df870e8e"
  },
  {
    "url": "assets/img/addNewRole.c0dfd001.png",
    "revision": "c0dfd00142cfd60ecd890d7d41352dbf"
  },
  {
    "url": "assets/img/deleteRoleById.d05e2816.png",
    "revision": "d05e28160c3cb9f5c5105faba692d576"
  },
  {
    "url": "assets/img/getAllRoles.680e763c.png",
    "revision": "680e763c8de582a3e18aa52a44a6b8d5"
  },
  {
    "url": "assets/img/getRoleById.feb87aa1.png",
    "revision": "feb87aa1c4efd301b75dec6994faac50"
  },
  {
    "url": "assets/img/resultAfterAddingRole.053130a6.png",
    "revision": "053130a64fad3e7fa765f7cd0fd1feb7"
  },
  {
    "url": "assets/img/resultAfterDeletting.01f9b813.png",
    "revision": "01f9b81330266708b606a01e93b9db6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/updateNameOfRole.c3317e91.png",
    "revision": "c3317e91da79839fa01d3456c1e5c513"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.678ff1d0.js",
    "revision": "b5fe6e295d1357adc2499b4e3cd54007"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.9e82142e.js",
    "revision": "2339ddaf5a0575e1d763a9881a35544f"
  },
  {
    "url": "assets/js/14.4637ff90.js",
    "revision": "4b61d861f030fcbbfb7e0df26032ac46"
  },
  {
    "url": "assets/js/15.0d5343f8.js",
    "revision": "5e1a68991902cae2181592463c6b54c9"
  },
  {
    "url": "assets/js/16.15ba3246.js",
    "revision": "28d012964b3941ad0cc39491a4403663"
  },
  {
    "url": "assets/js/17.e5d9ed23.js",
    "revision": "29e942bb9ef961fdb126f4f97eaa5e73"
  },
  {
    "url": "assets/js/18.5a25b29d.js",
    "revision": "9db47733e664720e9fcd47edbbb2cfb9"
  },
  {
    "url": "assets/js/19.49b2ab54.js",
    "revision": "df865666d29cf1e1fe81da9322eb44f2"
  },
  {
    "url": "assets/js/2.2bdf1070.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.4a0d185f.js",
    "revision": "d6fc44a5a5dfdd114537ca858055fa80"
  },
  {
    "url": "assets/js/21.e7bf28ac.js",
    "revision": "226df79b9caafe1af202d6c904204653"
  },
  {
    "url": "assets/js/22.d3b4ea4c.js",
    "revision": "174a89093698927ba33dccf40d34f82a"
  },
  {
    "url": "assets/js/23.119a5d9c.js",
    "revision": "ba1f4c19f4edd19cadea71c6dcb71649"
  },
  {
    "url": "assets/js/24.a1143d0d.js",
    "revision": "eef62f4baf375efec42b562452fe9930"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.0dbc88c0.js",
    "revision": "0b561c5fb668a8d2e09c18bcdfe146f3"
  },
  {
    "url": "assets/js/4.de005240.js",
    "revision": "b938bac317c73b93277d67a59b519e85"
  },
  {
    "url": "assets/js/5.3af36237.js",
    "revision": "4ddb90ee53d96f9526c27c44b58f623c"
  },
  {
    "url": "assets/js/6.04503463.js",
    "revision": "9fc1e6f66a79ffd5ee26e937f91216b2"
  },
  {
    "url": "assets/js/7.980f94cf.js",
    "revision": "a18bbdcb0742721c6c492fce35750ec8"
  },
  {
    "url": "assets/js/8.736d2e65.js",
    "revision": "8604dfa55eed96827f734d3f531c61fa"
  },
  {
    "url": "assets/js/9.fedc5dba.js",
    "revision": "87f0ec0fd8b57284e02585d24e8d9f23"
  },
  {
    "url": "assets/js/app.fe9ba539.js",
    "revision": "fa2c311b30422c5894bde537f885220f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "74575dcf4893877e7494ae9bda828190"
  },
  {
    "url": "design/index.html",
    "revision": "ff205d58ffe8f4ffb11963f7b67da8ab"
  },
  {
    "url": "index.html",
    "revision": "a678b8c02f869ac79e62d2c6269cbd08"
  },
  {
    "url": "intro/index.html",
    "revision": "a3508cd84c8cad19e4b90a7938a6bc1f"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "af48c996b4c9563510df89a677bb48d7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0402dade9758786c00f10004f9a20cdc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d0b5a61caf50a32368b08b95242573e5"
  },
  {
    "url": "software/index.html",
    "revision": "bb70546225d07aea571266fe5eea54f4"
  },
  {
    "url": "test/index.html",
    "revision": "f5c04bc227d0c0197e1cacdff546f296"
  },
  {
    "url": "use cases/index.html",
    "revision": "685684e7a5afe208ed8d87c4bad40272"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
