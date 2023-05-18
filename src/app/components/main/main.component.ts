import { Component, OnInit } from '@angular/core';
import { CustomerRequest } from '../../CustomerRequest';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  nuban: string = '';
  serial_num: string = '';
  bank_cod: string = '';
  bank: string = '';

  post_serial: string = '';
  post_bank_code: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  onCreate() {
    if (!this.post_serial || !this.post_bank_code) {
      alert('Both fields are required!');
      return;
    }

    const newCustomer: CustomerRequest = {
      serial_number: this.post_serial,
      bank_code: this.post_bank_code,
    };

    this.customerService.postData(newCustomer).subscribe((res) => {
      this.nuban = res.nuban;
      this.serial_num = res.serial_number;
      this.bank_cod = res.bank_code;
      this.bank = res.bank;

      this.post_serial = '';
      this.post_bank_code = '';
    });
  }
}
