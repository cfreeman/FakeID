// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"md5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function md5cycle(x, k) {
  var a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];
  a = ff(a, b, c, d, k[0], 7, -680876936);
  d = ff(d, a, b, c, k[1], 12, -389564586);
  c = ff(c, d, a, b, k[2], 17, 606105819);
  b = ff(b, c, d, a, k[3], 22, -1044525330);
  a = ff(a, b, c, d, k[4], 7, -176418897);
  d = ff(d, a, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a, k[7], 22, -45705983);
  a = ff(a, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a, b, k[10], 17, -42063);
  b = ff(b, c, d, a, k[11], 22, -1990404162);
  a = ff(a, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a, b, c, k[13], 12, -40341101);
  c = ff(c, d, a, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a, k[15], 22, 1236535329);
  a = gg(a, b, c, d, k[1], 5, -165796510);
  d = gg(d, a, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a, b, k[11], 14, 643717713);
  b = gg(b, c, d, a, k[0], 20, -373897302);
  a = gg(a, b, c, d, k[5], 5, -701558691);
  d = gg(d, a, b, c, k[10], 9, 38016083);
  c = gg(c, d, a, b, k[15], 14, -660478335);
  b = gg(b, c, d, a, k[4], 20, -405537848);
  a = gg(a, b, c, d, k[9], 5, 568446438);
  d = gg(d, a, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a, b, k[3], 14, -187363961);
  b = gg(b, c, d, a, k[8], 20, 1163531501);
  a = gg(a, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a, b, c, k[2], 9, -51403784);
  c = gg(c, d, a, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a, k[12], 20, -1926607734);
  a = hh(a, b, c, d, k[5], 4, -378558);
  d = hh(d, a, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a, k[14], 23, -35309556);
  a = hh(a, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a, b, k[7], 16, -155497632);
  b = hh(b, c, d, a, k[10], 23, -1094730640);
  a = hh(a, b, c, d, k[13], 4, 681279174);
  d = hh(d, a, b, c, k[0], 11, -358537222);
  c = hh(c, d, a, b, k[3], 16, -722521979);
  b = hh(b, c, d, a, k[6], 23, 76029189);
  a = hh(a, b, c, d, k[9], 4, -640364487);
  d = hh(d, a, b, c, k[12], 11, -421815835);
  c = hh(c, d, a, b, k[15], 16, 530742520);
  b = hh(b, c, d, a, k[2], 23, -995338651);
  a = ii(a, b, c, d, k[0], 6, -198630844);
  d = ii(d, a, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a, k[5], 21, -57434055);
  a = ii(a, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a, b, k[10], 15, -1051523);
  b = ii(b, c, d, a, k[1], 21, -2054922799);
  a = ii(a, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a, b, c, k[15], 10, -30611744);
  c = ii(c, d, a, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a, k[13], 21, 1309151649);
  a = ii(a, b, c, d, k[4], 6, -145523070);
  d = ii(d, a, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a, b, k[2], 15, 718787259);
  b = ii(b, c, d, a, k[9], 21, -343485551);
  x[0] = add32(a, x[0]);
  x[1] = add32(b, x[1]);
  x[2] = add32(c, x[2]);
  x[3] = add32(d, x[3]);
}

function cmn(q, a, b, x, s, t) {
  a = add32(add32(a, q), add32(x, t));
  return add32(a << s | a >>> 32 - s, b);
}

function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}

function md51(s) {
  //txt = '';
  var n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i;

  for (i = 64; i <= s.length; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }

  s = s.substring(i - 64);
  var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (i = 0; i < s.length; i++) {
    tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
  }

  tail[i >> 2] |= 0x80 << (i % 4 << 3);

  if (i > 55) {
    md5cycle(state, tail);

    for (i = 0; i < 16; i++) {
      tail[i] = 0;
    }
  }

  tail[14] = n * 8;
  md5cycle(state, tail);
  return state;
}
/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */


function md5blk(s) {
  /* I figured global was faster.   */
  var md5blks = [],
      i;
  /* Andy King said do it this way. */

  for (i = 0; i < 64; i += 4) {
    md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
  }

  return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n) {
  var s = '',
      j = 0;

  for (; j < 4; j++) {
    s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
  }

  return s;
}

function hex(x) {
  for (var i = 0; i < x.length; i++) {
    x[i] = rhex(x[i]);
  }

  return x.join('');
}

function md5(s) {
  return hex(md51(s));
}
/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */


function add32(a, b) {
  return a + b & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
  function _add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  }
}

function md5Short(s) {
  return md5(s).substring(0, 9).toUpperCase();
}

var _default = md5Short;
exports.default = _default;
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var md5_1 = __importDefault(require("./md5"));

var iPhotoWidth = 205;
var iPhotoHeight = 274;
var iVideoWidth = 420;
var iVideoHeight = 300;
var constraints = {
  audio: false,
  video: {
    width: iVideoWidth,
    height: iVideoHeight,
    facingMode: 'user'
  }
};

function rhex(c) {
  console.log("char" + c);
  var hex_chr = '0123456789ABCDEF'.split('');
  return hex_chr.indexOf(c);
}

var eCanvas = document.getElementById('canvas');
var ctx = eCanvas.getContext('2d');
eCanvas.width = 416;
eCanvas.height = 669;
var eBackCanvas = document.createElement('canvas');
var ctxBack = eBackCanvas.getContext('2d'); // Older browsers might not implement mediaDevices at all, so we set an empty object first

if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
} // Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.


if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function (constraints) {
    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia; // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface

    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    } // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise


    return new Promise(function (resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  };
}

navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
  /* use the stream */
  var video = document.querySelector('video');
  video.srcObject = stream;

  video.onloadedmetadata = function (e) {
    eBackCanvas.width = video.videoWidth;
    eBackCanvas.height = video.videoHeight;
    iVideoWidth = video.videoWidth;
    iVideoHeight = video.videoHeight;
    console.log(video); //video.play();

    render(true, true);
  };
}).catch(function (err) {
  console.log(err.name + ": " + err.message);
  render(true, false);
});

function render(firstPass, hasVideo) {
  console.log("render"); //ctx.clearRect(20, 50, iPhotoWidth, iPhotoHeight);

  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 120, 231)";
  ctx.rect(20, 50, iPhotoWidth, iPhotoHeight);
  ctx.fill();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.font = "12px consolas,monospace";
  ctx.closePath(); // Render the ID photo.

  var eVideo = document.querySelector('video');

  if (!hasVideo) {
    iWidth = ctx.measureText("Allow Camera Access").width | 0;
    ctx.fillText("Allow Camera Access", (iPhotoWidth - iWidth) / 2 + 15, 187);
    ctx.closePath();
  } else if (hasVideo && eVideo.paused) {
    iWidth = ctx.measureText("Tap Video On").width | 0;
    ctx.fillText("Tap Video On", (iPhotoWidth - iWidth) / 2 + 15, 187);
    ctx.closePath();
  } else if (hasVideo && !eVideo.paused) {
    ctxBack.drawImage(document.getElementById('player'), 0, 0, iVideoWidth, iVideoHeight);
    var aPixels = ctxBack.getImageData(0, 0, iPhotoWidth, iPhotoHeight);
    var aBPixels = ctxBack.getImageData(0, 0, iPhotoWidth, iPhotoHeight);

    for (var row = 0; row < aPixels.height; row++) {
      for (var col = 0; col < aPixels.width; col++) {
        aBPixels.data[(row * aPixels.width + (aPixels.width - col)) * 4 + 0] = aPixels.data[(row * aPixels.width + col) * 4 + 0];
        aBPixels.data[(row * aPixels.width + (aPixels.width - col)) * 4 + 1] = aPixels.data[(row * aPixels.width + col) * 4 + 1];
        aBPixels.data[(row * aPixels.width + (aPixels.width - col)) * 4 + 2] = aPixels.data[(row * aPixels.width + col) * 4 + 2];
        aBPixels.data[(row * aPixels.width + (aPixels.width - col)) * 4 + 3] = aPixels.data[(row * aPixels.width + col) * 4 + 3];
      }
    }

    ctx.putImageData(aBPixels, 20, 50);
  }

  if (firstPass) {
    var sGovt = "UNITED STATES GOVERNMENT";
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.font = "26px \"Courier New\",monospace";
    var iWidth = ctx.measureText(sGovt).width | 0;
    ctx.fillText(sGovt, (416 - iWidth) / 2, 35);
    ctx.closePath();
    var sig_image = new Image();
    sig_image.src = './images/sig.png';

    sig_image.onload = function () {
      ctx.drawImage(sig_image, 240, 165, 159, 61);
    };

    var bul_image = new Image();
    bul_image.src = './images/bullets.jpg';

    bul_image.onload = function () {
      ctx.drawImage(bul_image, 19, 327, 206, 43);
    };

    var lem_image = new Image();
    lem_image.src = './images/isru.png';

    lem_image.onload = function () {
      ctx.drawImage(lem_image, 245, 240, 150, 56);
    };

    var nasa_image = new Image();
    nasa_image.src = './images/nasa.png';

    nasa_image.onload = function () {
      ctx.drawImage(nasa_image, 235, 45, 172, 144);
    };
  }

  ctx.beginPath();
  ctx.fillStyle = "rgb(144, 0, 21)";
  ctx.rect(235, 334, 34, 29);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "rgb(220, 76, 51)";
  ctx.rect(269, 334, 34, 29);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "rgb(246, 217, 63)";
  ctx.rect(303, 334, 34, 29);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "rgb(51, 60, 55)";
  ctx.rect(337, 334, 34, 29);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "rgb(15, 31, 73)";
  ctx.rect(371, 334, 34, 29);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.moveTo(0, 12);
  ctx.lineTo(0, 372);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.moveTo(416, 12);
  ctx.lineTo(416, 375);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "rgb(0, 0, 0)";

  if (firstPass) {
    ctx.beginPath();
    ctx.arc(12, 12, 12, 1.0 * Math.PI, 1.5 * Math.PI, false);
    ctx.moveTo(12, 0);
    ctx.lineTo(404, 0);
    ctx.arc(404, 12, 12, 1.5 * Math.PI, 2.0 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();
  }

  var fName = document.getElementById("fName").value;

  if (!fName) {
    fName = document.getElementById("fName").placeholder;
  }

  var lName = document.getElementById("lName").value;

  if (!lName) {
    lName = document.getElementById("lName").placeholder;
  }

  console.log("First Name:" + fName);
  renderDetails(fName, lName, 372, hasVideo);
}

function renderDetails(sFirstName, sLastName, iYpos, hasVideo) {
  var sProperty = "PROPERTY OF THE TOM SACHS STUDIO";
  var rules = ["IF A GUEST IN YOUR LAIR ANNOYS YOU, TREAT THEM CRUELLY AND WITHOUT MERCY", "CHANGE WHAT YOU CAN", "DON'T BOTHER WHAT YOU CAN'T", "MENDING IS BETTER THAN ENDING, PRACTICE BRICOLAGE", "DO NOT KILL UNLESS YOU ARE ATTACKED OR FOR YOUR FOOD", "DO NOT HARM LITTLE CHILDREN", "AN ARTIST'S BEST WORK LIES JUST BEYOND THEIR ABILITY TO UNDERSTAND IT", "WHEN IN ANOTHER'S LAIR, SHOW THEM RESPECT OR ELSE DO NOT GO THERE", "BE AFRAID AND DO IT ANYWAY", "ANYTHING BUT THE GIRL"];
  var id = md5_1.default(sFirstName + " " + sLastName);
  var rId = (rhex(id[0]) + rhex(id[1])) % 10;
  console.log("id: " + rId);
  var sRule = rules[rId];
  var d = new Date();
  ctx.beginPath();
  ctx.fillStyle = "rgb(51, 60, 55)";
  ctx.rect(0, 0 + iYpos, 416, 274);
  ctx.rect(12, 274 + iYpos, 394, 12);
  ctx.arc(12, 274 + iYpos, 12, 0, 1 * Math.PI, false);
  ctx.arc(404, 274 + iYpos, 12, 0, 1 * Math.PI, false);
  ctx.fill();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.font = "bold 50px Helvetica";
  ctx.fillText("INTERN", 20, 60 + iYpos);
  ctx.font = "bold 30px Helvetica";
  ctx.fillText(sFirstName, 20, 120 + iYpos);
  ctx.fillText(sLastName, 20, 150 + iYpos);
  ctx.font = "26px Helvetica";
  ctx.fillText("S/N " + d.getFullYear() + "." + md5_1.default(sFirstName + " " + sLastName), 20, 200 + iYpos);
  ctx.font = "22px Helvetica";
  ctx.fillText(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(), 20, 224 + iYpos);
  ctx.font = "13px \"Courier New\",monospace";
  var iWidth = ctx.measureText(sProperty).width | 0;
  ctx.fillText(sProperty, (416 - iWidth) / 2, 260 + iYpos);
  ctx.font = "9px \"Courier New\",monospace";
  iWidth = ctx.measureText(sRule).width | 0;
  ctx.fillText(sRule, (416 - iWidth) / 2, 275 + iYpos);
  ctx.closePath();
  setTimeout(function () {
    render(false, hasVideo);
  }, 100);
}

console.log("done");
},{"./md5":"md5.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58061" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map