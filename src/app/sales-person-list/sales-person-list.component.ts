import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Robert","Hanna",'rdhanna@gmail.com',134000),
    new SalesPerson("Jannet","Hanna",'jannet.hanna@gmail.com',145000),
    new SalesPerson("Gordon","Hanna",'gordon.hanna@gmail.com',156000),
    new SalesPerson("Karalia","Hanna",'karalia.hanna@gmail.com',167000),
    new SalesPerson("Lukas","Hanna",'lukas.d.hanna@gmail.com',274000)

  ];



  constructor() { }

  ngOnInit(): void {
  }

}
