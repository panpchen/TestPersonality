// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "./Game";

const { ccclass, property } = cc._decorator;

const INFO_LIST = [
  "欢迎小伙伴！",
  "疫情期间，为了自身安全我们无法外出游玩。是不是特别想去海岛玩一下呢？",
  "前面是一座美丽的岛屿，你希望它是一座什么样的岛屿呢？",
  "快进去选择一个岛屿吧！它会告诉你符合你兴趣的职业类型是什么哦！",
];

@ccclass
export default class Intro extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;
  @property(cc.Node)
  nextBtn: cc.Node = null;

  private _game: Game = null;
  private _index: number = 0;

  init(game: Game) {
    this._game = game;
    this.nextBtn.active = false;
    this.updateLabel();
  }

  updateLabel(completeCallback = null) {
    if (this._index >= INFO_LIST.length) {
      completeCallback && completeCallback();
      return;
    }

    this.nextBtn.active = false;
    this.unscheduleAllCallbacks();

    const strArray = INFO_LIST[this._index++].split("");
    let id = 0;
    this.schedule(() => {
      id++;
      if (id > strArray.length) {
        this.nextBtn.active = true;
        this.unscheduleAllCallbacks();
      }
      this.label.string = strArray.slice(0, id).join("");
    }, 0.1);
  }
}
