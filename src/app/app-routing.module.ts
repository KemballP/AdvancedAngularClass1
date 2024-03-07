import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseTypeComponent } from './components/course-type/course-type.component';

export const routes: Routes = [  { path: 'coursetypes', component: CourseTypeComponent },
{ path: '', redirectTo: '/coursetypes', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
