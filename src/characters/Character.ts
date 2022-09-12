abstract class Character {
  constructor(
    protected id: Int16Array,
    protected item: object,
    protected state: string
  ) {}
  abstract attack();
  abstract move();
  abstract dead();
  abstract equip();
  abstract render();
}

class User extends Character {
  attack() {
    return null;
  }
  move() {
    return null;
  }
  dead() {
    return null;
  }
  equip() {
    return null;
  }
  render() {
    return null;
  }
}
