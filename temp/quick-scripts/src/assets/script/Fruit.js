"use strict";
cc._RF.push(module, 'b40a3wJSKtP9oseO2J4H1r7', 'Fruit');
// script/Fruit.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    id: 0
  },
  init: function init(data) {
    this.id = data.id;
    var sp = this.node.getComponent(cc.Sprite);
    sp.spriteFrame = data.iconSF;
  }
});

cc._RF.pop();