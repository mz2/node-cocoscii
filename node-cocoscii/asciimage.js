#!/usr/bin/env node

var canvas = require('canvas');
var System = require('es6-module-loader').System;

System.import('./cocoscii').then(function(cocosciiModule) {
    var cocoscii = cocosciiModule.default;

    var img = cocoscii(process.stdin.read(), function(idx, style) {
      if (idx === 0) {
        style.fill = "#000";
      } else {
        style.stroke = "#fff";
      }
    });

    process.stdout.write(img.toBuffer());
});
