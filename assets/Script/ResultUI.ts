// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ResultUI extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;
  @property(cc.Node)
  bg: cc.Node = null;

  onLoad() {
    this.onHide();
  }

  onShow() {
    this.node.active = true;
  }

  onHide() {
    this.node.active = false;
  }
}
