import { Injectable } from '@nestjs/common';

@Injectable()
export class CnpjService {

  constructor() {}

  validateMask(cnpj: string) {
    if (this.validateTeste(cnpj)) {
      return this.regexValidateMask(cnpj);
    }

    return 'invalid param';
  }

  validateTeste(cnpj: string) {
    return (cnpj && cnpj.trim().length > 13) ? true : false;
  }

  regexValidateMask(cnpj: string) {
    let regexCnpjFormated = new RegExp("([0-9]{2}(\.[0-9]{3}){2}\/([0-9]){4}\-[0-9]{2})");
    let regexCnpjClean = new RegExp("/[0-9]{14}/g");
    
    return (regexCnpjFormated.test(cnpj) || regexCnpjClean.test(cnpj)) ? 'valid cnpj' : 'invalid cnpj';
  }

  validateDigits(cnpj: string){
    if (this.validateTeste(cnpj)) {
      return this.verifieDigits(cnpj);
    }

    return 'invalid param';
  }

  verifieDigits(cnpj: string) {
    cnpj = this.fixString(cnpj);

    let digits = cnpj
      .split('')
      .map((digit) => {
        return Number.parseInt(digit);
      });

    let verifiedDigits = digits.splice(12, 2);

    const resultFirstDV = this.calculateFirstDV(digits, verifiedDigits[0]);
    digits.push(verifiedDigits[0]);
    const resultSecondDV = this.calculateSecondDV(digits, verifiedDigits[1]);

    return ((resultFirstDV && resultSecondDV) ? 'valid' : 'invalid');
  }

  fixString(cnpj: string) {
    return cnpj.replace(/[^0-9]+/g, '');
  }

  calculateFirstDV(digits, verifiedDigits) {
    const pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];   

    let somatorio = pesos.reduce((result, peso, i) => {
      return (result + (peso * digits[i]));
    }, 0);

    const resultMod = this.calculteMod11(somatorio);
    return verifiedDigits == resultMod ? true : false;  
  }

  calculateSecondDV(digits, verifiedDigits) {
    const pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let somatorio = pesos.reduce((result, peso, i) => {
      return (result + (peso * digits[i]));
    }, 0);

    const resultMod = this.calculteMod11(somatorio);
    return verifiedDigits == resultMod ? true : false;
  }

  calculteMod11(number) {
    let resultMod = number%11;
    return (resultMod < 2 ? 0 : (11 - resultMod));
  }

}
