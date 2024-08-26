export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error('This hero is already in the team');
    }
    this.members.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => {
      this.members.add(hero);
    });
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    for (const hero of this.members) {
      yield hero;
    }
  }
}
