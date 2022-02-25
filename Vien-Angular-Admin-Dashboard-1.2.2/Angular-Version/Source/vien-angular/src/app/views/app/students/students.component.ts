import { Component, OnInit, ViewChild } from '@angular/core';
import productItems from 'src/app/data/products';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  @ViewChild('myTable') table: any;
  expanded: any = {};
  timeout: any;
  rows = productItems.slice(0, 20).map(({ title, sales, stock, category, date }) =>
    ({ title, sales, stock, category, date }));
  itemsPerPage = 10;
  ColumnMode = ColumnMode;
  columns = [
    { prop: 'title', name: 'Title' },
    { prop: 'sales', name: 'Sales' },
    { prop: 'stock', name: 'Stock' },
    { prop: 'category', name: 'Category' },
    { prop: 'date', name: 'Date' }
  ];
  temp = [...this.rows];
  constructor() {

  }


  toggleExpandRow(row:any): void {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event:any): void {
  }

  updateFilter(event:any): void {
    const val = event.target.value.toLowerCase().trim();
    const count = this.columns.length;
    const keys = Object.keys(this.temp[0]);
    const temp = this.temp.filter(item => {
      for (let i = 0; i < count; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.rows = temp;
    this.table.offset = 0;
  }
  
 
  ngOnInit(): void {
  }

}
