import { Character } from './Character';

export class MathCharacter extends Character {
  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set distance(value) {
    this._distance = value;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let attack = this._attack - ((this._distance - 1) * 10);
    if (this.stoned) {
      attack -= Math.log2(this._distance) * 5;
    }
    if (attack < 0) {
      attack = 0;
    }
    return attack;
  }
}
