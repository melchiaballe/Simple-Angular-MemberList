import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../../commons/models/user.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  members:UserModel[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  addMember(value:UserModel){
    return this.http.post(`${environment.server}/add-member/`, value);
  }

  getMembers(){
    if(this.members.length === 0){
      this.http.get(`${environment.server}/get-members/`).subscribe(
        data => {
          if(Object(data).length !== 0){
            Object(data).forEach(member => {
              this.members.push(member);
            });
          };
        }, error => {
          this.members.push({firstName: "temp Fname", lastName: "temp Lname", age: 22});
        }
      )
    }
  }
}
