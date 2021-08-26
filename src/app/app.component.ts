import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

interface FormData {
  subscription: string
  submitted: boolean
  password: string
  email: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  emailDefault: string = 'default@email.com'
  @ViewChild('f', { static: true }) filledForm?: NgForm
  subscription = 'Advanced'
  data: FormData

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    const subscription = f.value.subscription
    const password = f.value.password
    const email = f.value.email

    this.filledForm.form.patchValue({
      value: { subscription, password, email },
    })

    this.data = {
      subscription,
      submitted: true,
      password,
      email,
    }
  }
}
