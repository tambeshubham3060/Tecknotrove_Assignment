import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../../services/common.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  displayedColumns!: string[];
  dataSource = new MatTableDataSource();
  @ViewChildren("users") paginator = new QueryList<MatPaginator>();

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.allEmployeeInfo.subscribe(res => {
      console.log(res);
      if(res){
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator.toArray()[0];
      }
      console.log('datasource', this.dataSource);
    })
    this.displayedColumns = ['name', 'userName', 'password'];

  }

}
