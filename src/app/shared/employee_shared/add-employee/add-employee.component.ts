import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {

  @Input() position: any;
  @Input() ShowEmployeeAdd: any;
  @Output() hideSideBarModal = new EventEmitter<Boolean>();
  @Output() update = new EventEmitter<Boolean>();

  employeeObj: any

  constructor(private _EmployeeService: EmployeeService) {
    this.resetEmpObj()
  }
  resetEmpObj() {
    this.employeeObj = {
      "empId": 0,
      "empName": "",
      "empContactNo": "",
      "empEmail": "",
      "addressLine1": "",
      "pincode": "",
      "city": "",
      "state": "",
      "bankName": "",
      "iFSC": "",
      "accountNo": "",
      "bankBranch": "",
      "salary": 0
    }
  }

  ngOnInit(): void {

  }

  closeaddEmployee() {
    this.ShowEmployeeAdd = false
    this.hideSideBarModal.emit(this.ShowEmployeeAdd)
  }

  closemodal() {
    this.ShowEmployeeAdd = false
    this.hideSideBarModal.emit(this.ShowEmployeeAdd)
  }

  CreateEmployee() {
    debugger
    this._EmployeeService.createEmployee(this.employeeObj).subscribe(
      (res: any) => {
        debugger;
        console.log(res); // Check what res contains
        if (res.result) {
          console.log(res);
          // this.update.emit();
          alert(res.message);
          this.resetEmpObj()
        } else {
          alert(res.message); // If res.result is false or undefined
        }
      },
      (error) => {
        console.error('HTTP Error:', error); // Log any HTTP errors
        alert('HTTP Error: ' + error.message); // Show an alert for HTTP errors
      }
    );
  }
}
