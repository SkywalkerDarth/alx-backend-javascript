export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }


  get code() {
  return this._code;
  }

  set code(value) {
  if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }
  
  get name() {
  return this._name;
  }

  set name(value) {
  if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
