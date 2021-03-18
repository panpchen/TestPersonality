// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Intro from "./Intro";
import ResultUI from "./ResultUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
  @property(ResultUI)
  resultUI: ResultUI = null;
  @property(cc.VideoPlayer)
  videoPlayer: cc.VideoPlayer = null;
  @property(cc.Node)
  cardsNode: cc.Node = null;
  @property(Intro)
  intro: Intro = null;
  @property(cc.AudioClip)
  clickClip: cc.AudioClip = null;

  onLoad() {
    cc.director.on(
      "click",
      (typeId: number) => {
        this.resultUI.onShow(typeId);
      },
      this
    );

    this.resultUI.onHide();
    this.videoPlayer.node.active = true;
    this.videoPlayer.play();
    this.cardsNode.active = false;

    this.intro.node.active = true;
    this.intro.init(this);
  }

  onClickNext() {
    this.intro.updateLabel(() => {
      this._showCards();
    });
    cc.audioEngine.play(this.clickClip, false, 1);
  }

  _showCards() {
    this.videoPlayer.node.active = false;
    this.intro.node.active = false;
    this.cardsNode.active = true;
  }
}
