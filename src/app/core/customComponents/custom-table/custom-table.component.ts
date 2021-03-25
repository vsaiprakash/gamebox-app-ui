import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, OnChanges {

  @Input() inputDatasource: any[];

  isDataAvailable: boolean;

  datasource: MatTableDataSource<any>;
  columnKeys: string[];
  columnHeadings: string[];

  @Input() displayedColumns: string[];

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() pageSizeOptions: number[];



  constructor(private navigation: NavigationService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.isDataAvailable = false;
    if(changes.inputDatasource && changes.displayedColumns){
      console.log("Data Loaded");
      if(this.inputDatasource.length==0){
        throw Error("Empty DataSet is given");
      }
      if(this.displayedColumns!=null){
        if(this.displayedColumns.length!=Object.keys(this.inputDatasource[0]).length){
          throw Error("Incorrect Display Columns given");
        }
      }
      //If the @Input is ready then start making the table
      this.buildTable();
    }
  }

  ngOnInit(): void {
  }

  buildTable(){
    this.datasource = new MatTableDataSource<any>(this.inputDatasource);

    this.columnKeys = Object.keys(this.inputDatasource[0]);
    this.columnHeadings = this.columnKeys;

    if(this.displayedColumns==null){
      this.displayedColumns = this.columnKeys;
    }

    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;

    this.isDataAvailable = true;
  }

  back(){
    this.navigation.back();
  }

}
