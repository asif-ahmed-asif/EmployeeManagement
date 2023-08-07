import { FormControl, FormGroup } from "@angular/forms";

export function validateAllFormFields(formgroup : FormGroup){
  Object.keys(formgroup.controls).forEach(field => {
    const control = formgroup.get(field);
    if(control instanceof FormControl){
      control.markAsTouched({ onlySelf : true });
    }else if (control instanceof FormGroup) {
      validateAllFormFields(control);
    }
  });
}
