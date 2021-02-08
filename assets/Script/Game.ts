// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ResultUI from "./ResultUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
  @property(ResultUI)
  resultUI: ResultUI = null;

  onLoad() {
    cc.director.on("click", this._onShow, this);
  }

  _onShow() {
    this.resultUI.onShow();
  }
}
