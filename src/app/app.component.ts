import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders: string[] = ['Male', 'Female']
  country: string[] = ['India', 'USA', 'Australia']
  myDetails: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.myDetails = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'lastname': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null, [Validators.required]),
      'country': new FormControl('', [Validators.required]),
      'married': new FormControl(false)
    })
  }
  onSubmit() {
    console.log(this.myDetails.value);
  }

  onReset() {
    this.myDetails.reset()
  }
}
