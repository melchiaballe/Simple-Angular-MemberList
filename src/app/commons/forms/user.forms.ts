import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


export class UserForm {
  public form: FormGroup;
  public submitted: Boolean = false;

  constructor (data) {
    /* Initialize the form builder
     */
    this.form = new FormBuilder().group({
        firstName: new FormControl(data.firstName, [Validators.required,]),
        lastName: new FormControl(data.lastName, [Validators.required,]),
        age: new FormControl(data.age, [Validators.required,]),
    })
  }

  /* Check if form field is valid
   */
  valid (f) {
    return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
  }

}