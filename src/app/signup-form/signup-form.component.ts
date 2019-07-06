import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'username': new FormControl(),
    'password': new FormControl(),
    'coupon': new FormControl()
  });
  @Input() couponCode;
  @Output() wasCouponUsed = new EventEmitter();

  submit() {
    if (this.form.value.coupon === this.couponCode) {
      this.wasCouponUsed.emit('true');
    } else {
      this.wasCouponUsed.emit('false');
    }
  }
}
