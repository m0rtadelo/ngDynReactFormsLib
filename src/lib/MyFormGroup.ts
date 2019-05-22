import { FormGroup } from '@angular/forms';
import { MyFormControl } from './myFormControl';

export class MyFormGroup extends FormGroup {

  public getErrors() {
    const result = [];
    Object.keys(this.controls).forEach(key => {
      if (this.get(key).errors) {
        result.push(this.get(key).errors);
      }
    });
    return result;
  }

  public hasError(): boolean {
    return this.getErrors().length > 0;
  }

  public markFormGroupTouched(formGroup: MyFormGroup | void) {
    if (!!!formGroup) {
      formGroup = this;
    }
    (<any>Object).values((<MyFormGroup>formGroup).controls).forEach(control => {
      if (control.controls) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
   }

   public get(id): MyFormControl {
     return <MyFormControl>super.get(id);
   }
}
