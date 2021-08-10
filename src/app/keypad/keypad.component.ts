import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faTimes, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { CurrencyFormatPipePipe } from '../currency-format-pipe.pipe';

import { KeysEnum } from './keys.enum';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Output()
  onAddEvent = new EventEmitter();
  
  // icon variables
  faTimes = faTimes;
  faCheckSquare = faCheckSquare;

  public keysEnum = KeysEnum;
  public keyValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyPress(key: KeysEnum){
    this.keyValue += key.toString();
  }

  onDelete(){
    this.keyValue = this.keyValue.slice(0, -1);
  }

  onAdd(){
    const transformValue = new CurrencyFormatPipePipe().transform(this.keyValue, '');
    this.onAddEvent.emit(parseFloat(transformValue));
  }

}
