"use strict";
var utils = {};
utils.load = function (module) {
  var url = module.url;
  $("#content").load(url);
};
