import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DataService } from './services/data.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { GridFilterPipe } from './pipe/grid-filter.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Real Time App';
  tableData: any;
  tableDataSubscription: Subscription;
  openModal: boolean = false;
  rowData: {};
  searchText: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.tableDataSubscription = this.getTableDataSubscription();
    setInterval(() => this.getTableDataSubscription() , 10000);
  }

  ngOnDestroy() {
    this.tableDataSubscription.unsubscribe();
  }

  getTableDataSubscription = () => {
    return this.dataService.getTableData()
    .subscribe(data => {
      this.tableData = data;
      // console.log("table data- ", this.tableData);
    });
  }

  onRowClick = (rowdata: any) => {
    this.openModal = true;
    this.rowData = rowdata;
  }

}
