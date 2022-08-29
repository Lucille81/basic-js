const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  getNewKey(text, key) {
    text = text.toUpperCase();
    key = key.toUpperCase();

    let kf = Math.ceil(text.length / key.length);
    let newKey = key.repeat(kf);

    newKey = newKey.split('');
    for (let i = 0; i < text.length; i++) {
      if (!/[A-Z]/.test(text[i])) {
        newKey.splice(i, 0, ' ');
      }
    }

    return newKey.join('');
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');

    text = text.toUpperCase();

    let newKey = this.getNewKey(text, key);

    let codeA = 'A'.charCodeAt(0);
    let abcCount = 26;

    let result = [];

    for (let i = 0; i < text.length; i++) {
      if (!/[A-Z]/.test(text[i])) {
        result.push(text[i]);
      } else {
        let letterIdx = text.charCodeAt(i) - codeA;
        let shift = newKey.charCodeAt(i) - codeA;

        result.push(
          String.fromCharCode(codeA + ((letterIdx + shift) % abcCount))
        );
      }
    }

    if (this.direct === true) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');

    text = text.toUpperCase();

    let newKey = this.getNewKey(text, key);

    let codeA = 'A'.charCodeAt(0);
    let abcCount = 26;

    let result = [];

    for (let i = 0; i < text.length; i++) {
      if (!/[A-Z]/.test(text[i])) {
        result.push(text[i]);
      } else {
        let letterIdx = text.charCodeAt(i) - codeA;
        let shift = newKey.charCodeAt(i) - codeA;

        result.push(
          String.fromCharCode(
            codeA + ((letterIdx - shift + abcCount) % abcCount)
          )
        );
      }
    }

    if (this.direct === true) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
