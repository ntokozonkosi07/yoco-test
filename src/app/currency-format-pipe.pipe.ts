import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatPipe'
})
export class CurrencyFormatPipePipe implements PipeTransform {

  transform(value: string,
    currencycode: string = 'R',
    decimalLength: number = 2,
    chunkDelimiter: string = ' ',
    decimalDelimiter: string = '.',
    chunkLength: number = 3
  ): string {

    currencycode = currencycode || '';

    if (value === '0') return `${currencycode} 0.00`;

    let result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';

    let wholeNumber = '';
    let decimal = '';

    if (value.length <= 2) {
      wholeNumber = '0';
      decimal = value.length === 1 ? `0${value}` : value;
    } else {
      wholeNumber = value.substr(0, value.length - 2);
      decimal = value.slice(-2);
    }

    let num = '';
    if (value.length < 9) {
      num = parseFloat(`${wholeNumber}${decimalDelimiter}${decimal}`).toFixed(Math.max(0, ~~decimalLength));
    } else {
      num = parseFloat(`${wholeNumber}${decimalDelimiter}${decimal}`).toString();
    }
    return currencycode.toUpperCase() + ' ' + num.replace('.', decimalDelimiter).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);

  }

}
