import { Component,OnInit } from '@angular/core';
import { TariffListService } from '../tariff-list.service';


@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.css']
})



export class TariffListComponent implements OnInit {
  title:string = 'Tariff List';
  tariffList:any = [];
  sortProperty: string = 'id';
  sortOrder = 1;

constructor(private service: TariffListService){
  
}
ngOnInit(): void {
  this.getTariffList();
  console.log(this.tariffList);
}

getTariffList() {
  this.service.getTariffList().subscribe(data => {
   this.tariffList = data;
   console.log(this.tariffList);
  });
}

sortBy(property: string) {
  this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
  this.sortProperty = property;
  this.tariffList = [...this.tariffList.sort((a: any, b: any) => {
      // sort comparison function
      let result = 0;
      if (a[property] < b[property]) {
          result = -1;
      }
      if (a[property] > b[property]) {
          result = 1;
      }
      return result * this.sortOrder;
  })];
}
}

