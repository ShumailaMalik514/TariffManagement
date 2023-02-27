import { Component } from '@angular/core';
//import {Sort} from '@angular/material/sort';
import { TariffListService } from '../tariff-list.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.css']
})



export class TariffListComponent {
  title:string = 'Tariff List';
  tariffList:any;
  sortedData:any;

constructor(service: TariffListService){
  this.tariffList = service.getTariffList();
}

sortData(sort: any) {
  const data = this.tariffList.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }

  this.sortedData = data.sort((a:any, b:any) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'name':
        return compare(a.name, b.name, isAsc);
      case 'calories':
        return compare(a.calories, b.calories, isAsc);
      case 'fat':
        return compare(a.fat, b.fat, isAsc);
      case 'carbs':
        return compare(a.carbs, b.carbs, isAsc);
      case 'protein':
        return compare(a.protein, b.protein, isAsc);
      default:
        return 0;
    }
  });
}



}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
