import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'Students',
        component: StudentsPageComponent,
      },
      {
        path: 'Courses',
        component: CoursesComponent,
      },
      {
        path: 'SearchApi',
        component: PokemonComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
