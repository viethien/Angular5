import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { EmployeeComponent } from '../employee/employee.component'
import { LoginComponent } from '../login/login.component'
import { NotFoundComponent } from '../notfound/notfound.component'
import { MainPageComponent } from '../mainpage/mainpage.component'
import { AppComponent } from '../app/app.component'
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component'
import { EmployeeOverviewComponent } from '../employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from '../employee-projects/employee-project.component';

const routing: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'employee', component: EmployeeComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent, children: [
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectsComponent }
        ]
    },
    { path: 'app', component: AppComponent },
    { path: '**', component: NotFoundComponent }]

export const appRoutes = RouterModule.forRoot(routing, { enableTracing: true });