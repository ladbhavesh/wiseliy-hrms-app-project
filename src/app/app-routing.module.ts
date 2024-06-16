import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register_email/register/register.component';
import { ForgotPasswordComponent } from './component/register_email/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/register_email/varify-email/varify-email.component';
import { AttendanceComponent } from './component/attendance/attendance.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { LeavesComponent } from './component/leaves/leaves.component';
import { SalaryComponent } from './component/salary/salary.component';
import { AdvanceComponent } from './component/advance/advance.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'varify-email', component: VarifyEmailComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'attendance',
        component: AttendanceComponent,
      },
      {
        path: 'leaves',
        component: LeavesComponent,
      },
      {
        path: 'salary',
        component: SalaryComponent,
      },
      {
        path: 'advance',
        component: AdvanceComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
