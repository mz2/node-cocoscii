var canvas = require('canvas');
var System = require('es6-module-loader').System;

System.import('./cocoscii').then(function(cocosciiModule) {
    var cocoscii = cocosciiModule.default;

    var closeImg = cocoscii(
". · · · 1 1 1 · · · ·\n" +
"· · 1 · · · · · 1 · ·\n" +
"· 1 · · · · · · · 1 ·\n" +
"1 · · 2 · · · 3 · · 1\n" +
"1 · · · # · # · · · 1\n" +
"1 · · · · # · · · · 1\n" +
"1 · · · # · # · · · 1\n" +
"1 · · 3 · · · 2 · · 1\n" +
"· 1 · . · . · . · 1 ·\n" +
"· · 1 · . · . · . · ·\n" +
"· · · 1 1 1 1 1 · · ·\n", function(idx, style) {
      if (idx === 0) {
        style.fill = "#000";
      } else {
        style.stroke = "#fff";
      }
    });

    process.stdout.write(closeImg.toBuffer());

    var lockImg = cocoscii(
"· · · · · · · · · · · · · · ·\n" +
"· · · · 1 · · · · · · 1 · · ·\n" +
"· · · · · · · · · · · · · · ·\n" +
"· · · · · · · · · · · · · · ·\n" +
"· · · · · · · · · · · · · · ·\n" +
"· · 3 · 1 · · · · · · 1 · 4 ·\n" +
"· · · · · · · · · · · · · · ·\n" +
"· · · · · · A · · A · · · · ·\n" +
"· · · · 1 · · · · · · 1 · · ·\n" +
"· · · · · · · C D · · · · · ·\n" +
"· · · · · · A · · A · · · · ·\n" +
"· · · · · · · · · · · · · · ·\n" +
"· · · · · · · B E · · · · · ·\n" +
"· · · · · · · · · · · · · · ·\n" +
"· · 6 · · · · · · · · · · 5 ·\n", function(idx, style) {
      if (idx === 0) {
        style.fill = "";
        style.stroke = "#000";
      } else if (idx === 1){
        style.fill = "#000";
        style.stroke = "";
      } else {
        style.fill = "#fff";
      }
    });

    //console.log(lockImg.src);
});
