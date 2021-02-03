"use strict";
cc._RF.push(module, 'c71c9PavQVK5qWZF/X6CE3U', 'Game');
// script/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var FruitItem = cc.Class({
  name: 'FruitItem',
  properties: {
    id: 0,
    iconSF: cc.SpriteFrame
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    fruitPrefab: {
      "default": null,
      type: cc.Prefab
    },
    fruit: {
      "default": [],
      type: FruitItem
    }
  },
  onLoad: function onLoad() {},
  start: function start() {}
});

cc._RF.pop();