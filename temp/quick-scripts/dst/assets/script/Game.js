
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lLmpzIl0sIm5hbWVzIjpbIkZydWl0SXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaWNvblNGIiwiU3ByaXRlRnJhbWUiLCJDb21wb25lbnQiLCJmcnVpdFByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJmcnVpdCIsIm9uTG9hZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDckJDLEVBQUFBLElBQUksRUFBRSxXQURlO0FBRXJCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsTUFBTSxFQUFFTCxFQUFFLENBQUNNO0FBRkg7QUFGUyxDQUFULENBQWhCO0FBWUFOLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDTyxTQURQO0FBR0xKLEVBQUFBLFVBQVUsRUFBRTtBQUNSSyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDVTtBQUZBLEtBREw7QUFNUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsRUFETjtBQUVIRixNQUFBQSxJQUFJLEVBQUVWO0FBRkg7QUFOQyxHQUhQO0FBZ0JMYSxFQUFBQSxNQWhCSyxvQkFnQkksQ0FFUixDQWxCSTtBQW9CTEMsRUFBQUEsS0FwQkssbUJBb0JHLENBRVA7QUF0QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG52YXIgRnJ1aXRJdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZTogJ0ZydWl0SXRlbScsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgaWNvblNGOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGZydWl0UHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGZydWl0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBGcnVpdEl0ZW1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxufSk7Il19