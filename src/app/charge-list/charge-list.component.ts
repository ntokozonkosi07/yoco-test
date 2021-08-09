import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charge-list',
  templateUrl: './charge-list.component.html',
  styleUrls: ['./charge-list.component.scss']
})
export class ChargeListComponent implements OnInit {

  chargeList: Array<number> = [];

  @Input()
  set chargeItem(value: number){
    if(value <= 0) return;
    
    this.chargeList.push(value);
  }

  get total(): string {
    return this.chargeList.reduce((a, b) => a + b, 0).toString().replace('.','');
  }

  get isTotalVisiable(){
    return this.chargeList.length > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

  massageValue(value: number){
    return value.toString().replace('.','');
  }

}
