// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ScaleButton extends cc.Component {
  private _time = 0;
  private readonly _duration = 0.1;
  private _isScale = false;
  private _fromScale = cc.Vec2.ZERO;
  private toScale = cc.Vec2.ZERO;

  registerNodeEvent() {
    this.node.on("touchstart", this._onTouchStart, this);
    this.node.on("touchend", this._onTouchEnd, this);
    this.node.on("touchcancel", this._onTouchEnd, this);
  }

  unregisterNodeEvent() {
    this.node.off("touchstart", this._onTouchStart, this);
    this.node.off("touchend", this._onTouchEnd, this);
    this.node.off("touchcancel", this._onTouchEnd, this);
  }
  _onTouchStart(event: cc.Event.EventTouch) {
    this._fromScale = cc.v2(this.node.scaleX, this.node.scaleY);
    this.toScale = cc.v2(0.9, 0.9);
    this._time = 0;
    this._isScale = true;
  }

  _onTouchEnd(event: cc.Event.EventTouch) {
    this._fromScale = cc.v2(this.node.scaleX, this.node.scaleY);
    this.toScale = cc.v2(1, 1);
    this._time = 0;
    this._isScale = true;
    cc.director.emit("click");
  }

  update(dt) {
    if (!this._isScale) {
      return;
    }

    this._time += dt;
    let ratio = 1.0;
    if (this._duration > 0) {
      ratio = this._time / this._duration;
    }

    if (ratio >= 1) {
      ratio = 1;
    }

    this.node.setScale(this._fromScale.lerp(this.toScale, ratio));

    if (ratio === 1) {
      this._isScale = false;
      this._time = 0;
    }
  }
}
