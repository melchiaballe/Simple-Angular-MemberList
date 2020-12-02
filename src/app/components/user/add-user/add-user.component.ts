import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../../../services/common/commons.service';
import { UserService } from '../../../services/user/user.service';
import { UserModel } from '../../../commons/models/user.models';
import { UserForm } from '../../../commons/forms/user.forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userAddForm : UserForm;
  formHasError: boolean = false;

  constructor(
    public commonsService: CommonsService,
    private userservice: UserService,
  ) { }

  ngOnInit(): void {
    this.userAddForm = new UserForm(new UserModel);
  }

  onSubmit({ value, valid }: { value: UserModel, valid: boolean }) {
    console.log(value)
    if (valid) {
      this.userservice.members.push(value);
      this.userservice.addMember(value).subscribe();
      this.userAddForm = new UserForm(new UserModel);
      this.formHasError = false;
      alert("User successfully added");
    } else {
      this.formHasError = true;
    }
  }

}
