// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { PERSON_DATAS } from "./Constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultUI extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;
  @property(cc.Node)
  bg: cc.Node = null;

  onShow(typeId: number) {
    this.label.string = PERSON_DATAS[typeId].txt;
    this.bg.color = new cc.Color().fromHEX(PERSON_DATAS[typeId].color);
    cc.tween(this.bg).to(0.02, { scale: 1.2 }).to(0.5, { scale: 1 }).start();
    this.node.active = true;
  }

  onHide() {
    this.node.active = false;
  }
}
