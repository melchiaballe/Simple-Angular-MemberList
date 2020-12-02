import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getMembers();
  }

  addMember(){
    this.router.navigate(['add-user']);
  }


}
