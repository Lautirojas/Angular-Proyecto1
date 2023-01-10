// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// PAGES
import { StreetPageComponent } from './street-page/street-page.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonItemComponent } from '../shared/components/pokemon-item/pokemon-item.component';
import { CoursesComponent } from './courses/courses.component';
// MODULES
import { SharedModule } from '../shared/shared.module';
import { MyMaterialModule } from '../shared/modules/my-material.module';
import { CarsModule } from '../shared/components/cars/cars.module';
import { StudentsPageComponent } from './students-page/students-page.component';
import { CustomPOrDModule } from '../custom/custom-p-or-d.module';

@NgModule({
  declarations: [
    StreetPageComponent,
    PokemonComponent,
    PokemonItemComponent,
    CoursesComponent,
    StudentsPageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MyMaterialModule,
    CustomPOrDModule,
  ],
  exports: [StreetPageComponent, PokemonComponent, PokemonItemComponent],
})
export class PagesModule {}
