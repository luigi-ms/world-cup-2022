class Country {
  constructor(name, abrev, group){
    this._name = name;
    this._abrev = abrev;
    this._flagIcon = `../assets/${this.abrev.toUpperCase()}.png`;
    this._group = group;
    this.goals = 0;
    this.isWinner = false;
  }

  get name(){ return this._name; }
  
  get abrev(){ return this._abrev; }

  get flagIcon(){ return this._flagIcon; }

  get group(){ return this._group; }
}

export default Country;
