import { Component, EventEmitter, OnInit, Output, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  name: any;
  constructor(private router: Router,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.user.subscribe(res => {
      if(res){
        this.name = res.name;      
      }
    })
  }

  logout() {
    this.router.navigate(['/login']);
    this.commonService.setEmployeeInfo(null);
  }
}
