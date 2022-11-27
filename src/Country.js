class Country {
  constructor(name, abrev){
    this._name = name;
    this._abrev = abrev;
    this._flagIcon = `../assets/${this.abrev.toUpperCase()}.png`;
    this.goals = 0;
    this.isWinner = false;
  }

  get name(){ return this._name; }
  
  get abrev(){ return this._abrev; }

  get flagIcon(){ return this._flagIcon; }
}

export default Country;
