import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IReport } from '../../models/ireport';
import { ReportService } from '../../services/report/report.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  reportForm: FormGroup;
  constructor(private fb: FormBuilder, private service: ReportService) {
    this.reportForm = fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z]{3,}')],
      ],
      lastName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      reservationNumber: [
        '',
        [Validators.required, Validators.pattern('[0-9]{1,6}')],
      ],
      messageTitle: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]{3,}')],
      ],
      messageContent: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]{3,}')],
      ],
    });
  }

  ngOnInit(): void {
    //this.fillForm();
  }

  fillForm() {
    this.reportForm.patchValue({
      firstName: 'Mohamed',
      lastName: 'Bayoumi',
      email: 'MBayoumi147@gmail.com',
      phoneNumber: '01093996245',
    });
  }

  submit() {
    let report: IReport = this.reportForm.value;
    this.service.AddReport(report).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete'),
    });
  }

  get firstName() {
    return this.reportForm.get('firstName');
  }
  get lastName() {
    return this.reportForm.get('lastName');
  }
  get email() {
    return this.reportForm.get('email');
  }
  get phoneNumber() {
    return this.reportForm.get('phoneNumber');
  }
  get reservationNumber() {
    return this.reportForm.get('reservationNumber');
  }
  get messageTitle() {
    return this.reportForm.get('messageTitle');
  }
  get messageContent() {
    return this.reportForm.get('messageContent');
  }
}
