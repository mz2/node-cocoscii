#!/usr/bin/env node

var fs = require('fs');
var canvas = require('canvas');
var System = require('es6-module-loader').System;

var imgData = fs.readFileSync('/dev/stdin').toString();

System.import('./node_modules/cocoscii/src/cocoscii').then(function(cocosciiModule) {
    var cocoscii = cocosciiModule.default;

    var img = cocoscii(imgData, function(idx, style) {
      if (idx === 0) {
        style.fill = "#000";
      } else {
        style.stroke = "#fff";
      }
    });

    process.stdout.write(img.toBuffer());
});
